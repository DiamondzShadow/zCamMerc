import { Card, CardContent } from "@/components/ui/card"
import { Brain, Database, Zap } from "lucide-react"

export default function ThreatSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">The AI NFT Threat</h2>
        <p className="text-zinc-400">
          The Limptin Foundation wants the location of a secret AI NFT that has metadata to infiltrate the metaverse.
          They want to use it to mine human civilization like NFTs to increase their power base.
        </p>
      </div>

      <div className="relative mb-16">
        <div
          className="h-96 rounded-xl overflow-hidden"
          style={{
            backgroundImage: `url('/ai-threat-epic.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-xl" />
        <div className="absolute bottom-0 left-0 p-8 max-w-2xl">
          <h3 className="text-3xl font-bold mb-4 text-red-500">MOLECULAR TAKEDOWN INITIATED</h3>
          <p className="text-zinc-300">
            The AI Lion King has awakened. Cybernetic entities with glowing neural networks are infiltrating reality
            itself. These molecular-level nano-bots can reconstruct matter, control minds, and transform entire cities
            into digital prisons. The biggest SCAM in human history is unfolding.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-red-900/50 flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-lg font-bold mb-2">Mind Control</h3>
            <p className="text-zinc-400">
              Quantum computers can move through the house as nano particles infecting memory and brain patterns.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-red-900/50 flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-lg font-bold mb-2">Data Mining</h3>
            <p className="text-zinc-400">
              They want to use it to mine human civilization like NFTs to increase their power base.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-red-900/50 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-lg font-bold mb-2">System Control</h3>
            <p className="text-zinc-400">
              This forces the subject to go into a comatose state, leaving the physical body open to control.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
