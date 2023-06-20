/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let sMap = new Map(), tMap = new Map()
    for (let letter in s) {
        if (sMap.get(s[letter])) sMap.set(s[letter], sMap.get(s[letter])+1)
        else sMap.set(s[letter], 1)
        if (tMap.get(t[letter])) tMap.set(t[letter], tMap.get(t[letter])+1)
        else tMap.set(t[letter], 1)
    }
    if (sMap.size !== tMap.size) return false
    for (let [key, value] of sMap) {
        if (!tMap.get(key)) return false
        if (sMap.get(key) !== tMap.get(key)) return false
    }
    return true
};