
"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Database, Cloud, Server, Settings, Globe, CheckCircle, BookOpen } from "lucide-react";
import { getAllUnits } from "@/utils/questionUtils";

const iconMap = {
  'system-design-fundamentals': Brain,
  'system-architecture': Settings,
  'database-design': Database,
  'scalability-performance': Globe,
  'cloud-fundamentals': Cloud,
  'aws-services': Server,
  'advanced-cloud': Settings,
  'cloud-architecture': BookOpen
};

export default function QuizSelectionPage() {
  const units = getAllUnits();

  // Split units into System Design and Cloud Computing categories
  const systemDesignUnits = units.slice(0, 4); // First 4 units (IDs 1-200)
  const cloudComputingUnits = units.slice(4); // Last 4 units (IDs 201-400)

  const renderUnitCard = (unit: any) => {
    const IconComponent = iconMap[unit.id as keyof typeof iconMap] || Brain;
    
    return (
      <Card key={unit.id} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <IconComponent className="h-6 w-6 text-blue-600" />
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Path
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master System Design and Cloud Computing with our comprehensive quiz modules. 
            Each unit contains 50 carefully crafted questions to test and improve your knowledge.
          </p>
        </div>

        {/* System Design Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Brain className="mr-3 h-8 w-8 text-purple-600" />
              System Design (Questions 1-200)
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master the fundamentals of designing scalable, reliable, and efficient systems. 
              Learn architecture patterns, database design, and performance optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {systemDesignUnits.map(renderUnitCard)}
          </div>
        </div>

        {/* Cloud Computing Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Cloud className="mr-3 h-8 w-8 text-blue-600" />
              Cloud Computing (Questions 201-400)
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore cloud computing concepts, AWS services, and enterprise cloud architectures. 
              Perfect for cloud certification preparation and real-world cloud projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {cloudComputingUnits.map(renderUnitCard)}
          </div>
        </div>

        {/* Mock Test Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center justify-center">
                <CheckCircle className="mr-3 h-8 w-8 text-purple-600" />
                Ready for the Challenge?
              </CardTitle>
              <CardDescription className="text-lg">
                Test your knowledge with our comprehensive mock test featuring questions from all units
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-center space-x-6 text-sm text-gray-600">
                  <span>• 400 Questions</span>
                  <span>• Timed Environment</span>
                  <span>• Performance Analysis</span>
                </div>
                <Link href="/mock-test">
                  <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Take Mock Test
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
