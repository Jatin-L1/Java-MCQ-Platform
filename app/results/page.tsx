
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Home, RotateCcw, Trophy, Target, Brain, Cloud } from "lucide-react";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const [score, setScore] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [isMockTest, setIsMockTest] = useState(false);

  useEffect(() => {
    const scoreParam = searchParams?.get("score");
    const totalParam = searchParams?.get("total");
    const mode = searchParams?.get("mode");
    
    if (scoreParam) setScore(parseInt(scoreParam));
    if (totalParam) setTotal(parseInt(totalParam));
    if (mode === "mock") setIsMockTest(true);
  }, [searchParams]);

  const percentage = score !== null && total !== null ? Math.round((score / total) * 100) : null;
  
  const getScoreMessage = () => {
    if (percentage === null) return "";
    if (percentage >= 90) return "🎉 Outstanding! You've mastered System Design & Cloud Computing concepts!";
    if (percentage >= 80) return "💪 Excellent work! You're ready for technical interviews and cloud certifications!";
    if (percentage >= 70) return "👍 Good job! You have a solid foundation. Focus on areas for improvement.";
    if (percentage >= 60) return "📈 You're making progress! Keep practicing to strengthen your knowledge.";
    return "🚀 Great start! Every cloud expert began as a beginner. Keep learning!";
  };

  const getPerformanceLevel = () => {
    if (percentage === null) return { level: "N/A", color: "text-gray-600" };
    if (percentage >= 90) return { level: "Expert Level", color: "text-green-600" };
    if (percentage >= 80) return { level: "Advanced", color: "text-blue-600" };
    if (percentage >= 70) return { level: "Proficient", color: "text-yellow-600" };
    if (percentage >= 60) return { level: "Developing", color: "text-orange-600" };
    return { level: "Beginning", color: "text-red-600" };
  };

  const performance = getPerformanceLevel();

  const getRecommendations = () => {
    if (percentage === null) return [];
    if (percentage >= 80) return [
      "Practice advanced scenarios and edge cases",
      "Focus on system design trade-offs",
      "Explore emerging cloud technologies",
      "Prepare for senior-level technical interviews"
    ];
    if (percentage >= 60) return [
      "Review fundamental concepts you missed",
      "Practice more cloud architecture patterns",
      "Study AWS services in depth",
      "Focus on scalability and performance topics"
    ];
    return [
      "Start with system design fundamentals",
      "Learn core cloud computing concepts",
      "Practice basic AWS services",
      "Build hands-on projects to reinforce learning"
    ];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="shadow-2xl border-0 bg-gray-800/80 backdrop-blur-sm text-center mb-8">
          <CardHeader className="pb-4">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-purple-500/20">
                {isMockTest ? <Trophy className="h-12 w-12 text-yellow-400" /> : <CheckCircle className="h-12 w-12 text-green-400" />}
              </div>
            </div>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              {isMockTest ? "Mock Test Complete!" : "Quiz Completed!"}
            </CardTitle>
            <p className="text-gray-400">System Design & Cloud Computing Assessment</p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
                {percentage}%
              </h3>
              <p className="text-xl text-gray-300 mb-2">
                {score} out of {total} questions correct
              </p>
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/20`}>
                <span className={`text-lg font-semibold ${performance.color}`}>
                  {performance.level}
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <p className="text-lg text-gray-200 font-medium">
                {getScoreMessage()}
              </p>
            </div>

            {/* Statistics */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gray-700/50 border border-gray-600">
                <Target className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-400">{score}</div>
                <div className="text-sm text-gray-400">Correct Answers</div>
              </div>
              <div className="p-6 rounded-xl bg-gray-700/50 border border-gray-600">
                <Brain className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-400">{percentage}%</div>
                <div className="text-sm text-gray-400">Accuracy Rate</div>
              </div>
              <div className="p-6 rounded-xl bg-gray-700/50 border border-gray-600">
                <Cloud className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-purple-400">{total}</div>
                <div className="text-sm text-gray-400">Total Questions</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="outline" className="w-full sm:w-auto px-8 py-3 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
              <Link href={isMockTest ? "/mock-test" : "/quiz"}>
                <Button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  <RotateCcw className="mr-2 h-5 w-5" />
                  Try Again
                </Button>
              </Link>
              <Link href={isMockTest ? "/quiz" : "/mock-test"}>
                <Button variant="outline" className="w-full sm:w-auto px-8 py-3 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
                  {isMockTest ? "Practice Mode" : "Mock Test"}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations Card */}
        <Card className="shadow-2xl border-0 bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Recommended Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {getRecommendations().map((recommendation, index) => (
                <div key={index} className="flex items-center p-3 rounded-lg bg-gray-700/50 border border-gray-600">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/40 flex items-center justify-center mr-3">
                    <span className="text-xs font-bold text-purple-400">{index + 1}</span>
                  </div>
                  <span className="text-gray-200">{recommendation}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}