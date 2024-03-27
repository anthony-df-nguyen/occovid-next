import { Key } from "react";
import { KeyValuePair } from "tailwindcss/types/config";

export const colors: KeyValuePair = {
  lightGray: "#f3f3f3",
  lighterGray: "#999",
  blue: "#003f5c",
  darkBlue: "#2f4b7c",
  purple: "#665191",
  lightPurple: "#a05195",
  pink: "#d45087",
  red: "#f95d6a",
  yellow: "#ffcc00",
  gray: "#333333",
  orange: "#ff7c43",
  gold: "#ffa600",
  dark: "#121212",
  lightDark: "#272727",
  darktext: "#999999",
  green: "#66c266",
};

export const ageMapping: KeyValuePair = {
  "0-4 yrs": colors.blue,
  "5-11 yrs": colors.darkBlue,
  "12-17 yrs": colors.purple,
  "18-24 yrs": colors.lightPurple,
  "25-34 yrs": colors.pink,
  "35-44 yrs": colors.red,
  "45-54 yrs": colors.yellow,
  "55-64 yrs": colors.orange,
  "65-74 yrs": colors.gold,
  "75-84 yrs": colors.lightDark,
  "85+ yrs": colors.dark,
};

export const highAgeMapping: KeyValuePair = {
  "0 to 17": colors.blue,
  "18 to 24": colors.darkBlue,
  "25 to 34": colors.pink,
  "35 to 44": colors.red,
  "45 to 54": colors.yellow,
  "55 to 64": colors.orange,
  "65 to 74": colors.gold,
  "75 to 84 ": colors.lightGray,
  "85+ ": colors.dark,
};

export const raceMapping: KeyValuePair = {
  "Asian/PI": colors.blue,
  Black: colors.purple,
  Hispanic: colors.pink,
  White: colors.yellow,
  "Other Race": colors.lightDark,
  "Unknown Race": colors.dark,
};
export const raceMapping2: KeyValuePair = {
  Asian: colors.blue,
  "American Indian": colors.green,
  Latinx: colors.pink,
  White: colors.yellow,
  Black: colors.purple,
  "Other Race": colors.lightGray,
  "Unknown Race": colors.dark,
};

export const sexMapping: KeyValuePair = {
  Male: colors.blue,
  Female: colors.pink,
  "Unknown Sex": colors.gray,
};
