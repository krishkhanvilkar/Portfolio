import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = { title: "Krish Khanvilkar — Product, UX & AI", description: "Krish Khanvilkar is a product manager and UX designer building verifiable systems." }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
