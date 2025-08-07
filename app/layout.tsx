import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SCAM Mercenaries - Cyberpunk NFT Gaming',
  description: 'Join the digital resistance in this revolutionary cyberpunk NFT gaming experience. Led by Diamondz Crews, Diamondz Shadow, and X Banks.',
  keywords: ['cyberpunk', 'nft', 'gaming', 'web3', 'blockchain', 'scam-mercenaries'],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
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
