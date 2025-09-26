"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, Crown, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/scam-mercenaries-cover.png"
          alt="SCAM Mercenaries Cover Art"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo - Smaller Size */}
          <div className="mb-6">
            <Image
              src="/scam-mercenaries-logo.png"
              alt="SCAM Mercenaries Logo"
              width={150}
              height={150}
              className="mx-auto drop-shadow-2xl"
              priority
            />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
            SCAM
            <span className="block text-red-500 drop-shadow-2xl">MERCENARIES</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-zinc-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Enter the neon-soaked streets of Neo-Tokyo. Choose your mercenary, master cybernetic weapons, and fight for
            survival in the digital underground.
          </p>

          {/* Call to Action */}
          <div className="mb-12">
            <Link href="/simulator">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
              >
                <Zap className="mr-2 h-5 w-5" />
                Start Your Mission
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-black/40 backdrop-blur-sm border-zinc-800 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Epic Missions</h3>
                <p className="text-zinc-400">
                  Infiltrate corporate towers, hack neural networks, and survive the digital wasteland
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-sm border-zinc-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">LIONSMANE NFTs</h3>
                <p className="text-zinc-400">
                  Collect and transform unique digital assets that evolve with your gameplay
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-sm border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Choose Your Path</h3>
                <p className="text-zinc-400">
                  Build your mercenary team and forge alliances in the resistance against corporate control
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-zinc-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
