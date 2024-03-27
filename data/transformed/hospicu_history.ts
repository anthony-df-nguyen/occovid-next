"use client";
import { CountySourceData } from "../source/types";
const data: CountySourceData = require("../source/timeseries_data/hospicu.json");
const hosByVaxData: CountySourceData = require("../source/timeseries_data/hos_by_vax.json")
import {
  sortDataByDate,
  buildDateLabels,
} from "./utils/helpers";
import { SingleSeriesChart, MultiSeriesChart } from "@/components/charts/utils/types";
import { colors } from "@/components/colors/colors";

sortDataByDate(data, "date");
sortDataByDate(hosByVaxData, "Date");
const labels = buildDateLabels(data, "date");
const hosByVaxLabels = buildDateLabels(hosByVaxData, "Date")

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
    backgroundColor: colors.red,
  },
  {
    label: "Hospitalized",
    data: data,
    key: "hospital",
    backgroundColor:colors.yellow,
  },
]);

const hos_by_vax_status = new MultiSeriesChart("Hospitalization by Vaccination Status", hosByVaxLabels, [{
  label: "Vaccincated",
  data: hosByVaxData,
  key: "fullvax_alladmit",
  backgroundColor: colors.blue,
}, {
  label: "Unvaccinated",
  data: hosByVaxData,
  key: "unvax_alladmit",
  backgroundColor: colors.orange,
}] )

export { hospital, icu, hospital_and_icu, hos_by_vax_status };
