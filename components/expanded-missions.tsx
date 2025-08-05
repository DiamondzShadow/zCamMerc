import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"

export default function ExpandedMissions() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Extended Mission Database</h2>
        <p className="text-zinc-400 text-lg mb-8">
          The fight against the Limptin Foundation spans the globe and the metaverse. Choose your battleground and join
          the resistance.
        </p>
      </div>

      <Tabs defaultValue="global" className="mb-12">
        <TabsList className="grid w-full grid-cols-5 mb-8 bg-zinc-900 border border-zinc-800">
          <TabsTrigger value="global" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
            Global
          </TabsTrigger>
          <TabsTrigger value="asia" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
            Asia
          </TabsTrigger>
          <TabsTrigger value="americas" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
            Americas
          </TabsTrigger>
          <TabsTrigger value="europe" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
            Europe
          </TabsTrigger>
          <TabsTrigger value="digital" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
            Digital Realm
          </TabsTrigger>
        </TabsList>

        <TabsContent value="global">
          <div className="space-y-8">
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-64 md:h-auto md:col-span-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ghost%20-5WgJQpiK38YVt1RkWSZwAtt8fO7OJP.jpeg"
                    alt="The Blue Sentinel"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900 md:hidden" />
                </div>
                <div className="p-6 md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-red-900 hover:bg-red-800">Mission 6</Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Global
                    </Badge>
                    <Badge variant="secondary" className="bg-zinc-800">
                      Difficulty: Extreme
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">The Blue Sentinel Protocol</h3>
                  <p className="text-zinc-300 mb-6">
                    A mysterious figure known as the Blue Sentinel has been tracking SCAM deployments worldwide. This
                    digital ghost appears to be immune to SCAM technology and has been helping resistance cells across
                    the globe. Your mission is to establish contact with the Blue Sentinel and secure their alliance
                    with the Scam Mercenaires.
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-500 mb-2">OBJECTIVES</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Decrypt the Blue Sentinel's communication patterns</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Establish secure communication channels in three global hotspots</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Prove your trustworthiness by completing the Sentinel's trials</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Secure the alliance before Limptin forces track your activities</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-500 mb-2">REWARDS</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-zinc-800">
                        2000 XP
                      </Badge>
                      <Badge variant="secondary" className="bg-zinc-800">
                        Digital Cloaking Technology
                      </Badge>
                      <Badge variant="secondary" className="bg-zinc-800">
                        Blue Sentinel Skill Tree Access
                      </Badge>
                    </div>
                  </div>

                  <Link href={`/simulator?mission=6`}>
                    <Button className="bg-red-600 hover:bg-red-700">Start Mission</Button>
                  </Link>
                </div>
              </div>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-64 md:h-auto md:col-span-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/King%20and%20Raven-AFPwR9Dda2c3v6WkXSRPvVd95eOn4R.jpeg"
                    alt="The Confrontation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900 md:hidden" />
                </div>
                <div className="p-6 md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-red-900 hover:bg-red-800">Mission 10</Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Global
                    </Badge>
                    <Badge variant="secondary" className="bg-zinc-800">
                      Difficulty: Legendary
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">The Final Confrontation</h3>
                  <p className="text-zinc-300 mb-6">
                    Real Hates is preparing to activate the global SCAM network from his headquarters in Neo-Singapore.
                    The Scam Mercenaires must launch a coordinated assault on the physical and digital fronts to stop
                    the activation and end the Limptin Foundation's threat once and for all.
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-500 mb-2">OBJECTIVES</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Infiltrate the Limptin Foundation headquarters</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Deploy LIONSMANE countermeasures at key server nodes</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Confront Real Hates at the Digital Throne</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Prevent the global SCAM signal activation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-500 mb-2">REWARDS</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-zinc-800">
                        5000 XP
                      </Badge>
                      <Badge variant="secondary" className="bg-zinc-800">
                        Legendary LIONSMANE NFT
                      </Badge>
                      <Badge variant="secondary" className="bg-zinc-800">
                        Game Completion Achievement
                      </Badge>
                    </div>
                  </div>

                  <Link href={`/simulator?mission=10`}>
                    <Button className="bg-red-600 hover:bg-red-700">Start Mission</Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="asia">
          <div className="space-y-8">
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-64 md:h-auto md:col-span-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ghost%201-8ppbsvnKnxcfbG8hU2zzG8WVOiVlDn.jpeg"
                    alt="Neo-Tokyo Infiltration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900 md:hidden" />
                </div>
                <div className="p-6 md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-red-900 hover:bg-red-800">Mission 7</Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Asia
                    </Badge>
                    <Badge variant="secondary" className="bg-zinc-800">
                      Difficulty: Hard
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Neo-Tokyo Blackout</h3>
                  <p className="text-zinc-300 mb-6">
                    Firepin, a Limptin Foundation subsidiary, has developed a "COVID for NFTs" in Neo-Tokyo that can
                    assimilate blockchain networks. With critical infrastructure like electric cars, phones, and medical
                    devices running on the Polygon blockchain, millions of lives are at risk. You must infiltrate
                    Firepin's headquarters and neutralize the threat.
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-500 mb-2">OBJECTIVES</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Infiltrate Firepin's heavily guarded headquarters in Neo-Tokyo</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Locate and secure the NFT virus source code</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Deploy LIONSMANE countermeasures to protect critical infrastructure</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Escape Neo-Tokyo before Limptin reinforcements arrive</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-500 mb-2">REWARDS</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-zinc-800">
                        1800 XP
                      </Badge>
                      <Badge variant="secondary" className="bg-zinc-800">
                        Cyber-Katana Weapon
                      </Badge>
                      <Badge variant="secondary" className="bg-zinc-800">
                        Neo-Tokyo Safe House Access
                      </Badge>
                    </div>
                  </div>

                  <Link href={`/simulator?mission=7`}>
                    <Button className="bg-red-600 hover:bg-red-700">Start Mission</Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="americas">
          <div className="space-y-8">
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-64 md:h-auto md:col-span-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trappe%20.1-bnYtDPe0R3gtJFvkb52W2kbl31zNmE.jpeg"
                    alt="The Green Nexus"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900 md:hidden" />
                </div>
                <div className="p-6 md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-red-900 hover:bg-red-800">Mission 8</Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Americas
                    </Badge>
                    <Badge variant="secondary" className="bg-zinc-800">
                      Difficulty: Hard
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">The Green Nexus</h3>
                  <p className="text-zinc-300 mb-6">
                    In the heart of the Brazilian rainforest, a LIONSMANE NFT has become self-aware and selected General
                    Ramon to assimilate. Now, Ramon is using his military credentials to create a habitat for other
                    LIONSMANE NFTs to mint and terraform. Your mission is to investigate this phenomenon and determine
                    if Ramon is an ally or threat.
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-500 mb-2">OBJECTIVES</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Navigate the treacherous digital-physical hybrid rainforest</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Observe the LIONSMANE terraforming process without interference</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Make contact with General Ramon and assess his intentions</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Secure a sample of the evolved LIONSMANE code</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-500 mb-2">REWARDS</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-zinc-800">
                        1800 XP
                      </Badge>
                      <Badge variant="secondary" className="bg-zinc-800">
                        Terraforming Skill Tree Access
                      </Badge>
                      <Badge variant="secondary" className="bg-zinc-800">
                        Potential Alliance with Ramon's Forces
                      </Badge>
                    </div>
                  </div>

                  <Link href={`/simulator?mission=8`}>
                    <Button className="bg-red-600 hover:bg-red-700">Start Mission</Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="europe">
          <div className="space-y-8">
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-64 md:h-auto md:col-span-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/President%20Vantage-IQ9xcb4VPHIrkwg8aSsU9tJEXWeONL.jpeg"
                    alt="The White Citadel"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900 md:hidden" />
                </div>
                <div className="p-6 md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-red-900 hover:bg-red-800">Mission 9</Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Europe
                    </Badge>
                    <Badge variant="secondary" className="bg-zinc-800">
                      Difficulty: Very Hard
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">The White Citadel</h3>
                  <p className="text-zinc-300 mb-6">
                    Summer Limptin has established a sanctuary in a remote European location known as the White Citadel.
                    She possesses a hybrid weapon code for LIONSMANE NFTs that could turn the tide against her family's
                    SCAM technology. However, Real Hates has discovered her location and dispatched elite operatives to
                    capture her and the weapon code.
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-500 mb-2">OBJECTIVES</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Reach the White Citadel before Limptin's forces</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Secure Summer Limptin and the hybrid weapon code</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Defend the Citadel against waves of SCAM-infected operatives</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Escort Summer to the extraction point</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-500 mb-2">REWARDS</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-zinc-800">
                        2500 XP
                      </Badge>
                      <Badge variant="secondary" className="bg-zinc-800">
                        Hybrid Weapon Schematics
                      </Badge>
                      <Badge variant="secondary" className="bg-zinc-800">
                        Summer Limptin as Combat Ally
                      </Badge>
                    </div>
                  </div>

                  <Link href={`/simulator?mission=9`}>
                    <Button className="bg-red-600 hover:bg-red-700">Start Mission</Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="digital">
          <div className="space-y-8">
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-64 md:h-auto md:col-span-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ghost%20.1-ut1Bvpb2T3UPcb2T3wUHxgn9CdA6nh.jpeg"
                    alt="The Nano Wraith"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900 md:hidden" />
                </div>
                <div className="p-6 md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-red-900 hover:bg-red-800">Mission 11</Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Digital Realm
                    </Badge>
                    <Badge variant="secondary" className="bg-zinc-800">
                      Difficulty: Extreme
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">The Nano Wraith Hunt</h3>
                  <p className="text-zinc-300 mb-6">
                    The Nano Wraith, Limptin's most dangerous operative, has entered the metaverse to hunt down and
                    destroy LIONSMANE NFTs. This digital assassin can corrupt and assimilate any digital entity it
                    encounters. You must track down the Wraith in the depths of the metaverse and eliminate this threat
                    before it destroys the resistance's digital assets.
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-500 mb-2">OBJECTIVES</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Enter the metaverse using advanced immersion technology</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Track the Nano Wraith through corrupted digital landscapes</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Set up a trap using LIONSMANE NFTs as bait</span>
                      </li>
                      <li className="flex items-start gap-2 text-zinc-400">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span>Defeat the Nano Wraith in digital combat</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-500 mb-2">REWARDS</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-zinc-800">
                        3000 XP
                      </Badge>
                      <Badge variant="secondary" className="bg-zinc-800">
                        Nano Wraith Abilities
                      </Badge>
                      <Badge variant="secondary" className="bg-zinc-800">
                        Digital Realm Safe Passage
                      </Badge>
                    </div>
                  </div>

                  <Link href={`/simulator?mission=11`}>
                    <Button className="bg-red-600 hover:bg-red-700">Start Mission</Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
