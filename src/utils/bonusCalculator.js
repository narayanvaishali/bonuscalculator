export function bonusCalculator(target, noOfShift, grossProfit, done) {
  if (!target || target === 0) {
    done("Invalid target", 0);
    return;
  }

  if (!noOfShift || noOfShift === 0) {
    done("Invalid no of shift", 0);
    return;
  }

  if (!grossProfit || grossProfit === 0) {
    done("Invalid gross profit", 0);
    return;
  }

  var Y = (parseFloat(noOfShift) * parseFloat(target)) / 20;
  var A = (parseFloat(Y) * 1) / 100;
  var B = ((parseFloat(grossProfit) - parseFloat(Y)) * 3) / 100;

  const bonus = parseFloat(A) + parseFloat(B);

  done(false, bonus > 0 ? bonus : 0);
}
