import Link from "next/link"
import { Shield } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-red-500" />
              <span className="font-bold">SCAM MERCENAIRES</span>
            </div>
            <p className="text-zinc-400 text-sm">
              The fight for digital freedom in a world where crypto technology can control your mind.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/characters" className="text-zinc-400 hover:text-white text-sm">
                  Characters
                </Link>
              </li>
              <li>
                <Link href="/missions" className="text-zinc-400 hover:text-white text-sm">
                  Missions
                </Link>
              </li>
              <li>
                <Link href="/lionsmane" className="text-zinc-400 hover:text-white text-sm">
                  LIONSMANE NFTs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Experience</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/simulator" className="text-zinc-400 hover:text-white text-sm">
                  Mission Simulator
                </Link>
              </li>
              <li>
                <Link href="/lionsmane" className="text-zinc-400 hover:text-white text-sm">
                  NFT Generator
                </Link>
              </li>
              <li>
                <Link href="/characters" className="text-zinc-400 hover:text-white text-sm">
                  Meet the Heroes
                </Link>
              </li>
              <li>
                <Link href="/missions" className="text-zinc-400 hover:text-white text-sm">
                  Mission Details
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/simulator" className="text-zinc-400 hover:text-white text-sm">
                  Join the Resistance
                </Link>
              </li>
              <li>
                <Link href="/lionsmane" className="text-zinc-400 hover:text-white text-sm">
                  Create Your NFT
                </Link>
              </li>
              <li>
                <Link href="/missions" className="text-zinc-400 hover:text-white text-sm">
                  Start Your Mission
                </Link>
              </li>
              <li>
                <Link href="/characters" className="text-zinc-400 hover:text-white text-sm">
                  Choose Your Character
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-zinc-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Scam Mercenaires. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/simulator" className="text-zinc-400 hover:text-white text-sm">
              Privacy
            </Link>
            <Link href="/simulator" className="text-zinc-400 hover:text-white text-sm">
              Terms
            </Link>
            <Link href="/simulator" className="text-zinc-400 hover:text-white text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
