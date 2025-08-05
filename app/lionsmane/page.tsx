import type { Metadata } from "next"
import NFTGallery from "@/components/nft-gallery"
import NFTGenerator from "@/components/nft-generator"

export const metadata: Metadata = {
  title: "LIONSMANE NFTs | Scam Mercenaires",
  description: "Discover the powerful LIONSMANE NFTs that can save or destroy the metaverse.",
}

export default function LionsmanePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">LIONSMANE NFTs</h1>
        <p className="text-zinc-400 text-lg">
          Discover the powerful LIONSMANE NFTs - self-aware digital entities that can power homes, vehicles, and
          weapons. Created by Nwgeua, these NFTs are digitally indestructible and can repair themselves if attacked.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">LIONSMANE Collection</h2>
          <NFTGallery />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Generate Your LIONSMANE</h2>
          <NFTGenerator />
        </div>
      </div>
    </div>
  )
}
