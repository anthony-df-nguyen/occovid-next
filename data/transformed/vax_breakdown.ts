"use client";
const data: any[] = require("../source/static_counts/vaccinations/doses.json");
import {
  MultiSeriesChart,
  filterCategoricalData,
  ageKeys,
  raceKeys,
  sexKeys,
} from "./utils/helpers";
import {
  ageMapping,
  raceMapping,
  sexMapping,
} from "@/components/colors/colors";

const raceLabels = ["Races/Ethnicities"];

//Race
const vaxByRace = new MultiSeriesChart(
  "Vaccinations by Race",
  raceLabels,
  raceKeys.map((race) => {
    return {
      label: race,
      data: filterCategoricalData(data, "category", race),
      key: "num_totalvalid",
      backgroundColor: raceMapping[race],
    };
  })
);

const vaxByRacePercent = new MultiSeriesChart(
  "Vaccinations by Race by %",
  raceLabels,
  raceKeys.map((race, i) => {
    return {
      label: race,
      data: filterCategoricalData(data, "category", race),
      key: "perc_pop_fully_vaxed",
      backgroundColor: raceMapping[race],
    };
  })
);

//Age

const vaxByAge = new MultiSeriesChart(
  "Vaccinations by Age",
  ["Age Groups"],
  ageKeys.map((age) => {
    return {
      label: age,
      data: filterCategoricalData(data, "category", age),
      key: "num_totalvalid",
      backgroundColor: ageMapping[age],
    };
  })
);

const vaxByAgePercent = new MultiSeriesChart(
  "Vaccinations by Age by %",
  ["Age Groups"],
  ageKeys.map((age) => {
    return {
      label: age,
      data: filterCategoricalData(data, "category", age),
      key: "perc_pop_fully_vaxed",
      backgroundColor: ageMapping[age],
    };
  })
);

//Sex

const vaxBySex = new MultiSeriesChart(
  "Vaccinations by Sex",
  ["Sex"],
  sexKeys.map((sex) => {
    return {
      label: sex,
      data: filterCategoricalData(data, "category", sex),
      key: "num_totalvalid",
      backgroundColor: sexMapping[sex],
    };
  })
);

const vaxBySexPercent = new MultiSeriesChart(
  "Vaccinations by Sex",
  ["Sex"],
  sexKeys.map((sex) => {
    return {
      label: sex,
      data: filterCategoricalData(data, "category", sex),
      key: "perc_pop_fully_vaxed",
      backgroundColor: sexMapping[sex],
    };
  })
);

export {
  vaxByRace,
  vaxByRacePercent,
  vaxByAge,
  vaxByAgePercent,
  vaxBySex,
  vaxBySexPercent,
};
