"use client";
const data: any[] = require("../source/timeseries_data/deaths.json");
import {
  SingleSeriesChart,
  sortDataByDate,
  buildDateLabels,
} from "../../components/charts/utils/helpers";
import { colors } from "@/components/colors/colors";

sortDataByDate(data,"date");
const labels = buildDateLabels(data, "date");

const total_dth = new SingleSeriesChart(
  "Total Deaths by Date of Death",
  labels,
  data,
  "total_dth_date",
  colors.Red
);

const dth_date = new SingleSeriesChart(
  "Daily Deaths by Date of Death",
  labels,
  data,
  "dth_date",
  colors.Red
);

const snf_dth = new SingleSeriesChart(
  "Skilled Nursing Facilities",
  labels,
  data,
  "snf_dth",
  colors.Yellow
);
const alf_dth = new SingleSeriesChart(
  "Alternative Living Facilities",
  labels,
  data,
  "alf_dth",
  colors.Orange
);
const jail_dth = new SingleSeriesChart(
  "Jails",
  labels,
  data,
  "jail_dth",
  colors.HotPink
);
const homeless_dth = new SingleSeriesChart(
  "Homeless",
  labels,
  data,
  "homeless_dth",
  colors.Purple
);

export { total_dth, dth_date, snf_dth, alf_dth, jail_dth, homeless_dth };
