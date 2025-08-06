import { NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '7906690916:AAGvQKhJvKJhJvKJhJvKJhJvKJhJvKJhJvK'

export async function POST() {
  try {
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
        allowed_updates: ['message']
      }),
    })

    const result = await response.json()
    console.log('Webhook setup result:', result)

    if (result.ok) {
      return NextResponse.json({ 
        success: true, 
        message: 'Telegram bot webhook configured successfully!',
        webhookUrl: webhookUrl
      })
    } else {
      return NextResponse.json({ 
        success: false, 
        error: result.description || 'Failed to set webhook'
      }, { status: 400 })
    }
  } catch (error) {
    console.error('Setup error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to configure webhook' 
    }, { status: 500 })
  }
}

export async function GET() {
  try {
    // Get webhook info
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getWebhookInfo`)
    const result = await response.json()
    
    return NextResponse.json({
      webhookInfo: result.result,
      botToken: TELEGRAM_BOT_TOKEN ? 'Set' : 'Not set'
    })
  } catch (error) {
    console.error('Get webhook info error:', error)
    return NextResponse.json({ error: 'Failed to get webhook info' }, { status: 500 })
  }
}
