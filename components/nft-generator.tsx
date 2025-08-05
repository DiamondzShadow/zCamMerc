"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"

export default function NFTGenerator() {
  const [prompt, setPrompt] = useState("")
  const [name, setName] = useState("")
  const [generating, setGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)

  const generateNFT = async () => {
    if (!prompt || !name) return

    setGenerating(true)

    // Simulate API call delay
    setTimeout(() => {
      // Use a placeholder image instead of making a real API call
      setGeneratedImage("/nfts/generated-nft.png")
      setGenerating(false)
    }, 2000)
  }

  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-6">
        <div className="mb-6">
          <label htmlFor="nft-name" className="block text-sm font-medium text-zinc-400 mb-2">
            NFT Name
          </label>
          <Input
            id="nft-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="LIONSMANE Defender"
            className="bg-zinc-800 border-zinc-700"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="nft-prompt" className="block text-sm font-medium text-zinc-400 mb-2">
            Description
          </label>
          <Textarea
            id="nft-prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A powerful LIONSMANE NFT with glowing mane and digital armor..."
            className="bg-zinc-800 border-zinc-700 min-h-[100px]"
          />
        </div>

        <Button
          onClick={generateNFT}
          disabled={generating || !prompt || !name}
          className="w-full bg-red-600 hover:bg-red-700"
        >
          {generating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
            </>
          ) : (
            "Generate LIONSMANE NFT"
          )}
        </Button>

        {generatedImage && (
          <div className="mt-6">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${generatedImage})` }}
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-bold text-lg">{name}</h3>
              <p className="text-zinc-400 text-sm mt-1">{prompt}</p>
              <Button className="mt-4 bg-red-600 hover:bg-red-700">Mint NFT</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
