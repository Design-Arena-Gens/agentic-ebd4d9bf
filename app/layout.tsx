import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gupta Footwear - Premium Quality Shoes',
  description: 'Shop the finest collection of footwear for men, women, and kids',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
