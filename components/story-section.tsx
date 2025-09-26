export default function StorySection() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">The Digital Dystopia</h2>
        <p className="text-zinc-400">
          We live in a digital world where the lines between virtual and reality have blurred. The metaverse has evolved
          into a community that fosters remote learning, working, and social connection. But a dark force threatens to
          corrupt this technology.
        </p>
      </div>

      <div className="space-y-16">
        {/* Hero Story Card - Summer Limpkin */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30">
          <div className="absolute inset-0">
            <img
              src="/story/summer-limpkin-president.png"
              alt="Summer Limpkin - Level 10 President"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/50 to-transparent" />
          </div>
          <div className="relative p-8 md:p-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded">LEVEL 10 PRESIDENT</div>
                <div className="px-3 py-1 bg-purple-600 text-white text-sm font-bold rounded">ASCENSION PROTOCOL</div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">The Rise of Digital Overlords</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                In 2030, corporate presidents have evolved beyond human limitations. Summer Limpkin represents the new
                breed of digital-enhanced leaders who control both virtual and physical realms. With cybernetic implants
                and neural interfaces, they command armies of mercenaries across the metaverse.
              </p>
            </div>
          </div>
        </div>

        {/* City Street Scene */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="/story/cyberpunk-city-street.png"
              alt="Cyberpunk City Streets"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h4 className="text-xl font-bold text-white mb-2">The Neon Underground</h4>
              <p className="text-gray-300 text-sm">Where mercenaries gather and digital diamonds are traded</p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Streets of Neo-Tokyo</h3>
            <p className="text-gray-300 leading-relaxed">
              The city never sleeps. Holographic advertisements float between towering skyscrapers while crowds of
              augmented humans navigate the neon-lit streets. This is where the resistance begins - in the shadows of
              corporate power, where SCAM Mercenaries plan their next digital heist.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                Digital Markets
              </span>
              <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                Hologram Ads
              </span>
              <span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">
                Neural Networks
              </span>
            </div>
          </div>
        </div>

        {/* Hologram Room Scene */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Command Centers</h3>
            <p className="text-gray-300 leading-relaxed">
              Every mercenary needs a base of operations. These high-tech hideouts feature holographic city maps,
              real-time surveillance feeds, and quantum-encrypted communication systems. From here, you plan missions,
              track targets, and coordinate with your team across the digital battlefield.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-gray-800/50 rounded border border-gray-700">
                <div className="text-cyan-400 font-semibold">Holographic Intel</div>
                <div className="text-gray-400">3D city mapping</div>
              </div>
              <div className="p-3 bg-gray-800/50 rounded border border-gray-700">
                <div className="text-purple-400 font-semibold">Neural Interface</div>
                <div className="text-gray-400">Direct brain connection</div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl order-1 md:order-2">
            <img
              src="/story/hologram-room.jpeg"
              alt="Holographic Command Center"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  )
}
