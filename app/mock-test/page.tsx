// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import { Clock, Home, AlertTriangle } from "lucide-react"
// import { questions } from "@/data/questions"

// export default function MockTestPage() {
//   const router = useRouter()
//   const [currentQuestion, setCurrentQuestion] = useState(0)
//   const [selectedAnswers, setSelectedAnswers] = useState<string[]>(new Array(questions.length).fill(""))
//   const [timeLeft, setTimeLeft] = useState(120) // 2 minutes per question
//   const [testStarted, setTestStarted] = useState(false)

//   const question = questions[currentQuestion]
//   const progress = ((currentQuestion + 1) / questions.length) * 100

//   useEffect(() => {
//     if (!testStarted) return

//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev <= 1) {
//           // Time's up, move to next question or finish test
//           handleNextQuestion()
//           return 120
//         }
//         return prev - 1
//       })
//     }, 1000)

//     return () => clearInterval(timer)
//   }, [testStarted, currentQuestion])

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60)
//     const secs = seconds % 60
//     return `${mins}:${secs.toString().padStart(2, "0")}`
//   }

//   const handleAnswerSelect = (answer: string) => {
//     const newAnswers = [...selectedAnswers]
//     newAnswers[currentQuestion] = answer
//     setSelectedAnswers(newAnswers)
//   }

//   const handleNextQuestion = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1)
//       setTimeLeft(120)
//     } else {
//       // Test completed, calculate score and redirect
//       const score = selectedAnswers.reduce((acc, answer, index) => {
//         return answer === questions[index].correctAnswer ? acc + 1 : acc
//       }, 0)
//       router.push(`/results?score=${score}&total=${questions.length}&mode=mock`)
//     }
//   }

//   const handlePreviousQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1)
//       setTimeLeft(120)
//     }
//   }

//   const startTest = () => {
//     setTestStarted(true)
//   }

//   if (!testStarted) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center">
//         <Card className="max-w-2xl mx-4">
//           <CardHeader className="text-center">
//             <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
//               <Clock className="h-8 w-8 text-orange-600" />
//             </div>
//             <CardTitle className="text-2xl">Mock Test Instructions</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
//               <div className="flex items-center mb-2">
//                 <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
//                 <span className="font-semibold text-yellow-800">Important Guidelines</span>
//               </div>
//               <ul className="text-sm text-yellow-700 space-y-1">
//                 <li>• Each question has a 2-minute time limit</li>
//                 <li>• You cannot go back to change answers once time expires</li>
//                 <li>• No feedback will be shown during the test</li>
//                 <li>• Results will be displayed at the end</li>
//                 <li>• Try to simulate real exam conditions</li>
//               </ul>
//             </div>

//             <div className="text-center space-y-4">
//               <p className="text-gray-600">
//                 This mock test contains <strong>{questions.length} questions</strong> and will take approximately{" "}
//                 <strong>{Math.ceil((questions.length * 2) / 60)} hours</strong> to complete.
//               </p>

//               <div className="flex gap-3 justify-center">
//                 <Button variant="outline" onClick={() => router.push("/")}>
//                   <Home className="h-4 w-4 mr-2" />
//                   Back to Home
//                 </Button>
//                 <Button onClick={startTest} size="lg">
//                   Start Mock Test
//                 </Button>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <div className="text-left">
//               <h1 className="text-xl font-bold text-gray-900">Mock Test</h1>
//               <p className="text-sm text-gray-600">
//                 Question {currentQuestion + 1} of {questions.length}
//               </p>
//             </div>
//             <div className="text-center">
//               <div className={`text-2xl font-bold ${timeLeft <= 30 ? "text-red-600" : "text-gray-900"}`}>
//                 <Clock className="h-5 w-5 inline mr-1" />
//                 {formatTime(timeLeft)}
//               </div>
//               <p className="text-xs text-gray-600">Time remaining</p>
//             </div>
//             <div className="text-right">
//               <p className="text-sm font-medium text-gray-900">
//                 Answered: {selectedAnswers.filter((a) => a !== "").length}
//               </p>
//               <p className="text-xs text-gray-600">Remaining: {selectedAnswers.filter((a) => a === "").length}</p>
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
//                 const isSelected = selectedAnswers[currentQuestion] === optionLetter

//                 return (
//                   <Button
//                     key={index}
//                     variant={isSelected ? "default" : "outline"}
//                     className="w-full justify-start text-left h-auto p-4"
//                     onClick={() => handleAnswerSelect(optionLetter)}
//                   >
//                     <span className="font-semibold mr-3">{optionLetter}.</span>
//                     <span className="flex-1">{option}</span>
//                   </Button>
//                 )
//               })}
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex gap-3 mt-6">
//               <Button onClick={handlePreviousQuestion} disabled={currentQuestion === 0} variant="outline">
//                 Previous
//               </Button>
//               <Button onClick={handleNextQuestion} className="flex-1">
//                 {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Test"}
//               </Button>
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
import { Progress } from "@/components/ui/progress";

const QUESTION_TIME = 120; // 2 minutes per question in seconds

export default function MockTestPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [testActive, setTestActive] = useState(false);

  // Load saved state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem('mockTestState');
    if (savedState) {
      try {
        const { currentIndex, answers, remainingTime, active } = JSON.parse(savedState);
        setCurrentQuestionIndex(currentIndex);
        setUserAnswers(answers);
        setTimeLeft(remainingTime);
        setTestActive(active);
        setSelectedOption(answers[currentIndex] || null);
      } catch (error) {
        console.error("Failed to parse saved mock test state:", error);
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    const state = {
      currentIndex: currentQuestionIndex,
      answers: userAnswers,
      remainingTime: timeLeft,
      active: testActive
    };
    localStorage.setItem('mockTestState', JSON.stringify(state));
  }, [currentQuestionIndex, userAnswers, timeLeft, testActive]);

  // Timer effect
  useEffect(() => {
    if (!testActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Time's up for this question
          handleNextQuestion();
          return QUESTION_TIME;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [testActive, currentQuestionIndex]);

  const startTest = () => {
    setTestActive(true);
    setTimeLeft(QUESTION_TIME);
  };

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    const updatedAnswers = { ...userAnswers, [currentQuestionIndex]: option };
    setUserAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedOption(userAnswers[nextIndex] || null);
      setTimeLeft(QUESTION_TIME);
    } else {
      // Test completed
      finishTest();
    }
  };

  const finishTest = () => {
    // Calculate score
    let score = 0;
    Object.entries(userAnswers).forEach(([index, answer]) => {
      const questionIndex = parseInt(index);
      if (questions[questionIndex].correctAnswer === answer) {
        score++;
      }
    });

    // Clear saved state when test is completed
    localStorage.removeItem('mockTestState');
    
    // Navigate to results
    router.push(`/results?score=${score}&total=${questions.length}&mode=mock`);
  };

  const resetTest = () => {
    // Clear saved state
    localStorage.removeItem('mockTestState');
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setUserAnswers({});
    setTimeLeft(QUESTION_TIME);
    setTestActive(false);
  };

  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (!testActive) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Mock Test</h1>
          <Card className="shadow-lg p-6 mb-8">
            <CardHeader>
              <CardTitle>Ready to Test Your Knowledge?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                This mock test simulates real exam conditions:
              </p>
              <ul className="text-left space-y-2 mb-6 max-w-md mx-auto">
                <li>• You will have 2 minutes per question</li>
                <li>• No feedback until the end</li>
                <li>• Cannot return to previous questions</li>
                <li>• Your score will be shown at the end</li>
              </ul>
              <p>Once you start, the timer will begin immediately.</p>
            </CardContent>
            <CardFooter>
              <Button onClick={startTest} className="w-full">
                Start Mock Test
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Mock Test</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-orange-600">
              Time Left: {formatTime(timeLeft)}
            </span>
            <Button variant="outline" size="sm" onClick={resetTest}>
              Abort Test
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
            <div className="w-full mt-4">
              <Progress value={(timeLeft / QUESTION_TIME) * 100} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => {
                const optionKey = String.fromCharCode(65 + index); // A, B, C, D
                const isSelected = selectedOption === optionKey;

                return (
                  <div
                    key={index}
                    onClick={() => handleOptionSelect(optionKey)}
                    className={`p-4 border rounded-lg cursor-pointer flex items-center transition-colors
                    ${
                      isSelected
                        ? "border-blue-400 bg-blue-50"
                        : "border-gray-200 hover:border-blue-200"
                    }`}
                  >
                    <span className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center mr-3 text-sm font-medium">
                      {optionKey}
                    </span>
                    <span>{option}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleNextQuestion} className="w-full">
              {currentQuestionIndex < questions.length - 1
                ? "Next Question"
                : "Finish Test"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}