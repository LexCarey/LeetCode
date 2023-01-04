


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