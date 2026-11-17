import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = { title: "Krish Khanvilkar Portfolio", description: "Krish Khanvilkar is a 0 to 1 product builder open to associate product manager and founder's office roles. Case studies: Seedr, recruit.ai, a hospital operations pilot." }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
