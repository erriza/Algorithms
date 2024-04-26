
var minFallingPathSum = function(grid) {
    let n = grid.length;
    let first_min = Infinity, second_min = Infinity;
    let first_idx = -1, second_idx = -1;

    for(let i = 0; i < n; i++) {
        if(i !== 0) {
            for(let j = 0; j < n; j++) {
                if(j !== first_idx) 
                    grid[i][j] += first_min;
                else 
                    grid[i][j] += second_min;
            }
        }
        first_min = Infinity;
        second_min = Infinity;

        for(let j = 0; j < n; j++) {
            if(grid[i][j] < first_min) {
                second_min = first_min;
                first_min = grid[i][j];
                first_idx = j;
            } else if(grid[i][j] < second_min) {
                second_min = grid[i][j];
                second_idx = j;
            }
        }
    }
    return Math.min(first_min, second_min);
}

module.exports = {
    minFallingPathSum
}