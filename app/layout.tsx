import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'System Design Interview Quiz - Practice and Mock Tests',
  description: 'Practice system design concepts with topic-wise quizzes, instant feedback, and full timed mock tests.',
  generator: 'System Design Quiz Platform',
  keywords: 'system design quiz, software architecture, scale, database, networking, distributed systems, mock test',
  authors: [{ name: 'Jatin Sharma' }],
  creator: 'Jatin Sharma',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
