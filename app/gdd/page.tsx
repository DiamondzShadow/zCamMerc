import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Users, Target, Zap, Shield, Sword, Globe, Trophy, Coins } from 'lucide-react'

export default function GDDPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            SCAM MERCENARIES
          </h1>
          <p className="text-xl text-gray-300 mb-6">Game Design Document</p>
          <div className="flex justify-center gap-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2">Version 2.0</Badge>
            <Badge variant="outline" className="px-4 py-2">Updated January 2025</Badge>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-8 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="team">Core Team</TabsTrigger>
            <TabsTrigger value="gameplay">Gameplay</TabsTrigger>
            <TabsTrigger value="story">Story</TabsTrigger>
            <TabsTrigger value="characters">Characters</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            <TabsTrigger value="economy">Economy</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyan-400">
                  <Globe className="h-6 w-6" />
                  Game Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-lg">
                  SCAM Mercenaries is a revolutionary cyberpunk strategy game that combines tactical combat, 
                  territory management, and NFT integration in a dystopian digital world.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">Core Pillars</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-cyan-400" />
                        Strategic Territory Control
                      </li>
                      <li className="flex items-center gap-2">
                        <Sword className="h-4 w-4 text-cyan-400" />
                        Dynamic Combat System
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-cyan-400" />
                        AI-Powered Missions
                      </li>
                      <li className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-cyan-400" />
                        NFT Character Evolution
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">Target Audience</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Strategy game enthusiasts</li>
                      <li>• Cyberpunk/Sci-fi fans</li>
                      <li>• NFT collectors and traders</li>
                      <li>• Competitive gamers</li>
                      <li>• Blockchain gaming community</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Core Team Tab */}
          <TabsContent value="team" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border-cyan-500/30">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-cyan-400">Diamondz Crews</CardTitle>
                  <CardDescription className="text-purple-300">CEO & Visionary Leader</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-gray-300">
                  <p className="mb-4">
                    Visionary leader driving the strategic direction of SCAM Mercenaries. 
                    Expert in blockchain gaming and community building.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">Strategic Planning</Badge>
                    <Badge variant="secondary">Community Leadership</Badge>
                    <Badge variant="secondary">Blockchain Gaming</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-purple-400">Diamondz Shadow</CardTitle>
                  <CardDescription className="text-pink-300">CTO & Technical Architect</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-gray-300">
                  <p className="mb-4">
                    Technical mastermind behind the game's architecture. Specializes in 
                    blockchain integration and scalable game systems.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">Blockchain Development</Badge>
                    <Badge variant="secondary">System Architecture</Badge>
                    <Badge variant="secondary">Smart Contracts</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/30 to-cyan-900/30 border-green-500/30">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-green-400">X Banks</CardTitle>
                  <CardDescription className="text-cyan-300">Mission Designer & Narrative Expert</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-gray-300">
                  <p className="mb-4">
                    Creative force behind the game's missions and storyline. Expert in 
                    narrative design and player engagement systems.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">Mission Design</Badge>
                    <Badge variant="secondary">Narrative Writing</Badge>
                    <Badge variant="secondary">Player Experience</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Gameplay Tab */}
          <TabsContent value="gameplay" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Core Mechanics</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">Territory Control</h4>
                    <p className="text-sm">Players claim and defend territories across the digital world, earning resources and strategic advantages.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">Mission System</h4>
                    <p className="text-sm">AI-generated missions provide endless content with dynamic objectives and rewards.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">Character Progression</h4>
                    <p className="text-sm">Mercenaries evolve through combat, gaining new abilities and transforming into unique NFTs.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-purple-400">Combat System</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Turn-Based Strategy</h4>
                    <p className="text-sm">Tactical combat with positioning, abilities, and environmental factors.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Weapon Mastery</h4>
                    <p className="text-sm">Four weapon classes: Pulse Rifles, Ghost Blades, Disruptors, and LIONSMANE tech.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Team Synergy</h4>
                    <p className="text-sm">Character combinations unlock powerful team abilities and strategies.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Story Tab */}
          <TabsContent value="story" className="space-y-6">
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-purple-400">The Digital Uprising</CardTitle>
                <CardDescription>Year 2087 - The World After the Great Collapse</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  In 2087, the digital and physical worlds have merged into a chaotic landscape where 
                  mega-corporations control reality through advanced AI systems. The SCAM Mercenaries 
                  emerge as elite operatives fighting for freedom in this cyberpunk dystopia.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-3">Key Factions</h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong className="text-purple-400">LIONSMANE Corp:</strong> Dominant tech conglomerate</li>
                      <li><strong className="text-purple-400">The Resistance:</strong> Underground freedom fighters</li>
                      <li><strong className="text-purple-400">Digital Nomads:</strong> Independent hackers</li>
                      <li><strong className="text-purple-400">Corporate Security:</strong> Elite enforcement units</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-3">Major Locations</h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong className="text-purple-400">Neo-Tokyo:</strong> Neon-lit megacity</li>
                      <li><strong className="text-purple-400">Digital Nexus:</strong> Virtual reality hub</li>
                      <li><strong className="text-purple-400">The Undercity:</strong> Hidden resistance base</li>
                      <li><strong className="text-purple-400">Corporate Towers:</strong> LIONSMANE headquarters</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Characters Tab */}
          <TabsContent value="characters" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Carmen', role: 'Hacker', specialty: 'Digital Infiltration', rarity: 'Legendary' },
                { name: 'Kjundith', role: 'Warrior', specialty: 'Close Combat', rarity: 'Epic' },
                { name: 'Neds', role: 'Sniper', specialty: 'Long Range', rarity: 'Rare' },
                { name: 'Summer Limptin', role: 'Medic', specialty: 'Support', rarity: 'Epic' },
              ].map((char) => (
                <Card key={char.name} className="bg-slate-800/50 border-cyan-500/20">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full mx-auto mb-2"></div>
                    <CardTitle className="text-cyan-400 text-lg">{char.name}</CardTitle>
                    <CardDescription className="text-purple-300">{char.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-gray-300 mb-3">{char.specialty}</p>
                    <Badge variant={char.rarity === 'Legendary' ? 'default' : 'secondary'}>
                      {char.rarity}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Technical Tab */}
          <TabsContent value="technical" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-green-500/20">
                <CardHeader>
                  <CardTitle className="text-green-400">Technology Stack</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <div>
                    <h4 className="font-semibold text-cyan-400">Frontend</h4>
                    <p className="text-sm">Next.js 15, React 19, TypeScript, Tailwind CSS</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Backend</h4>
                    <p className="text-sm">Node.js, PostgreSQL, Vercel deployment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">Blockchain</h4>
                    <p className="text-sm">Ethereum, Smart Contracts, NFT integration</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">AI Integration</h4>
                    <p className="text-sm">DeepInfra API, Dynamic mission generation</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-blue-400">Architecture</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <div>
                    <h4 className="font-semibold text-purple-400">Scalability</h4>
                    <p className="text-sm">Microservices architecture for handling thousands of concurrent players</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-400">Security</h4>
                    <p className="text-sm">End-to-end encryption, secure wallet integration</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-400">Performance</h4>
                    <p className="text-sm">Optimized for 60fps gameplay with real-time updates</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Roadmap Tab */}
          <TabsContent value="roadmap" className="space-y-6">
            <div className="space-y-6">
              {[
                { phase: 'Phase 1', title: 'Foundation', progress: 85, status: 'In Progress', items: ['Core gameplay mechanics', 'Character system', 'Basic UI/UX'] },
                { phase: 'Phase 2', title: 'AI Integration', progress: 60, status: 'In Progress', items: ['Mission generator', 'Telegram bot', 'Dynamic content'] },
                { phase: 'Phase 3', title: 'NFT System', progress: 30, status: 'Planning', items: ['Character NFTs', 'Marketplace', 'Trading system'] },
                { phase: 'Phase 4', title: 'Multiplayer', progress: 10, status: 'Future', items: ['PvP battles', 'Guild system', 'Tournaments'] },
              ].map((phase) => (
                <Card key={phase.phase} className="bg-slate-800/50 border-purple-500/20">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-purple-400">{phase.phase}: {phase.title}</CardTitle>
                        <CardDescription>Status: {phase.status}</CardDescription>
                      </div>
                      <Badge variant={phase.status === 'In Progress' ? 'default' : 'secondary'}>
                        {phase.progress}% Complete
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Progress value={phase.progress} className="mb-4" />
                    <ul className="text-sm text-gray-300 space-y-1">
                      {phase.items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Economy Tab */}
          <TabsContent value="economy" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-yellow-400">
                    <Coins className="h-6 w-6" />
                    Token Economy
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">SCAM Token</h4>
                    <p className="text-sm">Primary in-game currency for transactions, upgrades, and rewards.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Earning Mechanisms</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Mission completion rewards</li>
                      <li>• Territory control bonuses</li>
                      <li>• PvP tournament prizes</li>
                      <li>• NFT trading commissions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-400">
                    <Trophy className="h-6 w-6" />
                    NFT Marketplace
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Character NFTs</h4>
                    <p className="text-sm">Unique mercenaries with evolving stats and rare abilities.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Weapon NFTs</h4>
                    <p className="text-sm">Legendary weapons with special effects and upgrade paths.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Territory Deeds</h4>
                    <p className="text-sm">Ownership certificates for prime digital real estate.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
