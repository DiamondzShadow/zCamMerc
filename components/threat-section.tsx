import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, Zap, AlertTriangle } from "lucide-react"

export default function ThreatSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Intense Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-purple-950/30 to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.15),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-6 py-2 text-sm font-bold animate-pulse">
            <AlertTriangle className="w-4 h-4 mr-2" />
            CRITICAL THREAT LEVEL
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-300 to-red-400 bg-clip-text text-transparent">
            The AI NFT Apocalypse
          </h2>
          <p className="text-xl text-zinc-300 leading-relaxed">
            The Limptin Foundation seeks the location of a secret AI NFT with metadata to infiltrate the metaverse. They
            want to use it to mine human civilization like NFTs, turning people into digital assets.
          </p>
        </div>

        {/* Epic Threat Showcase */}
        <Card className="mb-16 overflow-hidden group hover:scale-[1.01] transition-all duration-500 border-purple-500/30">
          <div className="relative h-[500px]">
            <img
              src="/ai-threat-epic.jpg"
              alt="AI Threat Visualization"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-900/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

            {/* Floating Alert Badges */}
            <div className="absolute top-8 left-8">
              <Badge className="bg-red-600 text-white border-0 text-lg px-4 py-2 animate-pulse">
                MOLECULAR TAKEDOWN INITIATED
              </Badge>
            </div>

            <div className="absolute bottom-8 left-8 right-8 max-w-3xl">
              <h3 className="text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text">
                The AI Lion King Has Awakened
              </h3>
              <p className="text-zinc-200 text-lg leading-relaxed">
                Cybernetic entities with glowing neural networks are infiltrating reality itself. These molecular-level
                nano-bots can reconstruct matter, control minds, and transform entire cities into digital prisons. The
                biggest SCAM in human history is unfolding before our eyes.
              </p>
            </div>
          </div>
        </Card>

        {/* Threat Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border-red-500/30 hover:border-red-400/50 hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-red-600 to-pink-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-300">Mind Control Protocol</h3>
              <p className="text-zinc-300 leading-relaxed">
                Quantum computers move through houses as nano particles, infecting memory and brain patterns. Victims
                become digital puppets controlled by the Foundation's AI systems.
              </p>
              <div className="mt-6 p-3 bg-red-600/10 rounded-lg border border-red-500/20">
                <span className="text-red-400 font-bold">Threat Level: MAXIMUM</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Human Data Mining</h3>
              <p className="text-zinc-300 leading-relaxed">
                They want to mine human civilization like NFTs, converting people's memories, emotions, and experiences
                into tradeable digital assets to increase their power base.
              </p>
              <div className="mt-6 p-3 bg-purple-600/10 rounded-lg border border-purple-500/20">
                <span className="text-purple-400 font-bold">Threat Level: CRITICAL</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/30 hover:border-yellow-400/50 hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">System Takeover</h3>
              <p className="text-zinc-300 leading-relaxed">
                Forces subjects into comatose states, leaving physical bodies open to complete control. The Foundation
                can puppet entire populations through their neural network.
              </p>
              <div className="mt-6 p-3 bg-yellow-600/10 rounded-lg border border-yellow-500/20">
                <span className="text-yellow-400 font-bold">Threat Level: EXTREME</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-cyan-500/30 inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">Join the Resistance</h3>
              <p className="text-zinc-300 mb-6">
                The fate of humanity hangs in the balance. Will you stand with the SCAM Mercenaries?
              </p>
              <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-0 px-6 py-3 text-lg font-bold hover:scale-105 transition-transform duration-300 cursor-pointer">
                BECOME A MERCENARY
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
