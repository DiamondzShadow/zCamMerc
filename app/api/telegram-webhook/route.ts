import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const DEEPINFRA_API_KEY = process.env.DEEPINFRA_API_KEY

interface TelegramMessage {
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
  date: number
}

interface TelegramUpdate {
  update_id: number
  message?: TelegramMessage
}

async function sendTelegramMessage(chatId: number, text: string) {
  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'Markdown',
    }),
  })
  
  return response.json()
}

async function generateMission() {
  try {
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
            content: `You are X Banks, the Mission Designer for SCAM Mercenaries, working under CEO Diamondz Crews and CTO Diamondz Shadow. Generate cyberpunk missions for the year 2087 where mega-corporations control everything. Include:
            - Mission codename
            - Location (Neo-Tokyo, Corporate Towers, Underground, etc.)
            - Objective
            - Difficulty level
            - Rewards
            - Brief tactical overview
            Keep it under 300 words and make it immersive.`
          },
          {
            role: 'user',
            content: 'Generate a new SCAM Mercenaries mission for our resistance fighters.'
          }
        ],
        max_tokens: 400,
        temperature: 0.8,
      }),
    })

    const data = await response.json()
    return data.choices[0]?.message?.content || 'Mission generation failed. Try again later.'
  } catch (error) {
    console.error('Mission generation error:', error)
    return 'Mission systems offline. Contact Diamondz Shadow for technical support.'
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: TelegramUpdate = await request.json()
    
    console.log('Webhook received:', JSON.stringify(body, null, 2))
    
    if (!body.message) {
      return NextResponse.json({ ok: true })
    }

    const message = body.message
    const chatId = message.chat.id
    const text = message.text || ''
    const username = message.from.username || message.from.first_name

    console.log(`Message from ${username}: ${text}`)

    // Handle commands
    if (text.startsWith('/start')) {
      const welcomeMessage = `🔥 *Welcome to SCAM Mercenaries* 🔥

*The Cyberpunk Revolution Begins*

You've joined the digital resistance led by:
• **Diamondz Crews** - CEO & Visionary
• **Diamondz Shadow** - CTO & Tech Architect  
• **X Banks** - Mission Designer

*Available Commands:*
/mission - Get AI-generated cyberpunk missions
/help - Show all commands
/status - Check your mercenary status
/test - Test bot functionality

Ready to fight corporate tyranny in 2087? 🚀`

      await sendTelegramMessage(chatId, welcomeMessage)
    }
    else if (text.startsWith('/mission')) {
      await sendTelegramMessage(chatId, '🔄 *Generating Mission...*\n\nX Banks is crafting your next operation...')
      
      const mission = await generateMission()
      const missionMessage = `🎯 *NEW MISSION AVAILABLE*\n\n${mission}\n\n*Mission designed by X Banks*\n*SCAM Mercenaries Command*`
      
      await sendTelegramMessage(chatId, missionMessage)
    }
    else if (text.startsWith('/help')) {
      const helpMessage = `🤖 *SCAM Mercenaries Bot Commands*

*Core Commands:*
/start - Initialize your mercenary profile
/mission - Get AI-generated cyberpunk missions
/status - Check your current status
/test - Test bot functionality

*About SCAM Mercenaries:*
Led by Diamondz Crews (CEO), Diamondz Shadow (CTO), and X Banks (Mission Designer), we're building the ultimate cyberpunk gaming experience.

*Need Support?*
Contact our team through the official channels.

*Fight the corporate tyranny! 🔥*`

      await sendTelegramMessage(chatId, helpMessage)
    }
    else if (text.startsWith('/status')) {
      const statusMessage = `📊 *Mercenary Status Report*

*Operative:* ${username}
*Clearance Level:* Rookie
*Missions Completed:* 0
*Faction:* SCAM Mercenaries
*Location:* Neo-Tokyo Underground

*Command Structure:*
• **Diamondz Crews** - CEO (Online)
• **Diamondz Shadow** - CTO (Online)
• **X Banks** - Mission Designer (Online)

*Status:* Ready for deployment 🚀`

      await sendTelegramMessage(chatId, statusMessage)
    }
    else if (text.startsWith('/test')) {
      const testMessage = `✅ *Bot Test Successful*

*System Status:*
• Telegram Integration: ✅ Online
• AI Mission Generator: ✅ Active
• Team Communication: ✅ Connected

*Team Status:*
• Diamondz Crews (CEO): ✅ Active
• Diamondz Shadow (CTO): ✅ Active  
• X Banks (Mission Designer): ✅ Active

*Ready for cyberpunk operations! 🔥*`

      await sendTelegramMessage(chatId, testMessage)
    }
    else {
      // Default response for unrecognized messages
      const defaultMessage = `🤖 *SCAM Mercenaries Command*

I didn't recognize that command, operative.

Use /help to see available commands or /mission to get your next assignment.

*The resistance needs you! 🔥*`

      await sendTelegramMessage(chatId, defaultMessage)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: 'SCAM Mercenaries Bot Active',
    team: {
      ceo: 'Diamondz Crews',
      cto: 'Diamondz Shadow', 
      designer: 'X Banks'
    },
    timestamp: new Date().toISOString()
  })
}
