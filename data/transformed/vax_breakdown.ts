"use client";
const data: any[] = require("../source/static_counts/vaccinations/doses.json");
import { MultiSeriesChart, filterCategoricalData } from "./utils/helpers";

const raceLabels = ["Races/Ethnicities"];

const vaxByRace = new MultiSeriesChart("Vaccinations by Race", raceLabels, [
  {
    label: "Asian/PI",
    data: filterCategoricalData(data, "category", "Asian/PI"),
    key: "num_totalvalid",
    backgroundColor: "purple",
  },
  {
    label: "Hispanic",
    data: filterCategoricalData(data, "category", "Hispanic"),
    key: "num_totalvalid",
    backgroundColor: "orange",
  },
  {
    label: "Black",
    data: filterCategoricalData(data, "category", "Black"),
    key: "num_totalvalid",
    backgroundColor: "green",
  },
  {
    label: "White",
    data: filterCategoricalData(data, "category", "White"),
    key: "num_totalvalid",
    backgroundColor: "blue",
  },
  {
    label: "Other",
    data: filterCategoricalData(data, "category", "Other Race"),
    key: "num_totalvalid",
    backgroundColor: "grey",
  },
  {
    label: "Unknown",
    data: filterCategoricalData(data, "category", "Unknown Race"),
    key: "num_totalvalid",
    backgroundColor: "black",
  },
]);

const vaxByRacePercent = new MultiSeriesChart(
  "Vaccinations by Race by %",
  raceLabels,
  [
    {
      label: "Asian/PI",
      data: filterCategoricalData(data, "category", "Asian/PI"),
      key: "perc_pop_fully_vaxed",
      backgroundColor: "purple",
    },
    {
      label: "Hispanic",
      data: filterCategoricalData(data, "category", "Hispanic"),
      key: "perc_pop_fully_vaxed",
      backgroundColor: "orange",
    },
    {
      label: "Black",
      data: filterCategoricalData(data, "category", "Black"),
      key: "perc_pop_fully_vaxed",
      backgroundColor: "green",
    },
    {
      label: "White",
      data: filterCategoricalData(data, "category", "White"),
      key: "perc_pop_fully_vaxed",
      backgroundColor: "blue",
    },
  ]
);

const vaxByAge = new MultiSeriesChart(
  "Vaccinations by Age",
  ["Age Groups"],
  [
    {
      label: "0-4 yrs",
      data: filterCategoricalData(data, "category", "0-4 yrs"),
      key: "num_totalvalid",
      backgroundColor: "purple",
    },
    {
      label: "5-11 yrs",
      data: filterCategoricalData(data, "category", "5-11 yrs"),
      key: "num_totalvalid",
      backgroundColor: "orange",
    },
    {
      label: "12-17 yrs",
      data: filterCategoricalData(data, "category", "12-17 yrs"),
      key: "num_totalvalid",
      backgroundColor: "green",
    },
    {
      label: "18-24 yrs",
      data: filterCategoricalData(data, "category", "18-24 yrs"),
      key: "num_totalvalid",
      backgroundColor: "blue",
    },
    {
      label: "25-34 yrs",
      data: filterCategoricalData(data, "category", "25-34 yrs"),
      key: "num_totalvalid",
      backgroundColor: "blue",
    },
    {
      label: "35-44 yrs",
      data: filterCategoricalData(data, "category", "35-44 yrs"),
      key: "num_totalvalid",
      backgroundColor: "blue",
    },
    {
      label: "45-54 yrs",
      data: filterCategoricalData(data, "category", "45-54 yrs"),
      key: "num_totalvalid",
      backgroundColor: "blue",
    },
    {
      label: "55-64 yrs",
      data: filterCategoricalData(data, "category", "55-64 yrs"),
      key: "num_totalvalid",
      backgroundColor: "blue",
    },
    {
      label: "65-74 yrs",
      data: filterCategoricalData(data, "category", "65-74 yrs"),
      key: "num_totalvalid",
      backgroundColor: "blue",
    },
    {
      label: "75-84 yrs",
      data: filterCategoricalData(data, "category", "75-84 yrs"),
      key: "num_totalvalid",
      backgroundColor: "blue",
    },
    {
      label: "85+ yrs",
      data: filterCategoricalData(data, "category", "85+ yrs"),
      key: "num_totalvalid",
      backgroundColor: "blue",
    },
  ]
);

const vaxByAgePercent = new MultiSeriesChart("Vaccinations by Age by %", ["Age Groups"], [
    {
      label: "0-4 yrs",
      data: filterCategoricalData(data, "category", "0-4 yrs"),
      key: "perc_pop_fully_vaxed",
      backgroundColor: "purple",
    },
    {
      label: "5-11 yrs",
      data: filterCategoricalData(data, "category", "5-11 yrs"),
      key: "perc_pop_fully_vaxed",
      backgroundColor: "orange",
    },
    {
      label: "12-17 yrs",
      data: filterCategoricalData(data, "category", "12-17 yrs"),
      key: "perc_pop_fully_vaxed",
      backgroundColor: "green",
    },
    {
      label: "18-24 yrs",
      data: filterCategoricalData(data, "category", "18-24 yrs"),
      key: "perc_pop_fully_vaxed",
      backgroundColor: "blue",
    },
    {
      label: "25-34 yrs",
      data: filterCategoricalData(data, "category", "25-34 yrs"),
      key: "perc_pop_fully_vaxed",
      backgroundColor: "blue",
    },
    {
      label: "35-44 yrs",
      data: filterCategoricalData(data, "category", "35-44 yrs"),
      key: "perc_pop_fully_vaxed",
      backgroundColor: "blue",
    },
    {
      label: "45-54 yrs",
      data: filterCategoricalData(data, "category", "45-54 yrs"),
      key: "perc_pop_fully_vaxed",
      backgroundColor: "blue",
    },
    {
      label: "55-64 yrs",
      data: filterCategoricalData(data, "category", "55-64 yrs"),
      key: "perc_pop_fully_vaxed",
      backgroundColor: "blue",
    },
    {
      label: "65-74 yrs",
      data: filterCategoricalData(data, "category", "65-74 yrs"),
      key: "perc_pop_fully_vaxed",
      backgroundColor: "blue",
    },
    {
      label: "75-84 yrs",
      data: filterCategoricalData(data, "category", "75-84 yrs"),
      key: "perc_pop_fully_vaxed",
      backgroundColor: "blue",
    },
    {
      label: "85+ yrs",
      data: filterCategoricalData(data, "category", "85+ yrs"),
      key: "perc_pop_fully_vaxed",
      backgroundColor: "blue",
    },
  ]);

export { vaxByRace, vaxByRacePercent, vaxByAge, vaxByAgePercent };
