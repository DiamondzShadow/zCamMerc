import type { Metadata } from "next"
import CharacterProgressionView from "@/components/character-progression-view"

export const metadata: Metadata = {
  title: "Character Progression | Scam Mercenaires",
  description: "Level up your character and upgrade skills in the fight against the Limptin Foundation.",
}

export default function CharacterProgressionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Character Progression</h1>
        <p className="text-zinc-400 text-lg">
          Level up your character and upgrade skills to become more effective in the fight against the Limptin
          Foundation. Complete missions to earn XP and skill points.
        </p>
      </div>

      <CharacterProgressionView />
    </div>
  )
}
