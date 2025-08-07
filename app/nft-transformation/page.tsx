import type { Metadata } from "next"
import NFTTransformationShowcase from "@/components/nft-transformation-showcase"

export const metadata: Metadata = {
  title: "NFT Transformation | Scam Mercenaires",
  description: "Transform your digital assets in the SCAM Mercenaires universe.",
}

export default function NFTTransformationPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">NFT Transformation</h1>
          <p className="text-zinc-400 text-lg">
            Transform your digital assets and unlock new possibilities in the SCAM Mercenaires metaverse.
          </p>
        </div>

        <NFTTransformationShowcase />
      </div>
    </div>
  )
}
