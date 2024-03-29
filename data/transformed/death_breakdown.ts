"use client";
const deathDemo = require("../source/static_counts/cases_death_demographics/death_demographics.json");
import { CategoricalChart } from "@/components/charts/utils/types";
import { highAgeKeys, raceKeys2, sexKeys } from "./utils/constants";
import { highAgeMapping, raceMapping2, sexMapping } from "@/components/colors/colors";

export const deathsByAgeBreakdown = new CategoricalChart(
  "Deaths by Age",
  highAgeKeys,
  deathDemo,
  "deaths",
  highAgeMapping
);

export const deathsByRaceBreakdown = new CategoricalChart(
  "Deaths by Race",
  raceKeys2,
  deathDemo,
  "deaths",
  raceMapping2
);

export const deathsBySexBreakdown = new CategoricalChart(
  "Deaths by Sex",
  sexKeys,
  deathDemo,
  "deaths",
  sexMapping
);
