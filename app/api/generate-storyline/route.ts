import { generateText } from "ai"
import { groq } from "@ai-sdk/groq"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { character, location } = await request.json()

    const { text } = await generateText({
      model: groq("llama-3-70b-8192"),
      prompt: `Generate a compelling storyline for the Scam Mercenaires game. 
      Character: ${character}
      Location: ${location}
      
      Create a narrative that involves:
      - The character's mission in this location
      - Encounters with the Limptin Foundation or their operatives
      - LIONSMANE NFT technology elements
      - Cyberpunk themes with nano-technology
      - A cliffhanger ending that leads to the next mission
      
      Keep it engaging and under 300 words.`,
    })

    return NextResponse.json({ storyline: text })
  } catch (error) {
    console.error("Error generating storyline:", error)
    return NextResponse.json({ error: "Failed to generate storyline" }, { status: 500 })
  }
}
