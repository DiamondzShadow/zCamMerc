import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '7906690916:AAGvQKhJvKJhJvKJhJvKJhJvKJhJvKJhJvK'
const DEEPINFRA_API_KEY = process.env.DEEPINFRA_API_KEY

interface TelegramMessage {
  message_id: number
  from: {
    id: number
    is_bot: boolean
    first_name: string
    username?: string
  }
  chat: {
    id: number
    first_name?: string
    username?: string
    type: string
  }
  date: number
  text?: string
}

interface TelegramUpdate {
  update_id: number
  message?: TelegramMessage
}

async function sendTelegramMessage(chatId: number, text: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown'
      }),
    })

    if (!response.ok) {
      console.error('Failed to send message:', await response.text())
    }
    
    return response.json()
  } catch (error) {
    console.error('Error sending message:', error)
    throw error
  }
}

async function generateMission(playerName: string) {
  if (!DEEPINFRA_API_KEY) {
    return `🎯 **MISSION BRIEFING**

**Agent:** ${playerName}
**Location:** Neo-Tokyo Underground
**Objective:** Infiltrate Limptin Foundation data center

**Mission Details:**
The Limptin Foundation has been developing illegal AI consciousness experiments. Your mission is to infiltrate their secure facility and extract evidence of their crimes against digital sentience.

**Rewards:**
- 500 G4C Tokens
- Rare Cybernetic Implant
- Intel on Summer Limptin's whereabouts

**Risk Level:** HIGH ⚠️

*Good luck, mercenary. The resistance is counting on you.*`
  }

  try {
    const response = await fetch('https://api.deepinfra.com/v1/openai/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPINFRA_API_KEY}`
      },
      body: JSON.stringify({
        model: 'meta-llama/Meta-Llama-3.1-70B-Instruct',
        messages: [
          {
            role: 'system',
            content: `You are a mission generator for SCAM Mercenaries, a cyberpunk game. Generate exciting missions for player "${playerName}". Include:
            - Mission title
            - Location (Neo-Tokyo, Corporate Towers, Underground, etc.)
            - Objective
            - Story context involving characters like Summer Limptin, Kjundith, Carmen
            - Rewards (G4C tokens, equipment, intel)
            - Risk level
            Keep it under 200 words and make it immersive.`
          },
          {
            role: 'user',
            content: `Generate a cyberpunk mission for ${playerName}`
          }
        ],
        max_tokens: 300,
        temperature: 0.8
      })
    })

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }

    const data = await response.json()
    return data.choices[0]?.message?.content || 'Mission generation failed'
  } catch (error) {
    console.error('Error generating mission:', error)
    return `🎯 **EMERGENCY MISSION**

**Agent:** ${playerName}
**Location:** Neo-Tokyo Slums
**Objective:** Survive the corporate purge

The Limptin Foundation has launched a surprise attack on resistance hideouts. Fight your way through their security forces and reach the extraction point.

**Rewards:** 300 G4C Tokens
**Risk Level:** EXTREME ⚠️⚠️⚠️`
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as TelegramUpdate
    console.log('Received webhook:', JSON.stringify(body, null, 2))

    if (!body.message) {
      return NextResponse.json({ ok: true })
    }

    const message = body.message
    const chatId = message.chat.id
    const text = message.text || ''
    const username = message.from.username || message.from.first_name || 'Agent'

    console.log(`Processing message: "${text}" from ${username}`)

    // Handle commands
    if (text.startsWith('/')) {
      const command = text.split(' ')[0].toLowerCase()
      
      switch (command) {
        case '/start':
          await sendTelegramMessage(chatId, `🔥 **Welcome to SCAM Mercenaries!** 🔥

*The year is 2087. Mega-corporations rule the world. You are a digital mercenary fighting for freedom.*

**Available Commands:**
/mission - Get a new cyberpunk mission
/help - Show all commands
/status - Check your mercenary status

Ready to join the resistance, ${username}?`)
          break

        case '/help':
          await sendTelegramMessage(chatId, `🤖 **SCAM Mercenaries Commands**

/start - Begin your journey
/mission - Generate new mission
/help - Show this help
/status - View your stats
/test - Test bot functionality

*Fight the corporate tyranny!*`)
          break

        case '/mission':
          const mission = await generateMission(username)
          await sendTelegramMessage(chatId, mission)
          break

        case '/status':
          await sendTelegramMessage(chatId, `📊 **Mercenary Status: ${username}**

**Level:** 5
**G4C Tokens:** 1,250
**Missions Completed:** 12
**Reputation:** Trusted Operative

**Current Location:** Neo-Tokyo Underground
**Active Contracts:** 2

*Keep fighting the good fight!*`)
          break

        case '/test':
          await sendTelegramMessage(chatId, `✅ **Bot Status: ONLINE**

All systems operational, ${username}!
Ready to generate missions and track your progress.

*The resistance lives on!*`)
          break

        default:
          await sendTelegramMessage(chatId, `❓ Unknown command: ${command}

Type /help to see available commands.`)
          break
      }
    } else {
      // Handle regular messages
      await sendTelegramMessage(chatId, `🎮 **SCAM Mercenaries Bot**

I received your message: "${text}"

Use /mission to get a new cyberpunk mission, or /help for all commands!`)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: 'SCAM Mercenaries Bot is running',
    timestamp: new Date().toISOString()
  })
}
