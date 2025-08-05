"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"

const locations = ["Europe", "North America", "South America", "Africa", "Asia", "Australia"]

export default function StorylineGenerator() {
  const [location, setLocation] = useState("")
  const [character, setCharacter] = useState("")
  const [generating, setGenerating] = useState(false)
  const [generatedStory, setGeneratedStory] = useState<string | null>(null)

  const generateStoryline = async () => {
    if (!location || !character) return

    setGenerating(true)

    try {
      const response = await fetch("/api/generate-storyline", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ location, character }),
      })

      const data = await response.json()

      if (data.story) {
        setGeneratedStory(data.story)
      }
    } catch (error) {
      console.error("Error generating storyline:", error)
    } finally {
      setGenerating(false)
    }
  }

  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Generate Your Storyline</h3>

        <div className="mb-4">
          <label className="block text-sm font-medium text-zinc-400 mb-2">Location</label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="bg-zinc-800 border-zinc-700">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mb-6">
          <label htmlFor="character-desc" className="block text-sm font-medium text-zinc-400 mb-2">
            Your Character
          </label>
          <Textarea
            id="character-desc"
            value={character}
            onChange={(e) => setCharacter(e.target.value)}
            placeholder="Describe your character's background and skills..."
            className="bg-zinc-800 border-zinc-700 min-h-[100px]"
          />
        </div>

        <Button
          onClick={generateStoryline}
          disabled={generating || !location || !character}
          className="w-full bg-red-600 hover:bg-red-700"
        >
          {generating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
            </>
          ) : (
            "Generate Storyline"
          )}
        </Button>

        {generatedStory && (
          <div className="mt-6 p-4 bg-zinc-800 rounded-lg">
            <h4 className="font-bold mb-2">Your Mission:</h4>
            <p className="text-zinc-300 whitespace-pre-line">{generatedStory}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
