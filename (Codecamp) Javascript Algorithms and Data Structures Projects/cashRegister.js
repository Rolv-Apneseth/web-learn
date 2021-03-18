function checkCashRegister(price, cash, cid) {
  const TRANSLATE = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000,
  };

  var emptyCount = 0;
  var highest = 0;
  var reverseCid = cid.slice().reverse();
  var changeDue = (cash - price) * 100;
  var result = {
    status: "INSUFFICIENT_FUNDS",
    change: [],
  };

  for (let i in reverseCid) {
    if (reverseCid[i][1] == 0) {
      emptyCount++;
      continue;
    } else if (TRANSLATE[reverseCid[i][0]] < changeDue) {
      highest = 0;

      while (highest <= changeDue && highest <= reverseCid[i][1] * 100) {
        highest += TRANSLATE[reverseCid[i][0]];
      }

      highest -= TRANSLATE[reverseCid[i][0]];
      changeDue -= highest;

      if (highest / 100 == reverseCid[i][1]) {
        emptyCount++;
      }

      result.change.push([reverseCid[i][0], highest / 100]);
    }
  }

  if (emptyCount == cid.length && !changeDue) {
    result.status = "CLOSED";
    result.change = cid;
  } else if (result.change) {
    if (changeDue == 0) {
      result.status = "OPEN";
    } else {
      result.change = [];
    }
  }

  return result;
}

// TESTS
const failMessageStatus = "Test failed, status was incorrect";
const failMessageChange = "Test failed, change was incorrect";

var testResult;

const INPUTS = [
  [
    19.5,
    20,
    [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100],
    ],
  ],
  [
    3.26,
    100,
    [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100],
    ],
  ],
  [
    19.5,
    20,
    [
      ["PENNY", 0.01],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ],
  ],
  [
    19.5,
    20,
    [
      ["PENNY", 0.01],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 1],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ],
  ],
  [
    19.5,
    20,
    [
      ["PENNY", 0.5],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ],
  ],
];

const OUTPUTS = [
  { status: "OPEN", change: [["QUARTER", 0.5]] },
  {
    status: "OPEN",
    change: [
      ["TWENTY", 60],
      ["TEN", 20],
      ["FIVE", 15],
      ["ONE", 1],
      ["QUARTER", 0.5],
      ["DIME", 0.2],
      ["PENNY", 0.04],
    ],
  },
  { status: "INSUFFICIENT_FUNDS", change: [] },
  { status: "INSUFFICIENT_FUNDS", change: [] },
  {
    status: "CLOSED",
    change: [
      ["PENNY", 0.5],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ],
  },
];

// Go through different inputs and expected outputs
for (let i = 0; i < INPUTS.length; i++) {
  testResult = checkCashRegister(...INPUTS[i]);

  // Assert status correct
  console.assert(testResult.status == OUTPUTS[i].status, failMessageStatus);

  // Assert change correct
  for (let j in testResult.change) {
    for (let jj in testResult.change[j]) {
      console.assert(
        testResult.change[j][jj] == OUTPUTS[i].change[j][jj],
        failMessageChange
      );
    }
  }
}
