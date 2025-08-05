import { NextResponse } from "next/server"
import { generateText } from "ai"
import { createDeepInfra } from "@ai-sdk/deepinfra"

const deepinfra = createDeepInfra({
  apiKey: "5xn7PGFnCfDfGBNkNqbvzRomGIHLPduT",
})

export async function POST(request: Request) {
  try {
    const { character, location } = await request.json()

    const { text } = await generateText({
      model: deepinfra("meta-llama/Meta-Llama-3.1-70B-Instruct"),
      prompt: `Generate an immersive cyberpunk storyline for the Scam Mercenaires universe.

CHARACTER: ${character}
LOCATION: ${location}

Create a compelling narrative that includes:
- The character's mission against the Limptin Foundation
- References to LIONSMANE NFTs and their corruption
- Cyberpunk elements (hacking, augmentations, corporate espionage)
- A specific objective or challenge
- Atmospheric details about the location

Write 2-3 paragraphs that set up an engaging mission scenario.`,
      maxTokens: 400,
      temperature: 0.7,
    })

    return NextResponse.json({ storyline: text })
  } catch (error) {
    console.error("Error generating storyline:", error)
    return NextResponse.json({ error: "Failed to generate storyline" }, { status: 500 })
  }
}
