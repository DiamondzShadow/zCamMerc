import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { missionType, location, difficulty } = await request.json()

    // Simulate art generation delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Return existing mission art based on type
    const artMap: Record<string, string> = {
      infiltration: "/infiltration-mission.png",
      combat: "/cybernetic-overlord.png",
      hacking: "/neon-grid-breach.png",
      stealth: "/nano-metaverse-weave.png",
      territory: "/territory-mission.png",
      narrative: "/narrative-mission.png",
      adaptive: "/adaptive-mission.png",
    }

    const artUrl = artMap[missionType] || "/mission1-showcase.png"

    const missionArt = {
      id: `ART-${Date.now()}`,
      url: artUrl,
      title: `${missionType.charAt(0).toUpperCase() + missionType.slice(1)} Mission`,
      description: `AI-generated artwork for a ${difficulty} ${missionType} mission in ${location}`,
      style: "Cyberpunk",
      dimensions: "1024x1024",
      format: "PNG",
      generatedAt: new Date().toISOString(),
    }

    return NextResponse.json({ art: missionArt })
  } catch (error) {
    console.error("Error generating mission art:", error)
    return NextResponse.json({ error: "Failed to generate mission art" }, { status: 500 })
  }
}
