"use client";
const caseDemo = require("../source/static_counts/cases_death_demographics/case_demographics.json");
import { CategoricalChart } from "@/components/charts/utils/types";
import { highAgeKeys, raceKeys2 } from "./utils/constants";
import { highAgeMapping, raceMapping2 } from "@/components/colors/colors";

export const caseByAgeBreakdown = new CategoricalChart(
  "Cases by Age",
  highAgeKeys,
  caseDemo,
  "cases",
  highAgeMapping
);

export const caseByRaceBreakdown = new CategoricalChart(
  "Cases by Race",
  raceKeys2,
  caseDemo,
  "cases",
  raceMapping2
);
