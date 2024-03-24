import { Key } from "react";
import { KeyValuePair } from "tailwindcss/types/config";

export const colors: KeyValuePair = {
  HotPink: "#DF3C5F",
  Azure: "#224193",
  LightBlue: "#6F9BD1",
  Red: "#E6194B",
  Green: "#3CB44B",
  Yellow: "#FFE119",
  Blue: "#4363D8",
  Orange: "#F58231",
  Purple: "#911EB4",
  Cyan: "#42D4F4",
  Magenta: "#F032E6",
  Lime: "#BFEF45",
  Pink: "#FABED4",
  Teal: "#469990",
  Lavender: "#DCBEFF",
  Brown: "#9A6324",
  Gray: "#808080",
  Black: "#333333",
};

export const ageMapping: KeyValuePair = {
  "0-4 yrs": colors.HotPink,
  "5-11 yrs": colors.Azure,
  "12-17 yrs": colors.LightBlue,
  "18-24 yrs": colors.Red,
  "25-34 yrs": colors.Green,
  "35-44 yrs": colors.Yellow,
  "45-54 yrs": colors.Blue,
  "55-64 yrs": colors.Orange,
  "65-74 yrs": colors.Purple,
  "75-84 yrs": colors.Cyan,
  "85+ yrs": colors.Black,
};

export const raceMapping: KeyValuePair = {
  "Asian/PI": colors.HotPink,
  Black: colors.Azure,
  Hispanic: colors.LightBlue,
  White: colors.Green,
  "Other Race": colors.Gray,
  "Unknown Race": colors.Black,
};

export const sexMapping: KeyValuePair = {
  Male: colors.Cyan,
  Female: colors.Pink,
  "Unknown Sex": colors.Gray,
};
