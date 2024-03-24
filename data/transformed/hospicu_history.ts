"use client";
const data: any[] = require("../source/timeseries_data/hospicu.json");
import {
  SingleSeriesChart,
  MultiSeriesChart,
  sortDataByDate,
  buildDateLabels,
} from "./utils/helpers";

sortDataByDate(data, "date");
const labels = buildDateLabels(data, "date");

const hospital = new SingleSeriesChart(
  "Daily Hospitalized",
  labels,
  data,
  "hospital",
  "orange"
);
const icu = new SingleSeriesChart("Daily ICU", labels, data, "icu", "red");

const hospital_and_icu = new MultiSeriesChart("Daily ICU vs Hospital", labels, [
  {
    label: "ICU",
    data: data,
    key: "icu",
    backgroundColor: "red",
  },
  {
    label: "Hospitalized",
    data: data,
    key: "hospital",
    backgroundColor: "orange",
  },
]);

export { hospital, icu, hospital_and_icu };
