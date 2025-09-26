import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skull, Zap, Database, Brain } from "lucide-react"

export default function VillainSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-red-950/20 to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(220,38,38,0.15),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-red-600 to-orange-600 text-white border-0 px-6 py-2 text-sm font-bold">
            <Skull className="w-4 h-4 mr-2" />
            THE ENEMY REVEALED
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-red-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
            The Limptin Foundation
          </h2>
          <p className="text-xl text-zinc-300 leading-relaxed">
            A massive conglomerate with sinister intentions, seeking to control humanity through advanced technology,
            manipulation, and digital enslavement. They must be stopped at all costs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Real Hates Villain Card */}
          <Card className="relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 border-red-500/30">
            <div className="absolute inset-0">
              <img
                src="/villains/real-hates-epic.png"
                alt="Real Hates - Cybernetic Overlord"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-red-900/40 to-transparent" />
            </div>
            <CardContent className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[600px]">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-red-600 hover:bg-red-700 text-white border-0">CYBERNETIC OVERLORD</Badge>
                  <Badge className="bg-orange-600 hover:bg-orange-700 text-white border-0">LEVEL ∞</Badge>
                </div>
                <h3 className="text-4xl font-bold text-white group-hover:text-red-300 transition-colors">Real Hates</h3>
                <p className="text-red-200 font-medium text-lg">
                  The ruthless cybernetic overlord of the Limptin Foundation
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Enhanced with stolen NANO technology, Real Hates commands an army of digital slaves and corrupted AI
                  systems. His cybernetic implants allow him to interface directly with the metaverse, making him nearly
                  unstoppable in both digital and physical realms.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Foundation Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">The Limptin Foundation</h3>
              <p className="text-zinc-300 leading-relaxed text-lg mb-8">
                Their goals are to infiltrate all aspects of power to gain influence in important matters of respective
                nations, pushing their stolen NANO bot technology agenda across the globe.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border-red-500/30 hover:border-red-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-red-600/20 rounded-lg">
                      <Brain className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-red-300 mb-2">Nano-AI Fusion Technology</h4>
                      <p className="text-zinc-300">
                        A concoction of nano technology & artificially aware NFTs designed to control human
                        consciousness
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-900/20 to-yellow-900/20 border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-orange-600/20 rounded-lg">
                      <Database className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-orange-300 mb-2">Criminal Empire</h4>
                      <p className="text-zinc-300">
                        Built their fortune through conniving, slave trading, land theft, poison, and human bio-warfare
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-yellow-900/20 to-red-900/20 border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-yellow-600/20 rounded-lg">
                      <Zap className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-yellow-300 mb-2">Chaos Strategy</h4>
                      <p className="text-zinc-300">
                        Using tactics to create unstable environments to further their control over global systems
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
