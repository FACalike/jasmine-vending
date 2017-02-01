function getChange(totalPayable, cashPaid) {
  var change = [];
  var coins = [200, 100, 50, 20, 10, 5, 2, 1];
  var balance = cashPaid - totalPayable;
  while (balance > 0) {

    // push the biggest coin that's less than balance into change
    for (var i = 0; i < coins.length; i++) {
      if (coins[i] <= balance) {
        change.push(coins[i]);
        balance -= coins[i];
        i--;
      }
    }
  }
  return change;
}
