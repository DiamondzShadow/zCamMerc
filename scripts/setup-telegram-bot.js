const fs = require('fs');
const path = require('path');

// Function to load environment variables from a file
function loadEnvFile(filename) {
  try {
    const envPath = path.join(process.cwd(), filename);
    if (!fs.existsSync(envPath)) {
      return null;
    }
    
    const envContent = fs.readFileSync(envPath, 'utf8');
    const envVars = {};
    
    envContent.split('\n').forEach(line => {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const [key, ...valueParts] = trimmedLine.split('=');
        if (key && valueParts.length > 0) {
          envVars[key.trim()] = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
        }
      }
    });
    
    return envVars;
  } catch (error) {
    console.log(`❌ Error reading ${filename}:`, error.message);
    return null;
  }
}

console.log('🤖 Setting up Telegram Bot for Scam Mercenaries...\n');

// Check for environment variables in multiple locations
const envFiles = ['.env.local', '.env', '.env.production'];
let foundToken = false;
let tokenSource = '';

console.log('🔍 Checking for TELEGRAM_BOT_TOKEN...');

// Check process.env first (Vercel environment variables)
if (process.env.TELEGRAM_BOT_TOKEN) {
  foundToken = true;
  tokenSource = 'Vercel environment variables';
  console.log('✅ Found TELEGRAM_BOT_TOKEN in Vercel environment variables');
} else {
  // Check local environment files
  for (const filename of envFiles) {
    console.log(`   Checking ${filename}...`);
    const envVars = loadEnvFile(filename);
    if (envVars && envVars.TELEGRAM_BOT_TOKEN) {
      foundToken = true;
      tokenSource = filename;
      console.log(`✅ Found TELEGRAM_BOT_TOKEN in ${filename}`);
      break;
    } else {
      console.log(`   ❌ Not found in ${filename}`);
    }
  }
}

if (!foundToken) {
  console.log('\n❌ TELEGRAM_BOT_TOKEN environment variable is required');
  console.log('\n📝 Setup Instructions:');
  console.log('======================');
  console.log('1. Create a bot with @BotFather on Telegram');
  console.log('2. Get your bot token');
  console.log('3. Add it to your environment variables:');
  console.log('   - For Vercel: Add TELEGRAM_BOT_TOKEN in your project settings');
  console.log('   - For local development: Add to .env.local file');
  console.log('   - Format: TELEGRAM_BOT_TOKEN=your_token_here');
  console.log('\n4. Run this script again after adding the token');
  process.exit(1);
}

console.log(`\n🔑 Using token from: ${tokenSource}`);

// Get the bot token for validation
const botToken = (() => {
  if (process.env.TELEGRAM_BOT_TOKEN) {
    return process.env.TELEGRAM_BOT_TOKEN;
  }
  for (const filename of envFiles) {
    const envVars = loadEnvFile(filename);
    if (envVars && envVars.TELEGRAM_BOT_TOKEN) {
      return envVars.TELEGRAM_BOT_TOKEN;
    }
  }
  return null;
})();

if (!botToken) {
  console.log('❌ Could not retrieve bot token for validation');
  process.exit(1);
}

console.log('\n🔍 Validating bot token...');

// Validate the bot token
(async () => {
  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/getMe`);
    const data = await response.json();
    
    if (data.ok) {
      console.log('✅ Bot token is valid!');
      console.log(`   Bot name: ${data.result.first_name}`);
      console.log(`   Username: @${data.result.username}`);
      console.log(`   Bot ID: ${data.result.id}`);
      
      console.log('\n🌐 Setting up webhook...');
      
      // Set up webhook (this will be the Vercel deployment URL + /api/telegram-webhook)
      const webhookUrl = process.env.VERCEL_URL 
        ? `https://${process.env.VERCEL_URL}/api/telegram-webhook`
        : 'https://your-deployment-url.vercel.app/api/telegram-webhook';
      
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
        console.log(`   Webhook URL: ${webhookUrl}`);
      } else {
        console.log('⚠️  Webhook setup failed:', webhookData.description);
        console.log('   You may need to set this up manually after deployment');
      }
      
      console.log('\n🚀 Next Steps:');
      console.log('==============');
      console.log('1. Deploy your application to Vercel');
      console.log('2. Update webhook URL if needed');
      console.log('3. Test bot at: https://t.me/' + data.result.username);
      console.log('4. Send /mission command to start playing');
      console.log('5. Use /help to see all available commands');
      
    } else {
      console.log('❌ Bot token is invalid:', data.description);
      console.log('   Please check your token from @BotFather');
    }
  } catch (error) {
    console.log('❌ Failed to validate bot token:', error.message);
    console.log('   Check your internet connection and token format');
  }
})();
