import React from "react";
import { Bands, ColorContext, MapScale } from "../types";



// Build 5 relative thresholds based off passed in max/min values
const generateBands = (max: number, min: number, scale: MapScale) => {
  let band1, band2, band3, band4, band5;
  if (scale === "relative") {
    const rangeUnit = (max - min) / 5;
    band1 = rangeUnit;
    band2 = rangeUnit * 2;
    band3 = rangeUnit * 3;
    band4 = rangeUnit * 4;
    band5 = rangeUnit * 5;
  } else {
    band1 = 20;
    band2 = 40;
    band3 = 60;
    band4 = 80;
    band5 = 100;
  }

  // console.log(`Min is ${min} and Max is ${max}`)
  //   console.log(`
  //   Band 1 is: ${band1}
  //   Band 2 is: ${band2}
  //   Band 3 is: ${band3}
  //   Band 4 is: ${band4}
  //   Band 5 is: ${band5}
  // `)
  return { band1, band2, band3, band4, band5 };
};

// Returns a color based on scale, context, and a value passed in
const handleColor = (
  value: number,
  context: ColorContext,
  scale: string,
  bands: Bands
) => {
  if (scale === "relative") {
    return generateRelativeColor(context, value, bands);
  } else if (scale === "percent") {
    return generatePercentColors(value, context);
  }
};

// Generate a color using the 5 bands (relative mode)
const generateRelativeColor = (
  context: ColorContext,
  value: number,
  bands: Bands
) => {
  const { band1, band2, band3, band4, band5 } = bands;
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
    return "";
  }
  return "";
};

// Generate a color based off a 5-band percentage scale from 0 to 100
const generatePercentColors = (value: number, context: ColorContext) => {
  const band1 = 20;
  const band2 = 40;
  const band3 = 60;
  const band4 = 80;
  const band5 = 100;
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
      return "#66c266";
    } else if (value > band4 && value <= band5) {
      return "#009ddb";
    } else if (value > band5) {
      return "#009ddb";
    }
  } else {
    return "";
  }
  return "";
};

export { handleColor, generateBands, generateRelativeColor, generatePercentColors };
