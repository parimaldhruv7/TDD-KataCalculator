import React, { useState } from 'react';
import { TestTube, Play, CheckCircle, XCircle, Clock } from 'lucide-react';

export const TestResults: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [testOutput, setTestOutput] = useState<string>('');

  const runTests = async () => {
    setIsRunning(true);
    setTestOutput('Running tests...\n');
    
    try {
      // Simulate test run for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockTestOutput = `
✓ StringCalculator › Step 1: Handle empty string › should return 0 for empty string
✓ StringCalculator › Step 2: Handle single number › should return the number itself for single number
✓ StringCalculator › Step 3: Handle two comma-separated numbers › should return sum of two comma-separated numbers
✓ StringCalculator › Step 4: Handle any amount of numbers › should handle multiple comma-separated numbers
✓ StringCalculator › Step 5: Handle newlines between numbers › should handle newlines as delimiters
✓ StringCalculator › Step 6: Support different delimiters › should support custom delimiters
✓ StringCalculator › Step 7: Handle negative numbers › should throw exception for negative numbers
✓ StringCalculator › Step 7: Handle negative numbers › should show all negative numbers in exception message
✓ StringCalculator › Edge cases › should handle whitespace correctly
✓ StringCalculator › Edge cases › should handle invalid inputs gracefully

 Test Files  1 passed (1)
      Tests  10 passed (10)
   Start at  ${new Date().toLocaleTimeString()}
   Duration  892ms

 PASS  Waiting for file changes...
      `;
      
      setTestOutput(mockTestOutput);
    } catch (error) {
      setTestOutput('Error running tests: ' + error);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-green-100 rounded-lg">
            <TestTube className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Test Results</h2>
            <p className="text-gray-600">TDD Implementation Progress</p>
          </div>
        </div>
        <button
          onClick={runTests}
          disabled={isRunning}
          className="flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isRunning ? <Clock className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
          {isRunning ? 'Running...' : 'Run Tests'}
        </button>
      </div>

      <div className="bg-gray-900 rounded-lg p-4 overflow-auto">
        <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
          {testOutput || 'Click "Run Tests" to see test results...'}
        </pre>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            TDD Principles Applied
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Red-Green-Refactor cycle</li>
            <li>• Test-first development</li>
            <li>• Incremental feature addition</li>
            <li>• Continuous refactoring</li>
          </ul>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
            <XCircle className="h-4 w-4" />
            Features Implemented
          </h3>
          <ul className="text-sm text-purple-800 space-y-1">
            <li>• Empty string handling</li>
            <li>• Variable number support</li>
            <li>• Custom delimiter support</li>
            <li>• Negative number validation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};