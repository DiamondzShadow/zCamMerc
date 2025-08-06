'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, XCircle, Loader2, Bot, Zap } from 'lucide-react'

export default function SetupPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [setupResult, setSetupResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const setupTelegramBot = async () => {
    setIsLoading(true)
    setError(null)
    setSetupResult(null)

    try {
      const response = await fetch('/api/setup-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const result = await response.json()

      if (result.success) {
        setSetupResult(result)
      } else {
        setError(result.error || 'Setup failed')
      }
    } catch (err) {
      setError('Network error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            SCAM Mercenaries Bot Setup
          </h1>
          <p className="text-gray-300">Configure your Telegram bot for cyberpunk missions</p>
        </div>

        <Card className="bg-slate-800 border-purple-500">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Bot className="h-6 w-6 text-purple-400" />
              Telegram Bot Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-gray-300">
              <p className="mb-4">
                This will configure your Telegram bot to receive and respond to messages.
                The bot will be able to generate AI-powered cyberpunk missions and interact
                with players in the SCAM Mercenaries universe.
              </p>
              
              <div className="bg-slate-700 p-4 rounded-lg mb-4">
                <h4 className="text-purple-400 font-semibold mb-2">Bot Features:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• AI-generated cyberpunk missions</li>
                  <li>• Character progression tracking</li>
                  <li>• Interactive storylines</li>
                  <li>• G4C token rewards simulation</li>
                </ul>
              </div>
            </div>

            <Button
              onClick={setupTelegramBot}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Setting up bot...
                </>
              ) : (
                <>
                  <Zap className="mr-2 h-4 w-4" />
                  Setup Telegram Bot
                </>
              )}
            </Button>

            {setupResult && (
              <div className="bg-green-900/20 border border-green-500 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-green-400 font-semibold">Setup Successful!</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Your Telegram bot has been configured successfully.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Webhook URL:</span>
                    <span className="text-purple-400 font-mono text-xs">
                      {setupResult.webhookUrl}
                    </span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-slate-700 rounded">
                  <p className="text-sm text-gray-300 mb-2">
                    <strong>Next Steps:</strong>
                  </p>
                  <ol className="text-sm text-gray-300 space-y-1">
                    <li>1. Open Telegram and search for your bot</li>
                    <li>2. Send <code className="bg-slate-600 px-1 rounded">/start</code> to begin</li>
                    <li>3. Try <code className="bg-slate-600 px-1 rounded">/mission</code> for a cyberpunk mission</li>
                  </ol>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-900/20 border border-red-500 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="h-5 w-5 text-red-400" />
                  <span className="text-red-400 font-semibold">Setup Failed</span>
                </div>
                <p className="text-gray-300 text-sm">{error}</p>
              </div>
            )}

            <div className="border-t border-slate-700 pt-4">
              <h4 className="text-white font-semibold mb-2">Available Commands:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Badge variant="outline" className="justify-start">
                  /start - Begin journey
                </Badge>
                <Badge variant="outline" className="justify-start">
                  /mission - Get mission
                </Badge>
                <Badge variant="outline" className="justify-start">
                  /help - Show help
                </Badge>
                <Badge variant="outline" className="justify-start">
                  /status - Check stats
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
