import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, Cpu } from "lucide-react"

export default function StorySection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-purple-950/20 to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-0 px-6 py-2 text-sm font-bold">
            THE DIGITAL DYSTOPIA
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
            Reality Has Been Hacked
          </h2>
          <p className="text-xl text-zinc-300 leading-relaxed">
            We live in a digital world where the lines between virtual and reality have blurred beyond recognition. The
            metaverse has evolved into a weapon of mass control, and only the SCAM Mercenaries stand between humanity
            and digital enslavement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Hero Story Card - Summer Limpkin */}
          <Card className="relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
            <div className="absolute inset-0">
              <img
                src="/story/summer-limpkin-president.png"
                alt="Summer Limpkin - Level 10 President"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-900/60 to-transparent" />
            </div>
            <CardContent className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[500px]">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-red-600 hover:bg-red-700 text-white border-0">LEVEL 10 PRESIDENT</Badge>
                  <Badge className="bg-purple-600 hover:bg-purple-700 text-white border-0">ASCENSION PROTOCOL</Badge>
                </div>
                <h3 className="text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  The Rise of Digital Overlords
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  In 2030, corporate presidents have evolved beyond human limitations. Summer Limpkin represents the new
                  breed of digital-enhanced leaders who control both virtual and physical realms with cybernetic
                  implants and neural interfaces commanding armies across the metaverse.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* City Street Scene */}
          <div className="space-y-8">
            <Card className="overflow-hidden group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
              <div className="relative h-64">
                <img
                  src="/story/cyberpunk-city-street.png"
                  alt="Cyberpunk City Streets"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-2xl font-bold text-white mb-2">The Neon Underground</h4>
                  <p className="text-cyan-300 font-medium">Where mercenaries gather and digital diamonds are traded</p>
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Streets of Neo-Tokyo</h3>
              <p className="text-zinc-300 leading-relaxed text-lg">
                The city never sleeps. Holographic advertisements float between towering skyscrapers while crowds of
                augmented humans navigate the neon-lit streets. This is where the resistance begins.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-600/20 to-transparent rounded-lg border border-blue-500/30">
                  <Cpu className="h-6 w-6 text-blue-400" />
                  <span className="text-blue-300 font-medium">Digital Markets</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-600/20 to-transparent rounded-lg border border-purple-500/30">
                  <Zap className="h-6 w-6 text-purple-400" />
                  <span className="text-purple-300 font-medium">Neural Networks</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-600/20 to-transparent rounded-lg border border-cyan-500/30">
                  <Shield className="h-6 w-6 text-cyan-400" />
                  <span className="text-cyan-300 font-medium">Quantum Defense</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hologram Room Scene */}
        <Card className="overflow-hidden group hover:scale-[1.01] transition-all duration-500">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-80 lg:h-auto">
              <img
                src="/story/hologram-room.jpeg"
                alt="Holographic Command Center"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
            </div>
            <CardContent className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-zinc-900/90 to-purple-900/20">
              <Badge className="mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-0 w-fit">
                COMMAND CENTERS
              </Badge>
              <h3 className="text-3xl font-bold text-white mb-6">Mission Control</h3>
              <p className="text-zinc-300 leading-relaxed text-lg mb-8">
                Every mercenary needs a base of operations. These high-tech hideouts feature holographic city maps,
                real-time surveillance feeds, and quantum-encrypted communication systems. From here, you plan missions,
                track targets, and coordinate with your team across the digital battlefield.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-lg border border-cyan-500/30">
                  <div className="text-cyan-400 font-bold text-lg">Holographic Intel</div>
                  <div className="text-zinc-400">3D city mapping & real-time data</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
                  <div className="text-purple-400 font-bold text-lg">Neural Interface</div>
                  <div className="text-zinc-400">Direct brain-computer connection</div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  )
}
