/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //Create a new map which we will use as a frequency table.
    let freqTable = new Map()
    //Loop through nums array and update the frequency table by adding 1 to the numbers kay value.
    for (let num of nums) {
        freqTable.set(num, (freqTable.get(num) || 0) + 1);
    }
    //Sort the frequency table by most frequently seen and return the first K keys.
    return [...freqTable.keys()].sort((a, b) => freqTable.get(b) - freqTable.get(a)).slice(0, k)
};