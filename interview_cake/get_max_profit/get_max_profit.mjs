const getMaxProfit = (stockPrices) => {
  let maxProfit = 0;
  let buyPrice = stockPrices[0];

  for (let i = 1; i < stockPrices.length; i++) {
    let sellPrice = stockPrices[i];

    if (sellPrice - buyPrice > maxProfit) {
      maxProfit = sellPrice - buyPrice;
    } else if (sellPrice < buyPrice) {
      buyPrice = sellPrice;
    }
  }

  return maxProfit;
}
