"use client";

import { useEffect, useState } from "react";
import { questions } from "@/data/questions";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, Home, AlertTriangle } from "lucide-react";

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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-8">
            ADI Exam - DSA Mock Test
          </h1>
          <Card className="shadow-2xl border-0 bg-gray-800/80 backdrop-blur-sm p-8 mb-8">
            <CardHeader>
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mb-6 border border-purple-500/20">
                <Clock className="h-10 w-10 text-purple-400" />
              </div>
              <CardTitle className="text-3xl text-white mb-4">Ready to Test Your DSA Knowledge?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-gray-300 mb-8">
                This comprehensive ADI mock test simulates real exam conditions with 149 carefully selected Data Structures and Algorithms questions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Fundamental Concepts</h3>
                  <ul className="text-left space-y-2 text-gray-300">
                    <li>• Complexity analysis & Big-O notation</li>
                    <li>• Recursion vs iterative approaches</li>
                    <li>• Problem-solving techniques</li>
                    <li>• Number theory & mathematical algorithms</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">Advanced Algorithms</h3>
                  <ul className="text-left space-y-2 text-gray-300">
                    <li>• Greedy & dynamic programming</li>
                    <li>• Backtracking & randomized algorithms</li>
                    <li>• Two-pointer & sliding window techniques</li>
                    <li>• Data structures & sorting algorithms</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-semibold text-yellow-400 mb-3">⚠️ ADI Mock Test Guidelines</h4>
                <ul className="text-left space-y-2 text-gray-300 text-sm">
                  <li>• Each question has a 2-minute time limit</li>
                  <li>• Questions automatically advance when time expires</li>
                  <li>• No feedback shown during the test</li>
                  <li>• Your progress is automatically saved</li>
                  <li>• Detailed results with explanations at completion</li>
                </ul>
              </div>

              <div className="text-center space-y-4">
                <p className="text-gray-300">
                  <strong className="text-purple-400">149 DSA questions</strong> • Estimated time: <strong className="text-blue-400">5 hours</strong>
                </p>
                <p className="text-sm text-gray-400">
                  Perfect for ADI exam preparation and technical interview practice
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex gap-4 justify-center w-full">
                <Button variant="outline" onClick={() => router.push("/")} className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <Home className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
                <Button onClick={startTest} size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Start ADI Mock Test
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6 bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            ADI Exam - DSA Mock Test
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-400">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className={`text-sm font-medium ${timeLeft <= 30 ? 'text-red-400' : 'text-orange-400'}`}>
              Time Left: {formatTime(timeLeft)}
            </span>
            <Button variant="outline" size="sm" onClick={resetTest} className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
              Abort Test
            </Button>
          </div>
        </div>

        <Card className="shadow-2xl border-0 bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-blue-400 px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/20">
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
            <CardTitle className="text-xl text-gray-200">{currentQuestion.question}</CardTitle>
            <div className="w-full mt-4">
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${timeLeft <= 30 ? 'bg-red-500' : timeLeft <= 60 ? 'bg-yellow-500' : 'bg-emerald-500'}`}
                  style={{ width: `${(timeLeft / QUESTION_TIME) * 100}%` }}
                ></div>
              </div>
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
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-gray-600 hover:border-purple-400 hover:bg-gray-700/50"
                    }`}
                  >
                    <span className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold transition-colors ${
                      isSelected ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40' : 
                      'bg-gray-700 text-gray-400 border border-gray-600'
                    }`}>
                      {optionKey}
                    </span>
                    <span className="text-gray-200">{option}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleNextQuestion} className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
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