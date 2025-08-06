const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '7906690916:AAGvQKhJvKJhJvKJhJvKJhJvKJhJvKJhJvK'

async function setupTelegramBot() {
  try {
    console.log('🤖 Setting up SCAM Mercenaries Telegram Bot...')
    
    // Get bot info
    const botInfoResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`)
    const botInfo = await botInfoResponse.json()
    
    if (!botInfo.ok) {
      throw new Error('Invalid bot token')
    }
    
    console.log(`✅ Bot found: @${botInfo.result.username}`)
    
    // Set webhook URL
    const webhookUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}/api/telegram-webhook`
      : 'http://localhost:3000/api/telegram-webhook'
    
    console.log(`🔗 Setting webhook: ${webhookUrl}`)
    
    const webhookResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: webhookUrl,
        allowed_updates: ['message']
      }),
    })
    
    const webhookResult = await webhookResponse.json()
    
    if (webhookResult.ok) {
      console.log('✅ Webhook configured successfully!')
      console.log('🎮 SCAM Mercenaries bot is ready!')
      console.log(`📱 Add @${botInfo.result.username} to your Telegram and send /start`)
    } else {
      console.error('❌ Webhook setup failed:', webhookResult.description)
    }
    
  } catch (error) {
    console.error('❌ Setup failed:', error)
  }
}

// Run setup if this file is executed directly
if (require.main === module) {
  setupTelegramBot()
}

export { setupTelegramBot }
