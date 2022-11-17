/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
    var isIsomorphic = function(s, t) {
    const map = new Map()
    const map2 = new Map()
    let result = true
    for (let i = 0; i<s.length; i++) {
        if (map.has(s[i]) || map2.has(t[i])) {
            if (map.get(s[i]) != t[i] || map2.get(t[i]) != s[i]) {
                return false
            }
        } else {
            map.set(s[i], t[i])
            map2.set(t[i], s[i])
        }
    }
    return true
};