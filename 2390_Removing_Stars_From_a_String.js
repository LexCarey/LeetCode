/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    for (let i=0; i<s.length; i++) {
        if (s[i] === "*") {
            s = s.slice(0, i-1) + s.slice(i+1)
            i = i-2
        }
    }
    return s
};