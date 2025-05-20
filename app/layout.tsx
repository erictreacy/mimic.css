import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// Initialize the Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mimic.css Demo",
  description: "A CSS Animation Library - Because everyone else is doing it!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="stylesheet" href="/mimic.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
