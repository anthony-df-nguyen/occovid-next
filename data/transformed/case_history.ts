"use client";
import { CountySourceData } from "../source/types";
const data: CountySourceData = require("../source/timeseries_data/cases.json");
import {
  SingleSeriesChart,
  sortDataByDate,
  buildDateLabels,
} from "../../components/charts/utils/helpers";
import { colors } from "@/components/colors/colors";

sortDataByDate(data,"date");
const labels = buildDateLabels(data, "date");

// Case Data
const total_cases_spec = new SingleSeriesChart(
  "Total Cases by Specimen Collection Date",
  labels,
  data,
  "total_cases_spec",
  colors.red
);
const daily_cases_spec = new SingleSeriesChart(
  "Daily Cases by Specimen Collection Date",
  labels,
  data,
  "daily_cases_spec",
  colors.orange
);
const snf_cases = new SingleSeriesChart(
  "Total Skilled Nursing Facility Cases",
  labels,
  data,
  "snf_cases",
  colors.orange
);
const homeless_cases = new SingleSeriesChart(
  "Total Homeless Cases",
  labels,
  data,
  "homeless_cases",
  colors.purple
);

const jail_cases = new SingleSeriesChart(
  "Total Jail Cases",
  labels,
  data,
  "jail_cases",
  colors.yellow
);

const recovered = new SingleSeriesChart(
  "Total Estimated Recovered",
  labels,
  data,
  "recovered",
  colors.darkBlue,
);

export {
  total_cases_spec,
  daily_cases_spec,
  snf_cases,
  homeless_cases,
  jail_cases,
  recovered,
};
