"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    {
      title: "Campaign",
      items: [
        { name: "Characters", href: "/characters" },
        { name: "Missions", href: "/missions" },
        { name: "Storyline", href: "/storyline" },
        { name: "Simulator", href: "/simulator" },
      ],
    },
    { name: "Hunters", href: "/hunters" },
    { name: "Weapons", href: "/weapons" },
    { name: "Territories", href: "/territory-management" },
    {
      title: "Lionsmane",
      items: [
        { name: "Lionsmane NFTs", href: "/lionsmane" },
        { name: "NFT Transform", href: "/nft-transformation" },
      ],
    },
    { name: "Future", href: "/future" },
    { name: "Whitepaper", href: "/whitepaper" },
    { name: "GDD", href: "/gdd" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/scam-mercenaries-logo.png"
              alt="SCAM Mercenaries"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="hidden font-bold sm:inline-block text-white">SCAM Mercenaries</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.items ? (
                  <div className="flex items-center space-x-1 cursor-pointer text-zinc-300 hover:text-white transition-colors">
                    <span>{item.title}</span>
                    <ChevronDown className="h-4 w-4" />
                    <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-zinc-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        {item.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href={item.href} className="text-zinc-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0 bg-black border-zinc-800">
            <Link href="/" className="flex items-center space-x-2 mb-6" onClick={() => setIsOpen(false)}>
              <Image
                src="/scam-mercenaries-logo.png"
                alt="SCAM Mercenaries"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold text-white">SCAM Mercenaries</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.items ? (
                      <div>
                        <div className="font-medium text-white mb-2">{item.title}</div>
                        <div className="ml-4 flex flex-col space-y-2">
                          {item.items.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="text-zinc-300 hover:text-white transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-zinc-300 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="flex items-center space-x-2 md:hidden">
              <Image
                src="/scam-mercenaries-logo.png"
                alt="SCAM Mercenaries"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold text-white">SCAM Mercenaries</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
