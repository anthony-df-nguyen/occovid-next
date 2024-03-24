"use client";
const data: any[] = require("../source/timeseries_data/cases.json");
import {
  SingleSeriesChart,
  sortDataByDate,
  buildDateLabels,
} from "./utils/helpers";

sortDataByDate(data);
const labels = buildDateLabels(data);

// Case Data
const total_cases_spec = new SingleSeriesChart(
  "Total Cases by Specimen Collection Date",
  labels,
  data,
  "total_cases_spec",
  "red"
);
const daily_cases_spec = new SingleSeriesChart(
  "Daily Cases by Specimen Collection Date",
  labels,
  data,
  "daily_cases_spec",
  "red"
);
const snf_cases = new SingleSeriesChart(
  "SNF Cases",
  labels,
  data,
  "snf_cases",
  "orange"
);
const homeless_cases = new SingleSeriesChart(
  "Homeless Cases",
  labels,
  data,
  "homeless_cases",
  "purple"
);

const jail_cases = new SingleSeriesChart(
  "Jail Cases",
  labels,
  data,
  "jail_cases",
  "yellow"
);

const recovered = new SingleSeriesChart(
  "Recovered",
  labels,
  data,
  "recovered",
  "blue"
);

export {
  total_cases_spec,
  daily_cases_spec,
  snf_cases,
  homeless_cases,
  jail_cases,
  recovered,
};
