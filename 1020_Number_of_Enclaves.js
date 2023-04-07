/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    let borders = [], result = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1 && (i===0 || i===grid.length-1 || j===0 || j===grid[i].length-1)) borders.push([i, j])
        }
    }
    borders.forEach(border => {
        touchingBoundary(grid, border[0], border[1])
    })
    for (let i = 0; i<grid.length; i++) {
        for (let j = 0; j<grid[i].length; j++) {
            if (grid[i][j] === 1) {
                result++
            }
        }
    }
    return result
};

function touchingBoundary(grid, x, y) {
    if (grid[x][y] === 0) return
    grid[x][y] = 0
    if (x > 0) touchingBoundary(grid, x-1, y)
    if (y > 0) touchingBoundary(grid, x, y-1)
    if (x < grid.length-1) touchingBoundary(grid, x+1, y)
    if (y < grid[x].length-1) touchingBoundary(grid, x, y+1)
}