"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/storyline", label: "Storyline" },
  { href: "/characters", label: "Characters" },
  { href: "/missions", label: "Missions" },
  { href: "/lionsmane", label: "LIONSMANE NFTs" },
  { href: "/analytics", label: "Analytics" },
  { href: "/transformations", label: "Transformations" },
  { href: "/weapons", label: "Weapons" },
  { href: "/hideouts", label: "Hideouts" },
  { href: "/gdd", label: "Game Design" },
]

export default function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/scam-mercenaries-logo.png" alt="Scam Mercenaries" width={40} height={40} className="rounded" />
            <span className="hidden font-bold sm:inline-block text-cyan-400">SCAM MERCENARIES</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-cyan-400 text-zinc-300">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5 text-cyan-400" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-zinc-900 border-zinc-800">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg transition-colors hover:text-cyan-400 text-zinc-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
