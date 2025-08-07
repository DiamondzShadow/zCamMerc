const fs = require('fs');
const path = require('path');

// Load environment variables from various sources
function loadEnvFile(filename) {
  try {
    const envPath = path.resolve(process.cwd(), filename);
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf8');
      const envVars = {};
      
      envContent.split('\n').forEach(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          const [key, ...valueParts] = trimmed.split('=');
          if (key && valueParts.length > 0) {
            envVars[key.trim()] = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
          }
        }
      });
      
      return envVars;
    }
  } catch (error) {
    console.log(`⚠️  Could not read ${filename}:`, error.message);
  }
  return null;
}

console.log('🔍 Checking for Telegram Bot Token...');
console.log('=====================================');

// Check multiple environment sources
const envFiles = ['.env.local', '.env', '.env.production'];
let botToken = null;
let tokenSource = null;

// First check process.env (includes Vercel environment variables)
if (process.env.TELEGRAM_BOT_TOKEN) {
  botToken = process.env.TELEGRAM_BOT_TOKEN;
  tokenSource = 'process.env (Vercel/system environment)';
  console.log('✅ Found token in process.env');
} else {
  console.log('❌ No token in process.env');
  
  // Check each env file
  for (const filename of envFiles) {
    console.log(`🔍 Checking ${filename}...`);
    const envVars = loadEnvFile(filename);
    if (envVars && envVars.TELEGRAM_BOT_TOKEN) {
      botToken = envVars.TELEGRAM_BOT_TOKEN;
      tokenSource = filename;
      console.log(`✅ Found token in ${filename}`);
      break;
    } else {
      console.log(`❌ No token in ${filename}`);
    }
  }
}

if (!botToken) {
  console.log('\n❌ TELEGRAM_BOT_TOKEN not found in any source!');
  console.log('\nChecked sources:');
  console.log('- process.env (Vercel environment variables)');
  envFiles.forEach(file => console.log(`- ${file}`));
  console.log('\nPlease ensure your bot token is set in one of these locations.');
  console.log('For Vercel deployment, set it in your Vercel dashboard under Environment Variables.');
  process.exit(1);
}

console.log(`\n✅ Bot token found in: ${tokenSource}`);
console.log(`   Token preview: ${botToken.substring(0, 10)}...${botToken.substring(botToken.length - 4)}`);

// Validate the bot token
console.log('\n🔍 Validating bot token...');

(async () => {
  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/getMe`);
    const data = await response.json();
    
    if (data.ok) {
      console.log('✅ Bot token is valid!');
      console.log(`   Bot name: ${data.result.first_name}`);
      console.log(`   Username: @${data.result.username}`);
      console.log(`   Bot ID: ${data.result.id}`);
      
      // Set up webhook
      console.log('\n🔗 Setting up webhook...');
      
      // Get the deployment URL
      const webhookUrl = process.env.VERCEL_URL 
        ? `https://${process.env.VERCEL_URL}/api/telegram-webhook`
        : 'https://your-app.vercel.app/api/telegram-webhook';
      
      console.log(`   Webhook URL: ${webhookUrl}`);
      
      const webhookResponse = await fetch(`https://api.telegram.org/bot${botToken}/setWebhook`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: webhookUrl,
          allowed_updates: ['message', 'callback_query']
        })
      });
      
      const webhookData = await webhookResponse.json();
      
      if (webhookData.ok) {
        console.log('✅ Webhook set successfully!');
        console.log('\n🚀 Setup Complete!');
        console.log('================');
        console.log('Your Telegram bot is now ready to use.');
        console.log(`Test it at: https://t.me/${data.result.username}`);
        console.log('Send /mission to start playing!');
      } else {
        console.log('❌ Failed to set webhook:', webhookData.description);
        console.log('   You may need to set this up manually in production.');
      }
    } else {
      console.log('❌ Bot token is invalid:', data.description);
      console.log('   Please check your token from @BotFather');
      process.exit(1);
    }
  } catch (error) {
    console.log('❌ Failed to validate bot token:', error.message);
    console.log('   Check your internet connection and token format');
    process.exit(1);
  }
})();
