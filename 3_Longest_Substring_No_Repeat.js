/**
 * @param {string} s
 * @return {number}
 */
    var lengthOfLongestSubstring = function(s) {
    let highest = 0
    let current = 0
    let map = new Map()
    for (let i = 0; i<s.length; i++) {
        for (let j = i; j<s.length; j++) {
            if (map.get(s[j]) == 1) {
            current = 0
            map = new Map()
            break
            } else {
                map.set(s[j], 1)
                current ++
            }
            if (current>highest) {
                highest = current
            }
        }
    }
    return highest
};