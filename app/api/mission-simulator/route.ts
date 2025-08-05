import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { createDeepInfra } from "@ai-sdk/deepinfra"

const deepinfra = createDeepInfra({
  apiKey: "5xn7PGFnCfDfGBNkNqbvzRomGIHLPduT",
})

export async function POST(request: NextRequest) {
  try {
    const { action, choice, history } = await request.json()

    if (action === "start") {
      return NextResponse.json({
        step: {
          text: "You wake up in a small apartment in a city you don't recognize. Your head is pounding, and you notice a smartphone on the nightstand with a blinking notification. The streets outside are busy, and you can hear sirens in the distance. What do you do?",
          choices: [
            "Check the smartphone notification",
            "Look around the apartment for clues",
            "Go to the window and check outside",
            "Try to remember how you got here",
          ],
        },
      })
    }

    if (action === "choice") {
      const { text } = await generateText({
        model: deepinfra("meta-llama/Meta-Llama-3.1-70B-Instruct"),
        prompt: `You are running an immersive cyberpunk mission simulator for "Scam Mercenaires" - a game about mercenaries fighting against the corrupt Limptin Foundation's NFT manipulation schemes.

CONTEXT:
- Player is on a covert mission to expose Limptin Foundation's illegal activities
- Setting: Neo-Tokyo 2087, cyberpunk world with advanced AI, NFTs, and crypto
- Tone: Dark, gritty, high-tech thriller with corporate espionage elements

PREVIOUS STORY:
${history.join("\n")}

PLAYER'S CHOICE: "${choice}"

Generate the next story beat that:
1. Responds logically to the player's choice
2. Advances the mission with new challenges or discoveries
3. Includes cyberpunk elements (hacking, augmentations, corporate surveillance)
4. References the Scam Mercenaires universe (LIONSMANE NFTs, G4C tokens, Limptin Foundation)
5. Ends with exactly 4 meaningful choices for the player

Format as:
[2-3 paragraphs of narrative]

CHOICES:
A) [Action choice]
B) [Stealth/investigation choice] 
C) [Tech/hacking choice]
D) [Social/negotiation choice]`,
        maxTokens: 500,
        temperature: 0.8,
      })

      // Parse the AI response
      const sections = text.split("CHOICES:")
      const narrative = sections[0]?.trim() || text

      let choices = []
      if (sections[1]) {
        choices = sections[1]
          .split("\n")
          .filter((line) => line.match(/^[A-D]\)/))
          .map((line) => line.replace(/^[A-D]\)\s*/, "").trim())
      }

      // Ensure we have 4 choices
      if (choices.length !== 4) {
        choices = [
          "Take aggressive action",
          "Investigate carefully",
          "Use technology to your advantage",
          "Try to negotiate or deceive",
        ]
      }

      return NextResponse.json({
        step: {
          text: narrative,
          choices: choices,
        },
      })
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 })
  } catch (error) {
    console.error("Mission simulator error:", error)
    return NextResponse.json({ error: "Mission simulator temporarily unavailable" }, { status: 503 })
  }
}
