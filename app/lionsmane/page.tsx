import type { Metadata } from "next"
import NFTGallery from "@/components/nft-gallery"
import NFTGenerator from "@/components/nft-generator"
import LionsmaneHierarchy from "@/components/lionsmane-hierarchy"

export const metadata: Metadata = {
  title: "LIONSMANE NFTs | SCAM Mercenaries",
  description:
    "Discover the powerful LIONSMANE NFTs that can save or destroy the metaverse. From basic guardians to ultimate blockchain-integrated predators.",
}

export default function LionsmanePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              LIONSMANE NFTs
            </h1>
            <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Discover the powerful LIONSMANE NFTs - self-aware digital entities that evolve from basic guardians to
              ultimate blockchain-integrated predators. Created by Nwgeua, these NFTs are digitally indestructible and
              can repair themselves if attacked.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">Evolution Gallery</h2>
              <NFTGallery />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Generate Your LIONSMANE</h2>
                <NFTGenerator />
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Evolution Path</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Basic → Mystical</span>
                    <span className="text-green-400">Level 25</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Mystical → VR Tech</span>
                    <span className="text-blue-400">Level 50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">VR Tech → Legendary</span>
                    <span className="text-purple-400">Level 99</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Legendary → Ultimate</span>
                    <span className="text-red-400">Level 100</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-red-800/30">
                <h3 className="text-xl font-bold mb-4 text-red-400">NFT Hunter Mode</h3>
                <p className="text-zinc-300 text-sm mb-4">
                  Ultimate Chain LIONSMANE can hunt and capture other NFTs in the metaverse, adding them to your
                  collection through blockchain dominance.
                </p>
                <div className="text-xs text-zinc-500">* Requires Level 100 Ultimate Evolution</div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <LionsmaneHierarchy />
          </div>
        </div>
      </div>
    </div>
  )
}
