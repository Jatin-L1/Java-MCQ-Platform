// 'use client';

// import { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { Label } from '@/components/ui/label';
// import { Progress } from '@/components/ui/progress';
// import { questions } from '@/data/questions';
// import { filterQuestionsByUnit, getUnitTitle } from '@/utils/questionUtils';
// import Link from 'next/link';
// import { useParams } from 'next/navigation';
// import { Check, X, ArrowRight } from 'lucide-react';

// export default function QuizPage() {
//   const params = useParams();
//   const unitParam = params.unit as string;
  
//   const unitQuestions = filterQuestionsByUnit(questions, unitParam);
//   const unitTitle = getUnitTitle(unitParam);
  
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [score, setScore] = useState(0);
//   const [answers, setAnswers] = useState<string[]>(Array(unitQuestions.length).fill(''));
//   const [quizCompleted, setQuizCompleted] = useState(false);
  
//   // Update current question when answers change
//   useEffect(() => {
//     const completedCount = answers.filter(answer => answer !== '').length;
//     if (completedCount === unitQuestions.length && completedCount > 0) {
//       setQuizCompleted(true);
//     }
//   }, [answers, unitQuestions.length]);

//   const handleAnswerSelect = (answer: string) => {
//     setSelectedAnswer(answer);
//   };

//   const handleNextQuestion = () => {
//     if (!selectedAnswer) return;
    
//     const currentQuestion = unitQuestions[currentQuestionIndex];
//     const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
//     // Update answers and score
//     const newAnswers = [...answers];
//     newAnswers[currentQuestionIndex] = selectedAnswer;
//     setAnswers(newAnswers);
    
//     if (isCorrect) {
//       setScore(score + 1);
//     }
    
//     setShowFeedback(true);
    
//     setTimeout(() => {
//       setShowFeedback(false);
//       setSelectedAnswer(null);
      
//       // Find the next unanswered question or the next question
//       const answeredQuestions = newAnswers.filter(a => a !== '').length;
//       if (answeredQuestions < unitQuestions.length) {
//         let nextIndex = currentQuestionIndex + 1;
//         if (nextIndex >= unitQuestions.length) {
//           // Look for any unanswered questions
//           nextIndex = newAnswers.findIndex(answer => answer === '');
//         }
//         setCurrentQuestionIndex(nextIndex);
//       } else {
//         setQuizCompleted(true);
//       }
//     }, 1500);
//   };

//   const currentQuestion = unitQuestions[currentQuestionIndex];
//   const progress = Math.round((answers.filter(answer => answer !== '').length / unitQuestions.length) * 100);
  
//   const optionLabels = ['A', 'B', 'C', 'D'];
  
//   if (quizCompleted) {
//     return (
//       <div className="container mx-auto py-8 px-4">
//         <Card className="max-w-4xl mx-auto">
//           <CardHeader>
//             <CardTitle className="text-2xl font-bold text-center">{unitTitle} - Results</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-6">
//             <div className="flex flex-col items-center justify-center space-y-4">
//               <div className="text-6xl font-bold text-blue-600">
//                 {score} / {unitQuestions.length}
//               </div>
//               <div className="text-xl text-gray-700">
//                 {Math.round((score / unitQuestions.length) * 100)}% Correct
//               </div>
              
//               <Progress value={Math.round((score / unitQuestions.length) * 100)} className="w-full h-3" />
              
//               <div className="pt-4 space-y-3">
//                 <div className="flex space-x-2">
//                   {score / unitQuestions.length >= 0.8 ? 
//                     <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center w-full">
//                       Excellent! You have mastered this unit.
//                     </div> :
//                     (score / unitQuestions.length >= 0.6 ?
//                       <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg text-center w-full">
//                         Good job! More practice will help you improve.
//                       </div> :
//                       <div className="bg-red-100 text-red-800 p-4 rounded-lg text-center w-full">
//                         Keep studying! You need more practice with this unit.
//                       </div>
//                     )
//                   }
//                 </div>
//               </div>
              
//               <div className="flex flex-wrap gap-3 pt-4">
//                 <Link href="/">
//                   <Button variant="outline">Return to Home</Button>
//                 </Link>
//                 <Link href={`/quiz/${unitParam}`}>
//                   <Button>Retry Unit</Button>
//                 </Link>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <Card className="max-w-4xl mx-auto">
//         <CardHeader>
//           <div className="flex justify-between items-center">
//             <CardTitle>{unitTitle}</CardTitle>
//             <div className="text-sm text-gray-500">
//               Question {currentQuestionIndex + 1} of {unitQuestions.length}
//             </div>
//           </div>
//           <Progress value={progress} className="h-2" />
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <div className="text-lg font-medium">
//             {currentQuestion.id}. {currentQuestion.question}
//           </div>
          
//           <RadioGroup value={selectedAnswer || ''} onValueChange={handleAnswerSelect}>
//             {currentQuestion.options.map((option, index) => (
//               <div 
//                 key={index}
//                 className={`flex items-center space-x-2 p-3 rounded-lg ${
//                   showFeedback && optionLabels[index] === currentQuestion.correctAnswer
//                     ? 'bg-green-100'
//                     : showFeedback && optionLabels[index] === selectedAnswer
//                     ? 'bg-red-100'
//                     : 'hover:bg-gray-100'
//                 }`}
//               >
//                 <RadioGroupItem 
//                   value={optionLabels[index]} 
//                   id={`option-${index}`}
//                   disabled={showFeedback}
//                 />
//                 <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
//                   <span className="font-bold mr-2">{optionLabels[index]}.</span> {option}
//                 </Label>
//                 {showFeedback && optionLabels[index] === currentQuestion.correctAnswer && (
//                   <Check className="h-5 w-5 text-green-600" />
//                 )}
//                 {showFeedback && optionLabels[index] === selectedAnswer && 
//                  optionLabels[index] !== currentQuestion.correctAnswer && (
//                   <X className="h-5 w-5 text-red-600" />
//                 )}
//               </div>
//             ))}
//           </RadioGroup>
          
//           {showFeedback && (
//             <div className={`p-4 rounded-lg ${
//               selectedAnswer === currentQuestion.correctAnswer 
//                 ? 'bg-green-100 text-green-800' 
//                 : 'bg-red-100 text-red-800'
//             }`}>
//               {selectedAnswer === currentQuestion.correctAnswer 
//                 ? 'Correct answer!' 
//                 : `Incorrect. The correct answer is ${currentQuestion.correctAnswer}.`
//               }
//               {currentQuestion.explanation && (
//                 <p className="mt-2 text-gray-700">{currentQuestion.explanation}</p>
//               )}
//             </div>
//           )}
          
//           <div className="flex justify-between pt-6">
//             <Button
//               variant="outline"
//               onClick={() => {
//                 let prevIndex = currentQuestionIndex - 1;
//                 if (prevIndex < 0) prevIndex = unitQuestions.length - 1;
//                 setCurrentQuestionIndex(prevIndex);
//                 setSelectedAnswer(answers[prevIndex] || null);
//                 setShowFeedback(false);
//               }}
//             >
//               Previous
//             </Button>
            
//             <Button 
//               onClick={handleNextQuestion}
//               disabled={!selectedAnswer || showFeedback}
//               className="ml-auto"
//             >
//               {answers.filter(a => a !== '').length === unitQuestions.length - 1 && selectedAnswer 
//                 ? 'Finish' 
//                 : 'Next'}
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { questions } from '@/data/questions';
import { filterQuestionsByUnit, getUnitTitle } from '@/utils/questionUtils';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const unitParam = params.unit as string;
  
  const unitQuestions = filterQuestionsByUnit(questions, unitParam);
  const unitTitle = getUnitTitle(unitParam);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<number, string>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  // Load saved state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem(`quizState-${unitParam}`);
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
  }, [unitParam]);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    const state = {
      currentIndex: currentQuestionIndex,
      userScore: score,
      answered: answeredQuestions
    };
    localStorage.setItem(`quizState-${unitParam}`, JSON.stringify(state));
  }, [currentQuestionIndex, score, answeredQuestions, unitParam]);
  
  // Update quiz completed state
  useEffect(() => {
    const answeredCount = Object.keys(answeredQuestions).length;
    if (answeredCount === unitQuestions.length && answeredCount > 0) {
      setQuizCompleted(true);
    }
  }, [answeredQuestions, unitQuestions.length]);

  const currentQuestion = unitQuestions[currentQuestionIndex];
  
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
    if (nextIndex < unitQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedOption(answeredQuestions[nextIndex] || null);
      setShowFeedback(false);
    } else {
      // Check if there are any unanswered questions
      let foundUnanswered = false;
      for (let i = 0; i < unitQuestions.length; i++) {
        if (!answeredQuestions[i]) {
          setCurrentQuestionIndex(i);
          setSelectedOption(null);
          setShowFeedback(false);
          foundUnanswered = true;
          break;
        }
      }
      
      // If all questions are answered, show results
      if (!foundUnanswered) {
        setQuizCompleted(true);
      }
    }
  };

  const resetQuiz = () => {
    // Clear saved state
    localStorage.removeItem(`quizState-${unitParam}`);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setAnsweredQuestions({});
    setQuizCompleted(false);
  };
  
  const optionLabels = ['A', 'B', 'C', 'D'];
  
  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">{unitTitle} - Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="text-6xl font-bold text-blue-600">
                  {score} / {unitQuestions.length}
                </div>
                <div className="text-xl text-gray-700">
                  {Math.round((score / unitQuestions.length) * 100)}% Correct
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-600 h-3 rounded-full" 
                    style={{ width: `${Math.round((score / unitQuestions.length) * 100)}%` }}
                  ></div>
                </div>
                
                <div className="pt-4 space-y-3">
                  <div className="flex space-x-2">
                    {score / unitQuestions.length >= 0.8 ? 
                      <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center w-full">
                        Excellent! You have mastered this unit.
                      </div> :
                      (score / unitQuestions.length >= 0.6 ?
                        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg text-center w-full">
                          Good job! More practice will help you improve.
                        </div> :
                        <div className="bg-red-100 text-red-800 p-4 rounded-lg text-center w-full">
                          Keep studying! You need more practice with this unit.
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
              <Link href="/">
                <Button variant="outline">Return to Home</Button>
              </Link>
              <Button onClick={resetQuiz}>
                Retry Unit
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
          <h1 className="text-2xl font-bold text-gray-900">{unitTitle}</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestionIndex + 1} of {unitQuestions.length}
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
            <CardTitle className="text-xl">
              {currentQuestion.id}. {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => {
                const optionKey = optionLabels[index]; // A, B, C, D
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
                {currentQuestionIndex < unitQuestions.length - 1
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