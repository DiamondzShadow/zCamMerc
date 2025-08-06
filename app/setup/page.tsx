'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Users, Bot, Zap, CheckCircle, XCircle, Loader2 } from 'lucide-react'

export default function SetupPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [setupResult, setSetupResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const setupBot = async () => {
    setIsLoading(true)
    setError(null)
    setSetupResult(null)

    try {
      const response = await fetch('/api/setup-telegram', {
        method: 'POST',
      })

      const result = await response.json()

      if (response.ok) {
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

  const checkStatus = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/setup-telegram')
      const result = await response.json()

      if (response.ok) {
        setSetupResult(result)
      } else {
        setError(result.error || 'Status check failed')
      }
    } catch (err) {
      setError('Network error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            SCAM Mercenaries Bot Setup
          </h1>
          <p className="text-xl text-purple-300 mb-4">Configure your Telegram bot for cyberpunk missions</p>
          <Badge variant="outline" className="text-purple-400 border-purple-400">
            Powered by Diamondz Crews, Diamondz Shadow & X Banks
          </Badge>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Team Info */}
          <Card className="bg-slate-800 border-purple-500">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-400" />
                Core Development Team
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">DC</span>
                  </div>
                  <h3 className="font-bold text-white">Diamondz Crews</h3>
                  <p className="text-sm text-purple-400">CEO & Visionary</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">DS</span>
                  </div>
                  <h3 className="font-bold text-white">Diamondz Shadow</h3>
                  <p className="text-sm text-blue-400">CTO & Tech Architect</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">XB</span>
                  </div>
                  <h3 className="font-bold text-white">X Banks</h3>
                  <p className="text-sm text-green-400">Mission Designer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Setup Controls */}
          <Card className="bg-slate-800 border-purple-500">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Bot className="h-5 w-5 text-purple-400" />
                Bot Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Button 
                  onClick={setupBot} 
                  disabled={isLoading}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Setting up...
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 h-4 w-4" />
                      Setup Telegram Bot
                    </>
                  )}
                </Button>
                
                <Button 
                  onClick={checkStatus} 
                  disabled={isLoading}
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                >
                  Check Status
                </Button>
              </div>

              {/* Results */}
              {setupResult && (
                <div className="mt-6 p-4 bg-slate-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <h3 className="text-green-400 font-semibold">Setup Successful!</h3>
                  </div>
                  <div className="text-gray-300 text-sm space-y-1">
                    <p><strong>Message:</strong> {setupResult.message}</p>
                    {setupResult.team && <p><strong>Team:</strong> {setupResult.team}</p>}
                    {setupResult.webhookUrl && <p><strong>Webhook:</strong> {setupResult.webhookUrl}</p>}
                    {setupResult.webhook && (
                      <div className="mt-2">
                        <p><strong>Webhook Status:</strong></p>
                        <pre className="text-xs bg-slate-800 p-2 rounded mt-1 overflow-auto">
                          {JSON.stringify(setupResult.webhook, null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {error && (
                <div className="mt-6 p-4 bg-red-900/20 border border-red-500 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="h-5 w-5 text-red-400" />
                    <h3 className="text-red-400 font-semibold">Setup Failed</h3>
                  </div>
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className="bg-slate-800 border-purple-500">
            <CardHeader>
              <CardTitle className="text-white">Next Steps</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Click "Setup Telegram Bot" to configure the webhook</li>
                <li>Make sure your TELEGRAM_BOT_TOKEN environment variable is set</li>
                <li>Test your bot by sending /start to your Telegram bot</li>
                <li>Try /mission to get AI-generated cyberpunk missions</li>
                <li>Use /help to see all available commands</li>
              </ol>
              
              <div className="mt-4 p-3 bg-slate-700 rounded">
                <h4 className="text-purple-400 font-semibold mb-2">Available Commands:</h4>
                <ul className="text-sm space-y-1">
                  <li><code className="bg-slate-600 px-1 rounded">/start</code> - Initialize mercenary profile</li>
                  <li><code className="bg-slate-600 px-1 rounded">/mission</code> - Get AI-generated missions</li>
                  <li><code className="bg-slate-600 px-1 rounded">/status</code> - Check mercenary status</li>
                  <li><code className="bg-slate-600 px-1 rounded">/help</code> - Show all commands</li>
                  <li><code className="bg-slate-600 px-1 rounded">/test</code> - Test bot functionality</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
