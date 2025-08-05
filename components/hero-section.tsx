"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function HeroSection() {
  const [showTrailer, setShowTrailer] = useState(false)

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/neon-grid.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-red-500">SCAM</span> MERCENAIRES
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed">
            In a world where crypto technology can control your home, your mind, and your future, a sinister
            organization seeks to weaponize the metaverse against humanity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/simulator">
              <Button className="bg-red-600 hover:bg-red-700 text-lg py-6 px-8">
                Start Your Mission <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" className="text-lg py-6 px-8" onClick={() => setShowTrailer(true)}>
              Watch Trailer
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="h-px bg-zinc-700 flex-1" />
            <span className="text-zinc-500 text-sm uppercase tracking-wider">The digital resistance begins</span>
            <div className="h-px bg-zinc-700 flex-1" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />

      <Dialog open={showTrailer} onOpenChange={setShowTrailer}>
        <DialogContent className="sm:max-w-[800px] bg-zinc-900 border-zinc-800">
          <DialogHeader>
            <DialogTitle>Scam Mercenaires Trailer</DialogTitle>
            <DialogDescription>A glimpse into the fight against the Limptin Foundation</DialogDescription>
          </DialogHeader>
          <div className="aspect-video bg-zinc-800 rounded-md flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-zinc-400 mb-4">Trailer simulation</p>
              <p className="text-zinc-300 text-lg">
                An intense cyberpunk montage showing the heroes fighting against the Limptin Foundation's nano
                technology across global locations.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
