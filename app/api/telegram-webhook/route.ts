import { NextRequest, NextResponse } from 'next/server'

interface TelegramUpdate {
  update_id: number
  message?: {
    message_id: number
    from: {
      id: number
      first_name: string
      username?: string
    }
    chat: {
      id: number
      type: string
    }
    text?: string
  }
  callback_query?: {
    id: string
    from: {
      id: number
      first_name: string
      username?: string
    }
    message: {
      message_id: number
      chat: {
        id: number
      }
    }
    data: string
  }
}

// Store user sessions in memory (use database in production)
const userSessions = new Map<number, {
  chapter: number
  choices: string[]
  missionType: string
}>()

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const DEEPINFRA_API_KEY = process.env.DEEPINFRA_API_KEY;

if (!BOT_TOKEN) {
  console.error('❌ TELEGRAM_BOT_TOKEN environment variable is not set');
}

if (!DEEPINFRA_API_KEY) {
  console.error('❌ DEEPINFRA_API_KEY environment variable is not set');
}

async function sendMessage(chatId: number, text: string, replyMarkup?: any) {
  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        reply_markup: replyMarkup,
        parse_mode: 'Markdown'
      }),
    })

    if (!response.ok) {
      console.error('Failed to send message:', await response.text())
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error sending message:', error)
  }
}

async function editMessage(chatId: number, messageId: number, text: string, replyMarkup?: any) {
  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageText`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        message_id: messageId,
        text,
        reply_markup: replyMarkup,
        parse_mode: 'Markdown'
      }),
    })
  } catch (error) {
    console.error('Error editing message:', error)
  }
}

async function answerCallbackQuery(callbackQueryId: string, text?: string) {
  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/answerCallbackQuery`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        callback_query_id: callbackQueryId,
        text: text || "Processing...",
      }),
    })
  } catch (error) {
    console.error('Error answering callback query:', error)
  }
}

async function generateMissionContent(chapter: number, choices: string[], missionType: string) {
  try {
    const prompt = `You are a cyberpunk mission generator for SCAM Mercenaires. Generate Chapter ${chapter} of a ${missionType} mission.

Previous choices: ${choices.join(', ')}

Create an engaging 2-3 sentence scenario with 4 action choices. Make it feel like a cyberpunk thriller with high stakes involving the Limptin Foundation, LIONSMANE NFTs, and corporate espionage.

Format exactly like this:
SCENARIO: [Your scenario text here]
CHOICE1: Combat Action
CHOICE2: Stealth Action  
CHOICE3: Hacking Action
CHOICE4: Negotiation Action`

    const response = await fetch('https://api.deepinfra.com/v1/openai/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPINFRA_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'meta-llama/Meta-Llama-3.1-70B-Instruct',
        messages: [
          {
            role: 'system',
            content: 'You are a cyberpunk storyteller creating immersive SCAM Mercenaires missions about fighting the corrupt Limptin Foundation.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 300,
        temperature: 0.8,
      }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()
    return data.choices[0]?.message?.content || 'Mission data corrupted. Try again, mercenary.'
  } catch (error) {
    console.error('Error generating mission:', error)
    
    // Fallback scenarios
    const fallbacks = [
      `SCENARIO: You infiltrate a Limptin Foundation data center. Security drones patrol the neon-lit corridors as you search for evidence of their NFT manipulation schemes. Suddenly, an alarm blares.
CHOICE1: Fight through the security drones
CHOICE2: Hide in the server room shadows
CHOICE3: Hack the alarm system to disable it
CHOICE4: Pretend to be a maintenance worker`,
      
      `SCENARIO: A mysterious contact offers you classified intel about LIONSMANE NFTs in exchange for a favor. The meeting is in a crowded Neo-Tokyo marketplace, but you spot corporate agents watching.
CHOICE1: Confront the agents directly
CHOICE2: Slip away through the crowd
CHOICE3: Use your neural implant to scan for threats
CHOICE4: Approach the contact and negotiate`,
      
      `SCENARIO: Your team discovers a hidden Limptin Foundation laboratory conducting illegal experiments. The facility is heavily guarded, but you've found a way inside through the ventilation system.
CHOICE1: Storm the main entrance
CHOICE2: Use the ventilation route
CHOICE3: Disable their security grid remotely
CHOICE4: Contact the authorities for backup`
    ]
    
    return fallbacks[Math.floor(Math.random() * fallbacks.length)]
  }
}

function parseMissionContent(content: string) {
  const lines = content.split('\n').filter(line => line.trim())
  
  let scenario = 'Mission briefing corrupted...'
  const choices = ['⚔️ Fight', '🕵️ Sneak', '💻 Hack', '🤝 Talk']
  
  for (const line of lines) {
    if (line.startsWith('SCENARIO:')) {
      scenario = line.replace('SCENARIO:', '').trim()
    } else if (line.startsWith('CHOICE1:')) {
      choices[0] = '⚔️ ' + line.replace('CHOICE1:', '').trim()
    } else if (line.startsWith('CHOICE2:')) {
      choices[1] = '🕵️ ' + line.replace('CHOICE2:', '').trim()
    } else if (line.startsWith('CHOICE3:')) {
      choices[2] = '💻 ' + line.replace('CHOICE3:', '').trim()
    } else if (line.startsWith('CHOICE4:')) {
      choices[3] = '🤝 ' + line.replace('CHOICE4:', '').trim()
    }
  }
  
  return { scenario, choices }
}

export async function POST(request: NextRequest) {
  try {
    const update: TelegramUpdate = await request.json()
    console.log('Received update:', JSON.stringify(update, null, 2))

    if (update.message) {
      const { message } = update
      const chatId = message.chat.id
      const userId = message.from.id
      const text = message.text || ''

      console.log(`Message from ${message.from.first_name}: ${text}`)

      if (text.startsWith('/start') || text.startsWith('/mission')) {
        // Initialize new mission
        userSessions.set(userId, {
          chapter: 1,
          choices: [],
          missionType: 'infiltration'
        })

        const content = await generateMissionContent(1, [], 'infiltration')
        const { scenario, choices } = parseMissionContent(content)

        const keyboard = {
          inline_keyboard: [
            [
              { text: choices[0], callback_data: 'choice_0' },
              { text: choices[1], callback_data: 'choice_1' }
            ],
            [
              { text: choices[2], callback_data: 'choice_2' },
              { text: choices[3], callback_data: 'choice_3' }
            ],
            [
              { text: '🔄 New Mission', callback_data: 'new_mission' }
            ]
          ]
        }

        await sendMessage(
          chatId,
          `🎮 *SCAM Mercenaires Mission Simulator*\n\nWelcome, ${message.from.first_name}! You are now a cyberpunk mercenary fighting against the corrupt Limptin Foundation.\n\n*Chapter 1: Digital Infiltration*\n\n${scenario}\n\n*Choose your action:*`,
          keyboard
        )
      } else if (text.startsWith('/help')) {
        await sendMessage(
          chatId,
          `🤖 *SCAM Mercenaires Bot Commands*\n\n/mission - Start a new cyberpunk mission\n/reset - Reset your current mission\n/help - Show this help message\n\nJoin the resistance against the Limptin Foundation! Fight for digital freedom and expose their NFT manipulation schemes.`
        )
      } else if (text.startsWith('/reset')) {
        userSessions.delete(userId)
        await sendMessage(chatId, '🔄 Mission data wiped. Neural link reset. Ready for new assignment.\n\nUse /mission to start your next operation against the Limptin Foundation.')
      }
    }

    if (update.callback_query) {
      const { callback_query } = update
      const chatId = callback_query.message.chat.id
      const messageId = callback_query.message.message_id
      const userId = callback_query.from.id
      const data = callback_query.data

      console.log(`Callback from ${callback_query.from.first_name}: ${data}`)

      await answerCallbackQuery(callback_query.id, "Processing your choice...")

      if (data === 'new_mission') {
        // Start completely new mission
        userSessions.set(userId, {
          chapter: 1,
          choices: [],
          missionType: 'infiltration'
        })

        const content = await generateMissionContent(1, [], 'infiltration')
        const { scenario, choices } = parseMissionContent(content)

        const keyboard = {
          inline_keyboard: [
            [
              { text: choices[0], callback_data: 'choice_0' },
              { text: choices[1], callback_data: 'choice_1' }
            ],
            [
              { text: choices[2], callback_data: 'choice_2' },
              { text: choices[3], callback_data: 'choice_3' }
            ],
            [
              { text: '🔄 New Mission', callback_data: 'new_mission' }
            ]
          ]
        }

        await editMessage(
          chatId,
          messageId,
          `🎮 *SCAM Mercenaires Mission Simulator*\n\n*Chapter 1: New Operation*\n\n${scenario}\n\n*Choose your action:*`,
          keyboard
        )
      } else if (data.startsWith('choice_')) {
        const choiceIndex = parseInt(data.split('_')[1])
        const session = userSessions.get(userId)

        if (!session) {
          await editMessage(chatId, messageId, '❌ Session expired. Use /mission to start a new one.')
          return NextResponse.json({ ok: true })
        }

        const choiceLabels = ['Combat', 'Stealth', 'Hacking', 'Negotiation']
        const chosenAction = choiceLabels[choiceIndex]
        
        session.choices.push(chosenAction)
        session.chapter += 1

        if (session.chapter > 5) {
          // Mission complete
          userSessions.delete(userId)
          await editMessage(
            chatId,
            messageId,
            `🎉 *Mission Complete!*\n\nExcellent work, mercenary! You've successfully completed the infiltration mission using: ${session.choices.join(', ')}\n\nThe Limptin Foundation's plans have been disrupted and their NFT manipulation schemes exposed. The digital resistance grows stronger!\n\n💰 *Rewards Earned:*\n• G4C Tokens: 500\n• Experience Points: 1000\n• Reputation: +50\n\nUse /mission to start a new assignment and continue the fight for digital freedom!`
          )
        } else {
          // Continue mission
          const content = await generateMissionContent(session.chapter, session.choices, session.missionType)
          const { scenario, choices } = parseMissionContent(content)

          const keyboard = {
            inline_keyboard: [
              [
                { text: choices[0], callback_data: 'choice_0' },
                { text: choices[1], callback_data: 'choice_1' }
              ],
              [
                { text: choices[2], callback_data: 'choice_2' },
                { text: choices[3], callback_data: 'choice_3' }
              ],
              [
                { text: '🔄 New Mission', callback_data: 'new_mission' }
              ]
            ]
          }

          await editMessage(
            chatId,
            messageId,
            `🎮 *SCAM Mercenaires Mission Simulator*\n\n*Chapter ${session.chapter}: Deeper Into The Grid*\n\n${scenario}\n\n*Previous Action: ${chosenAction}*\n\n*Choose your next move:*`,
            keyboard
          )
        }

        userSessions.set(userId, session)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: 'SCAM Mercenaires Telegram Bot Active',
    bot_configured: !!BOT_TOKEN,
    timestamp: new Date().toISOString(),
    active_sessions: userSessions.size
  })
}
