/**
 * @param {string} s
 * @return {string}
 */
    var reverseWords = function(s) {
    const words = s.split(' ');
    for (let i=0; i<words.length; i++) {
        words[i] = words[i].split("")
        words[i] = words[i].reverse()
        words[i] = words[i].join("")
    }
    sentence = words.join(" ")
    return sentence
};