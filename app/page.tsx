import Link from "next/link"
import { ArrowRight, Cpu, Users, FileCode, Award, BookOpen, Map } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import StorySection from "@/components/story-section"
import VillainSection from "@/components/villain-section"
import ThreatSection from "@/components/threat-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <>
      <HeroSection />

      <div id="story" className="py-20">
        <StorySection />
      </div>

      <div id="villains" className="py-20 bg-zinc-900">
        <VillainSection />
      </div>

      <div id="threat" className="py-20">
        <ThreatSection />
      </div>

      <section id="join" className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Resistance</h2>
            <p className="text-zinc-400 mb-8">
              The future of humanity depends on brave souls willing to stand against the Limptin Foundation. Will you
              join the fight to protect our digital freedom?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/simulator">
                <Button className="bg-red-600 hover:bg-red-700">
                  Start Your Mission <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/storyline">
                <Button variant="outline">Explore Full Storyline</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-emerald-900 mb-4">NEW</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Glimpse the Far Future</h2>
            <p className="text-zinc-400 mb-8">
              Journey to the year 3030, where LIONSMANE NFTs have gained sentience and physical form, reshaping reality
              itself. Explore a world where the boundaries between digital and physical have dissolved completely.
            </p>
            <Link href="/future">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Enter Year 3030 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore the Universe</h2>
            <p className="text-zinc-400">
              Dive deeper into the Scam Mercenaires universe. Meet the characters, explore the missions, and discover
              the power of LIONSMANE NFTs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Link href="/characters" className="block h-full">
              <Card className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700 transition-colors h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Characters</h3>
                  <p className="text-zinc-400">Meet the heroes and villains in the fight for the metaverse.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/expanded-missions" className="block h-full">
              <Card className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700 transition-colors h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Map className="h-12 w-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Extended Missions</h3>
                  <p className="text-zinc-400">
                    Explore the complete mission database spanning the globe and digital realm.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/storyline" className="block h-full">
              <Card className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700 transition-colors h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <BookOpen className="h-12 w-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Complete Storyline</h3>
                  <p className="text-zinc-400">Discover the full saga of the Scam Mercenaires universe.</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/lionsmane" className="block h-full">
              <Card className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700 transition-colors h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Cpu className="h-12 w-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">LIONSMANE NFTs</h3>
                  <p className="text-zinc-400">Discover the powerful NFTs that can save or destroy the metaverse.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/simulator" className="block h-full">
              <Card className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700 transition-colors h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <FileCode className="h-12 w-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Mission Simulator</h3>
                  <p className="text-zinc-400">
                    Experience a text-based simulation of missions in the Scam Mercenaires universe.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/character-progression" className="block h-full">
              <Card className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700 transition-colors h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Award className="h-12 w-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Character Progression</h3>
                  <p className="text-zinc-400">
                    Level up your character and upgrade skills to become more effective in your missions.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
