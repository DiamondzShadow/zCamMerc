"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Layers,
  GitBranch,
  Clock,
  Users,
  Briefcase,
  Shield,
  Cpu,
  Zap,
  Crosshair,
  Map,
  Shuffle,
  AlertTriangle,
  Heart,
  Hourglass,
} from "lucide-react"
import Image from "next/image"

export default function MissionSystemShowcase() {
  const [selectedMissionType, setSelectedMissionType] = useState<string>("adaptive")

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Dynamic Mission System</h1>
        <p className="text-zinc-400 text-lg mb-8">
          Missions in the SCAM Mercenaires universe are multidimensional experiences that adapt to your choices,
          faction, and playstyle. Each mission impacts both timelines and creates ripples through generations.
        </p>
      </div>

      <Tabs defaultValue="structure" className="mb-12">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="structure" className="data-[state=active]:bg-red-600">
            <Layers className="mr-2 h-4 w-4" /> Mission Structure
          </TabsTrigger>
          <TabsTrigger value="types" className="data-[state=active]:bg-red-600">
            <Briefcase className="mr-2 h-4 w-4" /> Mission Types
          </TabsTrigger>
          <TabsTrigger value="timeline" className="data-[state=active]:bg-red-600">
            <Clock className="mr-2 h-4 w-4" /> Timeline Impact
          </TabsTrigger>
          <TabsTrigger value="factions" className="data-[state=active]:bg-red-600">
            <Users className="mr-2 h-4 w-4" /> Faction Variations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="structure">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Multi-Layered Mission Structure</h2>
              <p className="text-zinc-300 mb-6">
                Gone are the days of linear mission objectives. Each mission in SCAM Mercenaires features a dynamic,
                multi-layered structure that adapts to your choices and playstyle.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <GitBranch className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Branching Pathways</h3>
                    <p className="text-zinc-400">
                      Your decisions during missions open new paths and close others, creating a unique experience each
                      time you play.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Layers className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Depth Levels</h3>
                    <p className="text-zinc-400">
                      Each mission has surface objectives, but digging deeper reveals hidden layers with greater rewards
                      and timeline consequences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Time-Sensitive Elements</h3>
                    <p className="text-zinc-400">
                      Real-time events and time-limited objectives create tension and force strategic decisions under
                      pressure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image src="/mission-structure.png" alt="Mission Structure Diagram" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-bold mb-2">Branching Mission Paths</h4>
                <p className="text-zinc-400">Each decision creates a unique mission experience</p>
              </div>
            </div>
          </div>

          <Card className="bg-zinc-900 border-zinc-800 mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Mission Depth Mechanics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-red-500" /> Surface Layer
                  </h4>
                  <p className="text-zinc-400 text-sm mb-3">
                    The basic mission objectives visible to all players. Completing only this layer provides minimal
                    rewards and timeline impact.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Basic Rewards</Badge>
                    <Badge variant="outline">Minimal Impact</Badge>
                    <Badge variant="outline">Standard Difficulty</Badge>
                  </div>
                </div>

                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Cpu className="mr-2 h-5 w-5 text-red-500" /> Hidden Layer
                  </h4>
                  <p className="text-zinc-400 text-sm mb-3">
                    Discovered through exploration and investigation. Contains secondary objectives that enhance rewards
                    and provide deeper story elements.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Enhanced Rewards</Badge>
                    <Badge variant="outline">Moderate Impact</Badge>
                    <Badge variant="outline">Increased Difficulty</Badge>
                  </div>
                </div>

                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-red-500" /> Core Layer
                  </h4>
                  <p className="text-zinc-400 text-sm mb-3">
                    The deepest mission layer, accessible only through specific choices and discoveries. Dramatically
                    affects the timeline and provides unique rewards.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Unique Rewards</Badge>
                    <Badge variant="outline">Major Impact</Badge>
                    <Badge variant="outline">Expert Difficulty</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Adaptive Difficulty System</h3>
                <p className="text-zinc-400 mb-4">
                  Missions dynamically adjust their difficulty based on your performance, skills, and equipment,
                  ensuring a consistently challenging experience.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Player Skill Level</span>
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-zinc-700"></div>
                      <div className="h-2 w-2 rounded-full bg-zinc-700"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Equipment Quality</span>
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-zinc-700"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Mission Complexity</span>
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Dynamic World Events</h3>
                <p className="text-zinc-400 mb-4">
                  Missions don't exist in isolation. The world around you continues to evolve, with events that can
                  interrupt or enhance your mission in unexpected ways.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm">Faction Interference</h4>
                      <p className="text-xs text-zinc-400">Rival factions may disrupt your mission objectives</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shuffle className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm">Environmental Changes</h4>
                      <p className="text-xs text-zinc-400">
                        Weather, time of day, and other factors affect mission parameters
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Hourglass className="h-5 w-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm">Timeline Ripples</h4>
                      <p className="text-xs text-zinc-400">
                        Actions from other players can create ripple effects in your mission
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="types">
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 mb-6">
              <Button
                variant={selectedMissionType === "adaptive" ? "default" : "outline"}
                onClick={() => setSelectedMissionType("adaptive")}
                className={selectedMissionType === "adaptive" ? "bg-red-600 hover:bg-red-700" : ""}
              >
                <Shuffle className="mr-2 h-4 w-4" /> Adaptive Missions
              </Button>
              <Button
                variant={selectedMissionType === "infiltration" ? "default" : "outline"}
                onClick={() => setSelectedMissionType("infiltration")}
                className={selectedMissionType === "infiltration" ? "bg-red-600 hover:bg-red-700" : ""}
              >
                <Crosshair className="mr-2 h-4 w-4" /> Infiltration
              </Button>
              <Button
                variant={selectedMissionType === "territory" ? "default" : "outline"}
                onClick={() => setSelectedMissionType("territory")}
                className={selectedMissionType === "territory" ? "bg-red-600 hover:bg-red-700" : ""}
              >
                <Map className="mr-2 h-4 w-4" /> Territory Control
              </Button>
              <Button
                variant={selectedMissionType === "narrative" ? "default" : "outline"}
                onClick={() => setSelectedMissionType("narrative")}
                className={selectedMissionType === "narrative" ? "bg-red-600 hover:bg-red-700" : ""}
              >
                <Heart className="mr-2 h-4 w-4" /> Narrative
              </Button>
            </div>

            {selectedMissionType === "adaptive" && (
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold mb-4">Adaptive Missions</h3>
                      <p className="text-zinc-300 mb-6">
                        These missions transform based on your actions, creating a unique experience each time. The
                        mission evolves in real-time, responding to your choices and playstyle.
                      </p>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                          <Shuffle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold">Dynamic Objectives</h4>
                            <p className="text-zinc-400">
                              Mission goals shift based on your approach. Stealth players might unlock covert
                              objectives, while combat-focused players trigger different challenges.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold">Reactive NPCs</h4>
                            <p className="text-zinc-400">
                              Characters remember your actions and respond accordingly. Build relationships or create
                              enemies that persist across missions.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <GitBranch className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold">Consequence System</h4>
                            <p className="text-zinc-400">
                              Your choices have immediate and long-term effects. A quick solution now might create
                              complications in future missions.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-zinc-800 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Example: The Digital Heist</h4>
                        <p className="text-zinc-400 text-sm">
                          What begins as a simple data theft adapts based on your approach. Hack the system directly?
                          The mission evolves into a digital cat-and-mouse game. Social engineer your way in? It becomes
                          a complex web of deception and relationship management.
                        </p>
                      </div>
                    </div>

                    <div className="md:w-1/2 relative rounded-lg overflow-hidden aspect-video md:aspect-auto">
                      <Image src="/adaptive-mission.png" alt="Adaptive Mission Concept" fill className="object-cover" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedMissionType === "infiltration" && (
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold mb-4">Infiltration Missions</h3>
                      <p className="text-zinc-300 mb-6">
                        These missions challenge you to penetrate secure locations, both physical and digital, using a
                        combination of stealth, hacking, social engineering, and combat skills.
                      </p>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                          <Crosshair className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold">Multiple Entry Points</h4>
                            <p className="text-zinc-400">
                              Every facility has numerous ways in, each suited to different skills and playstyles. Find
                              the approach that matches your strengths.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Shield className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold">Adaptive Security</h4>
                            <p className="text-zinc-400">
                              Security systems learn from your tactics. Use the same approach too often, and defenses
                              will evolve specifically to counter you.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold">Time-Sensitive Opportunities</h4>
                            <p className="text-zinc-400">
                              Security shifts change, systems reboot, and special events create windows of opportunity
                              that require precise timing.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-zinc-800 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Example: Limptin Foundation Headquarters</h4>
                        <p className="text-zinc-400 text-sm">
                          Infiltrate the heart of the enemy to extract critical intelligence. Will you go in guns
                          blazing, hack their systems remotely, disguise yourself as staff, or find an inside contact?
                          Each approach reveals different information and timeline consequences.
                        </p>
                      </div>
                    </div>

                    <div className="md:w-1/2 relative rounded-lg overflow-hidden aspect-video md:aspect-auto">
                      <Image
                        src="/infiltration-mission.png"
                        alt="Infiltration Mission Concept"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedMissionType === "territory" && (
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold mb-4">Territory Control Missions</h3>
                      <p className="text-zinc-300 mb-6">
                        These missions focus on claiming, defending, and expanding territorial control in both physical
                        locations and digital domains, with lasting consequences for the world.
                      </p>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                          <Map className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold">Strategic Value System</h4>
                            <p className="text-zinc-400">
                              Territories have different strategic values based on resources, location, and timeline
                              significance. Choose your battles wisely.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold">Population Dynamics</h4>
                            <p className="text-zinc-400">
                              Local populations respond to your control methods. Rule with an iron fist or win hearts
                              and minds—each approach has different benefits and challenges.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Layers className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold">Infrastructure Development</h4>
                            <p className="text-zinc-400">
                              Build and upgrade territory infrastructure to increase its value and defensive
                              capabilities. These improvements persist through the timeline.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-zinc-800 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Example: Neo-Tokyo Nexus Point</h4>
                        <p className="text-zinc-400 text-sm">
                          A critical digital-physical junction in Neo-Tokyo is contested by multiple factions. Claim it
                          through combat, negotiation, or subterfuge, then develop its infrastructure to secure your
                          hold. In 3030, this location becomes a major power center shaped by your actions.
                        </p>
                      </div>
                    </div>

                    <div className="md:w-1/2 relative rounded-lg overflow-hidden aspect-video md:aspect-auto">
                      <Image
                        src="/territory-mission.png"
                        alt="Territory Control Mission Concept"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedMissionType === "narrative" && (
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold mb-4">Narrative Missions</h3>
                      <p className="text-zinc-300 mb-6">
                        These emotionally charged missions focus on character development, relationships, and moral
                        choices that profoundly shape both your character and the timeline.
                      </p>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                          <Heart className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold">Emotional Stakes</h4>
                            <p className="text-zinc-400">
                              Face difficult choices with no clear right answer, testing your character's values and
                              shaping their development.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold">Relationship Dynamics</h4>
                            <p className="text-zinc-400">
                              Build deep connections with NPCs whose fates intertwine with yours. Your choices affect
                              their lives and the lives of their descendants.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Hourglass className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold">Generational Consequences</h4>
                            <p className="text-zinc-400">
                              See how your moral choices echo through time, shaping the values and society of the 3030
                              era in profound ways.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-zinc-800 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Example: The Defector's Dilemma</h4>
                        <p className="text-zinc-400 text-sm">
                          A high-ranking Limptin Foundation scientist wants to defect with valuable research. But is
                          their intention genuine, or is this a trap? Your decision to trust or betray them will have
                          personal consequences and ripple effects through generations.
                        </p>
                      </div>
                    </div>

                    <div className="md:w-1/2 relative rounded-lg overflow-hidden aspect-video md:aspect-auto">
                      <Image
                        src="/narrative-mission.png"
                        alt="Narrative Mission Concept"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Specialized Mission Types</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-red-500">Heist Missions</h4>
                    <p className="text-zinc-400 text-sm mb-2">
                      Complex, multi-phase operations requiring careful planning, team coordination, and adaptability
                      when things inevitably go wrong.
                    </p>
                    <Badge variant="outline">Planning Phase</Badge>
                    <Badge variant="outline" className="ml-2">
                      Execution Phase
                    </Badge>
                    <Badge variant="outline" className="ml-2">
                      Escape Phase
                    </Badge>
                  </div>

                  <div>
                    <h4 className="font-bold text-red-500">Digital Warfare</h4>
                    <p className="text-zinc-400 text-sm mb-2">
                      Battle in the digital realm using hacking skills, LIONSMANE NFTs, and cyber-weapons to control
                      critical systems and data.
                    </p>
                    <Badge variant="outline">System Infiltration</Badge>
                    <Badge variant="outline" className="ml-2">
                      Data Extraction
                    </Badge>
                    <Badge variant="outline" className="ml-2">
                      Counter-Hacking
                    </Badge>
                  </div>

                  <div>
                    <h4 className="font-bold text-red-500">Rescue Operations</h4>
                    <p className="text-zinc-400 text-sm mb-2">
                      Extract allies or valuable assets from enemy control, balancing speed, stealth, and the wellbeing
                      of those you're rescuing.
                    </p>
                    <Badge variant="outline">Intel Gathering</Badge>
                    <Badge variant="outline" className="ml-2">
                      Extraction Planning
                    </Badge>
                    <Badge variant="outline" className="ml-2">
                      Medical Support
                    </Badge>
                  </div>

                  <div>
                    <h4 className="font-bold text-red-500">Investigation Missions</h4>
                    <p className="text-zinc-400 text-sm mb-2">
                      Solve mysteries and uncover conspiracies through evidence collection, witness interviews, and
                      deductive reasoning.
                    </p>
                    <Badge variant="outline">Evidence Analysis</Badge>
                    <Badge variant="outline" className="ml-2">
                      Witness Interrogation
                    </Badge>
                    <Badge variant="outline" className="ml-2">
                      Pattern Recognition
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Unique Gameplay Mechanics</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shuffle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Disguise System</h4>
                      <p className="text-zinc-400 text-sm">
                        Adopt different identities with unique abilities and access levels. Your disguise's
                        effectiveness depends on your behavior and attention to detail.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Faction Reputation</h4>
                      <p className="text-zinc-400 text-sm">
                        Build or damage your standing with various factions through your actions. High reputation
                        unlocks special missions and resources; low reputation triggers bounties and ambushes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Cpu className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">LIONSMANE Integration</h4>
                      <p className="text-zinc-400 text-sm">
                        Deploy your LIONSMANE NFTs as active mission participants with unique abilities that evolve
                        based on how you use them.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Timeline Viewing</h4>
                      <p className="text-zinc-400 text-sm">
                        Glimpse the future consequences of your current mission choices, allowing for strategic
                        decision-making with generational impact.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="timeline">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Dual Timeline Impact</h2>
              <p className="text-zinc-300 mb-6">
                Every mission in SCAM Mercenaires creates ripples through time, with immediate consequences in the 2000s
                era and long-term effects in the 3030 timeline.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Immediate Consequences</h3>
                    <p className="text-zinc-400">
                      Your actions have direct effects on the current timeline, influencing faction relationships,
                      territory control, and resource availability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Hourglass className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Generational Ripples</h3>
                    <p className="text-zinc-400">
                      Decisions echo through generations, shaping the world of 3030 in ways both subtle and profound.
                      The territories you control become the power centers of the future.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Descendant Development</h3>
                    <p className="text-zinc-400">
                      Your character's actions influence the abilities, values, and circumstances of their descendants
                      in the 3030 era.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image src="/timeline-impact.png" alt="Timeline Impact Visualization" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-bold mb-2">Ripples Through Time</h4>
                <p className="text-zinc-400">Actions in 2000s create waves that shape the 3030 world</p>
              </div>
            </div>
          </div>

          <Card className="bg-zinc-900 border-zinc-800 mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Timeline Viewing System</h3>
              <p className="text-zinc-400 mb-6">
                A unique feature of SCAM Mercenaires is the ability to glimpse the future consequences of your actions,
                allowing for strategic decision-making with generational impact.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-red-500" /> Echo Visions
                  </h4>
                  <p className="text-zinc-400 text-sm mb-3">
                    Brief glimpses of the future that appear during critical mission decisions, showing potential
                    outcomes in the 3030 era.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Automatic</Badge>
                    <Badge variant="outline">Limited Detail</Badge>
                    <Badge variant="outline">Always Available</Badge>
                  </div>
                </div>

                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Hourglass className="mr-2 h-5 w-5 text-red-500" /> Timeline Meditation
                  </h4>
                  <p className="text-zinc-400 text-sm mb-3">
                    A deeper connection to the future timeline, allowing you to explore potential consequences in
                    greater detail before making important decisions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Player-Initiated</Badge>
                    <Badge variant="outline">Moderate Detail</Badge>
                    <Badge variant="outline">Limited Uses</Badge>
                  </div>
                </div>

                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-red-500" /> Quantum Observation
                  </h4>
                  <p className="text-zinc-400 text-sm mb-3">
                    The most powerful form of timeline viewing, allowing you to temporarily experience the 3030 era as
                    your descendant to gather critical information.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Rare Ability</Badge>
                    <Badge variant="outline">High Detail</Badge>
                    <Badge variant="outline">Special Missions Only</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Physical Location Evolution</h3>
                <p className="text-zinc-400 mb-4">
                  Physical locations you interact with in the 2000s era evolve over time, with your actions determining
                  their fate in the 3030 timeline.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Map className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Infrastructure Development</h4>
                      <p className="text-zinc-400 text-sm">
                        Territories you develop with advanced infrastructure become technological hubs in 3030.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Defensive Fortification</h4>
                      <p className="text-zinc-400 text-sm">
                        Areas you heavily fortify become secure strongholds or impenetrable ruins, depending on their
                        fate.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Cultural Influence</h4>
                      <p className="text-zinc-400 text-sm">
                        Your governance style shapes the cultural development of regions over generations.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">LIONSMANE Evolution</h3>
                <p className="text-zinc-400 mb-4">
                  Your LIONSMANE NFTs evolve based on how you use them in missions, with their development path
                  determining their form and abilities in 3030.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Cpu className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Consciousness Development</h4>
                      <p className="text-zinc-400 text-sm">
                        How you treat your LIONSMANE NFTs affects their emerging consciousness and values.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Ability Specialization</h4>
                      <p className="text-zinc-400 text-sm">
                        LIONSMANE entities specialize based on their most frequent uses, becoming masters of their
                        domain.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Relationship Formation</h4>
                      <p className="text-zinc-400 text-sm">
                        Bonds formed between LIONSMANE entities and humans persist through generations.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="factions">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Faction-Specific Missions</h2>
              <p className="text-zinc-300 mb-6">
                Each faction in SCAM Mercenaires offers unique mission types, objectives, and rewards that reflect their
                values, strengths, and goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Unique Objectives</h3>
                    <p className="text-zinc-400">
                      Missions are tailored to each faction's specialties and goals, creating distinct gameplay
                      experiences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Specialized Rewards</h3>
                    <p className="text-zinc-400">
                      Each faction offers unique rewards that enhance their particular strengths and playstyles.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GitBranch className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Divergent Outcomes</h3>
                    <p className="text-zinc-400">
                      The same world event generates different mission objectives for each faction, creating a dynamic,
                      interconnected world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image src="/faction-missions.png" alt="Faction-Specific Missions" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-bold mb-2">Faction Specialization</h4>
                <p className="text-zinc-400">Each faction offers a unique gameplay experience</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-emerald-500">Hunter Missions</h3>
                <p className="text-zinc-400 mb-4">
                  Hunters excel at tracking, reconnaissance, and precision operations. Their missions focus on gathering
                  intelligence and eliminating high-value targets.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold">Signature Mission: The Hunt</h4>
                    <p className="text-zinc-400 text-sm">
                      Track down elusive targets through a series of clues and environmental tracking. Success depends
                      on observation skills and patience.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">Special Mechanic: Tracking Vision</h4>
                    <p className="text-zinc-400 text-sm">
                      Hunters can activate a special vision mode that reveals traces left by targets, allowing them to
                      follow trails others can't see.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">Timeline Impact</h4>
                    <p className="text-zinc-400 text-sm">
                      Successful Hunter territories evolve into the Ethereal Sentinels of 3030, guardians of balance
                      between realms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-500">Trapper Missions</h3>
                <p className="text-zinc-400 mb-4">
                  Trappers specialize in area control, defensive systems, and strategic planning. Their missions focus
                  on securing territories and setting up elaborate traps.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold">Signature Mission: The Web</h4>
                    <p className="text-zinc-400 text-sm">
                      Transform a contested area into a deadly trap zone, then lure enemies in. Success depends on
                      strategic placement and timing.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">Special Mechanic: Trap Network</h4>
                    <p className="text-zinc-400 text-sm">
                      Trappers can deploy interconnected trap systems that create cascading effects when triggered,
                      controlling the battlefield.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">Timeline Impact</h4>
                    <p className="text-zinc-400 text-sm">
                      Successful Trapper territories evolve into the Violet Conclave of 3030, shapers of reality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-amber-500">King Missions</h3>
                <p className="text-zinc-400 mb-4">
                  Kings excel at territorial management, resource generation, and leadership. Their missions focus on
                  expanding influence and building infrastructure.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold">Signature Mission: The Domain</h4>
                    <p className="text-zinc-400 text-sm">
                      Transform a newly claimed territory into a thriving domain through infrastructure development and
                      population management.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">Special Mechanic: Royal Decree</h4>
                    <p className="text-zinc-400 text-sm">
                      Kings can issue decrees that temporarily boost resource production, defense, or population loyalty
                      in their territories.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">Timeline Impact</h4>
                    <p className="text-zinc-400 text-sm">
                      Successful King territories evolve into the Terraform Legacy of 3030, masters of reality-shaping.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Faction Rivalry Missions</h3>
                <p className="text-zinc-400 mb-4">
                  Special missions that pit factions against each other in direct competition, with the outcome shaping
                  territorial control and the future timeline.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-red-500">Territory Contests</h4>
                    <p className="text-zinc-400 text-sm">
                      Multiple factions compete to claim or control a valuable territory, with each bringing their
                      unique abilities to the conflict.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-500">Resource Wars</h4>
                    <p className="text-zinc-400 text-sm">
                      Factions battle for control of limited resources, using their specialized skills to outmaneuver
                      rivals.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-500">Influence Campaigns</h4>
                    <p className="text-zinc-400 text-sm">
                      Compete to win the loyalty of neutral populations through different approaches: force, persuasion,
                      or economic incentives.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Faction Alliance Missions</h3>
                <p className="text-zinc-400 mb-4">
                  Special cooperative missions that allow different factions to work together, combining their unique
                  abilities to tackle otherwise impossible challenges.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-red-500">Joint Operations</h4>
                    <p className="text-zinc-400 text-sm">
                      Missions designed for multiple faction types, with specialized roles that leverage each faction's
                      strengths.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-500">Skill Fusion</h4>
                    <p className="text-zinc-400 text-sm">
                      Temporarily gain access to other faction abilities when working together, creating powerful
                      combination effects.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-500">Alliance Territories</h4>
                    <p className="text-zinc-400 text-sm">
                      Create special jointly-controlled territories that evolve into unique hybrid domains in the 3030
                      timeline.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Example: Multi-Dimensional Mission</h2>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">The Digital Nexus Infiltration</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-red-900">High Stakes</Badge>
                <Badge className="bg-blue-900">Multiple Approaches</Badge>
                <Badge className="bg-purple-900">Timeline Critical</Badge>
                <Badge className="bg-amber-900">Faction Specialized</Badge>
              </div>
              <p className="text-zinc-400">
                A critical digital-physical nexus point in Neo-Tokyo has been compromised by the Limptin Foundation.
                This nexus will become a major power center in 3030, and whoever controls it now will shape its
                evolution. Your mission is to infiltrate, secure, and claim this strategic location.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-zinc-800 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Surface Layer</h4>
                <p className="text-zinc-400 text-sm mb-3">
                  Infiltrate the facility and secure the central server room. Basic success ensures the nexus doesn't
                  fall completely under Limptin control.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Standard Rewards</Badge>
                  <Badge variant="outline">Minor Timeline Impact</Badge>
                </div>
              </div>

              <div className="bg-zinc-800 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Hidden Layer</h4>
                <p className="text-zinc-400 text-sm mb-3">
                  Discover the Limptin Foundation's true purpose for the nexus and sabotage their long-term plans by
                  accessing the facility's blueprint database.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Enhanced Rewards</Badge>
                  <Badge variant="outline">Moderate Timeline Impact</Badge>
                </div>
              </div>

              <div className="bg-zinc-800 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Core Layer</h4>
                <p className="text-zinc-400 text-sm mb-3">
                  Uncover a dormant LIONSMANE entity within the nexus system and help it achieve consciousness, creating
                  a powerful ally that will protect the nexus through generations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Unique Rewards</Badge>
                  <Badge variant="outline">Major Timeline Impact</Badge>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold mb-3">Multiple Approaches</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Crosshair className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm">Combat Approach</h5>
                      <p className="text-xs text-zinc-400">
                        Fight your way through security forces, triggering alarms but creating direct access to
                        objectives.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Cpu className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm">Hacking Approach</h5>
                      <p className="text-xs text-zinc-400">
                        Remotely access systems to create security breaches and disable defenses before entering.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm">Social Engineering</h5>
                      <p className="text-xs text-zinc-400">
                        Infiltrate by impersonating staff or creating diversions that allow undetected access.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-3">Faction Specializations</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Badge className="bg-emerald-900">Hunter</Badge>
                    <p className="text-xs text-zinc-400">
                      Can track key personnel to gain access codes and identify the dormant LIONSMANE entity.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="bg-purple-900">Trapper</Badge>
                    <p className="text-xs text-zinc-400">
                      Can set up defensive systems to secure areas and create safe extraction routes.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="bg-amber-900">King</Badge>
                    <p className="text-xs text-zinc-400">
                      Can immediately begin infrastructure development to strengthen the nexus for the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3">Timeline Impact</h4>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <p className="text-zinc-400 text-sm mb-3">
                  In 3030, this nexus becomes a critical junction point between digital and physical reality. Your
                  actions now determine its nature:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-sm text-red-500">Failure Outcome</h5>
                    <p className="text-xs text-zinc-400">
                      The nexus becomes a Limptin stronghold in 3030, a source of corruption and control.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-amber-500">Basic Success</h5>
                    <p className="text-xs text-zinc-400">
                      The nexus becomes a contested zone in 3030, neither fully corrupted nor fully secure.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-emerald-500">Complete Success</h5>
                    <p className="text-xs text-zinc-400">
                      The nexus becomes a sanctuary in 3030, protected by the evolved LIONSMANE entity you awakened.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
