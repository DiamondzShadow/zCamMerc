"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Phone,
  Clock,
  Map,
  Shield,
  Eye,
  Users,
  Cpu,
  Scissors,
  Wallet,
  Wifi,
  AlertTriangle,
  Hourglass,
} from "lucide-react"
import Image from "next/image"

export default function MissionRedesignExample() {
  const [selectedLocation, setSelectedLocation] = useState<string>("tokyo")
  const [selectedApproach, setSelectedApproach] = useState<string | null>(null)
  const [missionPhase, setMissionPhase] = useState<string>("planning")

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Mission 1: Identity Crisis</h1>
        <p className="text-zinc-400 text-lg mb-8">
          You wake up in an unfamiliar location with fragmented memories. Sirens wail in the distance, closing in on
          your position. You must establish a new identity and secure passage to New York, where answers about your
          past—and your future—await.
        </p>
      </div>

      {missionPhase === "planning" && (
        <>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Select Your Starting Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card
                className={`bg-zinc-900 border-zinc-800 cursor-pointer transition-all ${
                  selectedLocation === "tokyo" ? "ring-2 ring-red-500" : "hover:border-zinc-700"
                }`}
                onClick={() => setSelectedLocation("tokyo")}
              >
                <div className="relative h-48">
                  <Image src="/locations/tokyo.png" alt="Tokyo" fill className="object-cover rounded-t-lg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold">Tokyo</h3>
                    <p className="text-zinc-400 text-sm">High-Tech Metropolis</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className="bg-purple-900">Tech Advantage</Badge>
                    <Badge variant="outline">Heavy Surveillance</Badge>
                  </div>
                  <p className="text-zinc-400 text-sm">
                    Advanced digital infrastructure but extensive surveillance networks. Tech specialists thrive here.
                  </p>
                </CardContent>
              </Card>

              <Card
                className={`bg-zinc-900 border-zinc-800 cursor-pointer transition-all ${
                  selectedLocation === "london" ? "ring-2 ring-red-500" : "hover:border-zinc-700"
                }`}
                onClick={() => setSelectedLocation("london")}
              >
                <div className="relative h-48">
                  <Image src="/locations/london.png" alt="London" fill className="object-cover rounded-t-lg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold">London</h3>
                    <p className="text-zinc-400 text-sm">Surveillance Capital</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className="bg-green-900">Social Advantage</Badge>
                    <Badge variant="outline">CCTV Everywhere</Badge>
                  </div>
                  <p className="text-zinc-400 text-sm">
                    Complex social hierarchies but extensive CCTV networks. Social engineers excel here.
                  </p>
                </CardContent>
              </Card>

              <Card
                className={`bg-zinc-900 border-zinc-800 cursor-pointer transition-all ${
                  selectedLocation === "johannesburg" ? "ring-2 ring-red-500" : "hover:border-zinc-700"
                }`}
                onClick={() => setSelectedLocation("johannesburg")}
              >
                <div className="relative h-48">
                  <Image
                    src="/locations/johannesburg.png"
                    alt="Johannesburg"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold">Johannesburg</h3>
                    <p className="text-zinc-400 text-sm">City of Contrasts</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className="bg-red-900">Combat Advantage</Badge>
                    <Badge variant="outline">Resource Scarcity</Badge>
                  </div>
                  <p className="text-zinc-400 text-sm">
                    Areas with minimal surveillance but resource challenges. Combat specialists have an edge here.
                  </p>
                </CardContent>
              </Card>

              <Card
                className={`bg-zinc-900 border-zinc-800 cursor-pointer transition-all ${
                  selectedLocation === "rio" ? "ring-2 ring-red-500" : "hover:border-zinc-700"
                }`}
                onClick={() => setSelectedLocation("rio")}
              >
                <div className="relative h-48">
                  <Image src="/locations/rio.png" alt="Rio de Janeiro" fill className="object-cover rounded-t-lg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold">Rio de Janeiro</h3>
                    <p className="text-zinc-400 text-sm">Vibrant Metropolis</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className="bg-blue-900">Stealth Advantage</Badge>
                    <Badge variant="outline">Diverse Environments</Badge>
                  </div>
                  <p className="text-zinc-400 text-sm">
                    Varied terrain and complex social dynamics. Stealth specialists can navigate effectively here.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Select Your Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card
                className={`bg-zinc-900 border-zinc-800 cursor-pointer transition-all ${
                  selectedApproach === "combat" ? "ring-2 ring-red-500" : "hover:border-zinc-700"
                }`}
                onClick={() => setSelectedApproach("combat")}
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-red-900/30 flex items-center justify-center">
                      <Shield className="h-8 w-8 text-red-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Combat Specialist</h3>
                  <p className="text-zinc-400 text-sm text-center mb-4">
                    Use force to overcome obstacles and acquire resources through direct confrontation.
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
                </CardContent>
              </Card>

              <Card
                className={`bg-zinc-900 border-zinc-800 cursor-pointer transition-all ${
                  selectedApproach === "stealth" ? "ring-2 ring-red-500" : "hover:border-zinc-700"
                }`}
                onClick={() => setSelectedApproach("stealth")}
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-blue-900/30 flex items-center justify-center">
                      <Eye className="h-8 w-8 text-blue-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Stealth Operative</h3>
                  <p className="text-zinc-400 text-sm text-center mb-4">
                    Move unseen, avoid confrontation, and gather intelligence without alerting enemies.
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
                </CardContent>
              </Card>

              <Card
                className={`bg-zinc-900 border-zinc-800 cursor-pointer transition-all ${
                  selectedApproach === "tech" ? "ring-2 ring-red-500" : "hover:border-zinc-700"
                }`}
                onClick={() => setSelectedApproach("tech")}
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-purple-900/30 flex items-center justify-center">
                      <Cpu className="h-8 w-8 text-purple-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Tech Specialist</h3>
                  <p className="text-zinc-400 text-sm text-center mb-4">
                    Leverage technology to overcome obstacles. Hack systems and gather digital intelligence.
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
                </CardContent>
              </Card>

              <Card
                className={`bg-zinc-900 border-zinc-800 cursor-pointer transition-all ${
                  selectedApproach === "social" ? "ring-2 ring-red-500" : "hover:border-zinc-700"
                }`}
                onClick={() => setSelectedApproach("social")}
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-green-900/30 flex items-center justify-center">
                      <Users className="h-8 w-8 text-green-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Social Engineer</h3>
                  <p className="text-zinc-400 text-sm text-center mb-4">
                    Manipulate others through conversation, disguise, and deception to achieve your goals.
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
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              className="bg-red-600 hover:bg-red-700 px-8 py-6 text-lg"
              disabled={!selectedLocation || !selectedApproach}
              onClick={() => setMissionPhase("briefing")}
            >
              Begin Mission
            </Button>
          </div>
        </>
      )}

      {missionPhase === "briefing" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="bg-zinc-900 border-zinc-800 mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Mission Briefing</h2>
                <p className="text-zinc-300 mb-6">
                  You wake up in a small apartment in{" "}
                  {selectedLocation === "tokyo"
                    ? "Tokyo"
                    : selectedLocation === "london"
                      ? "London"
                      : selectedLocation === "johannesburg"
                        ? "Johannesburg"
                        : "Rio de Janeiro"}{" "}
                  with fragmented memories. Your head pounds as sirens wail in the distance, growing closer. A
                  smartphone on the nightstand blinks with an urgent notification.
                </p>

                <div className="bg-zinc-800 p-4 rounded-lg mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="h-5 w-5 text-red-500" />
                    <h3 className="font-bold">Incoming Message</h3>
                  </div>
                  <p className="text-zinc-300 italic">
                    "They're coming for you. You have 10 minutes to get out. Delete this message. Find VILEE at the
                    coordinates attached. They'll help you get to NY. Trust no one."
                  </p>
                </div>

                <h3 className="font-bold mb-2">Primary Objectives:</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-zinc-300">
                    <span className="text-red-500 text-xl leading-none">•</span>
                    <span>Evade the incoming authorities and establish temporary safety</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-300">
                    <span className="text-red-500 text-xl leading-none">•</span>
                    <span>Gather items to change your appearance and establish a disguise</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-300">
                    <span className="text-red-500 text-xl leading-none">•</span>
                    <span>Locate VILEE using the coordinates provided</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-300">
                    <span className="text-red-500 text-xl leading-none">•</span>
                    <span>Secure travel documents and passage to New York</span>
                  </li>
                </ul>

                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <p className="text-amber-500 font-bold">
                    Warning: This mission features dynamic events and time-sensitive objectives. Your choices will have
                    immediate and long-term consequences.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="location" className="mb-6">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="location" className="data-[state=active]:bg-red-600">
                  <Map className="mr-2 h-4 w-4" /> Location
                </TabsTrigger>
                <TabsTrigger value="resources" className="data-[state=active]:bg-red-600">
                  <Scissors className="mr-2 h-4 w-4" /> Resources
                </TabsTrigger>
                <TabsTrigger value="timeline" className="data-[state=active]:bg-red-600">
                  <Hourglass className="mr-2 h-4 w-4" /> Timeline Impact
                </TabsTrigger>
              </TabsList>

              <TabsContent value="location">
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">
                      {selectedLocation === "tokyo"
                        ? "Tokyo, Japan"
                        : selectedLocation === "london"
                          ? "London, UK"
                          : selectedLocation === "johannesburg"
                            ? "Johannesburg, South Africa"
                            : "Rio de Janeiro, Brazil"}
                    </h3>
                    <p className="text-zinc-300 mb-4">
                      {selectedLocation === "tokyo"
                        ? "A high-tech metropolis with advanced surveillance but excellent digital infrastructure. The Shibuya district is crowded with people, providing cover but also witnesses. Police response is swift and efficient."
                        : selectedLocation === "london"
                          ? "A surveillance-heavy city with complex social hierarchies. CCTV cameras monitor most public spaces, but the class system provides opportunities for social engineering. Police forces are well-coordinated."
                          : selectedLocation === "johannesburg"
                            ? "A city of stark contrasts with areas of minimal surveillance. Resource scarcity creates challenges, but also opportunities for those willing to use force. Police presence varies dramatically by district."
                            : "A vibrant city with complex social dynamics and varied terrain. The favelas provide excellent hiding spots but are controlled by local gangs. Beach areas are heavily monitored but offer social opportunities."}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-zinc-800 p-3 rounded-lg">
                        <h4 className="font-bold mb-1">Advantages</h4>
                        <ul className="space-y-1">
                          <li className="text-sm text-zinc-300 flex items-start gap-2">
                            <span className="text-green-500 text-lg leading-none">+</span>
                            {selectedLocation === "tokyo"
                              ? "Advanced digital infrastructure for tech specialists"
                              : selectedLocation === "london"
                                ? "Complex social hierarchies for social engineers"
                                : selectedLocation === "johannesburg"
                                  ? "Areas with minimal surveillance for combat specialists"
                                  : "Varied terrain ideal for stealth specialists"}
                          </li>
                          <li className="text-sm text-zinc-300 flex items-start gap-2">
                            <span className="text-green-500 text-lg leading-none">+</span>
                            {selectedLocation === "tokyo"
                              ? "Crowded areas provide excellent cover"
                              : selectedLocation === "london"
                                ? "Class-based access to restricted areas"
                                : selectedLocation === "johannesburg"
                                  ? "Resource acquisition through direct methods"
                                  : "Strong community networks for those who gain trust"}
                          </li>
                        </ul>
                      </div>

                      <div className="bg-zinc-800 p-3 rounded-lg">
                        <h4 className="font-bold mb-1">Challenges</h4>
                        <ul className="space-y-1">
                          <li className="text-sm text-zinc-300 flex items-start gap-2">
                            <span className="text-red-500 text-lg leading-none">-</span>
                            {selectedLocation === "tokyo"
                              ? "Advanced surveillance systems"
                              : selectedLocation === "london"
                                ? "CCTV coverage throughout the city"
                                : selectedLocation === "johannesburg"
                                  ? "Resource scarcity and territorial gangs"
                                  : "Complex social dynamics and gang territories"}
                          </li>
                          <li className="text-sm text-zinc-300 flex items-start gap-2">
                            <span className="text-red-500 text-lg leading-none">-</span>
                            {selectedLocation === "tokyo"
                              ? "Efficient police response"
                              : selectedLocation === "london"
                                ? "Well-coordinated police forces"
                                : selectedLocation === "johannesburg"
                                  ? "Unpredictable security situations"
                                  : "Stark contrast between monitored and unmonitored areas"}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources">
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Available Resources</h3>
                    <p className="text-zinc-300 mb-4">
                      Your apartment contains limited resources. Additional items can be found throughout the city, with
                      availability varying based on your approach and location.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-zinc-800 p-3 rounded-lg">
                        <h4 className="font-bold mb-1 flex items-center">
                          <Phone className="mr-2 h-4 w-4 text-blue-500" /> Digital
                        </h4>
                        <ul className="space-y-1">
                          <li className="text-sm text-zinc-300">Smartphone (battery at 68%)</li>
                          <li className="text-sm text-zinc-300">Public WiFi access</li>
                          <li className="text-sm text-zinc-300">Basic crypto wallet app</li>
                          <li className="text-sm text-zinc-300">Encrypted messaging app</li>
                        </ul>
                      </div>

                      <div className="bg-zinc-800 p-3 rounded-lg">
                        <h4 className="font-bold mb-1 flex items-center">
                          <Scissors className="mr-2 h-4 w-4 text-green-500" /> Physical
                        </h4>
                        <ul className="space-y-1">
                          <li className="text-sm text-zinc-300">Basic clothing (current outfit)</li>
                          <li className="text-sm text-zinc-300">Small amount of local currency</li>
                          <li className="text-sm text-zinc-300">Apartment access card</li>
                          <li className="text-sm text-zinc-300">Backpack for carrying items</li>
                        </ul>
                      </div>

                      <div className="bg-zinc-800 p-3 rounded-lg">
                        <h4 className="font-bold mb-1 flex items-center">
                          <Wallet className="mr-2 h-4 w-4 text-amber-500" /> Financial
                        </h4>
                        <ul className="space-y-1">
                          <li className="text-sm text-zinc-300">Small G4C token balance</li>
                          <li className="text-sm text-zinc-300">Access to basic crypto exchange</li>
                          <li className="text-sm text-zinc-300">No established credit</li>
                          <li className="text-sm text-zinc-300">Potential for resource acquisition</li>
                        </ul>
                      </div>
                    </div>

                    <h4 className="font-bold mb-2">Approach-Specific Resources:</h4>
                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">
                        {selectedApproach === "combat"
                          ? "Combat Specialist"
                          : selectedApproach === "stealth"
                            ? "Stealth Operative"
                            : selectedApproach === "tech"
                              ? "Tech Specialist"
                              : "Social Engineer"}
                      </h5>
                      <p className="text-zinc-300 mb-3">
                        {selectedApproach === "combat"
                          ? "Your combat training allows you to identify potential weapons and defensive items in everyday objects. You can also assess threats more effectively."
                          : selectedApproach === "stealth"
                            ? "Your stealth training helps you identify optimal hiding spots, escape routes, and surveillance blind spots that others would miss."
                            : selectedApproach === "tech"
                              ? "Your technical expertise allows you to exploit digital systems, bypass security, and access information networks more effectively."
                              : "Your social skills help you read people, identify potential allies, and manipulate situations to your advantage through conversation."}
                      </p>
                      <ul className="space-y-1">
                        <li className="text-sm text-zinc-300 flex items-start gap-2">
                          <span className="text-red-500 text-lg leading-none">•</span>
                          {selectedApproach === "combat"
                            ? "Ability to improvise weapons from common objects"
                            : selectedApproach === "stealth"
                              ? "Enhanced awareness of surveillance systems"
                              : selectedApproach === "tech"
                                ? "Advanced smartphone hacking capabilities"
                                : "Ability to read and manipulate social situations"}
                        </li>
                        <li className="text-sm text-zinc-300 flex items-start gap-2">
                          <span className="text-red-500 text-lg leading-none">•</span>
                          {selectedApproach === "combat"
                            ? "Tactical assessment of threats and opportunities"
                            : selectedApproach === "stealth"
                              ? "Silent movement and environmental awareness"
                              : selectedApproach === "tech"
                                ? "Digital lockpicking and security bypass"
                                : "Convincing disguise and impersonation abilities"}
                        </li>
                        <li className="text-sm text-zinc-300 flex items-start gap-2">
                          <span className="text-red-500 text-lg leading-none">•</span>
                          {selectedApproach === "combat"
                            ? "Efficient resource acquisition through force"
                            : selectedApproach === "stealth"
                              ? "Ability to move undetected in hostile areas"
                              : selectedApproach === "tech"
                                ? "Access to restricted digital information"
                                : "Ability to extract information through conversation"}
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="timeline">
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Timeline Impact Preview</h3>
                    <p className="text-zinc-300 mb-4">
                      Your choices in this mission will create ripples through time, affecting both your immediate
                      future and the 3030 era. Here's a preview of potential impacts:
                    </p>

                    <div className="space-y-6">
                      <div className="bg-zinc-800 p-4 rounded-lg">
                        <h4 className="font-bold mb-2 flex items-center">
                          <Clock className="mr-2 h-5 w-5 text-blue-500" /> Immediate Consequences
                        </h4>
                        <p className="text-zinc-400 text-sm mb-3">
                          How you establish your identity and secure passage to New York will shape your character's
                          development and available resources in the near term.
                        </p>
                        <ul className="space-y-2">
                          <li className="text-sm text-zinc-300 flex items-start gap-2">
                            <span className="text-blue-500 text-lg leading-none">•</span>
                            <span>
                              The identity you establish determines your initial reputation and faction relationships
                            </span>
                          </li>
                          <li className="text-sm text-zinc-300 flex items-start gap-2">
                            <span className="text-blue-500 text-lg leading-none">•</span>
                            <span>Your relationship with VILEE affects future resource availability</span>
                          </li>
                          <li className="text-sm text-zinc-300 flex items-start gap-2">
                            <span className="text-blue-500 text-lg leading-none">•</span>
                            <span>The heat level you generate follows you to subsequent missions</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-zinc-800 p-4 rounded-lg">
                        <h4 className="font-bold mb-2 flex items-center">
                          <Hourglass className="mr-2 h-5 w-5 text-purple-500" /> 3030 Timeline Impact
                        </h4>
                        <p className="text-zinc-400 text-sm mb-3">
                          Your choices create ripples through time that significantly affect the 3030 era and your
                          descendant's circumstances.
                        </p>
                        <ul className="space-y-2">
                          <li className="text-sm text-zinc-300 flex items-start gap-2">
                            <span className="text-purple-500 text-lg leading-none">•</span>
                            <span>The identity you establish becomes the foundation of your family's legacy</span>
                          </li>
                          <li className="text-sm text-zinc-300 flex items-start gap-2">
                            <span className="text-purple-500 text-lg leading-none">•</span>
                            <span>
                              Your starting location evolves based on your actions, becoming a key area in 3030
                            </span>
                          </li>
                          <li className="text-sm text-zinc-300 flex items-start gap-2">
                            <span className="text-purple-500 text-lg leading-none">•</span>
                            <span>
                              Discovering the dormant LIONSMANE entity establishes a connection that evolves over
                              generations
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-zinc-800 p-4 rounded-lg border border-red-900/30">
                        <h4 className="font-bold mb-2 flex items-center text-red-500">
                          <Wifi className="mr-2 h-5 w-5" /> Timeline Vision Available
                        </h4>
                        <p className="text-zinc-400 text-sm">
                          During critical decision points, you can activate Timeline Vision to glimpse potential future
                          outcomes in 3030. This ability is limited and should be used strategically.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card className="bg-zinc-900 border-zinc-800 mb-6">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Mission Parameters</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-300">Difficulty</span>
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-zinc-700"></div>
                      <div className="h-2 w-2 rounded-full bg-zinc-700"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-300">Time Pressure</span>
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-zinc-700"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-300">Timeline Impact</span>
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

            <Card className="bg-zinc-900 border-zinc-800 mb-6">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Selected Approach</h3>
                <div className="flex items-center gap-3 mb-4">
                  {selectedApproach === "combat" ? (
                    <Shield className="h-6 w-6 text-red-500" />
                  ) : selectedApproach === "stealth" ? (
                    <Eye className="h-6 w-6 text-blue-500" />
                  ) : selectedApproach === "tech" ? (
                    <Cpu className="h-6 w-6 text-purple-500" />
                  ) : (
                    <Users className="h-6 w-6 text-green-500" />
                  )}
                  <h4 className="text-lg font-bold">
                    {selectedApproach === "combat"
                      ? "Combat Specialist"
                      : selectedApproach === "stealth"
                        ? "Stealth Operative"
                        : selectedApproach === "tech"
                          ? "Tech Specialist"
                          : "Social Engineer"}
                  </h4>
                </div>
                <p className="text-zinc-300 mb-4">
                  {selectedApproach === "combat"
                    ? "You excel at direct confrontation and resource acquisition through force. Your combat skills allow you to overcome obstacles that would stop others."
                    : selectedApproach === "stealth"
                      ? "You move unseen through hostile environments, avoiding detection and gathering intelligence without alerting enemies to your presence."
                      : selectedApproach === "tech"
                        ? "You leverage technology to overcome obstacles, hacking systems and controlling devices remotely to achieve your objectives."
                        : "You manipulate others through conversation, disguise, and deception, achieving your goals without direct confrontation."}
                </p>
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <h5 className="font-bold mb-1">Special Abilities:</h5>
                  <ul className="space-y-1">
                    <li className="text-sm text-zinc-300 flex items-start gap-2">
                      <span className="text-red-500 text-lg leading-none">•</span>
                      {selectedApproach === "combat"
                        ? "Improvise weapons from common objects"
                        : selectedApproach === "stealth"
                          ? "Detect and avoid surveillance systems"
                          : selectedApproach === "tech"
                            ? "Hack security systems remotely"
                            : "Create convincing disguises and personas"}
                    </li>
                    <li className="text-sm text-zinc-300 flex items-start gap-2">
                      <span className="text-red-500 text-lg leading-none">•</span>
                      {selectedApproach === "combat"
                        ? "Assess and neutralize threats efficiently"
                        : selectedApproach === "stealth"
                          ? "Move silently through hostile environments"
                          : selectedApproach === "tech"
                            ? "Access and manipulate digital information"
                            : "Extract information through social manipulation"}
                    </li>
                    <li className="text-sm text-zinc-300 flex items-start gap-2">
                      <span className="text-red-500 text-lg leading-none">•</span>
                      {selectedApproach === "combat"
                        ? "Withstand and recover from physical damage"
                        : selectedApproach === "stealth"
                          ? "Create distractions to avoid detection"
                          : selectedApproach === "tech"
                            ? "Track digital footprints and communications"
                            : "Build and leverage social networks"}
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button
                className="bg-red-600 hover:bg-red-700 w-full py-6 text-lg"
                onClick={() => setMissionPhase("execution")}
              >
                Start Mission
              </Button>
            </div>
          </div>
        </div>
      )}

      {missionPhase === "execution" && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Mission Ready for Execution</h2>
          <p className="text-zinc-400 mb-8">
            The full mission simulation would begin here, with dynamic events, branching paths, and meaningful choices
            that shape both your immediate experience and the future timeline.
          </p>
          <Button className="bg-red-600 hover:bg-red-700" onClick={() => setMissionPhase("planning")}>
            Return to Planning
          </Button>
        </div>
      )}
    </div>
  )
}
