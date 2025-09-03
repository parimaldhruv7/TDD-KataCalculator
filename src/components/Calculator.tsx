import React, { useState } from 'react';
import { Calculator as CalculatorIcon, AlertCircle, CheckCircle } from 'lucide-react';
import { StringCalculator } from '../StringCalculator';

export const Calculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculator = new StringCalculator();

  const handleCalculate = async () => {
    setIsCalculating(true);
    setError(null);
    
    // Add a small delay to show the loading state
    await new Promise(resolve => setTimeout(resolve, 300));

    try {
      const calculationResult = calculator.add(input);
      setResult(calculationResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setResult(null);
    } finally {
      setIsCalculating(false);
    }
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
    setError(null);
  };

  const exampleInputs = [
    { label: 'Empty string', value: '' },
    { label: 'Single number', value: '5' },
    { label: 'Two numbers', value: '1,5' },
    { label: 'Multiple numbers', value: '1,2,3,4,5' },
    { label: 'With newlines', value: '1\n2,3' },
    { label: 'Custom delimiter', value: '//;\n1;2;3' },
    { label: 'Negative number', value: '1,-2,3' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-blue-100 rounded-lg">
          <CalculatorIcon className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">String Calculator</h1>
          <p className="text-gray-600">TDD Kata Implementation</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="input" className="block text-sm font-semibold text-gray-700 mb-2">
            Enter numbers (comma-separated, newlines, or custom delimiters):
          </label>
          <textarea
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., 1,2,3 or //;\n1;2;3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 font-mono text-sm"
            rows={3}
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleCalculate}
            disabled={isCalculating}
            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCalculating ? 'Calculating...' : 'Calculate'}
          </button>
          <button
            onClick={handleClear}
            className="bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
          >
            Clear
          </button>
        </div>

        {result !== null && (
          <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <div>
              <p className="text-green-800 font-semibold">Result: {result}</p>
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <div>
              <p className="text-red-800 font-semibold">Error: {error}</p>
            </div>
          </div>
        )}

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Example Inputs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {exampleInputs.map((example, index) => (
              <button
                key={index}
                onClick={() => setInput(example.value)}
                className="text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
              >
                <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {example.label}
                </p>
                <p className="text-sm text-gray-600 font-mono mt-1">
                  "{example.value || '(empty)'}"
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};