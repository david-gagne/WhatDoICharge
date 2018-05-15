// Reference equation:
// N(1 - PP%) - PPfixed = TR

let yieldAfterPercentage;

function findYieldAfterPercentage( percentageFee ) {
  percentageFee *= 0.01;
  return Number( yieldAfterPercentage = ( 1 - percentageFee ).toFixed(2) );
}

// TODO: Continue writing inital code for calculator function
