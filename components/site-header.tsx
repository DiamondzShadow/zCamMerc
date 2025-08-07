"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Zap, Users, Map, Sword, Shield, Crown, FileText, Settings, Gamepad2, Target, Play, BookOpen, Palette, Clock } from 'lucide-react'

const navigation = [
  { name: "Home", href: "/", icon: Zap },
  { 
    name: "Campaign", 
    href: "/characters", 
    icon: Gamepad2,
    subItems: [
      { name: "Characters", href: "/characters", icon: Users },
      { name: "Missions", href: "/missions", icon: Target },
      { name: "Storyline", href: "/storyline", icon: BookOpen },
      { name: "Simulator", href: "/simulator", icon: Play }
    ]
  },
  { name: "Hunters", href: "/hunters", icon: Shield },
  { name: "Weapons", href: "/weapons", icon: Sword },
  { name: "Territory", href: "/territory-management", icon: Map },
  { 
    name: "Lionsmane", 
    href: "/lionsmane", 
    icon: Crown,
    subItems: [
      { name: "Lionsmane NFTs", href: "/lionsmane", icon: Crown },
      { name: "NFT Transform", href: "/nft-transformation", icon: Palette }
    ]
  },
  { name: "Future", href: "/future", icon: Clock },
  { name: "Whitepaper", href: "/whitepaper", icon: FileText },
  { name: "GDD", href: "/gdd", icon: Settings }
]

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const pathname = usePathname()

  const isActiveRoute = (href: string, subItems?: any[]) => {
    if (pathname === href) return true
    if (subItems) {
      return subItems.some(item => pathname === item.href)
    }
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              SCAM Mercenaries
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = isActiveRoute(item.href, item.subItems)
              
              return (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-2 text-sm font-medium px-3 py-2 rounded-md transition-colors hover:text-red-400 hover:bg-zinc-800/50 ${
                      isActive ? "text-red-400 bg-zinc-800/50" : "text-zinc-300"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                  
                  {/* Dropdown for items with subItems */}
                  {item.subItems && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-zinc-900 border border-zinc-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.subItems.map((subItem) => {
                        const SubIcon = subItem.icon
                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`flex items-center space-x-2 px-3 py-2 text-sm hover:bg-zinc-800 first:rounded-t-md last:rounded-b-md transition-colors ${
                              pathname === subItem.href ? "text-red-400 bg-zinc-800" : "text-zinc-300"
                            }`}
                          >
                            <SubIcon className="h-3 w-3" />
                            <span>{subItem.name}</span>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Medium Screen Navigation */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1">
            {navigation.slice(0, 6).map((item) => {
              const Icon = item.icon
              const isActive = isActiveRoute(item.href, item.subItems)
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-1 text-xs font-medium px-2 py-2 rounded transition-colors hover:text-red-400 hover:bg-zinc-800/50 ${
                    isActive ? "text-red-400 bg-zinc-800/50" : "text-zinc-300"
                  }`}
                >
                  <Icon className="h-3 w-3" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* Medium Screen Right Side */}
          <div className="hidden md:flex lg:hidden items-center space-x-1">
            {navigation.slice(6).map((item) => {
              const Icon = item.icon
              const isActive = isActiveRoute(item.href, item.subItems)
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-1 text-xs font-medium px-2 py-2 rounded transition-colors hover:text-red-400 hover:bg-zinc-800/50 ${
                    isActive ? "text-red-400 bg-zinc-800/50" : "text-zinc-300"
                  }`}
                >
                  <Icon className="h-3 w-3" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-zinc-950 border-zinc-800">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="h-6 w-6 rounded bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-bold text-lg bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    SCAM Mercenaries
                  </span>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon
                  const isActive = isActiveRoute(item.href, item.subItems)
                  const isExpanded = expandedItem === item.name
                  
                  return (
                    <div key={item.name}>
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-zinc-800 flex-1 ${
                            isActive ? "bg-zinc-800 text-red-400" : "text-zinc-300"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </Link>
                        
                        {item.subItems && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setExpandedItem(isExpanded ? null : item.name)}
                            className="px-2"
                          >
                            <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </Button>
                        )}
                      </div>
                      
                      {/* Mobile Submenu */}
                      {item.subItems && isExpanded && (
                        <div className="ml-6 mt-1 space-y-1">
                          {item.subItems.map((subItem) => {
                            const SubIcon = subItem.icon
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center space-x-2 px-3 py-2 rounded text-sm transition-colors hover:bg-zinc-800 ${
                                  pathname === subItem.href ? "bg-zinc-800 text-red-400" : "text-zinc-400"
                                }`}
                              >
                                <SubIcon className="h-3 w-3" />
                                <span>{subItem.name}</span>
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
