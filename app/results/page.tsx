// "use client"

// import { useSearchParams, useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import { Trophy, RotateCcw, Home, Target, TrendingUp, Award } from "lucide-react"

// export default function ResultsPage() {
//   const searchParams = useSearchParams()
//   const router = useRouter()

//   const score = Number.parseInt(searchParams.get("score") || "0")
//   const total = Number.parseInt(searchParams.get("total") || "1")
//   const mode = searchParams.get("mode") || "practice"

//   const percentage = Math.round((score / total) * 100)

//   const getPerformanceLevel = (percentage: number) => {
//     if (percentage >= 90) return { level: "Excellent", color: "text-green-600", bgColor: "bg-green-50" }
//     if (percentage >= 80) return { level: "Very Good", color: "text-blue-600", bgColor: "bg-blue-50" }
//     if (percentage >= 70) return { level: "Good", color: "text-yellow-600", bgColor: "bg-yellow-50" }
//     if (percentage >= 60) return { level: "Fair", color: "text-orange-600", bgColor: "bg-orange-50" }
//     return { level: "Needs Improvement", color: "text-red-600", bgColor: "bg-red-50" }
//   }

//   const performance = getPerformanceLevel(percentage)

//   const getMotivationalMessage = (percentage: number) => {
//     if (percentage >= 90) return "Outstanding performance! You're well-prepared for ENAS!"
//     if (percentage >= 80) return "Great job! You're on the right track. Keep practicing!"
//     if (percentage >= 70) return "Good work! Focus on your weak areas to improve further."
//     if (percentage >= 60) return "You're making progress! More practice will help you excel."
//     return "Don't give up! Every expert was once a beginner. Keep practicing!"
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <h1 className="text-2xl font-bold text-gray-900">
//               {mode === "mock" ? "Mock Test Results" : "Practice Quiz Results"}
//             </h1>
//             <Button variant="outline" onClick={() => router.push("/")}>
//               <Home className="h-4 w-4 mr-2" />
//               Home
//             </Button>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Main Results Card */}
//         <Card className="mb-8">
//           <CardHeader className="text-center">
//             <div className="mx-auto w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4">
//               <Trophy className="h-10 w-10 text-purple-600" />
//             </div>
//             <CardTitle className="text-3xl font-bold text-gray-900">
//               {score} / {total}
//             </CardTitle>
//             <p className="text-xl text-gray-600">You scored {percentage}%</p>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-6">
//               {/* Score Progress */}
//               <div>
//                 <div className="flex justify-between text-sm text-gray-600 mb-2">
//                   <span>Your Score</span>
//                   <span>{percentage}%</span>
//                 </div>
//                 <Progress value={percentage} className="h-4" />
//               </div>

//               {/* Performance Level */}
//               <div className={`p-4 rounded-lg ${performance.bgColor}`}>
//                 <div className="flex items-center justify-center">
//                   <Award className={`h-6 w-6 ${performance.color} mr-2`} />
//                   <span className={`text-lg font-semibold ${performance.color}`}>{performance.level}</span>
//                 </div>
//                 <p className="text-center text-gray-700 mt-2">{getMotivationalMessage(percentage)}</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Detailed Statistics */}
//         <div className="grid md:grid-cols-3 gap-6 mb-8">
//           <Card>
//             <CardHeader className="text-center">
//               <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
//                 <Target className="h-6 w-6 text-green-600" />
//               </div>
//               <CardTitle className="text-lg">Correct Answers</CardTitle>
//             </CardHeader>
//             <CardContent className="text-center">
//               <p className="text-3xl font-bold text-green-600">{score}</p>
//               <p className="text-sm text-gray-600">out of {total} questions</p>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader className="text-center">
//               <div className="mx-auto w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
//                 <TrendingUp className="h-6 w-6 text-red-600" />
//               </div>
//               <CardTitle className="text-lg">Accuracy Rate</CardTitle>
//             </CardHeader>
//             <CardContent className="text-center">
//               <p className="text-3xl font-bold text-blue-600">{percentage}%</p>
//               <p className="text-sm text-gray-600">overall performance</p>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader className="text-center">
//               <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
//                 <Award className="h-6 w-6 text-purple-600" />
//               </div>
//               <CardTitle className="text-lg">Grade</CardTitle>
//             </CardHeader>
//             <CardContent className="text-center">
//               <p className={`text-3xl font-bold ${performance.color}`}>
//                 {percentage >= 90
//                   ? "A+"
//                   : percentage >= 80
//                     ? "A"
//                     : percentage >= 70
//                       ? "B"
//                       : percentage >= 60
//                         ? "C"
//                         : "D"}
//               </p>
//               <p className="text-sm text-gray-600">{performance.level}</p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button
//             onClick={() => router.push(mode === "mock" ? "/mock-test" : "/quiz")}
//             size="lg"
//             className="flex-1 sm:flex-none"
//           >
//             <RotateCcw className="h-4 w-4 mr-2" />
//             Try Again
//           </Button>

//           <Button
//             onClick={() => router.push(mode === "mock" ? "/quiz" : "/mock-test")}
//             variant="outline"
//             size="lg"
//             className="flex-1 sm:flex-none"
//           >
//             {mode === "mock" ? "Practice Mode" : "Mock Test"}
//           </Button>

//           <Button onClick={() => router.push("/")} variant="outline" size="lg" className="flex-1 sm:flex-none">
//             <Home className="h-4 w-4 mr-2" />
//             Back to Home
//           </Button>
//         </div>

//         {/* Study Tips */}
//         <Card className="mt-8">
//           <CardHeader>
//             <CardTitle className="text-center">Study Tips for ENAS Success</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid md:grid-cols-2 gap-4 text-sm">
//               <div>
//                 <h4 className="font-semibold text-gray-900 mb-2">If you scored 80% or above:</h4>
//                 <ul className="space-y-1 text-gray-600">
//                   <li>• Focus on time management in mock tests</li>
//                   <li>• Review any topics you missed</li>
//                   <li>• Practice with more challenging questions</li>
//                   <li>• Maintain your current study routine</li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-900 mb-2">If you scored below 80%:</h4>
//                 <ul className="space-y-1 text-gray-600">
//                   <li>• Identify your weak topics and focus on them</li>
//                   <li>• Take more practice quizzes</li>
//                   <li>• Review explanations carefully</li>
//                   <li>• Consider additional study materials</li>
//                 </ul>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }


"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Home, RotateCcw } from "lucide-react";

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
    if (percentage >= 90) return "Excellent! You're a pro!";
    if (percentage >= 70) return "Great job! You've got a solid understanding.";
    if (percentage >= 50) return "Good effort! Keep practicing.";
    return "You're just getting started. Keep learning!";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-lg mx-auto px-4">
        <Card className="shadow-lg text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-3xl">Quiz Completed!</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 mb-8">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">
                {percentage}%
              </h3>
              <p className="text-gray-600">
                You scored {score} out of {total} questions
              </p>
              <p className="text-lg font-medium mt-4 text-blue-600">
                {getScoreMessage()}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Link href="/">
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Button>
              </Link>
              <Link href={isMockTest ? "/mock-test" : "/quiz"}>
                <Button className="w-full flex items-center justify-center">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}