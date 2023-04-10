/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [], temp
    for (let i=0; i<s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i])
        } else {
            if (stack.length === 0) return false
            if (s[i] === ")") temp = "("
            if (s[i] === "}") temp = "{"
            if (s[i] === "]") temp = "["
            if (stack[stack.length-1] != temp) return false
            stack.pop()
        }
    }
    if (stack.length === 0) return true
    return false
};