import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cloud Quiz Platform - Practice and Mock Tests',
  description: 'Practice cloud computing concepts with topic-wise quizzes, instant feedback, and full timed mock tests.',
  generator: 'Cloud Quiz Platform',
  keywords: 'cloud computing quiz, AWS practice, IAM, EC2, S3, networking, virtualization, mock test',
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
