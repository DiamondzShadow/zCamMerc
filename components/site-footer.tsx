import Link from "next/link"
import { Shield } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-red-500" />
              <span className="font-bold text-lg text-white">SCAM MERCENAIRES</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              The fight for digital freedom in a world where crypto technology can control your mind.
            </p>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/characters" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                  Characters
                </Link>
              </li>
              <li>
                <Link href="/missions" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                  Missions
                </Link>
              </li>
              <li>
                <Link href="/weapons" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                  Weapons
                </Link>
              </li>
            </ul>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Experience</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/simulator" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                  Mission Simulator
                </Link>
              </li>
              <li>
                <Link href="/lionsmane" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                  LIONSMANE NFTs
                </Link>
              </li>
              <li>
                <Link href="/hideouts" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                  Hideouts
                </Link>
              </li>
              <li>
                <Link
                  href="/territory-management"
                  className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors"
                >
                  Territory Control
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/gdd" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                  Game Design Doc
                </Link>
              </li>
              <li>
                <Link href="/whitepaper" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link href="/setup" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                  Setup Guide
                </Link>
              </li>
              <li>
                <Link href="/storyline" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">
                  Storyline
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-400">© 2024 SCAM Mercenaries. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <span>Built by</span>
            <span className="font-medium text-cyan-400">Diamondz Crews, Diamondz Shadow & X Banks</span>
            <span>•</span>
            <Link
              href="https://github.com/scam-mercenaries"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
