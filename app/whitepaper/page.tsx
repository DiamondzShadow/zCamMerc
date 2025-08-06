'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Users, Target, Gamepad2, Zap, Shield, Sword, Brain, Globe, Crown, Code, Palette, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Scam Mercenaires Whitepaper
          </h1>
          <p className="text-xl text-gray-300 mb-6">Revolutionizing Gaming Through Blockchain Technology and AI-Powered NFTs</p>
          <div className="flex justify-center gap-4 mb-8">
            <Badge variant="outline" className="text-cyan-400 border-cyan-400">
              Version 3.0
            </Badge>
            <Badge variant="outline" className="text-purple-400 border-purple-400">
              January 2025
            </Badge>
            <Badge variant="outline" className="text-green-400 border-green-400">
              Pre-Launch Phase
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="executive" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="executive">Executive</TabsTrigger>
            <TabsTrigger value="problem">Problem</TabsTrigger>
            <TabsTrigger value="solution">Solution</TabsTrigger>
            <TabsTrigger value="tokenomics">Tokenomics</TabsTrigger>
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>

          {/* Executive Summary */}
          <TabsContent value="executive" className="space-y-6">
            <Card className="bg-slate-800/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-2xl">Executive Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Scam Mercenaires represents a paradigm shift in blockchain gaming, combining immersive cyberpunk 
                  storytelling with cutting-edge AI technology and true digital asset ownership. Built by industry 
                  veterans Diamondz Crews, Diamondz Shadow, and X Banks, our platform creates a living, breathing 
                  digital universe where every decision matters and every asset evolves.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-slate-700/50 p-6 rounded-lg">
                    <h3 className="text-cyan-400 font-semibold text-xl mb-3">Vision</h3>
                    <p className="text-gray-300">
                      To create the most immersive and economically sustainable Web3 gaming ecosystem, 
                      where players truly own their digital destinies.
                    </p>
                  </div>
                  <div className="bg-slate-700/50 p-6 rounded-lg">
                    <h3 className="text-purple-400 font-semibold text-xl mb-3">Mission</h3>
                    <p className="text-gray-300">
                      Revolutionize gaming through AI-powered NFTs, strategic gameplay, and community-driven 
                      governance in a cyberpunk universe.
                    </p>
                  </div>
                  <div className="bg-slate-700/50 p-6 rounded-lg">
                    <h3 className="text-green-400 font-semibold text-xl mb-3">Values</h3>
                    <p className="text-gray-300">
                      Innovation, transparency, community empowerment, and true digital ownership for all players.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 p-6 rounded-lg border border-cyan-500/20">
                  <h3 className="text-white font-semibold text-xl mb-4">Key Highlights</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• AI-powered NFTs with evolving consciousness</li>
                      <li>• Strategic cyberpunk gameplay mechanics</li>
                      <li>• Community-driven governance system</li>
                      <li>• Cross-platform compatibility</li>
                    </ul>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Sustainable dual-token economy</li>
                      <li>• Immersive narrative experiences</li>
                      <li>• Player-owned digital territories</li>
                      <li>• Esports and tournament infrastructure</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Problem Statement */}
          <TabsContent value="problem" className="space-y-6">
            <Card className="bg-slate-800/50 border-red-500/20">
              <CardHeader>
                <CardTitle className="text-red-400 text-2xl">The Problem We're Solving</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  The current gaming industry faces critical challenges that limit player empowerment and 
                  economic participation. Traditional games trap value within closed ecosystems, while 
                  existing Web3 games often sacrifice gameplay quality for tokenomics.
                </p>

                <div className="space-y-6">
                  <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/20">
                    <h3 className="text-red-400 font-semibold text-xl mb-4">Current Industry Issues</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Traditional Gaming</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• No true asset ownership</li>
                          <li>• Centralized control over economies</li>
                          <li>• Limited player agency in development</li>
                          <li>• Value extraction without sharing</li>
                          <li>• Closed ecosystem limitations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-3">Current Web3 Games</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Poor gameplay experiences</li>
                          <li>• Unsustainable tokenomics</li>
                          <li>• Lack of meaningful narratives</li>
                          <li>• High barrier to entry</li>
                          <li>• Limited utility for NFTs</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-700/50 p-6 rounded-lg">
                    <h3 className="text-orange-400 font-semibold text-xl mb-4">Market Opportunity</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">$180B</div>
                        <p className="text-gray-300">Global Gaming Market</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">$25B</div>
                        <p className="text-gray-300">NFT Market Size</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">3.2B</div>
                        <p className="text-gray-300">Global Gamers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Solution */}
          <TabsContent value="solution" className="space-y-6">
            <Card className="bg-slate-800/50 border-green-500/20">
              <CardHeader>
                <CardTitle className="text-green-400 text-2xl">Our Solution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Scam Mercenaires bridges the gap between engaging gameplay and meaningful Web3 integration. 
                  Our platform combines AI-powered NFTs, strategic cyberpunk gameplay, and sustainable economics 
                  to create a truly revolutionary gaming experience.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/20">
                    <h3 className="text-green-400 font-semibold text-xl mb-4">Core Innovation</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <Brain className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                        <div>
                          <strong>AI-Powered NFTs:</strong> Living digital assets that evolve, learn, and develop unique personalities
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Strategic Gameplay:</strong> Deep tactical combat and decision-making systems
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Immersive World:</strong> Rich cyberpunk universe with meaningful player choices
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-blue-400 font-semibold text-xl mb-4">Technical Architecture</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Blockchain Integration:</strong> Polygon for fast, low-cost transactions
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Smart Contracts:</strong> Audited, secure, and upgradeable contract system
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Gamepad2 className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Cross-Platform:</strong> Web, mobile, and desktop compatibility
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="text-white font-semibold text-xl mb-4">Unique Value Propositions</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2">For Players</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• True asset ownership</li>
                        <li>• Engaging gameplay first</li>
                        <li>• Economic participation</li>
                        <li>• Community governance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-purple-400 font-semibold mb-2">For Investors</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Sustainable tokenomics</li>
                        <li>• Growing user base</li>
                        <li>• Multiple revenue streams</li>
                        <li>• Strong team execution</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">For Ecosystem</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Cross-game compatibility</li>
                        <li>• Developer partnerships</li>
                        <li>• Community contributions</li>
                        <li>• Open-source components</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tokenomics */}
          <TabsContent value="tokenomics" className="space-y-6">
            <Card className="bg-slate-800/50 border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-yellow-400 text-2xl">Tokenomics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our dual-token economy balances gameplay utility with long-term value creation. 
                  The G4C and C4C tokens work together to create a sustainable and engaging economic system.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-yellow-900/20 p-6 rounded-lg border border-yellow-500/20">
                    <h3 className="text-yellow-400 font-semibold text-xl mb-4">G4C Token (Utility)</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Primary Uses</h4>
                        <ul className="text-gray-300 space-y-1">
                          <li>• In-game purchases and upgrades</li>
                          <li>• Mission deployment costs</li>
                          <li>• Character enhancement</li>
                          <li>• Marketplace transactions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Earning Methods</h4>
                        <ul className="text-gray-300 space-y-1">
                          <li>• Mission completion rewards</li>
                          <li>• Daily/weekly challenges</li>
                          <li>• Tournament participation</li>
                          <li>• Community contributions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/20">
                    <h3 className="text-purple-400 font-semibold text-xl mb-4">C4C Token (Governance)</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Primary Uses</h4>
                        <ul className="text-gray-300 space-y-1">
                          <li>• Governance voting rights</li>
                          <li>• Premium content access</li>
                          <li>• Rare NFT purchases</li>
                          <li>• Staking rewards</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Conversion</h4>
                        <ul className="text-gray-300 space-y-1">
                          <li>• 100 G4C = 1 C4C</li>
                          <li>• One-way conversion</li>
                          <li>• Deflationary mechanism</li>
                          <li>• Value appreciation driver</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-700/50 p-6 rounded-lg">
                  <h3 className="text-cyan-400 font-semibold text-xl mb-4">Token Distribution</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">40%</div>
                      <p className="text-gray-300">Community & Rewards</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">25%</div>
                      <p className="text-gray-300">Development Team</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-2">20%</div>
                      <p className="text-gray-300">Public Sale</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400 mb-2">15%</div>
                      <p className="text-gray-300">Ecosystem Fund</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Roadmap */}
          <TabsContent value="roadmap" className="space-y-6">
            <Card className="bg-slate-800/50 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-blue-400 text-2xl">Development Roadmap</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our roadmap outlines the strategic development phases for Scam Mercenaires, 
                  from initial launch through full ecosystem maturity.
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-green-400 font-semibold text-xl mb-3">Phase 1: Foundation (Q1 2025)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-gray-300 space-y-2">
                        <li>• Core game mechanics implementation</li>
                        <li>• Basic NFT system launch</li>
                        <li>• Telegram bot deployment</li>
                        <li>• Community building initiatives</li>
                      </ul>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Smart contract audits</li>
                        <li>• Alpha testing program</li>
                        <li>• Initial token distribution</li>
                        <li>• Partnership announcements</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-blue-400 font-semibold text-xl mb-3">Phase 2: Expansion (Q2 2025)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-gray-300 space-y-2">
                        <li>• Advanced mission systems</li>
                        <li>• Multiplayer functionality</li>
                        <li>• NFT marketplace launch</li>
                        <li>• Mobile app development</li>
                      </ul>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Governance system activation</li>
                        <li>• Staking mechanisms</li>
                        <li>• Cross-chain integration</li>
                        <li>• Beta testing expansion</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-purple-400 font-semibold text-xl mb-3">Phase 3: Evolution (Q3 2025)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-gray-300 space-y-2">
                        <li>• AI-powered NFT consciousness</li>
                        <li>• Tournament infrastructure</li>
                        <li>• Guild system implementation</li>
                        <li>• VR compatibility layer</li>
                      </ul>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Advanced analytics dashboard</li>
                        <li>• Creator economy tools</li>
                        <li>• Esports league launch</li>
                        <li>• Global marketing campaign</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-red-400 font-semibold text-xl mb-3">Phase 4: Mastery (Q4 2025)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-gray-300 space-y-2">
                        <li>• Full ecosystem maturity</li>
                        <li>• Metaverse integration</li>
                        <li>• User-generated content tools</li>
                        <li>• Global tournament series</li>
                      </ul>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Enterprise partnerships</li>
                        <li>• Educational initiatives</li>
                        <li>• Sustainability programs</li>
                        <li>• Next-gen technology research</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Team */}
          <TabsContent value="team" className="space-y-6">
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-purple-400 text-2xl flex items-center gap-2">
                  <Users className="h-8 w-8" />
                  Core Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our core team brings together decades of experience in gaming, blockchain technology, 
                  and creative design. Each member is committed to revolutionizing the Web3 gaming landscape.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Crown className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Diamondz Crews</h3>
                    <Badge variant="outline" className="text-purple-400 border-purple-400 mb-4">
                      Chief Executive Officer
                    </Badge>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Visionary leader with 8+ years in digital entertainment and Web3 gaming. 
                      Former blockchain architect at major gaming studios with expertise in DeFi protocols. 
                      Passionate about creating revolutionary gaming experiences that empower players.
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs text-purple-400 border-purple-400 mr-2">
                        Strategic Vision
                      </Badge>
                      <Badge variant="outline" className="text-xs text-cyan-400 border-cyan-400 mr-2">
                        Web3 Expert
                      </Badge>
                      <Badge variant="outline" className="text-xs text-green-400 border-green-400">
                        Gaming Industry
                      </Badge>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Code className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Diamondz Shadow</h3>
                    <Badge variant="outline" className="text-blue-400 border-blue-400 mb-4">
                      Chief Technology Officer
                    </Badge>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      AI researcher and smart contract expert with previous leadership roles at top-tier 
                      blockchain companies. Specializes in scalable game architecture, AI integration, 
                      and cutting-edge blockchain technology implementation.
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs text-blue-400 border-blue-400 mr-2">
                        Blockchain Dev
                      </Badge>
                      <Badge variant="outline" className="text-xs text-green-400 border-green-400 mr-2">
                        AI Integration
                      </Badge>
                      <Badge variant="outline" className="text-xs text-purple-400 border-purple-400">
                        Smart Contracts
                      </Badge>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Palette className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">X Banks</h3>
                    <Badge variant="outline" className="text-green-400 border-green-400 mb-4">
                      Mission Designer
                    </Badge>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Award-winning game designer with expertise in narrative-driven experiences and 
                      cyberpunk aesthetics. Master of creating immersive storylines and challenging 
                      strategic scenarios that keep players engaged for hours.
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs text-green-400 border-green-400 mr-2">
                        Mission Design
                      </Badge>
                      <Badge variant="outline" className="text-xs text-orange-400 border-orange-400 mr-2">
                        Narrative Expert
                      </Badge>
                      <Badge variant="outline" className="text-xs text-red-400 border-red-400">
                        Cyberpunk Lore
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="text-white font-semibold text-xl mb-4">Team Philosophy</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Diamondz Crews, Diamondz Shadow, and X Banks share a unified vision: to create the most 
                    innovative and player-centric Web3 gaming experience ever built. Our combined expertise 
                    spans strategic leadership, technical excellence, and creative storytelling. We believe 
                    in transparency, community empowerment, and building sustainable value for all stakeholders. 
                    Together, we're not just creating a game – we're building the future of digital entertainment.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <h4 className="text-cyan-400 font-semibold mb-2">Innovation First</h4>
                    <p className="text-sm text-gray-300">
                      Constantly pushing boundaries with cutting-edge technology and gameplay mechanics.
                    </p>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <h4 className="text-purple-400 font-semibold mb-2">Community Driven</h4>
                    <p className="text-sm text-gray-300">
                      Building with our community at the center, ensuring player feedback shapes development.
                    </p>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <h4 className="text-green-400 font-semibold mb-2">Quality Excellence</h4>
                    <p className="text-sm text-gray-300">
                      Never compromising on quality, delivering polished experiences that exceed expectations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Download Section */}
        <div className="mt-12 text-center">
          <Card className="bg-slate-800/50 border-cyan-500/20 max-w-md mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Download Full Whitepaper</h3>
              <p className="text-gray-300 mb-6">
                Get the complete technical specifications, detailed tokenomics, and comprehensive roadmap.
              </p>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                <Download className="h-4 w-4 mr-2" />
                Download PDF (Coming Soon)
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
