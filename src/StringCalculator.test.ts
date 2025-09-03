import { describe, it, expect } from 'vitest';
import { StringCalculator } from './StringCalculator';

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  describe('Step 1: Handle empty string', () => {
    it('should return 0 for empty string', () => {
      expect(calculator.add('')).toBe(0);
    });
  });

  describe('Step 2: Handle single number', () => {
    it('should return the number itself for single number', () => {
      expect(calculator.add('1')).toBe(1);
      expect(calculator.add('5')).toBe(5);
    });
  });

  describe('Step 3: Handle two comma-separated numbers', () => {
    it('should return sum of two comma-separated numbers', () => {
      expect(calculator.add('1,5')).toBe(6);
      expect(calculator.add('2,3')).toBe(5);
    });
  });

  describe('Step 4: Handle any amount of numbers', () => {
    it('should handle multiple comma-separated numbers', () => {
      expect(calculator.add('1,2,3,4,5')).toBe(15);
      expect(calculator.add('10,20,30')).toBe(60);
    });
  });

  describe('Step 5: Handle newlines between numbers', () => {
    it('should handle newlines as delimiters', () => {
      expect(calculator.add('1\n2,3')).toBe(6);
      expect(calculator.add('1\n2\n3')).toBe(6);
    });
  });

  describe('Step 6: Support different delimiters', () => {
    it('should support custom delimiters', () => {
      expect(calculator.add('//;\n1;2')).toBe(3);
      expect(calculator.add('//|\n1|2|3')).toBe(6);
      expect(calculator.add('//*\n1*2*3')).toBe(6);
    });
  });

  describe('Step 7: Handle negative numbers', () => {
    it('should throw exception for negative numbers', () => {
      expect(() => calculator.add('-1')).toThrow('negative numbers not allowed -1');
      expect(() => calculator.add('1,-2')).toThrow('negative numbers not allowed -2');
    });

    it('should show all negative numbers in exception message', () => {
      expect(() => calculator.add('-1,-2,-3')).toThrow('negative numbers not allowed -1,-2,-3');
      expect(() => calculator.add('1,-2,3,-4')).toThrow('negative numbers not allowed -2,-4');
    });
  });

  describe('Edge cases', () => {
    it('should handle whitespace correctly', () => {
      expect(calculator.add('1, 2, 3')).toBe(6);
      expect(calculator.add(' 1 , 2 , 3 ')).toBe(6);
    });

    it('should handle invalid inputs gracefully', () => {
      expect(calculator.add('1,a,2')).toBe(3); // Invalid 'a' is filtered out
      expect(calculator.add(',,1,,')).toBe(1); // Empty values are filtered out
    });
  });
});