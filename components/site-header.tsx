"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Zap } from "lucide-react"

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Story", href: "/storyline" },
    { name: "Characters", href: "/characters" },
    { name: "Missions", href: "/missions" },
    { name: "LIONSMANE", href: "/lionsmane" },
    { name: "Simulator", href: "/simulator" },
    { name: "Docs", href: "/gdd" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Zap className="h-6 w-6 text-red-500" />
            <span className="hidden font-bold sm:inline-block text-white">Scam Mercenaires</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="transition-colors hover:text-red-400 text-zinc-300">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5 text-white" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0 bg-black border-zinc-800">
            <Link className="flex items-center space-x-2" href="/" onClick={() => setIsOpen(false)}>
              <Zap className="h-6 w-6 text-red-500" />
              <span className="font-bold text-white">Scam Mercenaires</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-zinc-300 hover:text-red-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link className="flex items-center space-x-2 md:hidden" href="/">
              <Zap className="h-6 w-6 text-red-500" />
              <span className="font-bold text-white">Scam Mercenaires</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
