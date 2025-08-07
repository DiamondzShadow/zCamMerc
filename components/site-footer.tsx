import Link from "next/link"
import { Shield } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-red-500" />
              <span className="font-bold">SCAM MERCENAIRES</span>
            </div>
            <p className="text-zinc-400 text-sm text-center md:text-left">
              The fight for digital freedom in a world where crypto technology can control your mind.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
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

          <div className="flex flex-col items-center md:items-start">
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

          <div className="flex flex-col items-center md:items-start">
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

          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by{' '}
              <span className="font-medium text-foreground">
                Diamondz Crews, Diamondz Shadow & X Banks
              </span>
              . The source code is available on{' '}
              <Link
                href="https://github.com/scam-mercenaries"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2024 SCAM Mercenaries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
