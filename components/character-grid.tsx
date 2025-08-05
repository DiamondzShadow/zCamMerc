import { characters } from "@/data/characters"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CharacterGrid() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">All Characters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {characters.map((character) => (
          <Card key={character.id} className="bg-zinc-900 border-zinc-800 overflow-hidden h-full flex flex-col">
            <div className="relative h-80 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${character.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <Badge
                  className={`${
                    character.faction === "hero"
                      ? "bg-emerald-900 hover:bg-emerald-800"
                      : character.faction === "villain"
                        ? "bg-red-900 hover:bg-red-800"
                        : "bg-amber-900 hover:bg-amber-800"
                  }`}
                >
                  {character.faction === "hero" ? "Hero" : character.faction === "villain" ? "Villain" : "Neutral"}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">{character.name}</h3>
              <p className="text-zinc-400 text-sm mb-4">{character.location}</p>
              <p className="text-zinc-300 mb-4 flex-1">{character.description}</p>
              <div className="mt-auto">
                <h4 className="text-sm font-semibold text-zinc-500 mb-2">ABILITIES</h4>
                <div className="flex flex-wrap gap-2">
                  {character.abilities.map((ability, index) => (
                    <Badge key={index} variant="outline" className="border-zinc-700">
                      {ability}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
