import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Quiz Master - Interactive Programming Quizzes',
  description: 'Master programming concepts with 198+ curated MCQ questions. Practice fundamentals, data structures, frameworks, and advanced topics. Get instant feedback and track your progress.',
  generator: 'Quiz Master',
  keywords: 'programming quiz, coding practice, MCQ, software development, algorithms, data structures, web frameworks, programming fundamentals',
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
