import React from "react";

const relativeColors = (
  value: number,
  context: string,
  max: number,
  min: number
) => {
  let band1;
  let band2;
  let band3;
  let band4;
  let band5;
  // console.debug(`Max value is ${max} and min value is ${min}`);
  // console.debug(`The value passed over is ${value}`);
  let rangeUnit = (max - min) / 5;
  band1 = rangeUnit;
  band2 = rangeUnit * 2;
  band3 = rangeUnit * 3;
  band4 = rangeUnit * 4;
  band5 = rangeUnit * 5;

  // console.log(`
  //   Min is: ${min}
  //   Band 1 is: ${band1}
  //   Band 2 is: ${band2}
  //   Band 3 is:  ${band3}
  //   Band 4 is: ${band4}
  //   Band 5 is:  ${band5}
  //    Max is: ${max}
  // `)

  if (context === "high_is_bad") {
    if (value <= band1) {
      return "#009ddb";
    } else if (value > band1 && value <= band2) {
      return "#66c266";
    } else if (value > band2 && value <= band3) {
      return "#ffcc00";
    } else if (value > band3 && value <= band4) {
      return "#ff7c43";
    } else if (value > band4 && value <= band5) {
      return "#f95d6a";
    } else if (value > band5) {
      return "red";
    }
  } else if (context === "high_is_good") {
    if (value <= band1) {
      return "red";
    } else if (value > band1 && value <= band2) {
      return "#f95d6a";
    } else if (value > band2 && value <= band3) {
      return "#ff7c43";
    } else if (value > band3 && value <= band4) {
      return "#ffcc00";
    } else if (value > band4 && value <= band5) {
      return "#66c266";
    } else if (value > band5) {
      return "#009ddb";
    }
  } else {
    return "#009ddb";
  }
};
const percentColors = (
  value: number,
  context: string,
) => {
  const band1 = 20
  const band2 = 40
  const band3 = 60
  const band4 = 80
  const band5 = 100
  // console.log(`Min value is ${band1} and max value is ${band5}`)
  // console.log(`The value passed over is ${value}`)

  // console.log(`
  //   Band 1 is: ${band1}
  //   Band 2 is: ${band2}
  //   Band 3 is: ${band3}
  //   Band 4 is: ${band4}
  // `)

  if (context === "high_is_bad") {
    if (value < band1) {
      return "#009ddb";
    } else if (value > band1 && value <= band2) {
      return "#66c266";
    } else if (value > band2 && value <= band3) {
      return "#665191";
    } else if (value > band3 && value <= band4) {
      return "#ffcc00";
    } else if (value > band4 && value <= band5) {
      return "#ff7c43";
    } else if (value > band5) {
      return "#f95d6a";
    }
  } else if (context === "high_is_good") {
    if (value < band1) {
      return "#f95d6a";
    } else if (value >= band1 && value <= band2) {
      return "#ff7c43";
    } else if (value > band2 && value <= band3) {
      return "#ffcc00";
    } else if (value > band3 && value <= band4) {
      return "#665191";
    } else if (value > band4 && value <= band5) {
      return "#66c266";
    } else if (value > band5) {
      return "#009ddb";
    }
  } else {
    return "#009ddb";
  }
};

const generateColors = (
  value: number,
  context: string,
  scale: string,
  max: number,
  min: number
) => {
  if (scale === "relative") {
    return relativeColors(value, context, max, min);
  } else if (scale === "percent") {
    return percentColors(value, context);
  }
};

export { generateColors };
