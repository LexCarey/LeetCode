//2nd try, works better and faster!!

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let highestProfit = 0
    let runner = 0
    let lowest = prices[runner]
    let highest = prices[runner]
    while (runner < prices.length) {
        if (lowest > prices[runner]) {
            lowest = prices[runner]
            highest = 0
        }
        if (highest < prices[runner]) {
            highest = prices[runner]
        }
        if (highest - lowest > highestProfit) {
            highestProfit = highest - lowest
        }
        runner++
    }
    return highestProfit
};


//Works but too slow
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let highestProfit = 0
    for (let i=0; i<prices.length; i++) {
        for (let j=i; j<prices.length; j++) {
            if (prices[j] - prices[i] > highestProfit) {
                highestProfit = prices[j] - prices[i]
            }
        }
    }
    return highestProfit
};