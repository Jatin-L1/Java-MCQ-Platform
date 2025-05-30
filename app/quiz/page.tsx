
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
