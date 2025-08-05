"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"

interface MissionArtGeneratorProps {
  missionText: string
  isLoading: boolean
}

export default function MissionArtGenerator({ missionText, isLoading }: MissionArtGeneratorProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isStaticImage, setIsStaticImage] = useState(false)

  // List of static cyberpunk images to use as direct fallbacks if API call fails
  const staticImages = [
    "/neon-cityscape.png",
    "/neon-grid-breach.png",
    "/neon-grid.png",
    "/neon-city-dreams.png",
    "/neural-connection.png",
  ]

  // Get a random static image
  const getRandomStaticImage = () => {
    const randomIndex = Math.floor(Math.random() * staticImages.length)
    return staticImages[randomIndex]
  }

  useEffect(() => {
    if (!missionText || missionText.length < 10 || isLoading) return

    const generateArt = async () => {
      setGenerating(true)
      setError(null)

      try {
        const response = await fetch("/api/generate-mission-art", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: missionText }),
        })

        if (!response.ok) {
          throw new Error(`Failed to generate image: ${response.status}`)
        }

        const data = await response.json()

        if (data.error) {
          throw new Error(data.error)
        }

        setImageUrl(data.imageUrl)
        setIsStaticImage(data.isStaticImage || false)
      } catch (err) {
        console.error("Error generating mission art:", err)
        // Use a direct fallback if the API call fails completely
        setError("Using static images")
        setImageUrl(getRandomStaticImage())
        setIsStaticImage(true)
      } finally {
        setGenerating(false)
      }
    }

    // Generate new art when the mission text changes significantly
    generateArt()
  }, [missionText, isLoading])

  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
      <CardContent className="p-0 relative">
        {generating || isLoading ? (
          <div className="aspect-video w-full">
            <Skeleton className="h-full w-full" />
          </div>
        ) : imageUrl ? (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt="Mission scene visualization"
              fill
              className="object-cover transition-all duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
            {isStaticImage && (
              <div className="absolute top-2 right-2 bg-black/70 text-xs text-amber-400 px-2 py-1 rounded">
                Static Image
              </div>
            )}
          </div>
        ) : (
          <div className="aspect-video w-full flex items-center justify-center bg-zinc-800">
            <p className="text-zinc-500 text-sm">Preparing mission visualization...</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
