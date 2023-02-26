Solution

We can go through all of the prices and we can instead keep track of the minimum price and subtract it from the selling prices like so.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice=prices[0],maxProfit=0
    for(let i=1;i<prices.length;i++){ 
        maxProfit=Math.max(maxProfit,prices[i]-minPrice)
        minPrice=Math.min(minPrice,prices[i])
    }
    return maxProfit
};

Time complexity: O(n)
Space complexity: O(1)
