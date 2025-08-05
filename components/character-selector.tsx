"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { characters } from "@/data/characters"
import Link from "next/link"
import { useLocalStorage } from "@/hooks/use-local-storage"
import type { Character } from "@/types/character"

export default function CharacterSelector() {
  const [selectedFaction, setSelectedFaction] = useState<string>("all")
  const [savedCharacters] = useLocalStorage<Character[]>("characters", characters)

  const filteredCharacters =
    selectedFaction === "all"
      ? savedCharacters.filter((char) => char.faction === "hero").slice(0, 3)
      : savedCharacters.filter((char) => char.faction === selectedFaction).slice(0, 3)

  return (
    <div className="bg-zinc-900 rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Choose Your Character</h2>
        <Link href="/character-progression">
          <Button variant="outline" size="sm">
            Character Progression
          </Button>
        </Link>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <Button
          variant={selectedFaction === "all" ? "default" : "outline"}
          onClick={() => setSelectedFaction("all")}
          className={selectedFaction === "all" ? "bg-red-600 hover:bg-red-700" : ""}
        >
          All Characters
        </Button>
        <Button
          variant={selectedFaction === "hero" ? "default" : "outline"}
          onClick={() => setSelectedFaction("hero")}
          className={selectedFaction === "hero" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
        >
          Heroes
        </Button>
        <Button
          variant={selectedFaction === "villain" ? "default" : "outline"}
          onClick={() => setSelectedFaction("villain")}
          className={selectedFaction === "villain" ? "bg-red-600 hover:bg-red-700" : ""}
        >
          Villains
        </Button>
        <Button
          variant={selectedFaction === "neutral" ? "default" : "outline"}
          onClick={() => setSelectedFaction("neutral")}
          className={selectedFaction === "neutral" ? "bg-amber-600 hover:bg-amber-700" : ""}
        >
          Neutral
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCharacters.map((character) => (
          <Card key={character.id} className="bg-zinc-800 border-zinc-700 overflow-hidden">
            <div className="relative h-48 bg-gradient-to-br from-zinc-700 to-zinc-900">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${character.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-bold">{character.name}</h3>
                <div className="text-sm text-zinc-400">Level {character.level}</div>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-zinc-400 text-sm mb-4">{character.description.substring(0, 100)}...</p>
              <div className="flex gap-2">
                <Link href={`/simulator?character=${character.id}`} className="flex-1">
                  <Button className="w-full bg-red-600 hover:bg-red-700">Select</Button>
                </Link>
                <Link href={`/character-progression?character=${character.id}`}>
                  <Button variant="outline">Skills</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
