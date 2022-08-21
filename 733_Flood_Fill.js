/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color, tempsr=sr, tempsc=sc, hash = new Map()) {
    if (hash.get(sr + ", " + sc) == undefined) {
        hash.set(sr + ", " + sc, 1)
    }
    
    if (hash.get((tempsr-1) + ", " + tempsc) == undefined && tempsr>0 && image[tempsr-1][tempsc] == image[tempsr][tempsc]){
        hash.set((tempsr-1) + ", " + tempsc, 1)
        floodFill(image, sr, sc, color, tempsr-1, tempsc, hash)
        image[tempsr-1][tempsc] = color
    }

    if (hash.get((tempsr+1) + ", " + tempsc) == undefined && tempsr<image.length-1 && image[tempsr+1][tempsc] == image[tempsr][tempsc]){
        hash.set((tempsr+1) + ", " + tempsc, 1)
        floodFill(image, sr, sc, color, tempsr+1, tempsc, hash)
        image[tempsr+1][tempsc] = color
    }
    if (hash.get(tempsr + ", " + (tempsc-1)) == undefined && tempsc>0 &&image[tempsr][tempsc-1] == image[tempsr][tempsc]) {
        hash.set(tempsr + ", " + (tempsc-1), 1)
        floodFill(image, sr, sc, color, tempsr, tempsc-1, hash)
        image[tempsr][tempsc-1] = color
    }

    if (hash.get(tempsr + ", " + (tempsc+1)) == undefined && tempsc<image[0].length-1 &&image[tempsr][tempsc+1] == image[tempsr][tempsc]) {
        hash.set(tempsr + ", " + (tempsc+1), 1)
        floodFill(image, sr, sc, color, tempsr, tempsc+1, hash)
        image[tempsr][tempsc+1] = color
    }

    if (tempsr == sr && tempsc == sc) {
        image[sr][sc] = color
    }
    return image
};

console.log(floodFill([[0,1,1],[1,1,0]], 1, 1, 2))