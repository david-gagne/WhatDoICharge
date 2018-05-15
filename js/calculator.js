// N = Target Revenue + PPfixed / yieldAfterPercentage

let targetRevenueFromInput = document.querySelector("body > div:nth-child(2) > div > span.ui.small.input.item > input[type=\"number\"]");

targetRevenueFromInput.addEventListener("change", function () {
  alert(`Grabbed a target revenue of $${targetRevenueFromInput.value}.`); // --> verified that value is properly grabbed from input.
  // TODO: Finish full calculator function.
});

function findYieldAfterPercentage(percentageFee) {
  let yieldAfterPercentage;
  percentageFee *= 0.01;
  return yieldAfterPercentage = Number(( 1 - percentageFee ).toFixed(2));
}
