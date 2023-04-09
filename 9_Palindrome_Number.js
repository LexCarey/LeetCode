/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let pal = String(x), left = 0, right = pal.length-1
    while(left<right) {
        if (pal[left] !== pal[right]) {
            return false
        }
        left++
        right--
    }
    return true
};