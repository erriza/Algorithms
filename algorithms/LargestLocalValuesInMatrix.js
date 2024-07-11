/**
 * You are given an n x n integer matrix grid.

Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:

    maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.

In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.

Return the generated matrix.
 */

var largestLocal = function(grid) {
    const nRows = grid.length;
    const nCols = grid[0].length;

    let result = new Array(nRows-2).fill().map(() => Array(nCols-2).fill(0));

    for(let row = 0; row < nRows - 2; row++) {
        for(let col = 0; col < nCols - 2; col++) {
            result[row][col] = findLargest(grid, row, col);
        }
    }

    return result;
}

function findLargest(grid, row, col) {
    let best = grid[row][col];
    for(let i = row; i < row + 3; i++) {
        for(let j = col; j < col + 3; j++) {
            best = Math.max(best, grid[i][j]);
        }
    }
    return best
}