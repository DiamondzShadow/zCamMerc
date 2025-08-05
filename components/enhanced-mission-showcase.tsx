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
  Shield,
  Cpu,
  Zap,
  Crosshair,
  Map,
  AlertTriangle,
  Hourglass,
  Eye,
  Phone,
  Scissors,
  Wallet,
  Wifi,
  UserCheck,
  Truck,
  Mail,
  FileText,
  Building,
} from "lucide-react"
import Image from "next/image"

export default function EnhancedMissionShowcase() {
  const [selectedMission, setSelectedMission] = useState<string>("mission1")

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Enhanced Mission System</h1>
        <p className="text-zinc-400 text-lg mb-8">
          Experience missions as dynamic, multidimensional challenges that adapt to your choices and playstyle. Each
          decision shapes both your immediate experience and the future timeline.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <Button
          variant={selectedMission === "mission1" ? "default" : "outline"}
          onClick={() => setSelectedMission("mission1")}
          className={selectedMission === "mission1" ? "bg-red-600 hover:bg-red-700" : ""}
        >
          <Phone className="mr-2 h-4 w-4" /> Mission 1: Identity Crisis
        </Button>
        <Button
          variant={selectedMission === "mission2" ? "default" : "outline"}
          onClick={() => setSelectedMission("mission2")}
          className={selectedMission === "mission2" ? "bg-red-600 hover:bg-red-700" : ""}
        >
          <Truck className="mr-2 h-4 w-4" /> Mission 2: Bio-Heist
        </Button>
        <Button
          variant={selectedMission === "mission3" ? "default" : "outline"}
          onClick={() => setSelectedMission("mission3")}
          className={selectedMission === "mission3" ? "bg-red-600 hover:bg-red-700" : ""}
        >
          <Mail className="mr-2 h-4 w-4" /> Mission 3: The Printing Connect
        </Button>
        <Button
          variant={selectedMission === "mission4" ? "default" : "outline"}
          onClick={() => setSelectedMission("mission4")}
          className={selectedMission === "mission4" ? "bg-red-600 hover:bg-red-700" : ""}
        >
          <FileText className="mr-2 h-4 w-4" /> Mission 4: Digital Access
        </Button>
        <Button
          variant={selectedMission === "mission5" ? "default" : "outline"}
          onClick={() => setSelectedMission("mission5")}
          className={selectedMission === "mission5" ? "bg-red-600 hover:bg-red-700" : ""}
        >
          <Building className="mr-2 h-4 w-4" /> Mission 5: The Investment Firm
        </Button>
      </div>

      {selectedMission === "mission1" && (
        <div>
          <Card className="bg-zinc-900 border-zinc-800 mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-red-900">Mission 1</Badge>
                    <Badge className="bg-blue-900">Multiple Locations</Badge>
                    <Badge className="bg-purple-900">Identity Focused</Badge>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Identity Crisis</h2>
                  <p className="text-zinc-300 mb-6">
                    You wake up in an unfamiliar location with fragmented memories. Sirens wail in the distance, closing
                    in on your position. You must establish a new identity and secure passage to New York, where answers
                    about your past—and your future—await.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Map className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold">Location Selection</h3>
                        <p className="text-zinc-400">
                          Choose your starting location from Tokyo, London, Johannesburg, or Rio de Janeiro. Each
                          location provides unique abilities, challenges, and narrative elements.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <GitBranch className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold">Branching Narrative</h3>
                        <p className="text-zinc-400">
                          Your choices determine which aspects of your backstory are revealed and which remain hidden,
                          shaping your character's development and future options.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold">Dynamic Time System</h3>
                        <p className="text-zinc-400">
                          A real-time day/night cycle affects NPC behaviors, available resources, and mission
                          difficulty. Energy management becomes crucial for success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 relative rounded-lg overflow-hidden aspect-video md:aspect-auto">
                  <Image src="/mission1-showcase.png" alt="Mission 1: Identity Crisis" fill className="object-cover" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="structure" className="mb-8">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="structure" className="data-[state=active]:bg-red-600">
                <Layers className="mr-2 h-4 w-4" /> Mission Layers
              </TabsTrigger>
              <TabsTrigger value="approaches" className="data-[state=active]:bg-red-600">
                <GitBranch className="mr-2 h-4 w-4" /> Approach Paths
              </TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-red-600">
                <AlertTriangle className="mr-2 h-4 w-4" /> Dynamic Events
              </TabsTrigger>
              <TabsTrigger value="timeline" className="data-[state=active]:bg-red-600">
                <Hourglass className="mr-2 h-4 w-4" /> Timeline Impact
              </TabsTrigger>
            </TabsList>

            <TabsContent value="structure">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Shield className="mr-2 h-5 w-5 text-red-500" /> Surface Layer
                    </h3>
                    <p className="text-zinc-300 mb-4">
                      The immediate survival challenge: evade authorities, establish a disguise, and find VILEE to
                      secure passage to New York.
                    </p>

                    <h4 className="font-bold mb-2">Core Objectives:</h4>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Evade police pursuit and establish temporary safety</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Gather items to change your appearance</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Find and meet VILEE to secure travel documents</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Set up a basic digital wallet for transactions</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Standard Rewards</Badge>
                      <Badge variant="outline">Basic Equipment</Badge>
                      <Badge variant="outline">Minimal Timeline Impact</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Cpu className="mr-2 h-5 w-5 text-red-500" /> Hidden Layer
                    </h3>
                    <p className="text-zinc-300 mb-4">
                      Discover fragments of your past and uncover a conspiracy involving human trafficking connected to
                      the Limptin Foundation.
                    </p>

                    <h4 className="font-bold mb-2">Unlockable Objectives:</h4>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Recover encrypted memory fragments from your phone</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Infiltrate a local trafficking operation for intelligence</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Establish secure communication with the CAUSE network</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Rescue a potential informant from traffickers</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Enhanced Rewards</Badge>
                      <Badge variant="outline">C4C Token Bonus</Badge>
                      <Badge variant="outline">Moderate Timeline Impact</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Zap className="mr-2 h-5 w-5 text-red-500" /> Core Layer
                    </h3>
                    <p className="text-zinc-300 mb-4">
                      Discover your true identity and connection to the LIONSMANE project, setting the stage for your
                      role in the coming conflict.
                    </p>

                    <h4 className="font-bold mb-2">Secret Objectives:</h4>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Locate and decrypt the BLUEPRINT for the CAUSEDrone</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Recover a fragment of your true identity from secure storage</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Establish contact with a dormant LIONSMANE entity</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Choose your allegiance in the coming conflict</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Premium Rewards</Badge>
                      <Badge variant="outline">LIONSMANE Connection</Badge>
                      <Badge variant="outline">Major Timeline Impact</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="approaches">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Multiple Approach Paths</h3>
                  <p className="text-zinc-300 mb-6">
                    Each mission can be completed through various approaches, catering to different playstyles and
                    character builds. Your chosen approach affects available resources, NPC interactions, and mission
                    outcomes.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center">
                        <Crosshair className="mr-2 h-5 w-5 text-red-500" /> Combat Specialist
                      </h4>
                      <p className="text-zinc-400 text-sm mb-3">
                        Use force to overcome obstacles. Neutralize threats directly and acquire resources through
                        confrontation.
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span>Resource Acquisition</span>
                          <span className="text-green-500">High</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Heat Level</span>
                          <span className="text-red-500">High</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Timeline Impact</span>
                          <span className="text-amber-500">Medium</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center">
                        <Eye className="mr-2 h-5 w-5 text-blue-500" /> Stealth Operative
                      </h4>
                      <p className="text-zinc-400 text-sm mb-3">
                        Move unseen, avoid confrontation, and gather intelligence without alerting enemies to your
                        presence.
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span>Resource Acquisition</span>
                          <span className="text-amber-500">Medium</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Heat Level</span>
                          <span className="text-green-500">Low</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Timeline Impact</span>
                          <span className="text-amber-500">Medium</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center">
                        <Cpu className="mr-2 h-5 w-5 text-purple-500" /> Tech Specialist
                      </h4>
                      <p className="text-zinc-400 text-sm mb-3">
                        Leverage technology to overcome obstacles. Hack systems, control devices remotely, and gather
                        digital intelligence.
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span>Resource Acquisition</span>
                          <span className="text-amber-500">Medium</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Heat Level</span>
                          <span className="text-amber-500">Medium</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Timeline Impact</span>
                          <span className="text-green-500">High</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center">
                        <Users className="mr-2 h-5 w-5 text-green-500" /> Social Engineer
                      </h4>
                      <p className="text-zinc-400 text-sm mb-3">
                        Manipulate others through conversation, disguise, and deception to achieve your goals without
                        direct confrontation.
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span>Resource Acquisition</span>
                          <span className="text-green-500">High</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Heat Level</span>
                          <span className="text-green-500">Low</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Timeline Impact</span>
                          <span className="text-green-500">High</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Location-Specific Approaches</h3>
                  <p className="text-zinc-300 mb-6">
                    Each starting location offers unique opportunities and challenges that favor different approaches
                    and provide distinct narrative experiences.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Tokyo, Japan</h4>
                      <p className="text-zinc-400 text-sm mb-3">
                        A high-tech metropolis with advanced surveillance but excellent digital infrastructure. Tech
                        specialists thrive here.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-purple-900">Tech Advantage</Badge>
                        <Badge variant="outline">Crowded Streets</Badge>
                        <Badge variant="outline">Digital Currency Focus</Badge>
                      </div>
                    </div>

                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">London, UK</h4>
                      <p className="text-zinc-400 text-sm mb-3">
                        A surveillance-heavy city with complex social hierarchies. Social engineers have many
                        opportunities here.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-green-900">Social Advantage</Badge>
                        <Badge variant="outline">CCTV Everywhere</Badge>
                        <Badge variant="outline">Class-Based Access</Badge>
                      </div>
                    </div>

                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Johannesburg, South Africa</h4>
                      <p className="text-zinc-400 text-sm mb-3">
                        A city of stark contrasts with areas of minimal surveillance. Combat and stealth specialists can
                        excel here.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-red-900">Combat Advantage</Badge>
                        <Badge variant="outline">Resource Scarcity</Badge>
                        <Badge variant="outline">Territorial Gangs</Badge>
                      </div>
                    </div>

                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Rio de Janeiro, Brazil</h4>
                      <p className="text-zinc-400 text-sm mb-3">
                        A vibrant city with complex social dynamics and varied terrain. Stealth and social approaches
                        blend well here.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-blue-900">Stealth Advantage</Badge>
                        <Badge variant="outline">Diverse Environments</Badge>
                        <Badge variant="outline">Strong Community Networks</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Dynamic Event System</h3>
                  <p className="text-zinc-300 mb-6">
                    Missions are no longer static experiences. Dynamic events occur based on your actions, time of day,
                    location, and other factors, creating unique challenges each time you play.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center">
                        <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" /> Escalating Police Response
                      </h4>
                      <p className="text-zinc-400 text-sm mb-3">
                        Your heat level dynamically increases based on visibility and actions. Police response escalates
                        from patrol officers to tactical units to special forces.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-amber-500">•</span>
                          <span>
                            Level 1: Regular patrols search the area, easily avoided with basic stealth or disguise
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-amber-500">•</span>
                          <span>Level 2: Tactical units deploy with advanced equipment and search patterns</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-amber-500">•</span>
                          <span>Level 3: Special forces with advanced tech hunt you relentlessly</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center">
                        <Users className="mr-2 h-5 w-5 text-blue-500" /> Civilian Interactions
                      </h4>
                      <p className="text-zinc-400 text-sm mb-3">
                        Civilians react dynamically to your appearance, behavior, and reputation. They can help or
                        hinder your mission in unexpected ways.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-blue-500">•</span>
                          <span>Suspicious civilians might report you to authorities if you behave erratically</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-blue-500">•</span>
                          <span>Sympathetic civilians might offer shelter, resources, or information</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-blue-500">•</span>
                          <span>
                            Some civilians have hidden connections to factions that are revealed through interaction
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center">
                        <Clock className="mr-2 h-5 w-5 text-purple-500" /> Time-Sensitive Opportunities
                      </h4>
                      <p className="text-zinc-400 text-sm mb-3">
                        Special events and opportunities appear at specific times or under certain conditions, creating
                        urgency and strategic choices.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-purple-500">•</span>
                          <span>Shift changes at secure facilities create brief windows for infiltration</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-purple-500">•</span>
                          <span>Underground markets operate only during specific hours</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-purple-500">•</span>
                          <span>Key informants appear briefly in certain locations before moving on</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Narrative Events</h3>
                  <p className="text-zinc-300 mb-6">
                    Encounter meaningful story moments that require difficult choices, revealing more about your
                    character and shaping your path forward.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Memory Fragment: The Escape</h4>
                      <p className="text-zinc-400 text-sm mb-4">
                        A sudden flashback reveals you escaping from a Limptin Foundation facility. You must choose
                        which details to focus on, shaping your backstory.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 text-sm">
                          <span className="text-red-500 font-bold">Choice 1:</span>
                          <div>
                            <p>Focus on the faces of those who helped you escape</p>
                            <p className="text-xs text-zinc-500">
                              Unlocks social connections but makes you a higher-priority target
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <span className="text-red-500 font-bold">Choice 2:</span>
                          <div>
                            <p>Focus on the facility layout and security systems</p>
                            <p className="text-xs text-zinc-500">
                              Unlocks technical knowledge but fragments personal connections
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <span className="text-red-500 font-bold">Choice 3:</span>
                          <div>
                            <p>Focus on the experimental procedures performed on you</p>
                            <p className="text-xs text-zinc-500">
                              Unlocks special abilities but causes traumatic flashbacks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">The Innocent Bystander</h4>
                      <p className="text-zinc-400 text-sm mb-4">
                        During your escape, you encounter a civilian who has seen your face. Your decision shapes your
                        character's moral compass and future interactions.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 text-sm">
                          <span className="text-red-500 font-bold">Choice 1:</span>
                          <div>
                            <p>Neutralize the witness to protect your identity</p>
                            <p className="text-xs text-zinc-500">
                              Ensures immediate safety but increases karmic debt and future consequences
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <span className="text-red-500 font-bold">Choice 2:</span>
                          <div>
                            <p>Attempt to reason with or bribe the witness</p>
                            <p className="text-xs text-zinc-500">
                              Risky but potentially creates an ally; outcome depends on social skills
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <span className="text-red-500 font-bold">Choice 3:</span>
                          <div>
                            <p>Flee immediately, accepting the risk of identification</p>
                            <p className="text-xs text-zinc-500">
                              Preserves moral integrity but increases heat level in the area
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">VILEE's Proposition</h4>
                      <p className="text-zinc-400 text-sm mb-4">
                        When you finally locate VILEE, they offer multiple ways to secure your travel documents, each
                        with different costs and consequences.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 text-sm">
                          <span className="text-red-500 font-bold">Choice 1:</span>
                          <div>
                            <p>Pay a premium in G4C tokens for clean, high-quality documents</p>
                            <p className="text-xs text-zinc-500">
                              Expensive but safe; requires significant resource gathering
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <span className="text-red-500 font-bold">Choice 2:</span>
                          <div>
                            <p>Perform a dangerous job for VILEE in exchange for documents</p>
                            <p className="text-xs text-zinc-500">
                              Risky but reveals more of the hidden layer; potential for valuable connections
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <span className="text-red-500 font-bold">Choice 3:</span>
                          <div>
                            <p>Steal the documents directly from VILEE's operation</p>
                            <p className="text-xs text-zinc-500">
                              Creates an enemy but demonstrates independence; affects future faction relations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="timeline">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Immediate Consequences</h3>
                  <p className="text-zinc-300 mb-6">
                    Your choices in Mission 1 have significant immediate effects on your character's development,
                    available resources, and relationships with key factions.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center">
                        <Shield className="mr-2 h-5 w-5 text-red-500" /> Identity Formation
                      </h4>
                      <p className="text-zinc-400 text-sm mb-3">
                        The identity you establish in Mission 1 determines your initial reputation, available contacts,
                        and faction relationships.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-red-500">•</span>
                          <span>A violent approach marks you as dangerous, closing some doors but opening others</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-red-500">•</span>
                          <span>A stealthy approach keeps your profile low, allowing more freedom of movement</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-red-500">•</span>
                          <span>A social approach builds a network of contacts that can provide future assistance</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center">
                        <Wallet className="mr-2 h-5 w-5 text-amber-500" /> Resource Acquisition
                      </h4>
                      <p className="text-zinc-400 text-sm mb-3">
                        The resources you gather and how you set up your digital wallet affect your economic options in
                        future missions.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-amber-500">•</span>
                          <span>Basic wallet setup provides limited functionality but is quick to establish</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-amber-500">•</span>
                          <span>Advanced wallet setup takes more time but enables higher-value transactions</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-amber-500">•</span>
                          <span>Secure wallet setup protects assets but may limit accessibility in some areas</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center">
                        <UserCheck className="mr-2 h-5 w-5 text-blue-500" /> Relationship with VILEE
                      </h4>
                      <p className="text-zinc-400 text-sm mb-3">
                        How you interact with VILEE establishes a key relationship that affects future missions and
                        available resources.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-blue-500">•</span>
                          <span>Becoming a trusted client opens access to premium services in future missions</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-blue-500">•</span>
                          <span>Becoming an associate provides insider information about the criminal underworld</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-blue-500">•</span>
                          <span>
                            Becoming an enemy forces you to find alternative resources but may reveal hidden paths
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Future Timeline Impact</h3>
                  <p className="text-zinc-300 mb-6">
                    Your choices in Mission 1 create ripples through time that significantly affect the 3030 era and
                    your descendant's circumstances.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center">
                        <Hourglass className="mr-2 h-5 w-5 text-purple-500" /> Identity Legacy
                      </h4>
                      <p className="text-zinc-400 text-sm mb-3">
                        The identity you establish becomes the foundation of your family's legacy, influencing your
                        descendant's social standing in 3030.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-purple-500">•</span>
                          <span>A heroic approach creates a legacy of respect and authority in 3030</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-purple-500">•</span>
                          <span>A pragmatic approach creates a legacy of resourcefulness and adaptability</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-purple-500">•</span>
                          <span>
                            A ruthless approach creates a legacy of fear and power in the darker corners of 3030
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center">
                        <Map className="mr-2 h-5 w-5 text-green-500" /> Location Evolution
                      </h4>
                      <p className="text-zinc-400 text-sm mb-3">
                        The starting location you choose and how you interact with it shapes its development into the
                        3030 era.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-green-500">•</span>
                          <span>Helping locals creates a sanctuary city in 3030 with allies for your descendant</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-green-500">•</span>
                          <span>
                            Exploiting the location for resources creates a depleted area with valuable hidden caches
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-green-500">•</span>
                          <span>Establishing infrastructure creates a technological hub in 3030</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center">
                        <Cpu className="mr-2 h-5 w-5 text-red-500" /> LIONSMANE Connection
                      </h4>
                      <p className="text-zinc-400 text-sm mb-3">
                        Your interaction with the dormant LIONSMANE entity (if discovered) establishes a connection that
                        evolves over generations.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-red-500">•</span>
                          <span>A supportive approach creates a powerful ally for your descendant in 3030</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-red-500">•</span>
                          <span>An exploitative approach creates a powerful but unpredictable force in 3030</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-red-500">•</span>
                          <span>Ignoring the entity creates an unknown wild card in the 3030 timeline</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-800 p-4 rounded-lg border border-red-900/30">
                      <h4 className="font-bold mb-2 flex items-center text-red-500">
                        <Zap className="mr-2 h-5 w-5" /> Timeline Vision Available
                      </h4>
                      <p className="text-zinc-400 text-sm">
                        Use Timeline Vision during key decisions to glimpse potential future outcomes in 3030. This
                        ability is limited and should be used strategically.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Mission 1: Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-red-500" /> Dynamic Phone System
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    Your phone is a central gameplay element with battery management, signal strength, and app
                    functionality that changes based on your location and actions. Lose your phone or let it die, and
                    you'll face significant challenges.
                  </p>
                </div>

                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Scissors className="mr-2 h-5 w-5 text-red-500" /> Advanced Disguise System
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    Create disguises that affect how NPCs perceive and interact with you. Different disguises grant
                    access to different areas and information. The quality of your disguise depends on the items you
                    find and your attention to detail.
                  </p>
                </div>

                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Wifi className="mr-2 h-5 w-5 text-red-500" /> Network Infrastructure
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    Navigate a realistic digital infrastructure with public WiFi, secure networks, VPNs, and digital
                    tracking. Your digital security choices affect what information is available to you and who can
                    track your movements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedMission === "mission2" && (
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-red-900">Mission 2</Badge>
              <Badge className="bg-blue-900">Bio-Heist</Badge>
            </div>
            <h2 className="text-2xl font-bold mb-4">The Bio-Weapon Heist</h2>
            <p className="text-zinc-300 mb-6">
              A Limptin Foundation convoy is transporting a dangerous bio-weapon through the city. Your mission is to
              intercept the convoy, secure the weapon, and deliver it to a safe location before it can be deployed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Surface Layer</h3>
                <p className="text-zinc-400 text-sm">
                  Hijack the transport truck using an EMP device and deliver it to the designated location.
                </p>
              </div>

              <div className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Hidden Layer</h3>
                <p className="text-zinc-400 text-sm">
                  Discover the true nature of the bio-weapon and its connection to the SCAM nanobot technology.
                </p>
              </div>

              <div className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Core Layer</h3>
                <p className="text-zinc-400 text-sm">
                  Extract a sample of the weapon for analysis, revealing its potential to counter SCAM technology.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button className="bg-red-600 hover:bg-red-700">View Full Mission Details</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedMission === "mission3" && (
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-red-900">Mission 3</Badge>
              <Badge className="bg-blue-900">Infiltration</Badge>
            </div>
            <h2 className="text-2xl font-bold mb-4">The Printing Connect</h2>
            <p className="text-zinc-300 mb-6">
              Locate VILEE's visa printing connection to establish a more permanent identity. Navigate the complex web
              of postal activity, digital signatures, and underground networks to find the elusive printer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Surface Layer</h3>
                <p className="text-zinc-400 text-sm">
                  Track postal activity to locate the printing operation and acquire the necessary components.
                </p>
              </div>

              <div className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Hidden Layer</h3>
                <p className="text-zinc-400 text-sm">
                  Uncover a Limptin Foundation plot to infiltrate the printing operation and track resistance members.
                </p>
              </div>

              <div className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Core Layer</h3>
                <p className="text-zinc-400 text-sm">
                  Meet the mysterious Level 7 Hunter and discover their connection to the LIONSMANE project.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button className="bg-red-600 hover:bg-red-700">View Full Mission Details</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedMission === "mission4" && (
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-red-900">Mission 4</Badge>
              <Badge className="bg-blue-900">Digital Access</Badge>
            </div>
            <h2 className="text-2xl font-bold mb-4">Digital Access</h2>
            <p className="text-zinc-300 mb-6">
              Create an NFT that grants access to the printing connect building. Navigate the complex world of digital
              ownership, blockchain security, and NFT marketplaces to establish your digital presence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Surface Layer</h3>
                <p className="text-zinc-400 text-sm">
                  Mint an access NFT using the correct software and embed the proper ownership data.
                </p>
              </div>

              <div className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Hidden Layer</h3>
                <p className="text-zinc-400 text-sm">
                  Discover the underground NFT marketplace and secure a rare item before your opponents.
                </p>
              </div>

              <div className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Core Layer</h3>
                <p className="text-zinc-400 text-sm">
                  Learn the secrets of wallet security from Level 7 Hunter and establish a secure digital identity.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button className="bg-red-600 hover:bg-red-700">View Full Mission Details</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedMission === "mission5" && (
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-red-900">Mission 5</Badge>
              <Badge className="bg-blue-900">Investigation</Badge>
            </div>
            <h2 className="text-2xl font-bold mb-4">The Investment Firm</h2>
            <p className="text-zinc-300 mb-6">
              Infiltrate an investment firm to identify and stop a scammer from completing a transaction that would fund
              Limptin Foundation operations. Use observation, deduction, and timing to identify the culprit.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Surface Layer</h3>
                <p className="text-zinc-400 text-sm">
                  Identify the scammer through observation and deploy a wifi jammer to stop the transaction.
                </p>
              </div>

              <div className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Hidden Layer</h3>
                <p className="text-zinc-400 text-sm">
                  Uncover the broader financial network funding Limptin Foundation operations worldwide.
                </p>
              </div>

              <div className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Core Layer</h3>
                <p className="text-zinc-400 text-sm">
                  Discover evidence linking the firm to human experimentation and the origins of SCAM technology.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button className="bg-red-600 hover:bg-red-700">View Full Mission Details</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
