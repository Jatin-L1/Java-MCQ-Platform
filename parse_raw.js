const fs = require('fs');

const text = fs.readFileSync('raw_text.txt', 'utf8');

const regex = /([\s\S]*?)\*\*.*?Answer:\s*([A-Za-z])\)\s*(.*?)\*\*/gi;
let match;
let newQuestions = [];

while ((match = regex.exec(text)) !== null) {
   let block = match[1].trim();
   const exactCorrectLetter = match[2].toUpperCase(); 
   
   // Sometimes block might just be random garbage between the last match and this
   // Let's ensure it has a question number prefix
   if(!block.match(/^\d+\./)) {
       // Maybe it starts differently?
       continue;
   }

   const optionRegex = /^([a-dA-D])\)\s*([\s\S]*?)(?=(?:^[a-dA-D]\)|$))/gm;
   let optMatch;
   let optionsMap = {};
   
   const firstOptionMatch = /^[a-dA-D]\)\s*/mi.exec(block);
   if (!firstOptionMatch) continue;
   
   let questionText = block.substring(0, firstOptionMatch.index).trim();
   questionText = questionText.replace(/^\d+\.\s*/, '').trim();
   questionText = questionText.replace(/^\*\*|\*\*$/g, '').trim(); // Remove leading/trailing bold
   
   if (questionText.includes("These additional questions") || questionText.includes("These questions should challenge")) {
       const lines = questionText.split('\n');
       questionText = lines[lines.length-1].replace(/^\d+\.\s*/, '').trim();
   }
   
   const optionsText = block.substring(firstOptionMatch.index);
   let options = [];
   while ((optMatch = optionRegex.exec(optionsText)) !== null) {
       const l = optMatch[1].toUpperCase();
       let txt = optMatch[2].trim();
       txt = txt.replace(/`([^`]+)`/g, '$1'); // Strip backticks
       optionsMap[l] = txt;
   }
   
   options = [optionsMap['A'], optionsMap['B'], optionsMap['C'], optionsMap['D']].filter(Boolean);
   if(options.length < 2) continue;
   
   let correctOptionText = optionsMap[exactCorrectLetter];
   if (!correctOptionText) continue;

   let shuffled = [...options];
   for(let i = shuffled.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
   }
   
   const newIndex = shuffled.indexOf(correctOptionText);
   const newAnsLetter = ['A', 'B', 'C', 'D'][newIndex];
   
   let topic = "Computer Science";
   const lowerQ = questionText.toLowerCase();
   
   if (lowerQ.includes('sort')) topic = 'Sorting Algorithms';
   else if (lowerQ.includes('bitwise') || lowerQ.includes('<<') || lowerQ.includes('~')) topic = 'Bit Manipulation';
   else if (lowerQ.includes('vector') || lowerQ.includes('set') || lowerQ.includes('container') || lowerQ.includes('stl')) topic = 'C++ STL';
   else if (lowerQ.includes('recursion') || lowerQ.includes('backtracking') || lowerQ.includes('memoization')) topic = 'Recursion & Backtracking';
   else if (lowerQ.includes('class') || lowerQ.includes('object') || lowerQ.includes('pointer') || lowerQ.includes('new') || lowerQ.includes('delete')) topic = 'C++ Concepts';
   else if (lowerQ.includes('switch') || lowerQ.includes('loop') || lowerQ.includes('ternary')) topic = 'C++ Basics';
   else if (lowerQ.includes('linked list') || lowerQ.includes('doubly') || lowerQ.includes('circular')) topic = 'Linked Lists';


   newQuestions.push({
       question: questionText,
       options: shuffled,
       correctAnswer: newAnsLetter,
       explanation: "The correct answer is " + correctOptionText,
       topic: topic,
       difficulty: "medium" // could guess based on content
   });
}

const existingQuestionsFile = fs.readFileSync('d:/Project/New folder/data/questions.ts', 'utf8');
const match2 = existingQuestionsFile.match(/export const questions: Question\[\] = (\[[\s\S]*\]);/m);

let existingParsed = [];
if (match2) {
  try {
    existingParsed = JSON.parse(match2[1]);
  } catch(e) {
    console.log("Could not parse existing questions");
  }
}

let nextId = existingParsed.length > 0 ? Math.max(...existingParsed.map(q => q.id)) + 1 : 1;
let addedCount = 0;

const existingTexts = new Set(existingParsed.map(q => q.question.toLowerCase().trim()));

for (const q of newQuestions) {
    if (!existingTexts.has(q.question.toLowerCase().trim())) {
        existingTexts.add(q.question.toLowerCase().trim());
        q.id = nextId++;
        existingParsed.push(q);
        addedCount++;
    }
}

const output = `export interface Question {\n  id: number\n  question: string\n  options: string[]\n  correctAnswer: string\n  explanation?: string\n  topic?: string\n  difficulty?: "easy" | "medium" | "hard"\n}\n\nexport const questions: Question[] = ` + JSON.stringify(existingParsed, null, 2) + `;\n`;

fs.writeFileSync('d:/Project/New folder/data/questions.ts', output);
console.log("Added unique questions:", addedCount, "Total:", existingParsed.length);