import { Card, CardContent } from "@/components/ui/card"
import { Globe, Home, Cpu, Lock } from "lucide-react"

export default function StorySection() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">The Digital Dystopia</h2>
        <p className="text-zinc-400">
          We live in a digital world where the lines between virtual and reality have blurred. The metaverse has evolved
          into a community that fosters remote learning, working, and social connection. But a dark force threatens to
          corrupt this technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-red-900 to-purple-900 flex items-center justify-center">
            <Globe className="h-16 w-16 text-white/80" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">The Connected World</h3>
            <p className="text-zinc-400">
              Home addresses can be matched by crypto addresses. Smart homes are crypto-friendly to certain blockchains,
              with powerful tools to keep security fluid and swift.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-blue-900 to-cyan-900 flex items-center justify-center">
            <Home className="h-16 w-16 text-white/80" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">The Smart Home Revolution</h3>
            <p className="text-zinc-400">
              Our homes have become extensions of the digital realm, responding to our needs and securing our lives
              through blockchain technology and advanced AI systems.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-emerald-900 to-teal-900 flex items-center justify-center">
            <Cpu className="h-16 w-16 text-white/80" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">The Metaverse Evolution</h3>
            <p className="text-zinc-400">
              The metaverse has evolved beyond gaming into a full ecosystem where people learn, work, and socialize. It
              has become an integral part of human civilization.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-amber-900 to-red-900 flex items-center justify-center">
            <Lock className="h-16 w-16 text-white/80" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">The Looming Threat</h3>
            <p className="text-zinc-400">
              If this power were to get into the wrong hands, it could essentially lock people into a virtual world
              where they have no control over themselves or their lives.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
