import type { Metadata } from "next"
import FutureTimeline from "@/components/future-timeline"
import FutureMissions from "@/components/future-missions"
import LionsmaneHierarchy from "@/components/lionsmane-hierarchy"
import FutureLionsmaneSystem from "@/components/future-lionsmane-system"

export const metadata: Metadata = {
  title: "Year 3030 | Scam Mercenaires",
  description: "Explore the far future where LIONSMANE NFTs have gained sentience and physical form.",
}

export default function FuturePage() {
  return (
    <div>
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/King%20.1-Cb7R5Gk2cpQ8A837d9h612qKJpjbdJ.jpeg')`,
            filter: "brightness(0.5)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black z-10" />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="text-emerald-500">YEAR</span> 3030
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto">
            The age of digital and physical separation is long past. LIONSMANE entities have transcended their origins,
            reshaping reality itself.
          </p>
        </div>
      </div>

      <FutureTimeline />
      <LionsmaneHierarchy />
      <FutureLionsmaneSystem />
      <FutureMissions />
    </div>
  )
}
