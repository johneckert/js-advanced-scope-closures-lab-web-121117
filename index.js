function produceDrivingRange(blockRange) {
  return function(tripStart, tripFinish) {
    const startNum = parseInt(tripStart.substring(0, 2));
    console.log("startNum: ", startNum);
    const endNum = parseInt(tripFinish.substring(0, 2));
    console.log("endNum: ", endNum);
    const trip = endNum - startNum;
    console.log("trip: ", trip);
    if (trip > blockRange) {
      return `${trip - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - trip}`;
    }
  };
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent;
  };
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}
