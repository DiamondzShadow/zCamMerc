# SCAM Mercenaries Telegram Bot Setup

## Overview
This document explains how to set up and configure the SCAM Mercenaries Telegram bot for cyberpunk mission generation and player interaction.

## Prerequisites
- Telegram Bot Token (from @BotFather)
- DeepInfra API Key (optional, for AI mission generation)
- Vercel deployment or local development environment

## Setup Instructions

### 1. Create Telegram Bot
1. Open Telegram and search for @BotFather
2. Send `/newbot` command
3. Follow the prompts to create your bot
4. Save the bot token provided

### 2. Configure Environment Variables
Add these to your Vercel environment variables or `.env.local`:

\`\`\`
TELEGRAM_BOT_TOKEN=your_bot_token_here
DEEPINFRA_API_KEY=your_deepinfra_key_here (optional)
\`\`\`

### 3. Deploy and Setup
1. Deploy your application to Vercel
2. Visit `https://your-domain.vercel.app/setup`
3. Click "Setup Telegram Bot" button
4. Verify successful configuration

### 4. Test the Bot
1. Open Telegram and search for your bot
2. Send `/start` to begin
3. Try these commands:
   - `/mission` - Generate cyberpunk mission
   - `/help` - Show available commands
   - `/status` - Check mercenary status
   - `/test` - Test bot functionality

## Bot Features

### Commands
- `/start` - Welcome message and introduction
- `/mission` - AI-generated cyberpunk missions
- `/help` - List of available commands
- `/status` - Player statistics and progress
- `/test` - Bot connectivity test

### Mission Generation
The bot uses DeepInfra's AI models to generate unique cyberpunk missions featuring:
- Dynamic storylines
- Character integration (Summer Limptin, Kjundith, Carmen)
- Reward systems (G4C tokens, equipment)
- Risk level assessment
- Neo-Tokyo locations

### Fallback System
If AI generation fails, the bot provides pre-written fallback missions to ensure continuous gameplay.

## Troubleshooting

### Common Issues
1. **Bot not responding**: Check webhook configuration
2. **Commands not working**: Verify bot token is correct
3. **AI generation failing**: Check DeepInfra API key

### Debug Steps
1. Check Vercel function logs
2. Test webhook endpoint directly
3. Verify environment variables are set
4. Use `/test` command to check bot status

## API Endpoints

### `/api/telegram-webhook`
- Handles incoming Telegram messages
- Processes commands and generates responses
- Manages user sessions and game state

### `/api/setup-telegram`
- Configures webhook URL
- Sets up bot commands
- Returns configuration status

## Security Notes
- Bot token should be kept secure
- Webhook URL should use HTTPS
- Environment variables should not be exposed in client code

## Support
For issues or questions, check the bot status using `/test` command or review the Vercel function logs.
