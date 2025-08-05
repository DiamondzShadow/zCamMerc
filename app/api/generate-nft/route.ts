import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { character, traits, powerLevel } = await request.json()

    // Generate NFT using Fal AI
    const response = await fetch("https://fal.run/fal-ai/stable-diffusion-xl", {
      method: "POST",
      headers: {
        Authorization: `Key ${process.env.FAL_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `LIONSMANE NFT character: ${character}, cyberpunk style, neon colors, digital art, futuristic warrior, ${traits.join(", ")}, high quality, 4k`,
        image_size: "square_hd",
        num_inference_steps: 30,
        guidance_scale: 7.5,
      }),
    })

    const imageResult = await response.json()

    // Generate NFT metadata
    const nftData = {
      name: `LIONSMANE #${Math.floor(Math.random() * 10000)}`,
      description: `A powerful LIONSMANE NFT featuring ${character} with enhanced cybernetic abilities`,
      image: imageResult.images?.[0]?.url || "/placeholder.svg?height=400&width=400",
      attributes: [
        { trait_type: "Character", value: character },
        { trait_type: "Power Level", value: powerLevel },
        { trait_type: "Rarity", value: powerLevel > 80 ? "Legendary" : powerLevel > 60 ? "Epic" : "Common" },
        ...traits.map((trait: string) => ({ trait_type: "Ability", value: trait })),
      ],
      powerLevel,
      blockchain: "Polygon",
      mintable: true,
    }

    return NextResponse.json(nftData)
  } catch (error) {
    console.error("Error generating NFT:", error)

    // Fallback NFT data if AI fails
    const fallbackNft = {
      name: `LIONSMANE #${Math.floor(Math.random() * 10000)}`,
      description: `A powerful LIONSMANE NFT featuring a character with enhanced cybernetic abilities`,
      image: "/placeholder.svg?height=400&width=400",
      attributes: [
        { trait_type: "Character", value: "Fallback Character" },
        { trait_type: "Power Level", value: 50 },
        { trait_type: "Rarity", value: "Common" },
      ],
      powerLevel: 50,
      blockchain: "Polygon",
      mintable: true,
    }

    return NextResponse.json(fallbackNft)
  }
}
