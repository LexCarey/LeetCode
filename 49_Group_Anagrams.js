/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()
    for (let word in strs) {
        ordered = strs[word].split('').sort().join('')
        anagramList = map.get(ordered) || []
        anagramList.push(strs[word])
        map.set(ordered, anagramList)
    }
    return [ ...map.values() ]
};