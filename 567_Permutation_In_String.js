/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
    var checkInclusion = function(s1, s2) {
    s1 = s1.split("").sort().join("")
    s2 = s2.split("")
    for (let i = 0; i<s2.length; i++) {
        if (s2.slice(i, i+s1.length).sort().join("") === s1) {
            return true
        }
    }
    return false
};

// WORKS BUT TAKES LONG

console.log(checkInclusion('abc', 'aaaaabacbbbbbb'))