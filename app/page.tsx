import Link from "next/link"
import { BookOpen, Trophy, Zap, Code, Database, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-sm shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Brain className="h-8 w-8 text-purple-400" />
                <Code className="h-4 w-4 text-blue-400 absolute -top-1 -right-1" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Quiz Master</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">Login</Button>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">Sign Up</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Master Programming with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Interactive Quizzes</span>
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Practice with 198 carefully curated programming questions. Master fundamentals to advanced concepts,
            get instant feedback, track your progress, and boost your confidence for interviews and exams.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/quiz/java-fundamentals">
              <Button size="lg" className="text-lg px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg text-white">
                Fundamentals
                <Code className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/quiz/collections-streams">
              <Button size="lg" className="text-lg px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg text-white">
                Data Structures
                <Database className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/quiz/advanced-java">
              <Button size="lg" className="text-lg px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg text-white">
                Advanced Topics
                <Zap className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/quiz/frameworks">
              <Button size="lg" className="text-lg px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg text-white">
                Frameworks
                <BookOpen className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/quiz/enterprise-java">
              <Button size="lg" className="text-lg px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-lg text-white">
                Enterprise
                <Brain className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/mock-test">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 shadow-lg">
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
          <Card className="text-center hover:shadow-2xl transition-all duration-300 border-0 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-purple-500/20">
                <Brain className="h-8 w-8 text-purple-400" />
              </div>
              <CardTitle className="text-xl text-white">198 Questions</CardTitle>
              <CardDescription className="text-gray-300">Comprehensive question bank covering programming concepts from basics to advanced topics</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-300 border-0 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-emerald-500/20">
                <Zap className="h-8 w-8 text-emerald-400" />
              </div>
              <CardTitle className="text-xl text-white">Instant Feedback</CardTitle>
              <CardDescription className="text-gray-300">Get immediate explanations for correct and incorrect answers with detailed explanations</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-300 border-0 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-violet-500/20">
                <Trophy className="h-8 w-8 text-violet-400" />
              </div>
              <CardTitle className="text-xl text-white">Track Progress</CardTitle>
              <CardDescription className="text-gray-300">Monitor your improvement across different topics with detailed score analytics</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Quiz Options */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-bold text-center text-white mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Choose Your Study Mode</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gray-800/60 backdrop-blur-sm hover:bg-gray-800/80">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-white">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mr-3 border border-blue-500/20">
                  <BookOpen className="h-6 w-6 text-blue-400" />
                </div>
                Practice Mode
              </CardTitle>
              <CardDescription className="text-gray-300">Study programming concepts at your own pace with immediate feedback after each question</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-gray-300 mb-6">
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Instant feedback after each question</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>No time pressure</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Detailed explanations</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-violet-400 rounded-full mr-3"></span>Track your progress</li>
              </ul>
              <div className="grid grid-cols-1 gap-3">
                <Link href="/quiz/java-fundamentals">
                  <Button className="w-full text-sm bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white" size="sm">Programming Fundamentals</Button>
                </Link>
                <Link href="/quiz/collections-streams">
                  <Button className="w-full text-sm bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white" size="sm">Data Structures</Button>
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/quiz/advanced-java">
                    <Button className="w-full text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white" size="sm">Advanced</Button>
                  </Link>
                  <Link href="/quiz/frameworks">
                    <Button className="w-full text-sm bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white" size="sm">Frameworks</Button>
                  </Link>
                </div>
                <Link href="/quiz/enterprise-java">
                  <Button className="w-full text-sm bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white" size="sm">Enterprise Topics</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gray-800/60 backdrop-blur-sm hover:bg-gray-800/80">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-white">
                <div className="w-10 h-10 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mr-3 border border-violet-500/20">
                  <Trophy className="h-6 w-6 text-violet-400" />
                </div>
                Mock Test Mode
              </CardTitle>
              <CardDescription className="text-gray-300">Simulate real exam conditions with timed programming questions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-gray-300 mb-6">
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Timed questions (2 minutes each)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Exam-like environment</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Final score at the end</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Performance analysis</li>
              </ul>
              <Link href="/mock-test">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 shadow-lg text-white" variant="default">
                  Take Mock Test
                  <Trophy className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Me Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="border-0 bg-gray-800/60 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300">
          <CardHeader className="text-center">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mb-4 shadow-lg border border-purple-500/20">
              <Code className="h-10 w-10 text-purple-400" />
            </div>
            <CardTitle className="text-2xl text-white mb-2">About the Creator</CardTitle>
            <CardDescription className="text-gray-300 text-lg">Built with passion for programming education</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <h4 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Jatin Sharma
            </h4>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Passionate software developer and educator dedicated to creating interactive learning experiences. 
              This quiz platform is designed to help developers of all levels improve their programming skills 
              through hands-on practice and immediate feedback.
            </p>
            <div className="flex justify-center space-x-4 pt-4">
              <div className="px-4 py-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <span className="text-purple-400 font-medium">Full Stack Developer</span>
              </div>
              <div className="px-4 py-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <span className="text-blue-400 font-medium">Programming Educator</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-sm text-white py-12 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="relative">
                <Brain className="h-8 w-8 text-purple-400" />
                <Code className="h-4 w-4 text-blue-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Quiz Master</span>
            </div>
            <p className="text-gray-400 text-lg">Empowering developers to master programming concepts</p>
            <div className="mt-6 flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2024 Quiz Master</span>
              <span>•</span>
              <span>Created by Jatin Sharma</span>
              <span>•</span>
              <span>Built with ❤️ for developers</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}