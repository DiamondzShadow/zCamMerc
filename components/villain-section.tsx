export default function VillainSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">The Villains</h2>
        <p className="text-zinc-400">
          The Milary Limptin Foundation, a large conglomerate with sinister intentions, seeks to control humanity
          through advanced technology and manipulation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative">
          <div
            className="aspect-[3/4] rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url('/cybernetic-overlord.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg" />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold mb-2">Real Hates</h3>
            <p className="text-zinc-400">The ruthless leader of the Limptin Foundation</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">The Limptin Foundation</h3>
          <p className="text-zinc-400 mb-6">
            The Limptin Foundation's goals are to infiltrate all aspects of power to gain influence in important matters
            of respective nations, pushing their stolen NANO bot technology agenda.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl">•</span>
              <span className="text-zinc-300">A concoction of nano technology & artificially aware NFTs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl">•</span>
              <span className="text-zinc-300">
                They have made all of their money from conniving, slave trading, land theft, poison, and human
                bio-warfare
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl">•</span>
              <span className="text-zinc-300">
                Using tactics to create unstable environments to further their control
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
