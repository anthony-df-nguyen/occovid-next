"use client";
const data: any[] = require("../source/timeseries_data/deaths.json");
import {
  SingleSeriesChart,
  sortDataByDate,
  buildDateLabels,
} from "./utils/helpers";

sortDataByDate(data);
const labels = buildDateLabels(data);

const total_dth = new SingleSeriesChart(
  "Total Deaths by Date of Death",
  labels,
  data,
  "total_dth_date",
  "red"
);

const dth_date = new SingleSeriesChart(
    "Daily Deaths by Date of Death",
    labels,
    data,
    "dth_date",
    "red"
  );

  const snf_dth = new SingleSeriesChart(
    "Skilled Nursing Facilities",
    labels,
    data,
    "snf_dth",
    "red"
  );
  const alf_dth = new SingleSeriesChart(
    "Alternative Living Facilities",
    labels,
    data,
    "alf_dth",
    "orange"
  );
  const jail_dth = new SingleSeriesChart(
    "Jails",
    labels,
    data,
    "jail_dth",
    "yellow"
  );
  const homeless_dth = new SingleSeriesChart(
    "Homeless",
    labels,
    data,
    "homeless_dth",
    "purple"
  );

export { total_dth,dth_date, snf_dth, alf_dth, jail_dth,homeless_dth };
