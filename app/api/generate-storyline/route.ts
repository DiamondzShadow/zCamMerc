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

Create a compelling narrative that:
1. Features the character in the specified location
2. Involves the corrupt Limptin Foundation and their NFT schemes
3. Includes cyberpunk elements (hacking, augmentations, corporate espionage)
4. References LIONSMANE NFTs and G4C tokens
5. Sets up potential missions and conflicts
6. Is 2-3 paragraphs long

The tone should be dark, gritty, and high-tech with corporate thriller elements.`,
      maxTokens: 400,
      temperature: 0.8,
    })

    return NextResponse.json({ storyline: text })
  } catch (error) {
    console.error("Error generating storyline:", error)
    return NextResponse.json({ error: "Failed to generate storyline" }, { status: 500 })
  }
}
