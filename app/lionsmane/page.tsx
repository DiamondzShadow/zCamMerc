import type { Metadata } from "next"
import NFTGallery from "@/components/nft-gallery"
import LionsmaneHierarchy from "@/components/lionsmane-hierarchy"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "LIONSMANE NFTs | SCAM Mercenaries",
  description:
    "The Sentient Economy: LIONSMANE x DIAMONDZ Edition - The Origin Wave. Presidential NFT collection on OpenSea.",
}

export default function LionsmanePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              LIONSMANE NFTs
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              The Sentient Economy: LIONSMANE x DIAMONDZ Edition - The Origin Wave. Presidential-level NFTs that evolve
              from Level 0 to Level 9, each unlocking new powers in the metaverse.
            </p>
            <a
              href="https://opensea.io/collection/the-sentient-economy-lionsmane-x-diamondz-edition-the-origin-wave"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              View Full Collection on OpenSea
            </a>
          </div>

          {/* NFT Gallery */}
          <div className="mb-16">
            <NFTGallery />
          </div>

          {/* Additional Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <LionsmaneHierarchy />
            </div>

            <div className="space-y-6">
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Evolution Path</h3>
                <div className="space-y-3 text-sm">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => (
                    <div key={level} className="flex items-center justify-between">
                      <span className="text-zinc-400">Level {level} President</span>
                      <span
                        className={`${
                          level < 2
                            ? "text-gray-400"
                            : level < 4
                              ? "text-green-400"
                              : level < 6
                                ? "text-blue-400"
                                : level < 8
                                  ? "text-purple-400"
                                  : level < 9
                                    ? "text-orange-400"
                                    : "text-red-400"
                        }`}
                      >
                        {level < 2
                          ? "Common"
                          : level < 4
                            ? "Uncommon"
                            : level < 6
                              ? "Rare"
                              : level < 8
                                ? "Epic"
                                : level < 9
                                  ? "Legendary"
                                  : "Mythic"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-red-800/30">
                <h3 className="text-xl font-bold mb-4 text-red-400">Presidential Authority</h3>
                <p className="text-zinc-300 text-sm mb-4">
                  Presidential LIONSMANE NFTs grant holders governance rights in the DIAMONDZ ecosystem and special
                  access to exclusive metaverse territories.
                </p>
                <div className="text-xs text-zinc-500">* Verified on OpenSea blockchain</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
