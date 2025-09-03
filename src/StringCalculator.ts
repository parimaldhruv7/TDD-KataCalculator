export class StringCalculator {
  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }

    let delimiter = ',';
    let numbersToProcess = numbers;

    // Check for custom delimiter
    if (numbers.startsWith('//')) {
      const delimiterMatch = numbers.match(/^\/\/(.)\n(.*)$/);
      if (delimiterMatch) {
        delimiter = delimiterMatch[1];
        numbersToProcess = delimiterMatch[2];
      }
    }

    // Replace newlines with the current delimiter for consistent processing
    const normalizedNumbers = numbersToProcess.replace(/\n/g, delimiter);
    
    // Split by delimiter and convert to numbers
    const numberArray = normalizedNumbers
      .split(delimiter)
      .map(num => parseInt(num.trim(), 10))
      .filter(num => !isNaN(num));

    // Check for negative numbers
    const negativeNumbers = numberArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
    }

    // Calculate sum
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}