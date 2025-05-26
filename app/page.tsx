import Link from "next/link"
import { BookOpen, Trophy, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">ENAS Quiz Master</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Login</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Master ENAS with
            <span className="text-blue-600"> Interactive Quizzes</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Practice with 400+ carefully curated multiple choice questions. Get instant feedback, track your progress,
            and boost your confidence for the ENAS exam.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Practice Quiz
                <Zap className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/mock-test">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                Take Mock Test
                <Trophy className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>400+ Questions</CardTitle>
              <CardDescription>Comprehensive question bank covering all ENAS topics</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Instant Feedback</CardTitle>
              <CardDescription>Get immediate explanations for correct and incorrect answers</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Trophy className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Track Progress</CardTitle>
              <CardDescription>Monitor your improvement with detailed score analytics</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Quiz Options */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose Your Study Mode</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
                Practice Mode
              </CardTitle>
              <CardDescription>Study at your own pace with immediate feedback after each question</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Instant feedback after each question</li>
                <li>• No time pressure</li>
                <li>• Review explanations</li>
                <li>• Track your progress</li>
              </ul>
              <Link href="/quiz">
                <Button className="w-full">Start Practice</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="h-6 w-6 text-orange-600 mr-2" />
                Mock Test Mode
              </CardTitle>
              <CardDescription>Simulate real exam conditions with timed questions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Timed questions (2 minutes each)</li>
                <li>• Exam-like environment</li>
                <li>• Final score at the end</li>
                <li>• Performance analysis</li>
              </ul>
              <Link href="/mock-test">
                <Button className="w-full" variant="outline">
                  Take Mock Test
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6" />
              <span className="text-xl font-bold">ENAS Quiz Master</span>
            </div>
            <p className="text-gray-400">Empowering students to excel in their ENAS examinations</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
