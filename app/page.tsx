import Link from "next/link"
import { Brain, BookOpen, Cloud, Trophy, Medal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { questions } from "@/data/questions"
import { getAllUnits } from "@/utils/questionUtils"

export default function HomePage() {
  const units = getAllUnits()

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#1d4ed81f,transparent_35%),radial-gradient(circle_at_80%_20%,#0ea5e91f,transparent_35%),linear-gradient(130deg,#0a0f1f,#121a2f_55%,#102a43)] flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 text-center py-12">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 text-sm mb-8">
          <Cloud className="h-4 w-4" />
          System Design Practice Hub
        </div>

        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="relative">
            <Brain className="h-12 w-12 text-cyan-300" />
            <BookOpen className="h-6 w-6 text-sky-300 absolute -top-1 -right-1" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            System Design Platform
          </h1>
        </div>

        <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
          Practice System Design Concepts
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300"> with Instant Feedback</span>
        </h2>
        
        <p className="text-xl text-slate-200 mb-10 max-w-3xl mx-auto">
          Build confidence across systems architecture, databases, scaling, caching, network protocols, and distributed systems.
          Practice topic-wise or take a full timed test.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">
            <p className="text-2xl font-bold text-cyan-300">{questions.length}</p>
            <p className="text-slate-300 text-sm">Total Questions</p>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">
            <p className="text-2xl font-bold text-cyan-300">{units.length}</p>
            <p className="text-slate-300 text-sm">Practice Topics</p>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">
            <p className="text-2xl font-bold text-cyan-300">3</p>
            <p className="text-slate-300 text-sm">Difficulty Levels</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
          <Link href="/quiz/all">
            <Button size="lg" className="text-xl px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-2xl text-white w-full sm:w-auto">
              Start Practice
              <span className="ml-3 text-sm opacity-80">({questions.length} Questions)</span>
              <Brain className="ml-3 h-6 w-6" />
            </Button>
          </Link>

          <Link href="/quiz">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-cyan-300/50 text-cyan-200 hover:bg-cyan-400/10 w-full sm:w-auto">
              Browse by Topic
            </Button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/mock-test">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-cyan-300/50 text-cyan-200 hover:bg-cyan-400/10 shadow-lg w-full sm:w-auto">
              Take Full Mock Test
              <Trophy className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/leaderboard">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-cyan-300/50 text-cyan-200 hover:bg-cyan-400/10 shadow-lg w-full sm:w-auto">
              View Leaderboard
              <Medal className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
