import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RB Industries | Tecnología útil para negocios ambiciosos",
  description: "Diseñamos y construimos tecnología útil para negocios ambiciosos. Consultoría, desarrollo, producto. Siempre funcional. Siempre bien hecho.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-black`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
