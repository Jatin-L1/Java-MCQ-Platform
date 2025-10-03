

'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { questions } from '@/data/questions';
import { filterQuestionsByUnit, getUnitTitle } from '@/utils/questionUtils';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { CheckCircle, XCircle, ArrowRight, Brain, Cloud, Home, RotateCcw } from 'lucide-react';

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
    const percentage = Math.round((score / unitQuestions.length) * 100);
    const getPerformanceColor = () => {
      if (percentage >= 80) return "from-green-500 to-emerald-500";
      if (percentage >= 60) return "from-yellow-500 to-orange-500";
      return "from-red-500 to-pink-500";
    };
    
    const getPerformanceMessage = () => {
      if (percentage >= 80) return "🎉 Excellent! You've mastered this System Design & Cloud Computing topic!";
      if (percentage >= 60) return "👍 Good job! Keep practicing to improve further.";
      return "📚 Keep studying! More practice will help you excel.";
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="shadow-2xl border-0 bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mb-4 shadow-lg border border-purple-500/20">
                <Brain className="h-10 w-10 text-purple-400" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {unitTitle}
              </CardTitle>
              <p className="text-gray-400 mt-2">Quiz Complete!</p>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="relative">
                <div className={`text-6xl font-bold bg-gradient-to-r ${getPerformanceColor()} bg-clip-text text-transparent`}>
                  {score} / {unitQuestions.length}
                </div>
                <div className="text-2xl text-gray-300 mt-2">
                  {percentage}% Correct
                </div>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner">
                <div 
                  className={`h-full bg-gradient-to-r ${getPerformanceColor()} transition-all duration-1000 ease-out rounded-full shadow-lg`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              
              <div className={`p-6 rounded-2xl bg-gradient-to-r ${getPerformanceColor()} bg-opacity-10 border border-opacity-20`}>
                <p className="text-lg font-medium text-gray-200">
                  {getPerformanceMessage()}
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
              <Link href="/">
                <Button variant="outline" className="px-6 py-3 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <Home className="mr-2 h-5 w-5" />
                  Return Home
                </Button>
              </Link>
              <Button onClick={resetQuiz} className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                <RotateCcw className="mr-2 h-5 w-5" />
                Retry Quiz
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header with navigation and progress */}
        <div className="flex justify-between items-center mb-6 bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-purple-500/20">
              <Brain className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {unitTitle}
              </h1>
              <p className="text-sm text-gray-400">System Design & Cloud Computing</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-sm font-medium text-gray-400">Question</div>
              <div className="text-lg font-bold text-purple-400">
                {currentQuestionIndex + 1} / {unitQuestions.length}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-gray-400">Score</div>
              <div className="text-lg font-bold text-emerald-400">{score}</div>
            </div>
            <Button variant="outline" size="sm" onClick={resetQuiz} className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-800/60 backdrop-blur-sm rounded-full h-3 shadow-inner border border-gray-700">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500 ease-out shadow-lg"
              style={{ width: `${((currentQuestionIndex + 1) / unitQuestions.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-2">
            Progress: {Math.round(((currentQuestionIndex + 1) / unitQuestions.length) * 100)}%
          </p>
        </div>

        <Card className="shadow-2xl border-0 bg-gray-800/80 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full border border-blue-500/20">
                {currentQuestion.topic}
              </span>
              <span className={`text-sm px-3 py-1 rounded-full font-medium border ${
                currentQuestion.difficulty === 'easy' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20' :
                currentQuestion.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/20' :
                'bg-red-500/20 text-red-400 border-red-500/20'
              }`}>
                {currentQuestion.difficulty}
              </span>
            </div>
            <CardTitle className="text-xl leading-relaxed text-gray-200">
              <span className="text-purple-400 font-bold">Q{currentQuestion.id}.</span> {currentQuestion.question}
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
                    className={`p-4 border rounded-lg cursor-pointer flex items-center justify-between transition-all duration-300
                    ${
                      isSelected
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-gray-600 hover:border-purple-400 hover:bg-gray-700/50"
                    }
                    ${isCorrect ? "border-emerald-500 bg-emerald-500/10" : ""}
                    ${isWrong ? "border-red-500 bg-red-500/10" : ""}
                    `}
                  >
                    <div className="flex items-center">
                      <span className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold transition-colors ${
                        isSelected ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40' : 
                        'bg-gray-700 text-gray-400 border border-gray-600'
                      }`}>
                        {optionKey}
                      </span>
                      <span className="text-gray-200">{option}</span>
                    </div>
                    {showFeedback && (
                      <>
                        {isCorrect && <CheckCircle className="text-emerald-400 h-6 w-6" />}
                        {isWrong && <XCircle className="text-red-400 h-6 w-6" />}
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
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                Submit Answer
              </Button>
            ) : (
              <Button onClick={handleNextQuestion} className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
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