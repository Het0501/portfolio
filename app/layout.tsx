import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Het Prajapati | AI, Cybersecurity & Software Engineering",
  description:
    "Portfolio of Het Prajapati, a Computer Science student building AI, cybersecurity, mobile, and full-stack software systems.",
  keywords: [
    "Het Prajapati",
    "AI",
    "Machine Learning",
    "Cybersecurity",
    "Software Engineering",
    "Android Development",
    "Portfolio",
    "REVA University",
  ],
  authors: [{ name: "Het Prajapati" }],
  creator: "Het Prajapati",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hetprajapati.dev",
    title: "Het Prajapati | AI, Cybersecurity & Software Engineering",
    description:
      "Portfolio of Het Prajapati, a Computer Science student building AI, cybersecurity, mobile, and full-stack software systems.",
    siteName: "Het Prajapati Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Het Prajapati | AI, Cybersecurity & Software Engineering",
    description:
      "Portfolio of Het Prajapati, a CS student building AI, cybersecurity, and software systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-background text-text-primary antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
