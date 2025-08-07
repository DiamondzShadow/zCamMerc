"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, Settings, Users, MessageSquare, Zap, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react'

export default function SetupPage() {
  const [botToken, setBotToken] = useState("")
  const [webhookUrl, setWebhookUrl] = useState("")
  const [isSettingUp, setIsSettingUp] = useState(false)
  const [setupStatus, setSetupStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSetupBot = async () => {
    if (!botToken) return
    
    setIsSettingUp(true)
    try {
      const response = await fetch("/api/setup-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ botToken, webhookUrl })
      })
      
      if (response.ok) {
        setSetupStatus("success")
      } else {
        setSetupStatus("error")
      }
    } catch (error) {
      setSetupStatus("error")
    } finally {
      setIsSettingUp(false)
    }
  }

  const team = {
    ceo: "Alex Chen - Visionary leader with 10+ years in blockchain",
    cto: "Sarah Kim - Former Google engineer, AI/ML specialist", 
    designer: "Marcus Rodriguez - Award-winning game designer"
  }

  const roadmap = [
    { phase: "Phase 1", title: "Foundation", status: "completed", items: ["Core game mechanics", "Character system", "Basic missions"] },
    { phase: "Phase 2", title: "Expansion", status: "in-progress", items: ["Territory system", "Advanced weapons", "Multiplayer"] },
    { phase: "Phase 3", title: "Metaverse", status: "planned", items: ["VR integration", "Cross-platform", "DAO governance"] }
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-4">
            SCAM Mercenaries Setup
          </h1>
          <p className="text-zinc-400 text-lg">
            Configure your resistance operations and bot integrations
          </p>
        </div>

        <Tabs defaultValue="telegram" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-zinc-900">
            <TabsTrigger value="telegram" className="flex items-center gap-2 data-[state=active]:bg-red-600">
              <Bot className="h-4 w-4" />
              Telegram Bot
            </TabsTrigger>
            <TabsTrigger value="config" className="flex items-center gap-2 data-[state=active]:bg-red-600">
              <Settings className="h-4 w-4" />
              Configuration
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2 data-[state=active]:bg-red-600">
              <Users className="h-4 w-4" />
              Team
            </TabsTrigger>
            <TabsTrigger value="roadmap" className="flex items-center gap-2 data-[state=active]:bg-red-600">
              <Zap className="h-4 w-4" />
              Roadmap
            </TabsTrigger>
          </TabsList>

          <TabsContent value="telegram" className="space-y-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-red-400" />
                  Telegram Bot Setup
                </CardTitle>
                <CardDescription>
                  Configure your Telegram bot for community management and game notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Bot Token</label>
                  <Input
                    type="password"
                    placeholder="Enter your Telegram bot token"
                    value={botToken}
                    onChange={(e) => setBotToken(e.target.value)}
                    className="bg-zinc-800 border-zinc-700"
                  />
                  <p className="text-xs text-zinc-500">
                    Get your bot token from @BotFather on Telegram
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Webhook URL (Optional)</label>
                  <Input
                    placeholder="https://your-domain.com/api/telegram-webhook"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    className="bg-zinc-800 border-zinc-700"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    onClick={handleSetupBot}
                    disabled={!botToken || isSettingUp}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    {isSettingUp ? "Setting up..." : "Setup Bot"}
                  </Button>

                  {setupStatus === "success" && (
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">Bot configured successfully!</span>
                    </div>
                  )}

                  {setupStatus === "error" && (
                    <div className="flex items-center gap-2 text-red-400">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm">Setup failed. Check your token.</span>
                    </div>
                  )}
                </div>

                <div className="mt-6 p-4 bg-zinc-800 rounded-lg">
                  <h4 className="font-semibold mb-2">Bot Commands</h4>
                  <div className="space-y-1 text-sm text-zinc-300">
                    <div><code>/start</code> - Initialize bot and get welcome message</div>
                    <div><code>/status</code> - Check your mercenary status</div>
                    <div><code>/missions</code> - View available missions</div>
                    <div><code>/weapons</code> - Browse weapon arsenal</div>
                    <div><code>/territory</code> - Check territory control</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="config" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle>Game Settings</CardTitle>
                  <CardDescription>Configure core game parameters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mission Difficulty</label>
                    <select className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded">
                      <option>Normal</option>
                      <option>Hard</option>
                      <option>Extreme</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Auto-Save Interval</label>
                    <select className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded">
                      <option>5 minutes</option>
                      <option>10 minutes</option>
                      <option>30 minutes</option>
                    </select>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Manage alert preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Mission Alerts</span>
                    <input type="checkbox" defaultChecked className="toggle" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Territory Updates</span>
                    <input type="checkbox" defaultChecked className="toggle" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Weapon Upgrades</span>
                    <input type="checkbox" className="toggle" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Development Team</CardTitle>
                <CardDescription>Meet the resistance leaders building SCAM Mercenaries</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-red-400">CEO</h3>
                    <p className="text-sm text-zinc-300">Alex Chen</p>
                    <p className="text-xs text-zinc-500 mt-2">Visionary leader with 10+ years in blockchain</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Settings className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-red-400">CTO</h3>
                    <p className="text-sm text-zinc-300">Sarah Kim</p>
                    <p className="text-xs text-zinc-500 mt-2">Former Google engineer, AI/ML specialist</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-red-400">Designer</h3>
                    <p className="text-sm text-zinc-300">Marcus Rodriguez</p>
                    <p className="text-xs text-zinc-500 mt-2">Award-winning game designer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="roadmap" className="space-y-6">
            <div className="space-y-6">
              {roadmap.map((phase, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        {phase.phase}: {phase.title}
                      </CardTitle>
                      <Badge 
                        className={
                          phase.status === "completed" ? "bg-green-600" :
                          phase.status === "in-progress" ? "bg-yellow-600" :
                          "bg-zinc-600"
                        }
                      >
                        {phase.status.replace("-", " ")}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <a href="/whitepaper" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Read Full Documentation
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
