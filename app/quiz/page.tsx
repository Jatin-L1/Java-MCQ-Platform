// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import { CheckCircle, XCircle, ArrowRight, RotateCcw, Home } from "lucide-react"
// import { questions } from "@/data/questions"

// export default function QuizPage() {
//   const router = useRouter()
//   const [currentQuestion, setCurrentQuestion] = useState(0)
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
//   const [showFeedback, setShowFeedback] = useState(false)
//   const [score, setScore] = useState(0)
//   const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(questions.length).fill(false))

//   const question = questions[currentQuestion]
//   const progress = ((currentQuestion + 1) / questions.length) * 100

//   const handleAnswerSelect = (answer: string) => {
//     if (showFeedback) return
//     setSelectedAnswer(answer)
//   }

//   const handleSubmitAnswer = () => {
//     if (!selectedAnswer) return

//     setShowFeedback(true)

//     if (selectedAnswer === question.correctAnswer && !answeredQuestions[currentQuestion]) {
//       setScore(score + 1)
//     }

//     const newAnsweredQuestions = [...answeredQuestions]
//     newAnsweredQuestions[currentQuestion] = true
//     setAnsweredQuestions(newAnsweredQuestions)
//   }

//   const handleNextQuestion = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1)
//       setSelectedAnswer(null)
//       setShowFeedback(false)
//     } else {
//       // Quiz completed, redirect to results
//       router.push(`/results?score=${score}&total=${questions.length}&mode=practice`)
//     }
//   }

//   const handleRetryQuestion = () => {
//     setSelectedAnswer(null)
//     setShowFeedback(false)
//     if (answeredQuestions[currentQuestion]) {
//       setScore(Math.max(0, score - 1))
//       const newAnsweredQuestions = [...answeredQuestions]
//       newAnsweredQuestions[currentQuestion] = false
//       setAnsweredQuestions(newAnsweredQuestions)
//     }
//   }

//   const isCorrect = selectedAnswer === question.correctAnswer

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <Button variant="outline" onClick={() => router.push("/")}>
//               <Home className="h-4 w-4 mr-2" />
//               Home
//             </Button>
//             <div className="text-center">
//               <h1 className="text-xl font-bold text-gray-900">Practice Quiz</h1>
//               <p className="text-sm text-gray-600">
//                 Question {currentQuestion + 1} of {questions.length}
//               </p>
//             </div>
//             <div className="text-right">
//               <p className="text-sm font-medium text-gray-900">Score: {score}</p>
//               <p className="text-xs text-gray-600">
//                 {Math.round((score / Math.max(1, answeredQuestions.filter(Boolean).length)) * 100)}% correct
//               </p>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Progress Bar */}
//         <div className="mb-8">
//           <div className="flex justify-between text-sm text-gray-600 mb-2">
//             <span>Progress</span>
//             <span>{Math.round(progress)}% Complete</span>
//           </div>
//           <Progress value={progress} className="h-2" />
//         </div>

//         {/* Question Card */}
//         <Card className="mb-8">
//           <CardHeader>
//             <CardTitle className="text-lg leading-relaxed">{question.question}</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-3">
//               {question.options.map((option, index) => {
//                 const optionLetter = String.fromCharCode(65 + index) // A, B, C, D
//                 const isSelected = selectedAnswer === optionLetter
//                 const isCorrectOption = optionLetter === question.correctAnswer

//                 let buttonVariant: "default" | "outline" | "destructive" | "secondary" = "outline"
//                 let buttonClass = ""

//                 if (showFeedback) {
//                   if (isCorrectOption) {
//                     buttonVariant = "default"
//                     buttonClass = "bg-green-500 hover:bg-green-600 text-white border-green-500"
//                   } else if (isSelected && !isCorrectOption) {
//                     buttonVariant = "destructive"
//                   }
//                 } else if (isSelected) {
//                   buttonVariant = "default"
//                 }

//                 return (
//                   <Button
//                     key={index}
//                     variant={buttonVariant}
//                     className={`w-full justify-start text-left h-auto p-4 ${buttonClass}`}
//                     onClick={() => handleAnswerSelect(optionLetter)}
//                     disabled={showFeedback}
//                   >
//                     <span className="font-semibold mr-3">{optionLetter}.</span>
//                     <span className="flex-1">{option}</span>
//                     {showFeedback && isCorrectOption && <CheckCircle className="h-5 w-5 ml-2" />}
//                     {showFeedback && isSelected && !isCorrectOption && <XCircle className="h-5 w-5 ml-2" />}
//                   </Button>
//                 )
//               })}
//             </div>

//             {/* Feedback Section */}
//             {showFeedback && (
//               <div
//                 className={`mt-6 p-4 rounded-lg ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
//               >
//                 <div className="flex items-center mb-2">
//                   {isCorrect ? (
//                     <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
//                   ) : (
//                     <XCircle className="h-5 w-5 text-red-600 mr-2" />
//                   )}
//                   <span className={`font-semibold ${isCorrect ? "text-green-800" : "text-red-800"}`}>
//                     {isCorrect ? "Correct!" : "Incorrect"}
//                   </span>
//                 </div>
//                 {question.explanation && (
//                   <p className={`text-sm ${isCorrect ? "text-green-700" : "text-red-700"}`}>{question.explanation}</p>
//                 )}
//               </div>
//             )}

//             {/* Action Buttons */}
//             <div className="flex gap-3 mt-6">
//               {!showFeedback ? (
//                 <Button onClick={handleSubmitAnswer} disabled={!selectedAnswer} className="flex-1">
//                   Submit Answer
//                 </Button>
//               ) : (
//                 <>
//                   <Button onClick={handleRetryQuestion} variant="outline">
//                     <RotateCcw className="h-4 w-4 mr-2" />
//                     Retry
//                   </Button>
//                   <Button onClick={handleNextQuestion} className="flex-1">
//                     {currentQuestion < questions.length - 1 ? (
//                       <>
//                         Next Question
//                         <ArrowRight className="h-4 w-4 ml-2" />
//                       </>
//                     ) : (
//                       "View Results"
//                     )}
//                   </Button>
//                 </>
//               )}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }

"use client";

import { useEffect, useState } from "react";
import { questions } from "@/data/questions";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<number, string>>({});

  // Load saved state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem('quizState');
    if (savedState) {
      try {
        const { currentIndex, userScore, answered } = JSON.parse(savedState);
        setCurrentQuestionIndex(currentIndex);
        setScore(userScore);
        setAnsweredQuestions(answered);
      } catch (error) {
        console.error("Failed to parse saved quiz state:", error);
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    const state = {
      currentIndex: currentQuestionIndex,
      userScore: score,
      answered: answeredQuestions
    };
    localStorage.setItem('quizState', JSON.stringify(state));
  }, [currentQuestionIndex, score, answeredQuestions]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (option: string) => {
    if (showFeedback) return; // Prevent changing answer after submission
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption) return;

    // Record this answer
    const newAnsweredQuestions = { 
      ...answeredQuestions, 
      [currentQuestionIndex]: selectedOption 
    };
    setAnsweredQuestions(newAnsweredQuestions);

    // Check if correct and update score
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedOption(answeredQuestions[nextIndex] || null);
      setShowFeedback(false);
    } else {
      // Quiz completed
      router.push(`/results?score=${score}&total=${questions.length}`);
      // Clear saved state when quiz is completed
      localStorage.removeItem('quizState');
    }
  };

  const resetQuiz = () => {
    // Clear saved state
    localStorage.removeItem('quizState');
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setAnsweredQuestions({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Practice Quiz</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-blue-600">
              Score: {score}
            </span>
            <Button variant="outline" size="sm" onClick={resetQuiz}>
              Reset Quiz
            </Button>
          </div>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-blue-600">
                {currentQuestion.topic}
              </span>
              <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">
                {currentQuestion.difficulty}
              </span>
            </div>
            <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => {
                const optionKey = String.fromCharCode(65 + index); // A, B, C, D
                const isSelected = selectedOption === optionKey;
                const isCorrect = showFeedback && currentQuestion.correctAnswer === optionKey;
                const isWrong = showFeedback && isSelected && !isCorrect;

                return (
                  <div
                    key={index}
                    onClick={() => handleOptionSelect(optionKey)}
                    className={`p-4 border rounded-lg cursor-pointer flex items-center justify-between transition-colors
                    ${
                      isSelected
                        ? "border-blue-400 bg-blue-50"
                        : "border-gray-200 hover:border-blue-200"
                    }
                    ${isCorrect ? "border-green-400 bg-green-50" : ""}
                    ${isWrong ? "border-red-400 bg-red-50" : ""}
                    `}
                  >
                    <div className="flex items-center">
                      <span className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center mr-3 text-sm font-medium">
                        {optionKey}
                      </span>
                      <span>{option}</span>
                    </div>
                    {showFeedback && (
                      <>
                        {isCorrect && <CheckCircle className="text-green-600 h-5 w-5" />}
                        {isWrong && <XCircle className="text-red-600 h-5 w-5" />}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            {!showFeedback ? (
              <Button
                onClick={handleSubmitAnswer}
                disabled={!selectedOption}
                className="w-full"
              >
                Submit Answer
              </Button>
            ) : (
              <Button onClick={handleNextQuestion} className="w-full">
                {currentQuestionIndex < questions.length - 1
                  ? "Next Question"
                  : "See Results"}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
