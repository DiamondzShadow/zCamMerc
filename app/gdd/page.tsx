'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Users, Target, Gamepad2, Zap, Shield, Sword, Brain, Globe, Crown, Code, Palette } from 'lucide-react'

export default function GameDesignDocument() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            SCAM Mercenaries
          </h1>
          <p className="text-xl text-purple-300 mb-2">Game Design Document</p>
          <Badge variant="outline" className="text-purple-400 border-purple-400">
            Version 2.1 - Cyberpunk Revolution
          </Badge>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 bg-slate-800">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="team">Core Team</TabsTrigger>
            <TabsTrigger value="gameplay">Gameplay</TabsTrigger>
            <TabsTrigger value="story">Story</TabsTrigger>
            <TabsTrigger value="characters">Characters</TabsTrigger>
            <TabsTrigger value="missions">Missions</TabsTrigger>
            <TabsTrigger value="economy">Economy</TabsTrigger>
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-slate-800 border-purple-500">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Gamepad2 className="h-5 w-5 text-purple-400" />
                    Game Concept
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">
                    SCAM Mercenaries is a cyberpunk tactical RPG where players lead a team of digital mercenaries 
                    fighting against corporate tyranny in 2087. Combine strategic combat, narrative choices, 
                    and blockchain technology in a dystopian future.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Genre:</span>
                      <span className="text-purple-400">Tactical RPG / Strategy</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Platform:</span>
                      <span className="text-purple-400">Web3 / Mobile / PC</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Target Audience:</span>
                      <span className="text-purple-400">18-35, Strategy Gamers</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-purple-500">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Target className="h-5 w-5 text-purple-400" />
                    Core Pillars
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-purple-400 font-semibold">Strategic Depth</h4>
                      <p className="text-sm">Complex tactical combat with environmental interactions</p>
                    </div>
                    <div>
                      <h4 className="text-purple-400 font-semibold">Narrative Choice</h4>
                      <p className="text-sm">Player decisions shape the story and world state</p>
                    </div>
                    <div>
                      <h4 className="text-purple-400 font-semibold">Digital Ownership</h4>
                      <p className="text-sm">NFT characters and items with real utility</p>
                    </div>
                    <div>
                      <h4 className="text-purple-400 font-semibold">Community Driven</h4>
                      <p className="text-sm">Player-created content and governance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="team">
            <Card className="bg-slate-800 border-purple-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-400" />
                  Core Development Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Crown className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Diamondz Crews</h3>
                    <Badge variant="outline" className="text-purple-400 border-purple-400 mb-3">
                      Chief Executive Officer
                    </Badge>
                    <p className="text-gray-300 text-sm">
                      Visionary leader driving the SCAM Mercenaries revolution. Expert in Web3 gaming 
                      and blockchain integration with 8+ years in digital entertainment.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Code className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Diamondz Shadow</h3>
                    <Badge variant="outline" className="text-blue-400 border-blue-400 mb-3">
                      Chief Technology Officer
                    </Badge>
                    <p className="text-gray-300 text-sm">
                      Technical architect behind the cyberpunk infrastructure. Specializes in 
                      blockchain development, AI integration, and scalable game systems.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Palette className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">X Banks</h3>
                    <Badge variant="outline" className="text-green-400 border-green-400 mb-3">
                      Mission Designer
                    </Badge>
                    <p className="text-gray-300 text-sm">
                      Master of cyberpunk narratives and tactical mission design. Creates immersive 
                      storylines and challenging strategic scenarios for mercenary operations.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-slate-700 rounded-lg">
                  <h4 className="text-purple-400 font-semibold mb-2">Team Philosophy</h4>
                  <p className="text-gray-300 text-sm">
                    Our core team combines decades of experience in gaming, blockchain technology, and 
                    narrative design. We're committed to creating a cyberpunk universe that empowers 
                    players through strategic gameplay, meaningful choices, and true digital ownership.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gameplay">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-slate-800 border-purple-500">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Sword className="h-5 w-5 text-purple-400" />
                    Combat System
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-purple-400 font-semibold">Turn-Based Tactical</h4>
                      <p className="text-sm">Grid-based movement with action points system</p>
                    </div>
                    <div>
                      <h4 className="text-purple-400 font-semibold">Environmental Interaction</h4>
                      <p className="text-sm">Hack terminals, destroy cover, manipulate lighting</p>
                    </div>
                    <div>
                      <h4 className="text-purple-400 font-semibold">Cyber Abilities</h4>
                      <p className="text-sm">Digital warfare, neural hacking, data manipulation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-purple-500">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-400" />
                    Character Progression
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-purple-400 font-semibold">Skill Trees</h4>
                      <p className="text-sm">Combat, Hacking, Stealth, Leadership specializations</p>
                    </div>
                    <div>
                      <h4 className="text-purple-400 font-semibold">Cybernetic Upgrades</h4>
                      <p className="text-sm">Enhance abilities with implants and modifications</p>
                    </div>
                    <div>
                      <h4 className="text-purple-400 font-semibold">Equipment Mastery</h4>
                      <p className="text-sm">Weapon proficiency and gear optimization</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="story">
            <Card className="bg-slate-800 border-purple-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Globe className="h-5 w-5 text-purple-400" />
                  World & Narrative
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-purple-400 mb-3">Setting: Neo-Earth 2087</h3>
                    <p className="mb-4">
                      Mega-corporations have replaced governments. The digital divide has created two worlds: 
                      the gleaming corporate towers and the underground resistance networks. Players lead 
                      SCAM Mercenaries, elite operatives fighting for digital freedom.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="text-purple-400 font-semibold mb-2">Major Factions</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <span className="text-red-400">Limptin Foundation</span> - Corporate overlords</li>
                        <li>• <span className="text-blue-400">SCAM Mercenaries</span> - Digital resistance</li>
                        <li>• <span className="text-green-400">Neo-Tokyo Syndicate</span> - Criminal network</li>
                        <li>• <span className="text-yellow-400">The Disconnected</span> - Anti-tech purists</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-purple-400 font-semibold mb-2">Key Locations</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <span className="text-cyan-400">Neo-Tokyo</span> - Neon-lit megacity</li>
                        <li>• <span className="text-orange-400">Corporate Towers</span> - Executive fortresses</li>
                        <li>• <span className="text-purple-400">The Underground</span> - Resistance hideouts</li>
                        <li>• <span className="text-pink-400">Digital Realms</span> - Virtual battlegrounds</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="characters">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-slate-800 border-purple-500">
                <CardHeader>
                  <CardTitle className="text-white">Carmen "Ghost" Rodriguez</CardTitle>
                  <Badge variant="outline" className="text-purple-400 border-purple-400 w-fit">
                    Stealth Specialist
                  </Badge>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="text-sm mb-3">
                    Former corporate assassin turned resistance fighter. Master of infiltration and digital warfare.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Combat:</span>
                      <span className="text-red-400">★★★☆☆</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Stealth:</span>
                      <span className="text-purple-400">★★★★★</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hacking:</span>
                      <span className="text-blue-400">★★★★☆</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-purple-500">
                <CardHeader>
                  <CardTitle className="text-white">Marcus "Tank" Chen</CardTitle>
                  <Badge variant="outline" className="text-red-400 border-red-400 w-fit">
                    Heavy Assault
                  </Badge>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="text-sm mb-3">
                    Cybernetically enhanced soldier with military-grade implants. Specializes in frontal assault.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Combat:</span>
                      <span className="text-red-400">★★★★★</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Defense:</span>
                      <span className="text-green-400">★★★★☆</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tech:</span>
                      <span className="text-blue-400">★★☆☆☆</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-purple-500">
                <CardHeader>
                  <CardTitle className="text-white">Zara "Nexus" Kim</CardTitle>
                  <Badge variant="outline" className="text-blue-400 border-blue-400 w-fit">
                    Netrunner
                  </Badge>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="text-sm mb-3">
                    Elite hacker capable of breaching any system. Controls the digital battlefield.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Hacking:</span>
                      <span className="text-blue-400">★★★★★</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Intelligence:</span>
                      <span className="text-purple-400">★★★★☆</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Combat:</span>
                      <span className="text-red-400">★★☆☆☆</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="missions">
            <Card className="bg-slate-800 border-purple-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-400" />
                  Mission Structure
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-3">Mission Types</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-white font-medium">Infiltration</h5>
                        <p className="text-sm">Stealth-based corporate espionage</p>
                      </div>
                      <div>
                        <h5 className="text-white font-medium">Data Heist</h5>
                        <p className="text-sm">Extract valuable information</p>
                      </div>
                      <div>
                        <h5 className="text-white font-medium">Sabotage</h5>
                        <p className="text-sm">Disrupt corporate operations</p>
                      </div>
                      <div>
                        <h5 className="text-white font-medium">Rescue</h5>
                        <p className="text-sm">Extract captured allies</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-3">Difficulty Scaling</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-green-400 font-medium">Rookie (Level 1-5)</h5>
                        <p className="text-sm">Basic security, simple objectives</p>
                      </div>
                      <div>
                        <h5 className="text-yellow-400 font-medium">Veteran (Level 6-15)</h5>
                        <p className="text-sm">Enhanced defenses, multiple objectives</p>
                      </div>
                      <div>
                        <h5 className="text-red-400 font-medium">Elite (Level 16+)</h5>
                        <p className="text-sm">Maximum security, complex scenarios</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="economy">
            <Card className="bg-slate-800 border-purple-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="h-5 w-5 text-purple-400" />
                  Token Economy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-3">G4C Token Utility</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Character upgrades and equipment</li>
                      <li>• Mission deployment costs</li>
                      <li>• Marketplace transactions</li>
                      <li>• Governance voting rights</li>
                      <li>• Tournament entry fees</li>
                      <li>• Premium content access</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-3">Earning Mechanisms</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Mission completion rewards</li>
                      <li>• Tournament prizes</li>
                      <li>• Daily/weekly challenges</li>
                      <li>• NFT trading profits</li>
                      <li>• Community contributions</li>
                      <li>• Referral bonuses</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="roadmap">
            <Card className="bg-slate-800 border-purple-500">
              <CardHeader>
                <CardTitle className="text-white">Development Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="text-green-400 font-semibold">Phase 1: Foundation (Q1 2024)</h4>
                    <ul className="text-gray-300 text-sm mt-2 space-y-1">
                      <li>• Core combat system implementation</li>
                      <li>• Character creation and progression</li>
                      <li>• Basic mission structure</li>
                      <li>• NFT integration framework</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h4 className="text-blue-400 font-semibold">Phase 2: Expansion (Q2 2024)</h4>
                    <ul className="text-gray-300 text-sm mt-2 space-y-1">
                      <li>• Advanced mission types</li>
                      <li>• Multiplayer cooperative mode</li>
                      <li>• Marketplace launch</li>
                      <li>• Community governance system</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-yellow-500 pl-4">
                    <h4 className="text-yellow-400 font-semibold">Phase 3: Evolution (Q3 2024)</h4>
                    <ul className="text-gray-300 text-sm mt-2 space-y-1">
                      <li>• PvP tournament system</li>
                      <li>• Guild mechanics</li>
                      <li>• Advanced AI opponents</li>
                      <li>• Cross-platform integration</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-red-500 pl-4">
                    <h4 className="text-red-400 font-semibold">Phase 4: Mastery (Q4 2024)</h4>
                    <ul className="text-gray-300 text-sm mt-2 space-y-1">
                      <li>• Esports infrastructure</li>
                      <li>• User-generated content tools</li>
                      <li>• Mobile app launch</li>
                      <li>• Global tournament series</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
