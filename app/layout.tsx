import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Space_Grotesk, Sora, Open_Sans } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "ModeAI - Soulful Automation & AI Solutions",
  description: "Next-generation AI agents and intelligent business automation with human-centric design",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} ${sora.variable} ${openSans.variable} bg-primary-bg text-text-primary antialiased h-full m-0 p-0`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
