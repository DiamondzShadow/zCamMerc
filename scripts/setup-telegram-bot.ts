const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
if (!BOT_TOKEN) {
  console.error('❌ CRITICAL: TELEGRAM_BOT_TOKEN environment variable is not set.');
  console.error('Please set your bot token in the environment variables.');
  process.exit(1);
}

const WEBHOOK_URL = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}/api/telegram-webhook`
  : 'https://scam-mercenaires.vercel.app/api/telegram-webhook'

async function setupBot() {
  try {
    console.log('🤖 Setting up SCAM Mercenaires Telegram Bot...')
    console.log(`🔑 Using bot token: ${BOT_TOKEN.substring(0, 10)}...`)
    
    // Get bot info first
    console.log('📡 Testing bot connection...')
    const botInfoResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getMe`)
    const botInfo = await botInfoResponse.json()
    
    if (!botInfo.ok) {
      console.error('❌ Invalid bot token:', botInfo)
      return
    }

    console.log('✅ Bot connection successful!')
    console.log(`🎮 Bot Info:`)
    console.log(`   Name: ${botInfo.result.first_name}`)
    console.log(`   Username: @${botInfo.result.username}`)
    console.log(`   ID: ${botInfo.result.id}`)
    
    // Set webhook
    console.log(`🔗 Setting webhook URL: ${WEBHOOK_URL}`)
    const webhookResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/setWebhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: WEBHOOK_URL,
        allowed_updates: ['message', 'callback_query'],
        drop_pending_updates: true
      }),
    })

    const webhookResult = await webhookResponse.json()
    
    if (webhookResult.ok) {
      console.log('✅ Webhook set successfully!')
    } else {
      console.error('❌ Failed to set webhook:', webhookResult)
      return
    }

    // Set bot commands
    console.log('📝 Setting bot commands...')
    const commandsResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/setMyCommands`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        commands: [
          { command: 'mission', description: '🎮 Start a new cyberpunk mission' },
          { command: 'help', description: '❓ Show available commands' },
          { command: 'reset', description: '🔄 Reset current mission progress' }
        ]
      }),
    })

    const commandsResult = await commandsResponse.json()
    
    if (commandsResult.ok) {
      console.log('✅ Bot commands set successfully!')
    } else {
      console.log('⚠️ Commands setup had issues:', commandsResult)
    }

    console.log('\n🚀 Setup complete! Your SCAM Mercenaires bot is ready!')
    console.log('📱 Add your bot to a Telegram group and try these commands:')
    console.log('   /mission - Start playing')
    console.log('   /help - Get help')
    console.log('   /reset - Reset progress')
    console.log(`\n🤖 Bot: @${botInfo.result.username}`)
    
  } catch (error) {
    console.error('❌ Setup failed:', error)
  }
}

// Run setup
setupBot()
