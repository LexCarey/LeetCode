/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Map()
    let oddFound = false
    let palindromeLength = 0
    for (let letter in s) {
        if (map.get(s[letter])) {
            map.set(s[letter], map.get(s[letter]) + 1)
        } else {
            map.set(s[letter], 1)
        }
    }
    console.log(map)
    for (let [key, value] of map) {
        if (value % 2 === 0) {
            palindromeLength += value
        } else if (value % 2 === 1) {
            palindromeLength += (value - 1)
            oddFound = true
        }
    }
    if (oddFound) {
        palindromeLength++
    }
    return palindromeLength
};