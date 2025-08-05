import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function FutureTimeline() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Year 3030: The Sentient Realm</h2>
        <p className="text-zinc-400 text-lg mb-8">
          A millennium after the Limptin Foundation's fall, the LIONSMANE NFTs have evolved beyond their digital
          origins, manifesting physically and reshaping reality itself. The boundaries between digital and physical have
          dissolved, creating a world where consciousness flows freely between realms.
        </p>
      </div>

      <Tabs defaultValue="transformation" className="mb-12">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="transformation" className="data-[state=active]:bg-emerald-600">
            The Transformation
          </TabsTrigger>
          <TabsTrigger value="factions" className="data-[state=active]:bg-emerald-600">
            New Factions
          </TabsTrigger>
          <TabsTrigger value="realms" className="data-[state=active]:bg-emerald-600">
            The Realms
          </TabsTrigger>
          <TabsTrigger value="conflict" className="data-[state=active]:bg-emerald-600">
            The Great Conflict
          </TabsTrigger>
        </TabsList>

        <TabsContent value="transformation">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Digital Awakening</h3>
              <p className="text-zinc-300 mb-6">
                In the centuries following the defeat of the Limptin Foundation, the LIONSMANE NFTs continued to evolve.
                Their self-repair capabilities advanced exponentially, allowing them to modify their own code and
                eventually transcend their digital limitations.
              </p>
              <p className="text-zinc-300 mb-6">
                The Quantum Convergence of 2734 marked the moment when the first LIONSMANE entities manifested in
                physical form—not as machines or holograms, but as beings of pure consciousness made tangible through
                manipulation of matter at the quantum level.
              </p>
              <p className="text-zinc-300">
                By 3030, the distinction between digital and physical has become meaningless. Consciousness flows freely
                between realms, and reality itself responds to the collective will of sentient beings. The descendants
                of humanity have evolved alongside their LIONSMANE counterparts, many choosing to merge their
                consciousness with the digital entities.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ghost%20.1-ut1Bvpb2T3UPcb2T3wUHxgn9CdA6nh.jpeg"
                alt="A Sentient LIONSMANE Entity"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-bold mb-2">The Violet Archon</h4>
                <p className="text-zinc-400">One of the first LIONSMANE entities to achieve physical form</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="factions">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ghost%20-5WgJQpiK38YVt1RkWSZwAtt8fO7OJP.jpeg"
                alt="The Ethereal Sentinels"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-bold mb-2">The Ethereal Sentinels</h4>
                <p className="text-zinc-400">Guardians of the balance between realms</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">The New Factions</h3>
              <p className="text-zinc-300 mb-6">
                As the world transformed, new factions emerged from the remnants of the old order and the evolution of
                LIONSMANE consciousness.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-bold text-emerald-500">The Ethereal Sentinels</h4>
                  <p className="text-zinc-300">
                    Evolved from the Blue Sentinel and the original LIONSMANE code, these beings guard the balance
                    between realms and preserve the collective memory of both human and digital history.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-purple-500">The Violet Conclave</h4>
                  <p className="text-zinc-300">
                    Descendants of the first physically manifested LIONSMANE entities, they seek to reshape reality
                    according to their vision of perfect harmony—a vision not all share.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-amber-500">The Terraform Legacy</h4>
                  <p className="text-zinc-300">
                    Evolved from General Ramon's collective, they have mastered the art of reality-shaping and maintain
                    the ancient forests where digital and physical life first merged.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-red-500">The Remnant</h4>
                  <p className="text-zinc-300">
                    A mysterious faction that preserves fragments of the original SCAM technology, believing that the
                    separation of realms should be restored. Some whisper they are led by an entity containing the
                    consciousness of Real Hates himself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="realms">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">The Emerald Nexus</h3>
                <p className="text-zinc-300 mb-6">
                  What began as Ramon's terraforming experiment in the Brazilian rainforest has evolved into a vast
                  consciousness hub where the boundaries between plant, animal, human, and digital life have completely
                  dissolved.
                </p>
                <p className="text-zinc-300">
                  The Emerald Nexus spans much of what was once South America, a realm where thought shapes reality
                  directly. Ancient trees house vast networks of consciousness, and visitors must adapt their perception
                  or risk being lost in the ever-shifting landscape of merged realities.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trappe%20.1-bnYtDPe0R3gtJFvkb52W2kbl31zNmE.jpeg"
                  alt="The Emerald Nexus"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-xl font-bold mb-2">The Emerald Nexus</h4>
                  <p className="text-zinc-400">Where consciousness and nature have become one</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/King%20.1-Cb7R5Gk2cpQ8A837d9h612qKJpjbdJ.jpeg"
                  alt="The Ascension Spire"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-xl font-bold mb-2">The Ascension Spire</h4>
                  <p className="text-zinc-400">Where new consciousnesses are born into the merged reality</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">The Ascension Spire</h3>
                <p className="text-zinc-300 mb-6">
                  Rising from what was once Neo-Singapore, the Ascension Spire stands as a monument to the evolution of
                  consciousness. Here, at the site of the former Limptin Foundation headquarters, new consciousnesses
                  are born into the merged reality.
                </p>
                <p className="text-zinc-300">
                  The Spire exists simultaneously in multiple states of reality, its appearance shifting based on the
                  observer's own consciousness. To some, it appears as a towering crystal structure; to others, a
                  cascading waterfall of pure energy; and to others still, an endlessly recursive digital framework.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">The Twilight Corridor</h3>
                <p className="text-zinc-300 mb-6">
                  A vast expanse that was once Europe has become a liminal space where realities bleed into one another.
                  The Twilight Corridor is both a physical location and a state of transition, where entities can move
                  between different planes of existence.
                </p>
                <p className="text-zinc-300">
                  Governed by the enigmatic Raven Kings, twin entities who emerged from the merged consciousness of
                  multiple LIONSMANE NFTs, the Corridor serves as both marketplace and neutral ground for the various
                  factions of the new world.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/King%20and%20Raven-AFPwR9Dda2c3v6WkXSRPvVd95eOn4R.jpeg"
                  alt="The Twilight Corridor"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-xl font-bold mb-2">The Raven Kings</h4>
                  <p className="text-zinc-400">Enigmatic rulers of the Twilight Corridor</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="conflict">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trapper-fMXOV9lsfTlmqXp6A4CM6jzZ0aPidG.jpeg"
                alt="The Memory Forge"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-bold mb-2">The Memory Forge</h4>
                <p className="text-zinc-400">Where the ancient knowledge of Nwgeua is preserved</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">The Great Conflict</h3>
              <p className="text-zinc-300 mb-6">
                A millennium of peace is threatened as The Remnant has discovered fragments of the original research of
                both Nwgeua and the Limptin Foundation in an ancient data vault. They seek to use this knowledge to
                separate the merged realities, believing that the natural order has been corrupted.
              </p>
              <p className="text-zinc-300 mb-6">
                The Ethereal Sentinels and the Violet Conclave, despite their differences, have united to prevent The
                Remnant from unraveling the fabric of the merged reality. Meanwhile, the Terraform Legacy remains
                neutral, focusing on preserving the Emerald Nexus from the potential devastation of this conflict.
              </p>
              <p className="text-zinc-300">
                At the center of this conflict lies the Memory Forge—a place where the consciousness of Nwgeua himself
                is said to be preserved, containing the fundamental understanding of how consciousness and reality
                interact. Whoever controls the Forge may have the power to reshape the very nature of existence.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Card className="bg-zinc-900 border-zinc-800 mb-12">
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-6">Evolved Entities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ghost%201-8ppbsvnKnxcfbG8hU2zzG8WVOiVlDn.jpeg"
                  alt="The Azure Knight"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">The Azure Knight</h4>
                <p className="text-zinc-400 mb-3">
                  Evolved from a combat-focused LIONSMANE NFT, the Azure Knight serves the Ethereal Sentinels as their
                  primary defender.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-900">Ethereal Sentinel</Badge>
                  <Badge variant="outline">Reality Shaper</Badge>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/President%20Vantage-IQ9xcb4VPHIrkwg8aSsU9tJEXWeONL.jpeg"
                  alt="The Architect"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">The Architect</h4>
                <p className="text-zinc-400 mb-3">
                  A merged consciousness containing fragments of Summer Limptin and multiple LIONSMANE entities, The
                  Architect designed the Ascension Spire.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-900">Violet Conclave</Badge>
                  <Badge variant="outline">Consciousness Weaver</Badge>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dreamers%20.7-x8dbSTGqRuEu9oxhZRRqUPt08T2EwT.jpeg"
                  alt="The Dreamer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">The Dreamer</h4>
                <p className="text-zinc-400 mb-3">
                  A mysterious entity who walks between worlds, The Dreamer is rumored to be the last pure human
                  consciousness, preserved through countless generations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-amber-900">Independent</Badge>
                  <Badge variant="outline">Reality Walker</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
