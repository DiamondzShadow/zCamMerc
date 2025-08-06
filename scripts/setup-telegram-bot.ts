const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN

async function setupTelegramBot() {
  if (!TELEGRAM_BOT_TOKEN) {
    console.error('❌ TELEGRAM_BOT_TOKEN environment variable is not set')
    process.exit(1)
  }

  try {
    console.log('🔧 Setting up SCAM Mercenaries Telegram Bot...')
    console.log('👥 Team: Diamondz Crews (CEO), Diamondz Shadow (CTO), X Banks (Mission Designer)')

    // Get webhook URL from environment or use localhost for development
    const webhookUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}/api/telegram-webhook`
      : 'http://localhost:3000/api/telegram-webhook'

    console.log(`🌐 Setting webhook URL: ${webhookUrl}`)

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

    if (result.ok) {
      console.log('✅ Webhook set successfully!')
      console.log('🎮 SCAM Mercenaries bot is now active')
      console.log('🔥 Ready to generate cyberpunk missions!')
    } else {
      console.error('❌ Failed to set webhook:', result)
      process.exit(1)
    }

    // Get bot info
    const botInfoResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`)
    const botInfo = await botInfoResponse.json()

    if (botInfo.ok) {
      console.log(`🤖 Bot Info:`)
      console.log(`   Name: ${botInfo.result.first_name}`)
      console.log(`   Username: @${botInfo.result.username}`)
      console.log(`   ID: ${botInfo.result.id}`)
    }

    console.log('\n🚀 Setup complete! Your SCAM Mercenaries bot is ready.')
    console.log('💡 Try these commands in Telegram:')
    console.log('   /start - Initialize mercenary profile')
    console.log('   /mission - Get AI-generated cyberpunk missions')
    console.log('   /help - Show all commands')

  } catch (error) {
    console.error('❌ Setup failed:', error)
    process.exit(1)
  }
}

// Run the setup
setupTelegramBot()
