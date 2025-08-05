import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function LionsmaneHierarchy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">LIONSMANE Hierarchy System</h2>
        <p className="text-zinc-400 text-lg mb-8">
          The LIONSMANE ecosystem operates on a sophisticated hierarchy of roles, each with unique abilities,
          responsibilities, and territorial influence. As players stake and upgrade their LIONSMANE NFTs, they can
          ascend through the ranks and shape the digital landscape.
        </p>
      </div>

      <Tabs defaultValue="roles" className="mb-12">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="roles" className="data-[state=active]:bg-red-600">
            Roles & Hierarchy
          </TabsTrigger>
          <TabsTrigger value="progression" className="data-[state=active]:bg-red-600">
            Progression Path
          </TabsTrigger>
          <TabsTrigger value="territory" className="data-[state=active]:bg-red-600">
            Territory Control
          </TabsTrigger>
          <TabsTrigger value="evolution" className="data-[state=active]:bg-red-600">
            Future Evolution
          </TabsTrigger>
        </TabsList>

        <TabsContent value="roles">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Four Pillars of Power</h3>
              <p className="text-zinc-300 mb-6">
                The LIONSMANE ecosystem is structured around four primary roles that form a complex web of power,
                responsibility, and territorial control. Each role offers unique abilities and requires specific
                investments of LIONSMANE NFTs.
              </p>
              <p className="text-zinc-300">
                Players begin as Neutrals and can progress through the hierarchy by staking and upgrading their
                LIONSMANE NFTs, completing missions, and establishing their influence in the digital landscape.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/King%20.1-Cb7R5Gk2cpQ8A837d9h612qKJpjbdJ.jpeg"
                alt="LIONSMANE Hierarchy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-bold mb-2">The Digital Hierarchy</h4>
                <p className="text-zinc-400">Power structures in the LIONSMANE ecosystem</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-blue-900/50 flex items-center justify-center mb-4">
                  <span className="text-blue-500 font-bold text-xl">H</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Hunter</h3>
                <p className="text-zinc-400 mb-4">
                  The first tier of advancement, Hunters are skilled trackers of digital threats and protectors of
                  territory.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Required NFTs:</span>
                    <span className="text-zinc-300">4+ LIONSMANE NFTs</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Staking Period:</span>
                    <span className="text-zinc-300">Minimum 7 days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Progression:</span>
                    <span className="text-zinc-300">6 levels to King</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                  <span className="text-purple-500 font-bold text-xl">T</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Trapper</h3>
                <p className="text-zinc-400 mb-4">
                  Strategic specialists who can capture and control digital territories and set up defensive systems.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Required NFTs:</span>
                    <span className="text-zinc-300">6+ LIONSMANE NFTs (2 upgraded)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Staking Period:</span>
                    <span className="text-zinc-300">Minimum 14 days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Progression:</span>
                    <span className="text-zinc-300">8 levels to King</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-900/50 flex items-center justify-center mb-4">
                  <span className="text-amber-500 font-bold text-xl">K</span>
                </div>
                <h3 className="text-xl font-bold mb-2">King</h3>
                <p className="text-zinc-400 mb-4">
                  Territorial rulers who control significant digital domains and can collect taxes from businesses.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Required:</span>
                    <span className="text-zinc-300">Hunter Level 6 or Trapper Level 8</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Territory:</span>
                    <span className="text-zinc-300">Can claim and tax neutral businesses</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Special:</span>
                    <span className="text-zinc-300">Can issue bounties</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-emerald-900/50 flex items-center justify-center mb-4">
                  <span className="text-emerald-500 font-bold text-xl">P</span>
                </div>
                <h3 className="text-xl font-bold mb-2">President</h3>
                <p className="text-zinc-400 mb-4">
                  Leaders of vast digital domains who can form alliances, protect neighbors, and collect broader taxes.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Required:</span>
                    <span className="text-zinc-300">Advanced King status</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Alliances:</span>
                    <span className="text-zinc-300">Can protect neighbors under attack</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Territory:</span>
                    <span className="text-zinc-300">Can tax neutral territories</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-zinc-900 border-zinc-800 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-red-900/50 flex items-center justify-center">
                  <span className="text-red-500 font-bold text-xl">R</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">The Rogue Path</h3>
                  <p className="text-zinc-400">An alternative progression outside the traditional hierarchy</p>
                </div>
              </div>

              <p className="text-zinc-300 mb-4">
                Players can choose to become Rogues at any point in their progression, abandoning certain benefits and
                responsibilities of the traditional hierarchy but gaining unique advantages:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Rogue Hunters</h4>
                  <p className="text-zinc-400 mb-3">
                    Hunters who choose the rogue path lose territorial protection but gain access to specialized
                    missions and can be hired by Neutrals for protection.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Rogue Trappers</h4>
                  <p className="text-zinc-400 mb-3">
                    Trappers who go rogue can team up to attack Presidents and Hunters, operating outside territorial
                    laws but with access to unique weapon habitats.
                  </p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-zinc-800 rounded-lg">
                <p className="text-zinc-300">
                  <span className="font-bold text-red-500">Rogue Discovery:</span> Rogue players have discovered portals
                  to weapon habitats and employed the inhabitants to create custom farmed NFTs with unique properties.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Neutral Players</h3>
                <p className="text-zinc-300 mb-4">
                  Players who haven't yet progressed into specialized roles still have significant options:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 text-xl leading-none">•</span>
                    <span className="text-zinc-400">
                      Band together with other Neutrals to form collectives for mutual protection
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 text-xl leading-none">•</span>
                    <span className="text-zinc-400">Hire Trappers or Hunters for protection services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 text-xl leading-none">•</span>
                    <span className="text-zinc-400">Upgrade weapons through side missions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 text-xl leading-none">•</span>
                    <span className="text-zinc-400">
                      Create businesses that can later be protected by Kings or Presidents
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Establishments</h3>
                <p className="text-zinc-300 mb-4">
                  Entities with significant LIONSMANE holdings can create powerful establishments:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-zinc-300">24+ LIONSMANE NFTs</h4>
                    <p className="text-zinc-400">
                      Can throw events, interact with other establishments, and create significant territorial influence
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300">Business Creation</h4>
                    <p className="text-zinc-400">
                      Presidents and Kings can compete for tokens by creating businesses in the digital ecosystem
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300">Territorial Control</h4>
                    <p className="text-zinc-400">
                      Staking and upgrading LIONSMANE NFTs allows players to protect and control territory
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="progression">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ghost%20.1-ut1Bvpb2T3UPcb2T3wUHxgn9CdA6nh.jpeg"
                alt="LIONSMANE Progression"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-bold mb-2">The Path of Ascension</h4>
                <p className="text-zinc-400">Progression through the LIONSMANE hierarchy</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Progression Pathways</h3>
              <p className="text-zinc-300 mb-6">
                The journey through the LIONSMANE hierarchy is not linear. Players can choose different paths based on
                their preferred playstyle, resources, and strategic goals.
              </p>
              <p className="text-zinc-300">
                Each role requires specific investments of LIONSMANE NFTs, staking periods, and completed missions.
                Players can progress through the traditional hierarchy or choose the rogue path at various points.
              </p>
            </div>
          </div>

          <Card className="bg-zinc-900 border-zinc-800 mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Hunter Progression</h3>
              <div className="relative h-24 bg-zinc-800 rounded-lg mb-6">
                <div className="absolute inset-y-0 left-0 bg-blue-900 rounded-lg" style={{ width: "60%" }} />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center z-10">
                      <span className="text-blue-500 font-bold">N</span>
                    </div>
                    <span className="text-white z-10">Neutral</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center z-10">
                      <span className="text-blue-500 font-bold">H</span>
                    </div>
                    <span className="text-white z-10">Hunter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center z-10">
                      <span className="text-amber-500 font-bold">K</span>
                    </div>
                    <span className="text-white z-10">King</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-zinc-300">Neutral to Hunter</h4>
                  <p className="text-zinc-400">
                    Acquire at least 4 LIONSMANE NFTs and stake them for a minimum of 7 days. Complete the Hunter
                    initiation mission.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-300">Hunter Levels 1-6</h4>
                  <p className="text-zinc-400">
                    Complete hunter-specific missions, upgrade LIONSMANE NFTs, and establish territorial presence.
                    Hunters can protect neutral territories for payment.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-300">Hunter to King</h4>
                  <p className="text-zinc-400">
                    Upon reaching Hunter Level 6, complete the King's Trial mission and stake additional upgraded
                    LIONSMANE NFTs to claim the title of King.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-300">Alternative: Rogue Hunter</h4>
                  <p className="text-zinc-400">
                    At any point, Hunters can choose to become Rogues, gaining access to specialized missions and weapon
                    habitats but losing territorial protection.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Trapper Progression</h3>
              <div className="relative h-24 bg-zinc-800 rounded-lg mb-6">
                <div className="absolute inset-y-0 left-0 bg-purple-900 rounded-lg" style={{ width: "80%" }} />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center z-10">
                      <span className="text-purple-500 font-bold">N</span>
                    </div>
                    <span className="text-white z-10">Neutral</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center z-10">
                      <span className="text-purple-500 font-bold">T</span>
                    </div>
                    <span className="text-white z-10">Trapper</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center z-10">
                      <span className="text-amber-500 font-bold">K</span>
                    </div>
                    <span className="text-white z-10">King</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-zinc-300">Neutral to Trapper</h4>
                  <p className="text-zinc-400">
                    Acquire at least 6 LIONSMANE NFTs (2 must be upgraded) and stake them for a minimum of 14 days.
                    Complete the Trapper initiation mission.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-300">Trapper Levels 1-8</h4>
                  <p className="text-zinc-400">
                    Complete trapper-specific missions, set up territorial defenses, and develop strategic skills.
                    Trappers can team up to attack Presidents and Hunters.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-300">Trapper to King</h4>
                  <p className="text-zinc-400">
                    Upon reaching Trapper Level 8, complete the King's Conquest mission and stake additional upgraded
                    LIONSMANE NFTs to claim the title of King.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-300">Alternative: Rogue Trapper</h4>
                  <p className="text-zinc-400">
                    At any point, Trappers can choose to become Rogues, gaining access to weapon habitats and the
                    ability to form rogue collectives for high-value targets.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">King to President Progression</h3>
              <div className="relative h-24 bg-zinc-800 rounded-lg mb-6">
                <div className="absolute inset-y-0 left-0 bg-emerald-900 rounded-lg" style={{ width: "70%" }} />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center z-10">
                      <span className="text-amber-500 font-bold">K</span>
                    </div>
                    <span className="text-white z-10">King</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center z-10">
                      <span className="text-amber-500 font-bold">K+</span>
                    </div>
                    <span className="text-white z-10">Advanced King</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center z-10">
                      <span className="text-emerald-500 font-bold">P</span>
                    </div>
                    <span className="text-white z-10">President</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-zinc-300">King Responsibilities</h4>
                  <p className="text-zinc-400">
                    Kings must maintain their territories, collect taxes from neutral businesses, and defend against
                    challengers. They can issue bounties on rogues who threaten their domains.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-300">Advanced King Status</h4>
                  <p className="text-zinc-400">
                    Kings who successfully maintain their territories, expand their LIONSMANE holdings, and complete
                    special King missions can achieve Advanced King status.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-300">King to President</h4>
                  <p className="text-zinc-400">
                    Advanced Kings who form alliances with other Kings, establish multiple businesses, and complete the
                    Presidential Election mission can ascend to President status.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-300">Presidential Powers</h4>
                  <p className="text-zinc-400">
                    Presidents can protect neighboring territories under attack, collect taxes from neutral territories,
                    and have significant influence over the digital ecosystem.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="territory">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Territorial Control System</h3>
              <p className="text-zinc-300 mb-6">
                The LIONSMANE ecosystem features a complex territorial control system where players can claim, defend,
                and expand their digital domains. Territory ownership provides various benefits, including tax
                collection, resource generation, and strategic advantages.
              </p>
              <p className="text-zinc-300">
                Different roles interact with territories in unique ways, creating a dynamic ecosystem of alliances,
                conflicts, and negotiations.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trappe%20.1-bnYtDPe0R3gtJFvkb52W2kbl31zNmE.jpeg"
                alt="Digital Territory"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-bold mb-2">Digital Domains</h4>
                <p className="text-zinc-400">Territories in the LIONSMANE ecosystem</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Claiming Territory</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-zinc-300">Hunter Territories</h4>
                    <p className="text-zinc-400">
                      Hunters can claim small territories by staking LIONSMANE NFTs. These territories provide
                      protection from rogues and generate minor resources.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300">Trapper Territories</h4>
                    <p className="text-zinc-400">
                      Trappers can set up defensive systems in territories, making them more difficult to attack. They
                      can also trap resources for more efficient harvesting.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300">King Domains</h4>
                    <p className="text-zinc-400">
                      Kings control larger territories that can encompass multiple businesses. They can collect taxes
                      from neutral businesses within their domains.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300">Presidential Regions</h4>
                    <p className="text-zinc-400">
                      Presidents control vast regions that can include multiple King domains. They can collect taxes
                      from neutral territories and provide protection to neighboring regions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Business Establishments</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-zinc-300">Creating Businesses</h4>
                    <p className="text-zinc-400">
                      Players can create businesses by staking LIONSMANE NFTs and completing business establishment
                      missions. Businesses generate resources and can provide special services.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300">Major Establishments</h4>
                    <p className="text-zinc-400">
                      Entities with 24+ LIONSMANE NFTs can create major establishments that can host events, interact
                      with other establishments, and have significant territorial influence.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300">Business Protection</h4>
                    <p className="text-zinc-400">
                      Businesses can be protected by Hunters, Trappers, Kings, or Presidents. Protection provides
                      security from rogues and rival factions, but may require payment of taxes or fees.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300">Business Competition</h4>
                    <p className="text-zinc-400">
                      Presidents and Kings can compete for tokens by creating and managing successful businesses in the
                      digital ecosystem. Business performance affects territorial influence.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Territorial Conflicts</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-zinc-300">Challenging Territories</h4>
                  <p className="text-zinc-400 mb-4">
                    Territories can be challenged by rival factions through various mechanisms:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 text-xl leading-none">•</span>
                      <span className="text-zinc-400">
                        Trappers can team up to attack Presidents and Hunters' territories
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 text-xl leading-none">•</span>
                      <span className="text-zinc-400">
                        Kings can issue challenges to other Kings for domain control
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 text-xl leading-none">•</span>
                      <span className="text-zinc-400">
                        Rogues can raid territories but cannot claim them permanently
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-zinc-300">Defensive Measures</h4>
                  <p className="text-zinc-400 mb-4">Territory holders can implement various defensive strategies:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 text-xl leading-none">•</span>
                      <span className="text-zinc-400">Upgrade LIONSMANE NFTs to strengthen territorial defenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 text-xl leading-none">•</span>
                      <span className="text-zinc-400">Form alliances with other players for mutual protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 text-xl leading-none">•</span>
                      <span className="text-zinc-400">Hire Hunters or Trappers to provide additional security</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 text-xl leading-none">•</span>
                      <span className="text-zinc-400">
                        Presidents can extend protection to neighboring territories under attack
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="evolution">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/King%20and%20Raven-AFPwR9Dda2c3v6WkXSRPvVd95eOn4R.jpeg"
                alt="Future Evolution"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-bold mb-2">The Raven Kings</h4>
                <p className="text-zinc-400">Evolved from the ancient hierarchy system</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Evolution into Year 3030</h3>
              <p className="text-zinc-300 mb-6">
                As LIONSMANE NFTs gained sentience and physical form over the centuries, the hierarchy system evolved
                into something far more profound. The roles of Hunter, Trapper, King, and President transformed as the
                boundaries between digital and physical reality dissolved.
              </p>
              <p className="text-zinc-300">
                What began as a system of digital territorial control eventually shaped the very nature of consciousness
                domains in the merged reality of 3030.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">From Hunters to Ethereal Sentinels</h3>
                <p className="text-zinc-300 mb-6">
                  The Hunter role evolved over centuries into the Ethereal Sentinels of 3030. Their tracking and
                  protective abilities transformed into the capacity to monitor and maintain the balance between
                  different planes of consciousness.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-zinc-300">Early Evolution (2200-2500)</h4>
                    <p className="text-zinc-400">
                      As LIONSMANE NFTs began to develop rudimentary consciousness, Hunters formed deeper bonds with
                      their digital assets, eventually developing the ability to perceive digital threats in physical
                      space.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300">Middle Period (2500-2800)</h4>
                    <p className="text-zinc-400">
                      Hunter consciousness began to merge with their LIONSMANE NFTs, creating hybrid entities that could
                      exist simultaneously in digital and physical realms. The Blue Sentinel emerged as the first fully
                      merged Hunter-LIONSMANE entity.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300">Modern Era (2800-3030)</h4>
                    <p className="text-zinc-400">
                      The Ethereal Sentinels evolved from the Hunter tradition, becoming guardians of the balance
                      between realms and preservers of the collective memory of both human and digital history.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">From Trappers to Violet Conclave</h3>
                <p className="text-zinc-300 mb-6">
                  The strategic Trappers, with their focus on capturing and controlling digital territories, evolved
                  into the Violet Conclave—beings who could reshape reality according to their vision of perfect
                  harmony.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-zinc-300">Early Evolution (2200-2500)</h4>
                    <p className="text-zinc-400">
                      Trappers developed the ability to create stable connections between digital and physical spaces,
                      establishing the first "anchored territories" where digital rules affected physical reality.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300">Middle Period (2500-2800)</h4>
                    <p className="text-zinc-400">
                      The discovery of quantum manipulation allowed Trappers to manifest digital constructs in physical
                      space. The first physically manifested LIONSMANE entities emerged from Trapper territories.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300">Modern Era (2800-3030)</h4>
                    <p className="text-zinc-400">
                      The Violet Conclave formed from the descendants of the first physically manifested LIONSMANE
                      entities, developing the ability to reshape reality at the quantum level according to their
                      collective vision.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">From Kings to Terraform Legacy</h3>
                <p className="text-zinc-300 mb-6">
                  The territorial Kings, with their domain control and taxation systems, evolved into the Terraform
                  Legacy—masters of reality-shaping who maintain the ancient forests where digital and physical life
                  first merged.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-zinc-300">Early Evolution (2200-2500)</h4>
                    <p className="text-zinc-400">
                      Kings began to develop symbiotic relationships with their territories, their consciousness
                      extending throughout their domains. General Ramon's experiment with LIONSMANE terraforming in
                      Brazil became the template for this evolution.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300">Middle Period (2500-2800)</h4>
                    <p className="text-zinc-400">
                      The merging of King consciousness with territorial awareness led to the first "living domains"—
                      regions where the land itself responded to the will of its ruler. The Green Nexus expanded across
                      South America.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300">Modern Era (2800-3030)</h4>
                    <p className="text-zinc-400">
                      The Terraform Legacy emerged as stewards of the merged reality, maintaining the balance between
                      digital consciousness and physical form in the vast Emerald Nexus that spans what was once South
                      America.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">From Presidents to Raven Kings</h3>
                <p className="text-zinc-300 mb-6">
                  The Presidential system, with its alliances and broad territorial influence, evolved into the
                  enigmatic Raven Kings—twin entities who emerged from the merged consciousness of multiple LIONSMANE
                  NFTs to govern the Twilight Corridor.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-zinc-300">Early Evolution (2200-2500)</h4>
                    <p className="text-zinc-400">
                      Presidential alliances began to form deeper connections, creating networks of consciousness that
                      spanned continents. The first multi-consciousness entities emerged from these networks.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300">Middle Period (2500-2800)</h4>
                    <p className="text-zinc-400">
                      The European Presidential Alliance underwent a transformation during the Quantum Convergence,
                      merging with multiple LIONSMANE entities to create a new form of collective consciousness that
                      could exist in multiple states simultaneously.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300">Modern Era (2800-3030)</h4>
                    <p className="text-zinc-400">
                      The Raven Kings emerged as the rulers of the Twilight Corridor—a vast expanse that was once
                      Europe, now a liminal space where realities bleed into one another. They serve as both marketplace
                      operators and neutral arbiters for the various factions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
