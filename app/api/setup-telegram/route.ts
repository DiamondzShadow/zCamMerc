import { NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN

export async function POST() {
  try {
    if (!TELEGRAM_BOT_TOKEN) {
      return NextResponse.json({ 
        error: 'TELEGRAM_BOT_TOKEN not configured',
        message: 'Please set the TELEGRAM_BOT_TOKEN environment variable'
      }, { status: 400 })
    }

    // Get the current domain
    const webhookUrl = `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'}/api/telegram-webhook`
    
    console.log('Setting webhook URL:', webhookUrl)

    // Set the webhook
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: webhookUrl,
        allowed_updates: ['message'],
      }),
    })

    const result = await response.json()
    console.log('Webhook setup result:', result)

    if (result.ok) {
      return NextResponse.json({ 
        success: true, 
        message: 'SCAM Mercenaries bot configured successfully!',
        team: 'Diamondz Crews (CEO), Diamondz Shadow (CTO), X Banks (Mission Designer)',
        webhookUrl,
        result 
      })
    } else {
      return NextResponse.json({ 
        error: 'Failed to set webhook', 
        details: result 
      }, { status: 400 })
    }
  } catch (error) {
    console.error('Setup error:', error)
    return NextResponse.json({ 
      error: 'Setup failed', 
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function GET() {
  try {
    if (!TELEGRAM_BOT_TOKEN) {
      return NextResponse.json({ 
        error: 'TELEGRAM_BOT_TOKEN not configured' 
      }, { status: 400 })
    }

    // Get webhook info
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getWebhookInfo`)
    const result = await response.json()

    return NextResponse.json({
      status: 'SCAM Mercenaries Bot Status',
      team: {
        ceo: 'Diamondz Crews',
        cto: 'Diamondz Shadow',
        designer: 'X Banks'
      },
      webhook: result.result,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json({ 
      error: 'Failed to get webhook info',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
