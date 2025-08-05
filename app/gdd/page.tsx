"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Users, Target, Gamepad2, Coins, Zap } from "lucide-react"

export default function GDDPage() {
  const [activeSection, setActiveSection] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Game Design Document
          </h1>
          <p className="text-xl text-gray-300 mb-6">Scam Mercenaires: The Ultimate Cyberpunk NFT Gaming Experience</p>
          <div className="flex justify-center gap-4">
            <Badge variant="outline" className="text-cyan-400 border-cyan-400">
              Version 2.1
            </Badge>
            <Badge variant="outline" className="text-purple-400 border-purple-400">
              Last Updated: January 2025
            </Badge>
          </div>
        </div>

        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-6 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="gameplay">Gameplay</TabsTrigger>
            <TabsTrigger value="characters">Characters</TabsTrigger>
            <TabsTrigger value="missions">Missions</TabsTrigger>
            <TabsTrigger value="economy">Economy</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="bg-slate-800/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyan-400">
                  <FileText className="h-6 w-6" />
                  Executive Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Scam Mercenaires is a revolutionary blockchain-based cyberpunk gaming experience that combines
                  immersive storytelling, strategic gameplay, and cutting-edge NFT technology. Players navigate a
                  dystopian future where AI-powered NFTs hold the key to humanity's survival against corporate tyranny
                  and digital enslavement.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-400 mb-2">Genre</h4>
                    <p className="text-sm text-gray-300">Cyberpunk Strategy RPG</p>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-400 mb-2">Platform</h4>
                    <p className="text-sm text-gray-300">Web3, Mobile, Desktop</p>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-400 mb-2">Target Audience</h4>
                    <p className="text-sm text-gray-300">18-35, Crypto Enthusiasts</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-purple-400">Core Pillars</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-3">Immersive Narrative</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Multi-layered storyline across global locations</li>
                      <li>• Character-driven plot with moral choices</li>
                      <li>• Dynamic story generation based on player actions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-3">Strategic Gameplay</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Mission-based progression system</li>
                      <li>• Territory control and resource management</li>
                      <li>• Real-time decision making with consequences</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-3">NFT Integration</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Living NFTs with AI consciousness</li>
                      <li>• Evolving character abilities and traits</li>
                      <li>• Cross-game asset interoperability</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-3">Economic System</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Dual-token economy (G4C/C4C)</li>
                      <li>• Player-driven marketplace</li>
                      <li>• Staking and governance mechanisms</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gameplay Tab */}
          <TabsContent value="gameplay" className="space-y-6">
            <Card className="bg-slate-800/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyan-400">
                  <Gamepad2 className="h-6 w-6" />
                  Core Gameplay Loop
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="mission-selection">
                    <AccordionTrigger className="text-cyan-400">Mission Selection & Planning</AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      <p className="mb-4">
                        Players choose from available missions based on their character's location, abilities, and
                        current story progression.
                      </p>
                      <ul className="space-y-2">
                        <li>• Browse mission board with difficulty ratings</li>
                        <li>• Analyze risk/reward ratios</li>
                        <li>• Select appropriate equipment and NFT companions</li>
                        <li>• Plan infiltration routes and backup strategies</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="execution">
                    <AccordionTrigger className="text-purple-400">Mission Execution</AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      <p className="mb-4">Real-time decision making during missions with branching outcomes.</p>
                      <ul className="space-y-2">
                        <li>• Navigate through procedurally generated scenarios</li>
                        <li>• Make split-second decisions affecting mission outcome</li>
                        <li>• Utilize character abilities and NFT powers</li>
                        <li>• Adapt to unexpected complications and opportunities</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="progression">
                    <AccordionTrigger className="text-green-400">Character & NFT Progression</AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      <p className="mb-4">Continuous growth and evolution of player assets.</p>
                      <ul className="space-y-2">
                        <li>• Gain experience points and skill upgrades</li>
                        <li>• Evolve NFT companions with new abilities</li>
                        <li>• Unlock new equipment and territories</li>
                        <li>• Build reputation with different factions</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-purple-400">Game Mechanics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-cyan-400">Stealth System</h4>
                    <p className="text-sm text-gray-300">
                      Players must navigate enemy territories using stealth mechanics, avoiding detection while
                      gathering intelligence and completing objectives.
                    </p>

                    <h4 className="font-semibold text-purple-400">Hacking Mini-Games</h4>
                    <p className="text-sm text-gray-300">
                      Interactive hacking sequences that require skill and timing, with different difficulty levels
                      based on target security.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-green-400">Resource Management</h4>
                    <p className="text-sm text-gray-300">
                      Manage energy, equipment durability, and digital currency while balancing risk and reward in
                      mission planning.
                    </p>

                    <h4 className="font-semibold text-orange-400">Social Dynamics</h4>
                    <p className="text-sm text-gray-300">
                      Build relationships with NPCs, form alliances, and navigate complex political situations that
                      affect story outcomes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Characters Tab */}
          <TabsContent value="characters" className="space-y-6">
            <Card className="bg-slate-800/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyan-400">
                  <Users className="h-6 w-6" />
                  Character System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-400 mb-3">Summer Limptin</h4>
                    <p className="text-sm text-gray-300 mb-3">
                      Rebellious heir to the Limptin Foundation, fighting against her family's tyrannical agenda.
                    </p>
                    <div className="space-y-1">
                      <Badge variant="outline" className="text-xs">
                        Stealth Expert
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Social Engineering
                      </Badge>
                    </div>
                  </div>

                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-400 mb-3">Kjundith</h4>
                    <p className="text-sm text-gray-300 mb-3">
                      Brilliant coder seeking to complete his brother's revolutionary LIONSMANE NFT research.
                    </p>
                    <div className="space-y-1">
                      <Badge variant="outline" className="text-xs">
                        Quantum Hacking
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        NFT Creation
                      </Badge>
                    </div>
                  </div>

                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-400 mb-3">Carmen</h4>
                    <p className="text-sm text-gray-300 mb-3">
                      Former scammer turned grey-hat hacker, infiltrating terrorist organizations.
                    </p>
                    <div className="space-y-1">
                      <Badge variant="outline" className="text-xs">
                        Infiltration
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Crypto Analysis
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-purple-400">Character Progression</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="skills">
                    <AccordionTrigger>Skill Trees</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h5 className="font-semibold text-cyan-400 mb-2">Technical</h5>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Hacking Proficiency</li>
                            <li>• Quantum Computing</li>
                            <li>• NFT Manipulation</li>
                            <li>• System Analysis</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-400 mb-2">Combat</h5>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Stealth Operations</li>
                            <li>• Weapon Mastery</li>
                            <li>• Tactical Planning</li>
                            <li>• Defensive Systems</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-400 mb-2">Social</h5>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Negotiation</li>
                            <li>• Information Gathering</li>
                            <li>• Alliance Building</li>
                            <li>• Deception</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="equipment">
                    <AccordionTrigger>Equipment System</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-300 mb-4">
                        Characters can equip various cybernetic enhancements, weapons, and tools that affect their
                        capabilities in missions.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-cyan-400 mb-2">Cybernetic Implants</h5>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Neural Interface Upgrades</li>
                            <li>• Enhanced Reflexes</li>
                            <li>• Memory Expansion</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-400 mb-2">Digital Tools</h5>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Advanced Hacking Suites</li>
                            <li>• Quantum Encryption Keys</li>
                            <li>• AI Companion Modules</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Missions Tab */}
          <TabsContent value="missions" className="space-y-6">
            <Card className="bg-slate-800/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyan-400">
                  <Target className="h-6 w-6" />
                  Mission Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-3">Mission Types</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-700/50 p-4 rounded-lg">
                        <h5 className="font-semibold text-cyan-400 mb-2">Infiltration</h5>
                        <p className="text-sm text-gray-300">
                          Stealth-based missions requiring careful planning and execution to avoid detection.
                        </p>
                      </div>
                      <div className="bg-slate-700/50 p-4 rounded-lg">
                        <h5 className="font-semibold text-purple-400 mb-2">Data Extraction</h5>
                        <p className="text-sm text-gray-300">
                          Hacking and information gathering missions to uncover corporate secrets.
                        </p>
                      </div>
                      <div className="bg-slate-700/50 p-4 rounded-lg">
                        <h5 className="font-semibold text-green-400 mb-2">Territory Control</h5>
                        <p className="text-sm text-gray-300">
                          Strategic missions to claim and defend digital territories and resources.
                        </p>
                      </div>
                      <div className="bg-slate-700/50 p-4 rounded-lg">
                        <h5 className="font-semibold text-orange-400 mb-2">Rescue Operations</h5>
                        <p className="text-sm text-gray-300">
                          Time-sensitive missions to save allies and civilians from corporate oppression.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-400 mb-3">Difficulty Scaling</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-green-500/20 text-green-400">Easy</Badge>
                        <span className="text-sm text-gray-300">Tutorial missions with guided objectives</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-yellow-500/20 text-yellow-400">Medium</Badge>
                        <span className="text-sm text-gray-300">Standard missions with moderate risk/reward</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-red-500/20 text-red-400">Hard</Badge>
                        <span className="text-sm text-gray-300">High-stakes missions requiring advanced skills</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-purple-500/20 text-purple-400">Legendary</Badge>
                        <span className="text-sm text-gray-300">Epic story missions with major consequences</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Economy Tab */}
          <TabsContent value="economy" className="space-y-6">
            <Card className="bg-slate-800/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyan-400">
                  <Coins className="h-6 w-6" />
                  Economic System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-cyan-400">G4C Token (In-Game Currency)</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Earned through mission completion</li>
                      <li>• Used for equipment upgrades</li>
                      <li>• Territory maintenance costs</li>
                      <li>• NFT enhancement materials</li>
                    </ul>

                    <h4 className="font-semibold text-purple-400">C4C Token (Premium Currency)</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Convertible from G4C at 100:1 ratio</li>
                      <li>• Used for rare NFT purchases</li>
                      <li>• Premium mission access</li>
                      <li>• Governance voting rights</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-green-400">NFT Marketplace</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Player-to-player trading</li>
                      <li>• Auction system for rare items</li>
                      <li>• Rental system for temporary use</li>
                      <li>• Cross-game compatibility</li>
                    </ul>

                    <h4 className="font-semibold text-orange-400">Staking Rewards</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Stake NFTs for passive income</li>
                      <li>• Territory control bonuses</li>
                      <li>• Loyalty program benefits</li>
                      <li>• Early access to new content</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Technical Tab */}
          <TabsContent value="technical" className="space-y-6">
            <Card className="bg-slate-800/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyan-400">
                  <Zap className="h-6 w-6" />
                  Technical Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-3">Blockchain Integration</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-700/50 p-4 rounded-lg">
                        <h5 className="font-semibold text-cyan-400 mb-2">Smart Contracts</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• NFT minting and evolution</li>
                          <li>• Token distribution</li>
                          <li>• Marketplace transactions</li>
                          <li>• Governance mechanisms</li>
                        </ul>
                      </div>
                      <div className="bg-slate-700/50 p-4 rounded-lg">
                        <h5 className="font-semibold text-purple-400 mb-2">Layer 2 Solutions</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Polygon for fast transactions</li>
                          <li>• Low gas fees</li>
                          <li>• Scalable gameplay</li>
                          <li>• Cross-chain compatibility</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-400 mb-3">AI Integration</h4>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <p className="text-sm text-gray-300 mb-3">
                        Advanced AI systems power dynamic content generation and NFT consciousness simulation.
                      </p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Procedural mission generation</li>
                        <li>• Dynamic dialogue systems</li>
                        <li>• Adaptive difficulty scaling</li>
                        <li>• Intelligent NPC behavior</li>
                      </ul>
                    </div>
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
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Download Full GDD</h3>
              <p className="text-gray-300 mb-6">
                Get the complete Game Design Document with detailed specifications and technical diagrams.
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
