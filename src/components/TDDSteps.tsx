import React from 'react';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  completed: boolean;
}

export const TDDSteps: React.FC = () => {
  const steps: Step[] = [
    {
      title: 'Empty String',
      description: 'Return 0 for empty string input',
      completed: true,
    },
    {
      title: 'Single Number',
      description: 'Return the number itself for single number input',
      completed: true,
    },
    {
      title: 'Two Numbers',
      description: 'Handle comma-separated two numbers',
      completed: true,
    },
    {
      title: 'Any Amount',
      description: 'Support any amount of comma-separated numbers',
      completed: true,
    },
    {
      title: 'Newlines',
      description: 'Handle newlines between numbers as delimiters',
      completed: true,
    },
    {
      title: 'Custom Delimiters',
      description: 'Support custom delimiters with //[delimiter]\\n format',
      completed: true,
    },
    {
      title: 'Negative Numbers',
      description: 'Throw exceptions for negative numbers with detailed messages',
      completed: true,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">TDD Implementation Steps</h2>
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-200 ${
              step.completed 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-gray-50 border border-gray-200'
            }`}
          >
            <div className="flex-shrink-0 mt-0.5">
              {step.completed ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <Circle className="h-5 w-5 text-gray-400" />
              )}
            </div>
            <div className="flex-1">
              <h3 className={`font-semibold ${step.completed ? 'text-green-900' : 'text-gray-700'}`}>
                Step {index + 1}: {step.title}
              </h3>
              <p className={`text-sm mt-1 ${step.completed ? 'text-green-700' : 'text-gray-600'}`}>
                {step.description}
              </p>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className="h-4 w-4 text-gray-400 mt-1 hidden sm:block" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">TDD Best Practices Applied</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• <strong>Red:</strong> Write a failing test first</li>
          <li>• <strong>Green:</strong> Write minimal code to pass the test</li>
          <li>• <strong>Refactor:</strong> Improve code while keeping tests green</li>
          <li>• <strong>Commit:</strong> Frequent commits showing evolution</li>
        </ul>
      </div>
    </div>
  );
};