/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let map = new Map(), result = 1
    for (let i=0; i<s.length; i++) {
        if (map.get(s[i])) {
            map = new Map()
            map.set(s[i], 1)
            result++
        } else {
            map.set(s[i], 1)
        }
    }
    return result
};