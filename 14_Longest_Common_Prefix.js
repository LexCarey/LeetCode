/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //Create starting prefix and set it as first string. Also create our runner,
    let prefix = strs[0], runner
    //Run a loop through all strings in the "strs" array
    for (let i = 1; i<strs.length; i++) {
        //Reset runner to 0 after every loop, this also set it to 0 if its the first time looping through.
        runner = 0
        //Run through strings letter by letter to verify that each letter is a match. Loop ends when we pass the final letter of either the current prefix or the string being compared.
        while (runner<prefix.length && runner<strs[i].length) {
            //If it is a match we continue on by adding one to our runner.
            if (prefix[runner] === strs[i][runner]) runner++
            //If it is not a match we can break out of the loop early.
            else break
        }
        //We update our prefix by slicing out the letters that didn't match.
        prefix = prefix.slice(0, runner)
        //Here we do a check to make sure that we still have a prefix, if we don't, we can return early to save some time.
        if (prefix === "") return prefix
    }
    //After we make it through the loop we are left with our longest common prefix!
    return prefix
};