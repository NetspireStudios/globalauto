import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Global Auto Repair - Professional Auto Services in Toronto',
  description: 'Global Auto Repair provides trusted automotive repair services in Toronto. Over 60 years of experience in auto maintenance, repairs, and inspections.',
  keywords: 'auto repair, car service, automotive, Toronto, brake repair, oil change, tire service',
  authors: [{ name: 'Global Auto Repair' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 