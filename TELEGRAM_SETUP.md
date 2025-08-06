# SCAM Mercenaries Telegram Bot Setup

## Team
- **Diamondz Crews** - CEO & Visionary Leader
- **Diamondz Shadow** - CTO & Technical Architect  
- **X Banks** - Mission Designer & Narrative Expert

## Overview
This guide will help you set up the SCAM Mercenaries Telegram bot for AI-powered cyberpunk mission generation.

## Prerequisites
1. A Telegram bot token from @BotFather
2. DeepInfra API key (optional, for AI mission generation)
3. Vercel deployment or local development environment

## Environment Variables
Set these in your Vercel dashboard or `.env.local`:

\`\`\`bash
TELEGRAM_BOT_TOKEN=your_bot_token_here
DEEPINFRA_API_KEY=your_deepinfra_key_here
\`\`\`

## Setup Methods

### Method 1: Web Interface (Recommended)
1. Deploy your project to Vercel
2. Visit `https://your-domain.vercel.app/setup`
3. Click "Setup Telegram Bot"
4. Test your bot with `/start` command

### Method 2: Manual Script
1. Run the setup script:
\`\`\`bash
npm run setup-bot
\`\`\`

### Method 3: API Endpoint
Make a POST request to `/api/setup-telegram`:
\`\`\`bash
curl -X POST https://your-domain.vercel.app/api/setup-telegram
\`\`\`

## Bot Commands
- `/start` - Initialize mercenary profile
- `/mission` - Get AI-generated cyberpunk missions
- `/status` - Check mercenary status
- `/help` - Show all commands
- `/test` - Test bot functionality

## Features
- AI-powered mission generation using DeepInfra
- Cyberpunk storylines and narratives
- Character progression tracking
- Team integration (Diamondz Crews, Diamondz Shadow, X Banks)

## Troubleshooting

### Bot Not Responding
1. Check that TELEGRAM_BOT_TOKEN is set correctly
2. Verify webhook is configured properly
3. Check Vercel function logs for errors

### AI Mission Generation Not Working
1. Ensure DEEPINFRA_API_KEY is set
2. Check DeepInfra API quota and billing
3. Bot will fall back to static missions if AI fails

### Webhook Issues
1. Make sure your domain is accessible
2. Check that `/api/telegram-webhook` endpoint is working
3. Verify webhook URL in Telegram bot settings

## Support
For technical issues, contact the development team:
- **Diamondz Crews** - CEO & Project Lead
- **Diamondz Shadow** - CTO & Technical Support
- **X Banks** - Mission Design & Content

## Development
To modify the bot:
1. Edit `/app/api/telegram-webhook/route.ts` for command handling
2. Update mission generation in the `generateMission()` function
3. Customize responses and add new commands as needed

The bot is designed to be extensible and can be enhanced with additional features like user persistence, advanced AI interactions, and game integration.
