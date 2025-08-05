import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { missionText } = await request.json()

    // Simulate art generation delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Select appropriate mission art based on content
    const artOptions = [
      "/neon-grid.png",
      "/neon-cityscape.png",
      "/neon-grid-breach.png",
      "/neon-city-dreams.png",
      "/neural-connection.png",
      "/cybernetic-overlord.png",
      "/infiltration-mission.png",
      "/narrative-mission.png",
    ]

    // Simple content analysis for art selection
    let selectedArt = artOptions[0]
    if (missionText.toLowerCase().includes("hack")) {
      selectedArt = "/neon-grid-breach.png"
    } else if (missionText.toLowerCase().includes("city") || missionText.toLowerCase().includes("street")) {
      selectedArt = "/neon-cityscape.png"
    } else if (missionText.toLowerCase().includes("infiltrat")) {
      selectedArt = "/infiltration-mission.png"
    } else if (missionText.toLowerCase().includes("neural") || missionText.toLowerCase().includes("mind")) {
      selectedArt = "/neural-connection.png"
    } else {
      selectedArt = artOptions[Math.floor(Math.random() * artOptions.length)]
    }

    return NextResponse.json({
      imageUrl: selectedArt,
      prompt: `Cyberpunk mission art for: ${missionText.substring(0, 100)}...`,
      style: "Neon-lit cyberpunk aesthetic with high contrast and atmospheric lighting",
    })
  } catch (error) {
    console.error("Error generating mission art:", error)
    return NextResponse.json({ error: "Failed to generate mission art" }, { status: 500 })
  }
}
