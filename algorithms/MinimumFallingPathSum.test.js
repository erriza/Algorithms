const { minFallingPathSum } = require('./MinimumFallingPathSum');

describe('minFallingPathSum', () => {
  it('should handle a basic 3x3 grid', () => {
    const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const result = minFallingPathSum(grid);
    expect(result).toBe(13); // Expected path: 1 -> 4 -> 8
  });

  it('should handle a grid with all equal values', () => {
    const grid = [[5, 5, 5], [5, 5, 5], [5, 5, 5]];
    const result = minFallingPathSum(grid);
    expect(result).toBe(15); // Any path will have the same sum
  });

  it('should handle a 1x1 grid', () => {
    const grid = [[7]];
    const result = minFallingPathSum(grid);
    expect(result).toBe(7); // Only one possible path
  });

});