import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function FutureMissions() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Year 3030: Consciousness Quests</h2>
        <p className="text-zinc-400 text-lg mb-8">
          In this new age where reality is shaped by consciousness itself, your quests transcend traditional missions.
          You will navigate the merged realms, forge alliances with evolved entities, and determine the future of
          existence itself.
        </p>
      </div>

      <div className="space-y-12">
        <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 md:h-auto md:col-span-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trapper-fMXOV9lsfTlmqXp6A4CM6jzZ0aPidG.jpeg"
                alt="The Memory Forge"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900 md:hidden" />
            </div>
            <div className="p-6 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-emerald-900 hover:bg-emerald-800">Consciousness Quest</Badge>
                <Badge variant="outline" className="border-zinc-700">
                  The Memory Forge
                </Badge>
                <Badge variant="secondary" className="bg-zinc-800">
                  Difficulty: Transcendent
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-3">Echoes of Creation</h3>
              <p className="text-zinc-300 mb-6">
                The Memory Forge holds the preserved consciousness of Nwgeua, creator of the first LIONSMANE NFT. The
                Remnant seeks to extract his knowledge to separate the merged realities. You must navigate the labyrinth
                of memories within the Forge to commune with Nwgeua's consciousness and determine whether the merged
                reality should be preserved or undone.
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-zinc-500 mb-2">OBJECTIVES</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-zinc-400">
                    <span className="text-emerald-500 text-xl leading-none">•</span>
                    <span>Attune your consciousness to the Memory Forge's unique reality</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-400">
                    <span className="text-emerald-500 text-xl leading-none">•</span>
                    <span>Navigate through key memories of the original LIONSMANE creation</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-400">
                    <span className="text-emerald-500 text-xl leading-none">•</span>
                    <span>Defend the Forge from Remnant consciousness intrusions</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-400">
                    <span className="text-emerald-500 text-xl leading-none">•</span>
                    <span>Commune with Nwgeua's preserved consciousness</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-zinc-500 mb-2">REWARDS</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-zinc-800">
                    Creation Insight
                  </Badge>
                  <Badge variant="secondary" className="bg-zinc-800">
                    Memory Weaving Ability
                  </Badge>
                  <Badge variant="secondary" className="bg-zinc-800">
                    Nwgeua's Blessing
                  </Badge>
                </div>
              </div>

              <Link href={`/future-simulator?quest=1`}>
                <Button className="bg-emerald-600 hover:bg-emerald-700">Begin Consciousness Quest</Button>
              </Link>
            </div>
          </div>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 md:h-auto md:col-span-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trappe%20.1-bnYtDPe0R3gtJFvkb52W2kbl31zNmE.jpeg"
                alt="The Emerald Nexus"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900 md:hidden" />
            </div>
            <div className="p-6 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-emerald-900 hover:bg-emerald-800">Consciousness Quest</Badge>
                <Badge variant="outline" className="border-zinc-700">
                  The Emerald Nexus
                </Badge>
                <Badge variant="secondary" className="bg-zinc-800">
                  Difficulty: Transcendent
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-3">The Root Network</h3>
              <p className="text-zinc-300 mb-6">
                Deep within the Emerald Nexus, the ancient consciousness network of merged plant, animal, and digital
                life is being corrupted by fragments of SCAM technology deployed by The Remnant. You must journey
                through the ever-shifting landscape of the Nexus, cleanse the corruption, and help the Terraform Legacy
                stabilize the merged reality.
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-zinc-500 mb-2">OBJECTIVES</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-zinc-400">
                    <span className="text-emerald-500 text-xl leading-none">•</span>
                    <span>Merge your consciousness with the Root Network</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-400">
                    <span className="text-emerald-500 text-xl leading-none">•</span>
                    <span>Identify and isolate corrupted consciousness nodes</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-400">
                    <span className="text-emerald-500 text-xl leading-none">•</span>
                    <span>Deploy evolved LIONSMANE countermeasures to cleanse SCAM fragments</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-400">
                    <span className="text-emerald-500 text-xl leading-none">•</span>
                    <span>Commune with the Elder Consciousness to stabilize the Nexus</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-zinc-500 mb-2">REWARDS</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-zinc-800">
                    Nature Communion
                  </Badge>
                  <Badge variant="secondary" className="bg-zinc-800">
                    Reality Shaping (Plant Domain)
                  </Badge>
                  <Badge variant="secondary" className="bg-zinc-800">
                    Terraform Legacy Alliance
                  </Badge>
                </div>
              </div>

              <Link href={`/future-simulator?quest=2`}>
                <Button className="bg-emerald-600 hover:bg-emerald-700">Begin Consciousness Quest</Button>
              </Link>
            </div>
          </div>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 md:h-auto md:col-span-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/King%20and%20Raven-AFPwR9Dda2c3v6WkXSRPvVd95eOn4R.jpeg"
                alt="The Twilight Corridor"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900 md:hidden" />
            </div>
            <div className="p-6 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-emerald-900 hover:bg-emerald-800">Consciousness Quest</Badge>
                <Badge variant="outline" className="border-zinc-700">
                  The Twilight Corridor
                </Badge>
                <Badge variant="secondary" className="bg-zinc-800">
                  Difficulty: Transcendent
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-3">The Raven's Bargain</h3>
              <p className="text-zinc-300 mb-6">
                The enigmatic Raven Kings who rule the Twilight Corridor have called a grand conclave of all factions.
                They claim to possess knowledge that could either heal the growing rift between realities or permanently
                separate them. As a neutral entity, you must navigate the treacherous politics of the conclave, uncover
                the true intentions of the Raven Kings, and make a choice that will affect all of existence.
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-zinc-500 mb-2">OBJECTIVES</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-zinc-400">
                    <span className="text-emerald-500 text-xl leading-none">•</span>
                    <span>Navigate the shifting architecture of the Twilight Corridor</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-400">
                    <span className="text-emerald-500 text-xl leading-none">•</span>
                    <span>Commune with representatives of all four major factions</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-400">
                    <span className="text-emerald-500 text-xl leading-none">•</span>
                    <span>Uncover the true nature of the Raven Kings' knowledge</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-400">
                    <span className="text-emerald-500 text-xl leading-none">•</span>
                    <span>Make a choice that will determine the future of the merged reality</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-zinc-500 mb-2">REWARDS</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-zinc-800">
                    Dimensional Sight
                  </Badge>
                  <Badge variant="secondary" className="bg-zinc-800">
                    Reality Negotiation
                  </Badge>
                  <Badge variant="secondary" className="bg-zinc-800">
                    Raven Kings' Favor
                  </Badge>
                </div>
              </div>

              <Link href={`/future-simulator?quest=3`}>
                <Button className="bg-emerald-600 hover:bg-emerald-700">Begin Consciousness Quest</Button>
              </Link>
            </div>
          </div>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 md:h-auto md:col-span-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/King%20.1-Cb7R5Gk2cpQ8A837d9h612qKJpjbdJ.jpeg"
                alt="The Ascension Spire"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900 md:hidden" />
            </div>
            <div className="p-6 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-emerald-900 hover:bg-emerald-800">Consciousness Quest</Badge>
                <Badge variant="outline" className="border-zinc-700">
                  The Ascension Spire
                </Badge>
                <Badge variant="secondary" className="bg-zinc-800">
                  Difficulty: Transcendent
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-3">The Final Convergence</h3>
              <p className="text-zinc-300 mb-6">
                The conflict between factions has reached its climax at the Ascension Spire. The Remnant has activated
                an ancient device derived from SCAM technology that threatens to unravel the merged reality. The
                Ethereal Sentinels and Violet Conclave are locked in battle with The Remnant, while the Terraform Legacy
                works to stabilize the fracturing reality. You must ascend the Spire, confront the leader of The
                Remnant, and make the ultimate choice about the nature of existence.
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-zinc-500 mb-2">OBJECTIVES</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-zinc-400">
                    <span className="text-emerald-500 text-xl leading-none">•</span>
                    <span>Navigate the reality-shifting chambers of the Ascension Spire</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-400">
                    <span className="text-emerald-500 text-xl leading-none">•</span>
                    <span>Gather allies from all factions who support your vision</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-400">
                    <span className="text-emerald-500 text-xl leading-none">•</span>
                    <span>
                      Confront the leader of The Remnant—a being containing fragments of Real Hates' consciousness
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-400">
                    <span className="text-emerald-500 text-xl leading-none">•</span>
                    <span>Choose the future of reality: separation, preservation, or a new form of existence</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-zinc-500 mb-2">REWARDS</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-zinc-800">
                    Reality Architect
                  </Badge>
                  <Badge variant="secondary" className="bg-zinc-800">
                    Consciousness Ascension
                  </Badge>
                  <Badge variant="secondary" className="bg-zinc-800">
                    The Final Choice
                  </Badge>
                </div>
              </div>

              <Link href={`/future-simulator?quest=4`}>
                <Button className="bg-emerald-600 hover:bg-emerald-700">Begin Consciousness Quest</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
