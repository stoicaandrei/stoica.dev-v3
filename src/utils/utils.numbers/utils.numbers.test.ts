import { clamp } from './utils.numbers';

describe('clamp', () => {
  it('should clamp a number between two numbers', () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(5, 10, 0)).toBe(5);
    expect(clamp(5, 0, 4)).toBe(4);
    expect(clamp(5, 4, 0)).toBe(4);
    expect(clamp(5, 6, 10)).toBe(6);
    expect(clamp(5, 10, 6)).toBe(6);
  });
});
