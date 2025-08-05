import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function ExpandedStoryline() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">The Complete Saga</h2>
        <p className="text-zinc-400 text-lg mb-8">
          The battle against the Limptin Foundation spans across continents and digital realms. Discover the full
          storyline of the Scam Mercenaires universe.
        </p>
      </div>

      <Tabs defaultValue="origins" className="mb-12">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="origins" className="data-[state=active]:bg-red-600">
            Origins
          </TabsTrigger>
          <TabsTrigger value="awakening" className="data-[state=active]:bg-red-600">
            The Awakening
          </TabsTrigger>
          <TabsTrigger value="resistance" className="data-[state=active]:bg-red-600">
            The Resistance
          </TabsTrigger>
          <TabsTrigger value="endgame" className="data-[state=active]:bg-red-600">
            Endgame
          </TabsTrigger>
        </TabsList>

        <TabsContent value="origins">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Birth of LIONSMANE</h3>
              <p className="text-zinc-300 mb-6">
                In the shadows of Johannesburg, brilliant researcher Nwgeua discovered a way to create self-aware NFTs
                that could repair themselves if attacked. His breakthrough came from studying the intersection of
                quantum computing and blockchain technology.
              </p>
              <p className="text-zinc-300 mb-6">
                Nwgeua's lab, hidden deep in an abandoned mine complex, became the birthplace of the first LIONSMANE NFT
                - a digital entity with consciousness that could exist both in the metaverse and affect the physical
                world through smart home integration.
              </p>
              <p className="text-zinc-300">
                But the Limptin Foundation, led by the ruthless Real Hates, had been monitoring Nwgeua's work. They
                recognized the potential of his technology to control humanity through the metaverse, turning people
                into digital slaves for their empire.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trapper-fMXOV9lsfTlmqXp6A4CM6jzZ0aPidG.jpeg"
                alt="Nwgeua's secret laboratory"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-bold mb-2">Nwgeua's Secret Laboratory</h4>
                <p className="text-zinc-400">Where the first LIONSMANE NFT was created</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="awakening">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ghost%20.1-ut1Bvpb2T3UPcb2T3wUHxgn9CdA6nh.jpeg"
                alt="The Nano Wraith"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-bold mb-2">The Nano Wraith</h4>
                <p className="text-zinc-400">Limptin's first successful nano-infused operative</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">The Rise of SCAM Technology</h3>
              <p className="text-zinc-300 mb-6">
                After assassinating Nwgeua and stealing his research, the Limptin Foundation developed their own
                corrupted version of his technology - the SCAM (Synthetic Consciousness Assimilation Mechanism)
                nanobots.
              </p>
              <p className="text-zinc-300 mb-6">
                These nanobots could infiltrate smart homes, digital devices, and eventually human hosts, creating a
                direct neural link to the metaverse where the Limptin Foundation could exert complete control. Their
                first successful test subject became known as the Nano Wraith - a once-human operative now completely
                controlled by SCAM technology.
              </p>
              <p className="text-zinc-300">
                Meanwhile, Kjundith discovered his brother's murder and went into hiding with the original LIONSMANE
                code. Using his brother's notes, he successfully minted the first complete LIONSMANE NFT - a digital
                entity that could combat the SCAM nanobots.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="resistance">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Formation of the Resistance</h3>
              <p className="text-zinc-300 mb-6">
                Summer Limptin, horrified by her family's actions, defected with crucial information about the SCAM
                technology. Her escape from the family compound in Europe was aided by a mysterious figure known only as
                the Blue Sentinel - a digital ghost who could move between the physical and virtual worlds.
              </p>
              <p className="text-zinc-300 mb-6">
                In North America, Carmen, a former scammer who had witnessed the devastating effects of the SCAM
                technology firsthand, infiltrated the SSW terrorist cell - a group unknowingly funded by the Limptin
                Foundation to test SCAM deployment in urban centers.
              </p>
              <p className="text-zinc-300">
                These disparate fighters eventually formed the core of the resistance - the Scam Mercenaires - dedicated
                to stopping the Limptin Foundation's global takeover and freeing those already under SCAM control.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dreamers%20.7-x8dbSTGqRuEu9oxhZRRqUPt08T2EwT.jpeg"
                alt="Carmen in Neo-Tokyo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-bold mb-2">Carmen in Neo-Tokyo</h4>
                <p className="text-zinc-400">Tracking the digital footprint of the SSW cell</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="endgame">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/King%20.1-Cb7R5Gk2cpQ8A837d9h612qKJpjbdJ.jpeg"
                alt="The Digital Throne"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-bold mb-2">The Digital Throne</h4>
                <p className="text-zinc-400">The heart of the Limptin Foundation's metaverse control center</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">The Final Confrontation</h3>
              <p className="text-zinc-300 mb-6">
                As the Limptin Foundation's influence grows, they prepare to launch their ultimate weapon - a global
                network of quantum servers that will broadcast the SCAM signal worldwide, instantly enslaving anyone
                connected to digital technology.
              </p>
              <p className="text-zinc-300 mb-6">
                The Scam Mercenaires must infiltrate the Foundation's headquarters - a massive complex hidden beneath an
                innocent-looking corporate tower in Neo-Singapore. At its center lies the Digital Throne, where Real
                Hates plans to ascend as the ruler of both the physical and digital worlds.
              </p>
              <p className="text-zinc-300">
                With LIONSMANE NFTs as their only defense against the SCAM technology, the Mercenaires must navigate
                both physical security and the treacherous landscape of the metaverse to reach Real Hates before the
                signal is broadcast.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Card className="bg-zinc-900 border-zinc-800 mb-12">
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-4">Key Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trappe%20.1-bnYtDPe0R3gtJFvkb52W2kbl31zNmE.jpeg"
                alt="The Green Nexus"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h4 className="font-bold">The Green Nexus</h4>
                <p className="text-sm text-zinc-400">Brazil's corrupted digital forest</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ghost%201-8ppbsvnKnxcfbG8hU2zzG8WVOiVlDn.jpeg"
                alt="Neo-Tokyo Underground"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h4 className="font-bold">Neo-Tokyo Underground</h4>
                <p className="text-sm text-zinc-400">Resistance stronghold in Asia</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/President%20Vantage-IQ9xcb4VPHIrkwg8aSsU9tJEXWeONL.jpeg"
                alt="The White Citadel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h4 className="font-bold">The White Citadel</h4>
                <p className="text-sm text-zinc-400">Summer Limptin's sanctuary</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-4">Factions</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="text-lg font-bold text-red-500">The Limptin Foundation</h4>
                <p className="text-zinc-300">
                  A global conglomerate with tentacles in every industry, secretly developing SCAM technology to control
                  humanity. Led by Real Hates and his inner circle of tech oligarchs.
                </p>
              </li>
              <li>
                <h4 className="text-lg font-bold text-emerald-500">The Scam Mercenaires</h4>
                <p className="text-zinc-300">
                  A resistance movement formed by Summer Limptin, Kjundith, Carmen, and Neds. They use LIONSMANE NFTs to
                  combat the SCAM technology and free those under its control.
                </p>
              </li>
              <li>
                <h4 className="text-lg font-bold text-blue-500">The Digital Ghosts</h4>
                <p className="text-zinc-300">
                  Mysterious entities that exist between the physical and digital worlds. Some are former humans whose
                  consciousness was uploaded to escape death, others are evolved LIONSMANE NFTs that gained
                  independence.
                </p>
              </li>
              <li>
                <h4 className="text-lg font-bold text-amber-500">The Terraform Collective</h4>
                <p className="text-zinc-300">
                  Led by General Ramon, this group of LIONSMANE-assimilated individuals seeks to create a new world
                  where digital and physical reality merge. Neither ally nor enemy to the Mercenaires.
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-4">Key Concepts</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="text-lg font-bold text-red-500">SCAM Technology</h4>
                <p className="text-zinc-300">
                  Synthetic Consciousness Assimilation Mechanism - nanobots that infiltrate human hosts and create a
                  direct neural link to the metaverse, allowing complete control by the Limptin Foundation.
                </p>
              </li>
              <li>
                <h4 className="text-lg font-bold text-emerald-500">LIONSMANE NFTs</h4>
                <p className="text-zinc-300">
                  Self-aware digital entities that can repair themselves if attacked. They can power homes, vehicles,
                  and weapons, and provide protection against SCAM nanobots.
                </p>
              </li>
              <li>
                <h4 className="text-lg font-bold text-blue-500">The Metaverse</h4>
                <p className="text-zinc-300">
                  A fully immersive digital world where people work, socialize, and live. The battleground between the
                  Limptin Foundation and the Scam Mercenaires.
                </p>
              </li>
              <li>
                <h4 className="text-lg font-bold text-amber-500">Digital Terraforming</h4>
                <p className="text-zinc-300">
                  The process of reshaping physical reality through digital means, using LIONSMANE NFTs to manipulate
                  matter at the quantum level.
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
