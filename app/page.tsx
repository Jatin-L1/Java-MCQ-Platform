import Link from "next/link"
import { Brain, Code, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="relative">
            <Brain className="h-12 w-12 text-purple-400" />
            <Code className="h-6 w-6 text-blue-400 absolute -top-1 -right-1" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            ADI Exam Preparation
          </h1>
        </div>

        <h2 className="text-5xl font-bold text-white mb-6">
          Master Data Structures &
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Algorithms</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Practice with 149 comprehensive questions covering all essential DSA concepts for ADI exam preparation. From complexity analysis to advanced algorithmic paradigms, 
          get instant feedback, track your progress, and ace your technical assessment with confidence.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
          <Link href="/quiz">
            <Button size="lg" className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-2xl text-white w-full sm:w-auto">
              Start DSA Practice
              <span className="ml-3 text-sm opacity-80">(149 Questions)</span>
              <Brain className="ml-3 h-6 w-6" />
            </Button>
          </Link>
          
          <Link href="/quiz">
            <Button size="lg" className="text-xl px-12 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-2xl text-white w-full sm:w-auto">
              Algorithm Patterns
              <span className="ml-3 text-sm opacity-80">(Advanced Topics)</span>
              <Code className="ml-3 h-6 w-6" />
            </Button>
          </Link>
        </div>

        <Link href="/mock-test">
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 shadow-lg">
            Take ADI Mock Test
            <Trophy className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
