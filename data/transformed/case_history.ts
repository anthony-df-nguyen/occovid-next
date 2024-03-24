"use client";
const data: any[] = require("../source/timeseries_data/cases.json");
import {
  SingleSeriesChart,
  sortDataByDate,
  buildDateLabels,
} from "./utils/helpers";
import { colors } from "@/components/colors/colors";

sortDataByDate(data,"date");
const labels = buildDateLabels(data, "date");

// Case Data
const total_cases_spec = new SingleSeriesChart(
  "Total Cases by Specimen Collection Date",
  labels,
  data,
  "total_cases_spec",
  colors.Red
);
const daily_cases_spec = new SingleSeriesChart(
  "Daily Cases by Specimen Collection Date",
  labels,
  data,
  "daily_cases_spec",
  colors.HotPink
);
const snf_cases = new SingleSeriesChart(
  "SNF Cases",
  labels,
  data,
  "snf_cases",
  colors.Orange
);
const homeless_cases = new SingleSeriesChart(
  "Homeless Cases",
  labels,
  data,
  "homeless_cases",
  colors.Purple
);

const jail_cases = new SingleSeriesChart(
  "Jail Cases",
  labels,
  data,
  "jail_cases",
  colors.Yellow
);

const recovered = new SingleSeriesChart(
  "Recovered",
  labels,
  data,
  "recovered",
  colors.Cyan,
);

export {
  total_cases_spec,
  daily_cases_spec,
  snf_cases,
  homeless_cases,
  jail_cases,
  recovered,
};
