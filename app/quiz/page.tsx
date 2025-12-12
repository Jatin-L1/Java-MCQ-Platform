
"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Code, Zap, Calculator, TreePine, ArrowUpDown, CheckCircle, BookOpen } from "lucide-react";
import { getAllUnits } from "@/utils/questionUtils";

const iconMap = {
  'docker-fundamentals': BookOpen,
  'docker-architecture': TreePine,
  'docker-images': Code,
  'dockerfile': Calculator,
  'docker-commands': Zap,
  'docker-volumes': ArrowUpDown
};

export default function QuizSelectionPage() {
  const units = getAllUnits();

  // Split units into categories for better organization
  const fundamentalUnits = units.slice(0, 3); // Docker Fundamentals, Architecture, Images
  const algorithmicUnits = units.slice(3); // Dockerfile, Commands, Volumes
  const advancedUnits: any[] = []; // Not needed for Docker quiz

  const renderUnitCard = (unit: any) => {
    const IconComponent = iconMap[unit.id as keyof typeof iconMap] || Brain;
    
    return (
      <Card key={unit.id} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <IconComponent className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <CardTitle className="text-lg">{unit.title}</CardTitle>
                <CardDescription className="text-sm">{unit.description}</CardDescription>
              </div>
            </div>
            <Badge variant="secondary" className="ml-2">
              {unit.questionCount} Questions
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Difficulty:</span>
              <Badge variant="outline">{unit.difficulty}</Badge>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {unit.topics.slice(0, 3).map((topic: string, index: number) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {topic}
                </Badge>
              ))}
              {unit.topics.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{unit.topics.length - 3} more
                </Badge>
              )}
            </div>
            
            <Link href={`/quiz/${unit.id}`} className="block">
              <Button className="w-full mt-4">
                Start Practice
                <CheckCircle className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Docker Quiz - Practice Modules
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master Docker and containerization with our comprehensive quiz modules. 
            15 carefully crafted questions covering all essential Docker concepts.
          </p>
          
          {/* Practice All Questions Button */}
          <div className="mt-8">
            <Link href="/quiz/all">
              <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg">
                <Brain className="mr-3 h-6 w-6" />
                Practice All 15 Questions Together
              </Button>
            </Link>
          </div>
          
          <div className="mt-6 text-gray-500">
            <p>Or practice by specific topics below:</p>
          </div>
        </div>

        {/* Fundamental Concepts Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Brain className="mr-3 h-8 w-8 text-purple-600" />
              Docker Fundamentals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Build strong foundations with Docker basics, architecture, and image management concepts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {fundamentalUnits.map(renderUnitCard)}
          </div>
        </div>

        {/* Advanced Docker Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Code className="mr-3 h-8 w-8 text-blue-600" />
              Advanced Docker
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master Dockerfile instructions, essential CLI commands, and persistent data management with Docker volumes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {algorithmicUnits.map(renderUnitCard)}
          </div>
        </div>

        {/* Mock Test Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center justify-center">
                <CheckCircle className="mr-3 h-8 w-8 text-purple-600" />
                Ready for the ADI Challenge?
              </CardTitle>
              <CardDescription className="text-lg">
                Test your DSA knowledge with our comprehensive ADI mock test featuring questions from all topics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-center space-x-6 text-sm text-gray-600">
                  <span>• 15 Docker Questions</span>
                  <span>• Timed Environment</span>
                  <span>• Detailed Explanations</span>
                </div>
                <Link href="/mock-test">
                  <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Take Docker Mock Test
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
