import { describe, it, expect } from 'vitest';
import { fitlerEvenNumbers } from './example';

// Test Driven Developement
// Red, Green, Refactor

describe('test fitlerEvenNumbers function', () => {
  it('should return an empty array if input is empty', () => {
    const result = fitlerEvenNumbers([]);
    expect(result).toEqual([]);
  });

  it('should return [1] if input is [1, 2]', () => {
    const result = fitlerEvenNumbers([1, 2]);
    expect(result).toEqual([1]);
  });

  it('should return [] if input is [2]', () => {
    const input = [2];
    const result = fitlerEvenNumbers(input);
    expect(result).toEqual([]);
  });
  it('should return [] if input is [3]', () => {
    const input = [3];
    const result = fitlerEvenNumbers(input);
    expect(result).toEqual([3]);
  });
  it('should return [] if input is [2, 3]', () => {
    const input = [2, 3];
    const result = fitlerEvenNumbers(input);
    expect(result).toEqual([3]);
  });
});
