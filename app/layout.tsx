import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RedeemRight - Tax Intelligent Mutual Fund Redemption",
  description:
    "Withdraw your mutual funds with full visibility into tax impact, exit loads, and portfolio balance. Engineered for Indian investors under FY 2025-2026 tax rules.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    userScalable: false,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1F44" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "bg-background text-foreground antialiased"
        )}
      >
        {children}
      </body>
    </html>
  )
}
