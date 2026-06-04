
"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, CheckCircle, Cloud, Layers, Network, Shield, Server } from "lucide-react";
import { getAllUnits } from "@/utils/questionUtils";
import { questions } from "@/data/questions";

const iconPalette = [Cloud, Server, Shield, Layers, Network, Brain];

export default function QuizSelectionPage() {
  const units = getAllUnits();

  const renderUnitCard = (unit: any, index: number) => {
    const IconComponent = iconPalette[index % iconPalette.length];
    
    return (
      <Card key={unit.id} className="hover:shadow-xl transition-all duration-300 border border-slate-200 bg-white/90 backdrop-blur">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-cyan-100 rounded-lg">
                <IconComponent className="h-6 w-6 text-cyan-700" />
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_20%,#60a5fa33,transparent_30%),radial-gradient(circle_at_85%_15%,#22d3ee29,transparent_30%),linear-gradient(140deg,#e0f2fe,#f8fafc_50%,#f0f9ff)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            System Design Practice Modules
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose a specific topic or solve everything in one run. Built for fast practice, instant feedback, and clear progress.
          </p>
          
          <div className="mt-8">
            <Link href="/quiz/all">
              <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg">
                <Brain className="mr-3 h-6 w-6" />
                Practice All {questions.length} Questions
              </Button>
            </Link>
          </div>
          
          <div className="mt-6 text-gray-500 text-sm">
            <p>{units.length} topics available</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {units.map((unit, index) => renderUnitCard(unit, index))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center justify-center">
                <CheckCircle className="mr-3 h-8 w-8 text-cyan-700" />
                Ready for a Full Mock?
              </CardTitle>
              <CardDescription className="text-lg">
                Simulate test pressure with a timed run across all topics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-center space-x-6 text-sm text-gray-600">
                  <span>• {questions.length} Questions</span>
                  <span>• Timed Environment</span>
                  <span>• Detailed Explanations</span>
                </div>
                <Link href="/mock-test">
                  <Button size="lg" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
                    Start Mock Test
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
