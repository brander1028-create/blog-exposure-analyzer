import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Exposure Analyzer',
  description: 'Analyze your blog exposure and reach',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
