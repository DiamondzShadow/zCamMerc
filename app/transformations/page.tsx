import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const transformations = [
  {
    id: 1,
    name: "Real Hates - Ascended Hunter",
    level: 9,
    type: "Reality Bender",
    image: "/characters/real-hates-hunter-lv9.jpeg",
    description:
      "The ultimate form of Real Hates, wielding reality-bending powers through pure digital energy manipulation.",
    abilities: ["Nano-Blade Mastery", "Energy Projection", "Digital Phasing", "Quantum Strike"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    name: "President Vantage - Warrior Form",
    level: 7,
    type: "Battle Empress",
    image: "/characters/president-vantage-warrior.jpeg",
    description:
      "President Vantage's combat transformation, channeling rainbow-spectrum energy through iridescent armor.",
    abilities: ["Spectrum Assault", "Rainbow Shield", "Prismatic Blast", "Armor of Light"],
    color: "from-purple-500 via-pink-500 to-yellow-500",
  },
  {
    id: 3,
    name: "Dreamer - Twin Lion Guardian",
    level: 8,
    type: "Spirit Summoner",
    image: "/characters/dreamer-rebel-twin-lions.png",
    description: "A mystical transformation that summons twin ethereal lion guardians through spiritual connection.",
    abilities: ["Twin Lion Summon", "Spirit Shield", "Ethereal Bind", "Guardian's Roar"],
    color: "from-cyan-400 to-purple-500",
  },
  {
    id: 4,
    name: "LIONSMANE vs Azure Knight",
    level: 10,
    type: "Urban Legend",
    image: "/characters/lionsmane-vs-azure-knight.jpeg",
    description: "The legendary confrontation between LIONSMANE and the Azure Knight Hunter in Neo-Tokyo's depths.",
    abilities: ["Pack Dominance", "Urban Warfare", "Lion's Pride", "Territory Control"],
    color: "from-amber-500 to-cyan-500",
  },
  {
    id: 5,
    name: "President Vantage - Energy Ascension",
    level: 9,
    type: "Digital Transcendence",
    image: "/characters/president-vantage-energy.jpeg",
    description:
      "The pure energy form where physical matter dissolves into cascading streams of digital consciousness.",
    abilities: ["Matter Dissolution", "Energy Cascade", "Digital Transcendence", "Quantum Consciousness"],
    color: "from-cyan-400 via-orange-400 to-purple-500",
  },
]

export default function TransformationsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/characters/lionsmane-vs-azure-knight.jpeg"
          alt="Character Transformations"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Character Transformations
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl">
            Witness the evolution of power as mercenaries ascend beyond their limits
          </p>
        </div>
      </section>

      {/* Transformations Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {transformations.map((transformation) => (
            <Card
              key={transformation.id}
              className="group bg-zinc-900 border-zinc-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src={transformation.image || "/placeholder.svg"}
                  alt={transformation.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge className={`bg-gradient-to-r ${transformation.color} border-0 text-white`}>
                    Level {transformation.level}
                  </Badge>
                  <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                    {transformation.type}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                  {transformation.name}
                </h3>
                <p className="text-zinc-400 mb-4">{transformation.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Abilities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {transformation.abilities.map((ability, index) => (
                      <Badge key={index} variant="outline" className="border-zinc-700 text-zinc-400">
                        {ability}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Full Width Showcase */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Transformation Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {transformations.map((transformation) => (
              <div
                key={transformation.id}
                className="relative aspect-square group overflow-hidden rounded-lg border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                <Image
                  src={transformation.image || "/placeholder.svg"}
                  alt={transformation.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm font-semibold text-white">{transformation.name}</p>
                    <p className="text-xs text-cyan-400">Level {transformation.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
