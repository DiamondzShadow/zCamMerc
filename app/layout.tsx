import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "SCAM Mercenaries | Fight the Digital Scam",
    template: "%s | SCAM Mercenaries",
  },
  description: "Join the resistance against the Limptin Foundation's NFT manipulation schemes. Build your team, claim territories, and fight for digital freedom in this cyberpunk universe.",
  keywords: ["NFT", "Web3", "Gaming", "Cyberpunk", "Blockchain", "Digital Assets", "Metaverse", "Hacking", "Stealth", "Network Security"],
  authors: [{ name: "SCAM Mercenaries Team" }],
  creator: "SCAM Mercenaries",
  publisher: "SCAM Mercenaries",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://scam-mercenaries.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scam-mercenaries.vercel.app",
    title: "SCAM Mercenaries | Fight the Digital Scam",
    description: "Join the resistance against the Limptin Foundation's NFT manipulation schemes.",
    siteName: "SCAM Mercenaries",
    images: [
      {
        url: "/neon-cityscape.png",
        width: 1200,
        height: 630,
        alt: "SCAM Mercenaries - Cyberpunk Digital World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SCAM Mercenaries | Fight the Digital Scam",
    description: "Join the resistance against the Limptin Foundation's NFT manipulation schemes.",
    images: ["/neon-cityscape.png"],
    creator: "@scammercenaries",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-zinc-950 text-white antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
