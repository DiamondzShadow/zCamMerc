# SCAM Mercenaires Telegram Bot Setup

## Bot Information
- **Bot Name**: zCam.bot
- **Username**: @zCamMerc_bot
- **Bot URL**: https://t.me/zCamMerc_bot
- **Bot Token**: [SECURE - Set via environment variable]

## Setup Instructions

### 1. Environment Variables
Add the following environment variables to your Vercel project:
\`\`\`
TELEGRAM_BOT_TOKEN=your_bot_token_here
DEEPINFRA_API_KEY=your_deepinfra_api_key_here
\`\`\`

**⚠️ IMPORTANT SECURITY NOTE:**
- Never commit bot tokens or API keys to source code
- Always use environment variables for sensitive data
- Keep your tokens secure and regenerate them if exposed

### 2. Deploy and Configure
1. Deploy your code to Vercel
2. Run the setup script: `npm run setup-telegram`
3. The webhook will be automatically configured

### 3. Add Bot to Your Group
1. Go to https://t.me/zCamMerc_bot
2. Click "START BOT"
3. Add the bot to your Telegram group
4. Make sure the bot has permission to send messages

### 4. Test the Bot
Try these commands in your group:
- `/mission` - Start a cyberpunk mission
- `/help` - Show available commands
- `/reset` - Reset mission progress

## Bot Features

### Interactive Missions
- AI-generated cyberpunk scenarios
- Choice-based gameplay with buttons
- 5-chapter missions with rewards
- Persistent user sessions

### Commands
- `/mission` - Start new mission
- `/help` - Show help
- `/reset` - Reset progress

### Gameplay
- Choose from 4 action types: Combat, Stealth, Hacking, Negotiation
- Progress through chapters based on choices
- Complete missions to earn rewards
- Start new missions anytime

## Technical Details

### Webhook URL
The bot uses webhook mode with the endpoint:
`https://your-domain.vercel.app/api/telegram-webhook`

### Session Storage
User sessions are stored in memory (consider Redis for production)

### AI Integration
Uses DeepInfra API for generating dynamic mission content

### Error Handling
Includes fallback scenarios if AI API is unavailable

## Troubleshooting

### Bot Not Responding
1. Check if TELEGRAM_BOT_TOKEN is set correctly
2. Verify webhook is configured: visit `/api/telegram-webhook`
3. Check Vercel function logs for errors

### Commands Not Working
1. Make sure bot has message permissions in the group
2. Try removing and re-adding the bot
3. Check if commands are set correctly with BotFather

### Mission Generation Issues
1. Verify DEEPINFRA_API_KEY is configured
2. Check API quota and limits
3. Fallback scenarios will be used if API fails

## Security Notes
- Keep your bot token secure
- Don't share the token publicly
- Use environment variables for sensitive data
- Consider rate limiting for production use
\`\`\`

Perfect! Your bot is now configured and ready to use at t.me/zCamMerc_bot.

## 🚀 Next Steps:

1. **Deploy this code** to Vercel
2. **Run setup**: `npm run setup-telegram`
3. **Add bot to your Telegram room**
4. **Test with**: `/mission`

Your navbar is preserved exactly as it was, and the bot should work immediately once deployed!
