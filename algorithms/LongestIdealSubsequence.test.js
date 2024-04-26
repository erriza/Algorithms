const { longestIdealString } = require('./LongestIdealSubsequence')

describe('longestIdealString', () => {
  it('handles empty string', () => {
    expect(longestIdealString("", 0)).toBe(0);
  });

  it('handles single character string', () => {
    expect(longestIdealString("a", 0)).toBe(1);
  });

  it('handles string with all same characters', () => {
    expect(longestIdealString("aaa", 0)).toBe(3);
  });

  it('handles small k with no matches', () => {
    expect(longestIdealString("abc", 0)).toBe(1);
  });

//   it('handles larger k with some matches', () => {
//     expect(longestIdealString("abde", 2)).toBe(3);
//   });

  it('handles large k where all characters match', () => {
    expect(longestIdealString("xyz", 25)).toBe(3);
  });

  // Add more tests for edge cases and challenge cases as needed
});