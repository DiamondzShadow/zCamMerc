import { generateText } from "ai"
import { deepinfra } from "@ai-sdk/deepinfra"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { missionType, character, difficulty } = await request.json()

    const { text } = await generateText({
      model: deepinfra("meta-llama/Llama-2-70b-chat-hf"),
      prompt: `Simulate a mission outcome for the Scam Mercenaires game:
      Mission Type: ${missionType}
      Character: ${character}
      Difficulty: ${difficulty}
      
      Generate a JSON response with:
      - success: boolean (based on difficulty and character skills)
      - events: array of 3-4 mission events that occurred
      - rewards: object with G4C tokens, items found, experience gained
      - consequences: any ongoing effects for future missions
      - nextObjective: what the character should do next
      
      Make it realistic based on the cyberpunk Scam Mercenaires universe.`,
    })

    // Parse the AI response and structure it
    const result = {
      success: Math.random() > (difficulty === "hard" ? 0.7 : difficulty === "medium" ? 0.4 : 0.2),
      events: [
        "Infiltrated the target building using nano-cloaking technology",
        "Encountered Limptin Foundation security drones",
        "Discovered encrypted LIONSMANE NFT data",
        "Narrowly escaped through the ventilation system",
      ],
      rewards: {
        g4c: Math.floor(Math.random() * 1000) + 500,
        items: ["Nano Tracer", "Encrypted Data Chip"],
        experience: Math.floor(Math.random() * 100) + 50,
      },
      consequences: "Limptin Foundation security has been alerted to your presence",
      nextObjective: "Decode the stolen NFT data at a safe house",
      aiNarrative: text,
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error simulating mission:", error)
    return NextResponse.json({ error: "Failed to simulate mission" }, { status: 500 })
  }
}
