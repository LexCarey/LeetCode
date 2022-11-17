/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
    var isSubsequence = function(s, t) {
    let idxOfS = 0
    for (let i=0; i<t.length; i++) {
        if (t[i] === s[idxOfS]) {
            idxOfS++
        }
    }
    if (idxOfS >= s.length){
        return true
    }
    return false
};