import type { Metadata } from "next"
import CharacterGrid from "@/components/character-grid"
import CharacterSelector from "@/components/character-selector"

export const metadata: Metadata = {
  title: "Characters | Scam Mercenaires",
  description: "Meet the key players in the fight against the Limptin Foundation.",
}

export default function CharactersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Characters</h1>
        <p className="text-zinc-400 text-lg">
          Meet the key players in the Scam Mercenaires universe - heroes fighting against the Limptin Foundation and
          villains seeking to control humanity through the metaverse.
        </p>
      </div>

      <CharacterSelector />

      <div className="mt-16">
        <CharacterGrid />
      </div>
    </div>
  )
}
