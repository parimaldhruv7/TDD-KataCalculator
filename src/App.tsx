import React from 'react';
import { Header } from './components/Header';
import { Calculator } from './components/Calculator';
import { TestResults } from './components/TestResults';
import { TDDSteps } from './components/TDDSteps';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            String Calculator TDD Kata
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            A complete implementation of the Incubyte String Calculator kata following Test-Driven Development principles. 
            This project demonstrates clean code, comprehensive testing, and incremental feature development.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          <div className="space-y-8">
            <Calculator />
            <TDDSteps />
          </div>
          <div>
            <TestResults />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Clean Architecture</h4>
              <p className="text-sm text-blue-800">
                Separated concerns with dedicated calculator class and comprehensive test suite
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">TDD Approach</h4>
              <p className="text-sm text-green-800">
                Each feature developed using Red-Green-Refactor cycle with clear test cases
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Error Handling</h4>
              <p className="text-sm text-purple-800">
                Robust validation with detailed error messages for negative numbers
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;