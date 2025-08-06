#!/usr/bin/env node

console.log('🔍 SCAM Mercenaires Bot Diagnostic Tool\n');

// Try to load environment variables from various sources
const fs = require('fs');
const path = require('path');

function loadEnvFile(filename) {
  try {
    const envPath = path.join(process.cwd(), filename);
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf8');
      const lines = envContent.split('\n');
      const envVars = {};
      
      lines.forEach(line => {
        line = line.trim();
        if (line && !line.startsWith('#')) {
          const [key, ...valueParts] = line.split('=');
          if (key && valueParts.length > 0) {
            envVars[key.trim()] = valueParts.join('=').trim();
          }
        }
      });
      
      return envVars;
    }
  } catch (error) {
    console.log(`⚠️  Could not read ${filename}: ${error.message}`);
  }
  return null;
}

// Check environment variables
console.log('📋 Environment Variable Check:');
console.log('==============================');

const envFiles = ['.env.local', '.env', '.env.production'];
let foundToken = false;
let foundDeepInfra = false;

// Check process.env first
if (process.env.TELEGRAM_BOT_TOKEN) {
  console.log('✅ TELEGRAM_BOT_TOKEN found in process.env');
  console.log(`   Token preview: ${process.env.TELEGRAM_BOT_TOKEN.substring(0, 10)}...`);
  foundToken = true;
} else {
  console.log('❌ TELEGRAM_BOT_TOKEN not found in process.env');
}

if (process.env.DEEPINFRA_API_KEY) {
  console.log('✅ DEEPINFRA_API_KEY found in process.env');
  foundDeepInfra = true;
} else {
  console.log('❌ DEEPINFRA_API_KEY not found in process.env');
}

// Check environment files
console.log('\n📁 Environment Files Check:');
console.log('============================');

envFiles.forEach(filename => {
  const envVars = loadEnvFile(filename);
  if (envVars) {
    console.log(`✅ Found ${filename}`);
    
    if (envVars.TELEGRAM_BOT_TOKEN) {
      if (envVars.TELEGRAM_BOT_TOKEN.includes('your_telegram_bot_token_here')) {
        console.log('   ⚠️  TELEGRAM_BOT_TOKEN is placeholder - needs real token');
      } else {
        console.log(`   ✅ TELEGRAM_BOT_TOKEN present: ${envVars.TELEGRAM_BOT_TOKEN.substring(0, 10)}...`);
        foundToken = true;
      }
    }
    
    if (envVars.DEEPINFRA_API_KEY) {
      if (envVars.DEEPINFRA_API_KEY.includes('your_deepinfra_api_key_here')) {
        console.log('   ⚠️  DEEPINFRA_API_KEY is placeholder - needs real key');
      } else {
        console.log('   ✅ DEEPINFRA_API_KEY present');
        foundDeepInfra = true;
      }
    }
  } else {
    console.log(`❌ ${filename} not found or empty`);
  }
});

console.log('\n🎯 Issue Diagnosis:');
console.log('===================');

if (!foundToken) {
  console.log('🚨 CRITICAL: No valid TELEGRAM_BOT_TOKEN found!');
  console.log('');
  console.log('🔧 How to fix:');
  console.log('1. Get bot token from @BotFather on Telegram');
  console.log('2. Edit .env.local file and replace placeholder with real token');
  console.log('3. Format: TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrSTUvwxyz');
  console.log('');
} else {
  console.log('✅ Bot token configuration looks good');
}

if (!foundDeepInfra) {
  console.log('⚠️  No DEEPINFRA_API_KEY found (optional but recommended)');
  console.log('   - Bot will use fallback scenarios instead of AI-generated content');
  console.log('   - Get free API key at https://deepinfra.com');
  console.log('');
}

// Test bot token if available
console.log('🤖 Bot Token Validation:');
console.log('========================');

const botToken = process.env.TELEGRAM_BOT_TOKEN || 
  (loadEnvFile('.env.local') && loadEnvFile('.env.local').TELEGRAM_BOT_TOKEN) ||
  (loadEnvFile('.env') && loadEnvFile('.env').TELEGRAM_BOT_TOKEN);

if (botToken && !botToken.includes('your_telegram_bot_token_here')) {
  console.log('🔄 Testing bot token...');
  
  fetch(`https://api.telegram.org/bot${botToken}/getMe`)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        console.log('✅ Bot token is valid!');
        console.log(`   Bot name: ${data.result.first_name}`);
        console.log(`   Username: @${data.result.username}`);
        console.log(`   Bot ID: ${data.result.id}`);
        
        console.log('\n🚀 Next Steps:');
        console.log('==============');
        console.log('1. Run: npm run setup-telegram');
        console.log('2. Test bot at: https://t.me/' + data.result.username);
        console.log('3. Send /mission command to start playing');
      } else {
        console.log('❌ Bot token is invalid:', data.description);
        console.log('   Please check your token from @BotFather');
      }
    })
    .catch(error => {
      console.log('❌ Failed to validate bot token:', error.message);
      console.log('   Check your internet connection and token format');
    });
} else {
  console.log('⏭️  Skipping validation - no valid token found');
  console.log('\n🚀 Next Steps:');
  console.log('==============');
  console.log('1. Edit .env.local with your real bot token');
  console.log('2. Run this diagnostic again: node diagnose-bot.js');
  console.log('3. Then run: npm run setup-telegram');
}