import { Key } from "react";
import { KeyValuePair } from "tailwindcss/types/config";

export const colors: KeyValuePair = {
  lightGray: "#f3f3f3",
  ligherGray: "#999",
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

export const raceMapping: KeyValuePair = {
  "Asian/PI": colors.blue,
  Black: colors.purple,
  Hispanic: colors.pink,
  White: colors.yellow,
  "Other Race": colors.lightDark,
  "Unknown Race": colors.dark,
};

export const sexMapping: KeyValuePair = {
  Male: colors.blue,
  Female: colors.pink,
  "Unknown Sex": colors.gray,
};
