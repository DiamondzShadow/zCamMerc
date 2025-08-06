'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Target, Gamepad2, Code, Zap, Shield, Sword, Brain } from 'lucide-react'

export default function GameDesignDocument() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              SCAM Mercenaires
            </h1>
            <p className="text-xl text-zinc-400 mb-6">Game Design Document v2.0</p>
            <Badge className="bg-red-600 hover:bg-red-700 text-lg px-4 py-2">
              The Digital Resistance
            </Badge>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 bg-zinc-900">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="team">Core Team</TabsTrigger>
              <TabsTrigger value="gameplay">Gameplay</TabsTrigger>
              <TabsTrigger value="story">Story</TabsTrigger>
              <TabsTrigger value="characters">Characters</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
              <TabsTrigger value="monetization">Economy</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-red-500" />
                    Project Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-zinc-300 text-lg">
                    SCAM Mercenaires is a revolutionary Web3 gaming experience that combines immersive storytelling, 
                    strategic gameplay, and cutting-edge NFT technology to create a digital resistance movement 
                    against corporate tyranny in the metaverse.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-red-400">Core Pillars</h3>
                      <ul className="space-y-2 text-zinc-300">
                        <li>• Narrative-driven missions with real consequences</li>
                        <li>• Dynamic NFT evolution and transformation</li>
                        <li>• Strategic territory control and resource management</li>
                        <li>• Community-driven resistance movement</li>
                        <li>• AI-powered mission generation</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-red-400">Target Audience</h3>
                      <ul className="space-y-2 text-zinc-300">
                        <li>• Web3 gaming enthusiasts</li>
                        <li>• NFT collectors and traders</li>
                        <li>• Strategy game players</li>
                        <li>• Cyberpunk and sci-fi fans</li>
                        <li>• Community builders and activists</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Core Team Tab */}
            <TabsContent value="team" className="space-y-6">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-red-500" />
                    Core Development Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-red-400 mb-2">Diamondz Crews</h3>
                      <p className="text-zinc-400 mb-3">CEO & Visionary Leader</p>
                      <p className="text-sm text-zinc-300">
                        Mastermind behind the SCAM Mercenaires universe. Leads strategic vision, 
                        narrative development, and community building initiatives.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Code className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-400 mb-2">Diamondz Shadow</h3>
                      <p className="text-zinc-400 mb-3">CTO & Technical Architect</p>
                      <p className="text-sm text-zinc-300">
                        Technical genius responsible for blockchain integration, smart contracts, 
                        and the revolutionary LIONSMANE NFT technology.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Brain className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-green-400 mb-2">X Banks</h3>
                      <p className="text-zinc-400 mb-3">Mission Designer & Narrative Expert</p>
                      <p className="text-sm text-zinc-300">
                        Creative force behind mission design, character development, and the 
                        immersive storylines that drive the resistance movement.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Gameplay Tab */}
            <TabsContent value="gameplay" className="space-y-6">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gamepad2 className="h-6 w-6 text-red-500" />
                    Core Gameplay Mechanics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-red-400">Mission System</h3>
                      <ul className="space-y-2 text-zinc-300">
                        <li>• AI-generated dynamic missions</li>
                        <li>• Multiple difficulty levels and approaches</li>
                        <li>• Real-time consequences and branching narratives</li>
                        <li>• Team-based cooperative missions</li>
                        <li>• Solo infiltration challenges</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-red-400">Character Progression</h3>
                      <ul className="space-y-2 text-zinc-300">
                        <li>• Skill-based advancement system</li>
                        <li>• Specialization paths (Hacker, Infiltrator, Combat)</li>
                        <li>• Equipment and weapon upgrades</li>
                        <li>• Reputation system with factions</li>
                        <li>• Achievement and badge collection</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-red-400">Territory Control</h3>
                    <p className="text-zinc-300 mb-4">
                      Players can claim and defend territories across the global map, establishing safe houses, 
                      resource nodes, and strategic outposts for the resistance movement.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-zinc-800 p-4 rounded-lg text-center">
                        <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                        <p className="text-sm">Defense</p>
                      </div>
                      <div className="bg-zinc-800 p-4 rounded-lg text-center">
                        <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                        <p className="text-sm">Resources</p>
                      </div>
                      <div className="bg-zinc-800 p-4 rounded-lg text-center">
                        <Users className="h-8 w-8 text-green-400 mx-auto mb-2" />
                        <p className="text-sm">Alliances</p>
                      </div>
                      <div className="bg-zinc-800 p-4 rounded-lg text-center">
                        <Sword className="h-8 w-8 text-red-400 mx-auto mb-2" />
                        <p className="text-sm">Combat</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Story Tab */}
            <TabsContent value="story" className="space-y-6">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle>The Resistance Saga</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="prose prose-invert max-w-none">
                    <h3 className="text-red-400">The Limptin Foundation's Rise</h3>
                    <p className="text-zinc-300">
                      In 2024, the Limptin Foundation emerged as a seemingly benevolent tech corporation, 
                      promising to revolutionize human connection through advanced metaverse technology. 
                      Led by the ruthless Real Hates, they secretly developed SCAM nanobots - microscopic 
                      devices capable of mind control and behavioral manipulation.
                    </p>
                    
                    <h3 className="text-red-400">The LIONSMANE Discovery</h3>
                    <p className="text-zinc-300">
                      Dr. Nwgeua, a brilliant renewable energy researcher in Johannesburg, accidentally 
                      discovered the antidote to SCAM nanobots while working on sustainable energy solutions. 
                      His research led to the creation of LIONSMANE NFTs - digital entities with the power 
                      to neutralize mind control technology.
                    </p>
                    
                    <h3 className="text-red-400">The Resistance Forms</h3>
                    <p className="text-zinc-300">
                      After Nwgeua's assassination by Foundation agents, his brother Kjundith joined forces 
                      with Summer Limptin (a reformed family member), Carmen (a reformed scammer), and 
                      Neds (an Australian oil rig mechanic) to form the SCAM Mercenaires - a global 
                      resistance movement dedicated to exposing the truth and liberating humanity.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Characters Tab */}
            <TabsContent value="characters" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-green-400">Heroes of the Resistance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-bold">Summer Limptin</h4>
                        <p className="text-sm text-zinc-400">Reformed family member with hybrid weapon codes</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-bold">Kjundith</h4>
                        <p className="text-sm text-zinc-400">Brother of Dr. Nwgeua, NFT research specialist</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-bold">Carmen</h4>
                        <p className="text-sm text-zinc-400">Reformed scammer, infiltration expert</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-bold">Neds</h4>
                        <p className="text-sm text-zinc-400">Oil rig mechanic, surveillance specialist</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-red-400">Forces of Oppression</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-bold">Real Hates</h4>
                        <p className="text-sm text-zinc-400">Ruthless leader of the Limptin Foundation</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-bold">General Ramon</h4>
                        <p className="text-sm text-zinc-400">Assimilated by self-aware LIONSMANE NFT</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Technical Tab */}
            <TabsContent value="technical" className="space-y-6">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-6 w-6 text-red-500" />
                    Technical Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-red-400">Frontend Stack</h3>
                      <ul className="space-y-2 text-zinc-300">
                        <li>• Next.js 14 with App Router</li>
                        <li>• TypeScript for type safety</li>
                        <li>• Tailwind CSS for styling</li>
                        <li>• Shadcn/ui component library</li>
                        <li>• Framer Motion for animations</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-red-400">Backend & Blockchain</h3>
                      <ul className="space-y-2 text-zinc-300">
                        <li>• Vercel for hosting and deployment</li>
                        <li>• Neon PostgreSQL database</li>
                        <li>• Ethereum blockchain integration</li>
                        <li>• IPFS for NFT metadata storage</li>
                        <li>• Web3.js for blockchain interactions</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-red-400">AI Integration</h3>
                    <ul className="space-y-2 text-zinc-300">
                      <li>• DeepInfra API for mission generation</li>
                      <li>• Telegram Bot API for community interaction</li>
                      <li>• Dynamic storyline adaptation</li>
                      <li>• Procedural content generation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Roadmap Tab */}
            <TabsContent value="roadmap" className="space-y-6">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle>Development Roadmap</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-bold text-green-400">Phase 1: Foundation (Q1 2024)</h3>
                        <Badge className="bg-green-600">COMPLETED</Badge>
                      </div>
                      <Progress value={100} className="mb-2" />
                      <ul className="text-sm text-zinc-300 space-y-1">
                        <li>✅ Core website and storyline</li>
                        <li>✅ Character system and progression</li>
                        <li>✅ Mission simulator prototype</li>
                        <li>✅ Basic NFT integration</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-bold text-yellow-400">Phase 2: Community (Q2 2024)</h3>
                        <Badge className="bg-yellow-600">IN PROGRESS</Badge>
                      </div>
                      <Progress value={75} className="mb-2" />
                      <ul className="text-sm text-zinc-300 space-y-1">
                        <li>✅ Telegram bot integration</li>
                        <li>✅ AI mission generation</li>
                        <li>🔄 Territory management system</li>
                        <li>⏳ Multiplayer missions</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-bold text-blue-400">Phase 3: Expansion (Q3 2024)</h3>
                        <Badge className="bg-blue-600">PLANNED</Badge>
                      </div>
                      <Progress value={25} className="mb-2" />
                      <ul className="text-sm text-zinc-300 space-y-1">
                        <li>⏳ Advanced NFT transformations</li>
                        <li>⏳ Guild system and alliances</li>
                        <li>⏳ Mobile app development</li>
                        <li>⏳ Marketplace integration</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-bold text-purple-400">Phase 4: Evolution (Q4 2024)</h3>
                        <Badge className="bg-purple-600">FUTURE</Badge>
                      </div>
                      <Progress value={0} className="mb-2" />
                      <ul className="text-sm text-zinc-300 space-y-1">
                        <li>⏳ VR/AR integration</li>
                        <li>⏳ Cross-chain compatibility</li>
                        <li>⏳ DAO governance system</li>
                        <li>⏳ Global tournaments</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Monetization Tab */}
            <TabsContent value="monetization" className="space-y-6">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle>Economic Model</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-red-400">Revenue Streams</h3>
                      <ul className="space-y-2 text-zinc-300">
                        <li>• LIONSMANE NFT sales and royalties</li>
                        <li>• Premium mission packs</li>
                        <li>• Character customization items</li>
                        <li>• Territory expansion licenses</li>
                        <li>• Tournament entry fees</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-red-400">Player Economy</h3>
                      <ul className="space-y-2 text-zinc-300">
                        <li>• Earn tokens through missions</li>
                        <li>• Trade NFTs on marketplace</li>
                        <li>• Stake tokens for territory control</li>
                        <li>• Reward system for community contributions</li>
                        <li>• Scholarship programs for new players</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-red-400">Sustainability Model</h3>
                    <p className="text-zinc-300">
                      Our economic model is designed for long-term sustainability, with 70% of revenue 
                      reinvested into development, 20% allocated to community rewards, and 10% reserved 
                      for team operations. This ensures continuous growth while maintaining fair 
                      distribution of value to all stakeholders.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
