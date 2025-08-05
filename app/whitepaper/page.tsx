"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Download,
  FileText,
  Coins,
  Shield,
  Users,
  Target,
  Calendar,
  ExternalLink,
  Twitter,
  MessageCircle,
} from "lucide-react"

export default function WhitepaperPage() {
  const [activeSection, setActiveSection] = useState("executive")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Scam Mercenaires Whitepaper
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Revolutionizing Gaming Through Blockchain Technology and AI-Powered NFTs
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
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

        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
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
                <CardTitle className="flex items-center gap-2 text-cyan-400">
                  <FileText className="h-6 w-6" />
                  Executive Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Scam Mercenaires represents a paradigm shift in blockchain gaming, combining immersive cyberpunk
                  storytelling with cutting-edge NFT technology and decentralized finance mechanisms. Our platform
                  creates a sustainable gaming ecosystem where players truly own their digital assets and can earn real
                  value through strategic gameplay.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 p-4 rounded-lg border border-cyan-500/20">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">$50M+</div>
                    <div className="text-sm text-gray-300">Target Market Cap</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-4 rounded-lg border border-purple-500/20">
                    <div className="text-2xl font-bold text-purple-400 mb-1">100K+</div>
                    <div className="text-sm text-gray-300">Expected Players Y1</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-4 rounded-lg border border-green-500/20">
                    <div className="text-2xl font-bold text-green-400 mb-1">10K</div>
                    <div className="text-sm text-gray-300">Genesis NFTs</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 p-4 rounded-lg border border-orange-500/20">
                    <div className="text-2xl font-bold text-orange-400 mb-1">Q2 2025</div>
                    <div className="text-sm text-gray-300">Beta Launch</div>
                  </div>
                </div>

                <div className="bg-slate-700/50 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-400 mb-4">Key Value Propositions</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>True ownership of in-game assets through NFTs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Play-to-earn mechanics with sustainable tokenomics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>AI-powered dynamic content generation</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Cross-platform interoperability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Community-driven governance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Immersive cyberpunk narrative</span>
                      </li>
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
                <CardTitle className="flex items-center gap-2 text-red-400">
                  <Target className="h-6 w-6" />
                  Market Problems We Solve
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-400 mb-2">Lack of True Asset Ownership</h4>
                    <p className="text-gray-300 text-sm">
                      Traditional gaming platforms retain full control over player assets, which can be lost, devalued,
                      or removed at any time without player consent.
                    </p>
                  </div>

                  <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-400 mb-2">Unsustainable Play-to-Earn Models</h4>
                    <p className="text-gray-300 text-sm">
                      Most blockchain games rely on unsustainable token inflation and lack engaging gameplay, leading to
                      economic collapse and player exodus.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-400 mb-2">Limited Interoperability</h4>
                    <p className="text-gray-300 text-sm">
                      Gaming assets are typically locked within single ecosystems, preventing cross-game utility and
                      reducing long-term value.
                    </p>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-400 mb-2">Shallow Gameplay Experience</h4>
                    <p className="text-gray-300 text-sm">
                      Many blockchain games prioritize tokenomics over gameplay, resulting in repetitive mechanics and
                      poor player retention.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-700/50 p-6 rounded-lg">
                  <h4 className="font-semibold text-cyan-400 mb-4">Market Opportunity</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">$321B</div>
                      <div className="text-sm text-gray-300">Global Gaming Market</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">$25B</div>
                      <div className="text-sm text-gray-300">NFT Market Size</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">3.2B</div>
                      <div className="text-sm text-gray-300">Global Gamers</div>
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
                <CardTitle className="flex items-center gap-2 text-green-400">
                  <Shield className="h-6 w-6" />
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Scam Mercenaires addresses these challenges through a comprehensive platform that combines engaging
                  gameplay with sustainable blockchain economics and true digital ownership.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-400 mb-2">Living NFT Technology</h4>
                      <p className="text-gray-300 text-sm">
                        Our LIONSMANE NFTs evolve and adapt based on player actions, creating unique digital companions
                        with genuine AI consciousness.
                      </p>
                    </div>

                    <div className="bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-cyan-400 mb-2">Sustainable Economy</h4>
                      <p className="text-gray-300 text-sm">
                        Dual-token system with deflationary mechanisms and utility-driven demand ensures long-term
                        economic stability.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-400 mb-2">Immersive Gameplay</h4>
                      <p className="text-gray-300 text-sm">
                        Rich cyberpunk narrative with strategic mission-based gameplay that rewards skill and planning
                        over simple grinding.
                      </p>
                    </div>

                    <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-400 mb-2">Cross-Chain Compatibility</h4>
                      <p className="text-gray-300 text-sm">
                        Assets work across multiple blockchain networks and can be integrated into partner games and
                        platforms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-700/50 p-6 rounded-lg">
                  <h4 className="font-semibold text-cyan-400 mb-4">Technical Innovation</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h5 className="font-semibold text-purple-400 mb-2">AI Integration</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Dynamic content generation</li>
                        <li>• Adaptive difficulty scaling</li>
                        <li>• Intelligent NPC behavior</li>
                        <li>• Personalized experiences</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-400 mb-2">Blockchain Tech</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Layer 2 scaling solutions</li>
                        <li>• Smart contract automation</li>
                        <li>• Decentralized governance</li>
                        <li>• Cross-chain bridges</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-orange-400 mb-2">Security</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Multi-signature wallets</li>
                        <li>• Audited smart contracts</li>
                        <li>• Decentralized storage</li>
                        <li>• Anti-cheat systems</li>
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
                <CardTitle className="flex items-center gap-2 text-yellow-400">
                  <Coins className="h-6 w-6" />
                  Tokenomics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-700/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-cyan-400 mb-4">G4C Token (Utility)</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Total Supply:</span>
                        <span className="text-cyan-400 font-semibold">1,000,000,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Initial Price:</span>
                        <span className="text-cyan-400 font-semibold">$0.01</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Burn Rate:</span>
                        <span className="text-cyan-400 font-semibold">2% per transaction</span>
                      </div>
                    </div>

                    <h5 className="font-semibold text-purple-400 mt-4 mb-2">Use Cases:</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Equipment upgrades and purchases</li>
                      <li>• Mission entry fees</li>
                      <li>• Territory maintenance costs</li>
                      <li>• NFT enhancement materials</li>
                      <li>• Marketplace transaction fees</li>
                    </ul>
                  </div>

                  <div className="bg-slate-700/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-purple-400 mb-4">C4C Token (Governance)</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Total Supply:</span>
                        <span className="text-purple-400 font-semibold">10,000,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Conversion Rate:</span>
                        <span className="text-purple-400 font-semibold">100 G4C = 1 C4C</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Staking APY:</span>
                        <span className="text-purple-400 font-semibold">15-25%</span>
                      </div>
                    </div>

                    <h5 className="font-semibold text-green-400 mt-4 mb-2">Use Cases:</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Governance voting rights</li>
                      <li>• Premium NFT purchases</li>
                      <li>• Exclusive mission access</li>
                      <li>• Staking rewards</li>
                      <li>• Partnership benefits</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-700/50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-400 mb-4">Token Distribution</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Play-to-Earn Rewards</span>
                        <span className="text-green-400 font-semibold">40%</span>
                      </div>
                      <Progress value={40} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Development Team</span>
                        <span className="text-blue-400 font-semibold">20%</span>
                      </div>
                      <Progress value={20} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Marketing & Partnerships</span>
                        <span className="text-purple-400 font-semibold">15%</span>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Community Treasury</span>
                        <span className="text-orange-400 font-semibold">15%</span>
                      </div>
                      <Progress value={15} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Liquidity Pool</span>
                        <span className="text-cyan-400 font-semibold">10%</span>
                      </div>
                      <Progress value={10} className="h-2" />
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
                <CardTitle className="flex items-center gap-2 text-blue-400">
                  <Calendar className="h-6 w-6" />
                  Development Roadmap
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-transparent"></div>

                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-green-400">Q1 2025 - Foundation</h4>
                          <Badge className="bg-green-500/20 text-green-400">Completed</Badge>
                        </div>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Core team assembly and funding</li>
                          <li>• Smart contract development</li>
                          <li>• Initial NFT collection design</li>
                          <li>• Community building and social media presence</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-blue-400">Q2 2025 - Beta Launch</h4>
                          <Badge className="bg-blue-500/20 text-blue-400">In Progress</Badge>
                        </div>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Genesis NFT mint (10,000 pieces)</li>
                          <li>• Beta version release with core missions</li>
                          <li>• Token launch and initial DEX listing</li>
                          <li>• Partnership announcements</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 bg-slate-700 rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-purple-400">Q3 2025 - Expansion</h4>
                          <Badge variant="outline" className="text-purple-400 border-purple-400">
                            Planned
                          </Badge>
                        </div>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Full game launch with all regions</li>
                          <li>• Advanced AI features implementation</li>
                          <li>• Mobile app release</li>
                          <li>• Major exchange listings</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 bg-slate-700 rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-orange-400">Q4 2025 - Ecosystem</h4>
                          <Badge variant="outline" className="text-orange-400 border-orange-400">
                            Future
                          </Badge>
                        </div>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Cross-game interoperability</li>
                          <li>• DAO governance implementation</li>
                          <li>• Metaverse integration</li>
                          <li>• Global tournament system</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Team */}
          <TabsContent value="team" className="space-y-6">
            <Card className="bg-slate-800/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyan-400">
                  <Users className="h-6 w-6" />
                  Core Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">JS</span>
                    </div>
                    <h4 className="font-semibold text-cyan-400 mb-1">John Smith</h4>
                    <p className="text-sm text-purple-400 mb-3">CEO & Founder</p>
                    <p className="text-xs text-gray-300">
                      Former blockchain architect at major gaming studio with 10+ years experience in game development
                      and DeFi protocols.
                    </p>
                  </div>

                  <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">AL</span>
                    </div>
                    <h4 className="font-semibold text-purple-400 mb-1">Alice Lee</h4>
                    <p className="text-sm text-green-400 mb-3">CTO</p>
                    <p className="text-xs text-gray-300">
                      AI researcher and smart contract expert, previously led development teams at top-tier blockchain
                      companies.
                    </p>
                  </div>

                  <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">MR</span>
                    </div>
                    <h4 className="font-semibold text-green-400 mb-1">Mike Rodriguez</h4>
                    <p className="text-sm text-orange-400 mb-3">Creative Director</p>
                    <p className="text-xs text-gray-300">
                      Award-winning game designer with expertise in narrative-driven experiences and cyberpunk
                      aesthetics.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-700/50 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-400 mb-4">Advisory Board</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-cyan-400 mb-2">Blockchain Advisors</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Former Ethereum Foundation members</li>
                        <li>• DeFi protocol founders</li>
                        <li>• NFT marketplace executives</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-400 mb-2">Gaming Industry Veterans</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• AAA game studio executives</li>
                        <li>• Esports tournament organizers</li>
                        <li>• Gaming influencers and streamers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-yellow-400">Legal Disclaimer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 leading-relaxed">
                  This whitepaper is for informational purposes only and does not constitute investment advice,
                  financial advice, trading advice, or any other sort of advice. The information contained herein is
                  subject to change without notice. Scam Mercenaires makes no representations or warranties regarding
                  the accuracy or completeness of the information provided. Potential participants should conduct their
                  own research and consult with financial advisors before making any investment decisions.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-12 text-center space-y-6">
          <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Join the Revolution</h3>
              <p className="text-gray-300 mb-6">
                Be part of the future of gaming. Download our complete whitepaper and join our community to stay updated
                on the latest developments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                  <Download className="h-4 w-4 mr-2" />
                  Download Full Whitepaper
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-transparent"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Pitch Deck
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
              <Twitter className="h-4 w-4 mr-2" />
              Follow on Twitter
            </Button>
            <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
              <MessageCircle className="h-4 w-4 mr-2" />
              Join Discord
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
