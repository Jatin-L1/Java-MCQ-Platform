import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'System Design & Cloud Master - Interactive Learning Platform',
  description: 'Master System Design and Cloud Computing with 400+ carefully curated questions. Practice architecture patterns, AWS services, scalability concepts, and cloud best practices. Perfect for technical interviews and cloud certifications.',
  generator: 'System Design & Cloud Master',
  keywords: 'system design, cloud computing, AWS, microservices, scalability, distributed systems, cloud architecture, technical interviews, cloud certification, system architecture',
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
