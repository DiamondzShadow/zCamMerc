import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { missionType, location, theme } = await request.json()

    // Use Fal AI to generate mission artwork
    const response = await fetch("https://fal.run/fal-ai/stable-diffusion-xl", {
      method: "POST",
      headers: {
        Authorization: `Key ${process.env.FAL_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `${missionType} mission in ${location}, ${theme} style, cyberpunk aesthetic, neon lighting, futuristic cityscape, digital art, high quality, cinematic`,
        image_size: "landscape_4_3",
        num_inference_steps: 30,
        guidance_scale: 7.5,
      }),
    })

    const result = await response.json()

    return NextResponse.json({
      imageUrl: result.images?.[0]?.url || "/placeholder.svg?height=300&width=400",
      description: `Mission artwork for ${missionType} in ${location}`,
      theme: theme,
      location: location,
      missionType: missionType,
    })
  } catch (error) {
    console.error("Error generating mission art:", error)

    // Return existing mission art as fallback
    const fallbackImages = [
      "/infiltration-mission.png",
      "/territory-mission.png",
      "/adaptive-mission.png",
      "/narrative-mission.png",
    ]

    const missionType = "Unknown" // Declare missionType variable
    const theme = "Unknown" // Declare theme variable
    const location = "Unknown" // Declare location variable

    return NextResponse.json({
      imageUrl: fallbackImages[Math.floor(Math.random() * fallbackImages.length)],
      description: `Mission artwork for ${missionType} in ${location}`,
      theme: theme,
      location: location,
      missionType: missionType,
    })
  }
}
