import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ADI Exam Preparation - Data Structures & Algorithms Practice Platform',
  description: 'Master Data Structures and Algorithms with 149 comprehensive questions for ADI exam preparation. Practice complexity analysis, algorithmic paradigms, problem-solving techniques, and advanced DSA concepts.',
  generator: 'ADI Exam Preparation Platform',
  keywords: 'ADI exam, data structures, algorithms, complexity analysis, recursion, dynamic programming, greedy algorithms, DSA practice, technical interviews, algorithmic thinking',
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
