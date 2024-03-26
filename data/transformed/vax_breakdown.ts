"use client";
import { CountySourceData } from "../source/types";
const data: CountySourceData = require("../source/static_counts/vaccinations/doses.json");
const timeData: CountySourceData = require("../source/timeseries_data/doses.json");
import { colors } from "@/components/colors/colors";
import {
  CategoricalChart,
  ageKeys,
  raceKeys,
  sexKeys,
  sortDataByDate,
  buildDateLabels,
  SingleSeriesChart,
} from "../../components/charts/utils/helpers";
import {
  ageMapping,
  raceMapping,
  sexMapping,
} from "@/components/colors/colors";

sortDataByDate(timeData, "vac_date");

const dosesLabels = buildDateLabels(timeData, "vac_date");

const doseHistory = new SingleSeriesChart(
  "Daily Doses Administered",
  dosesLabels,
  timeData,
  "valid_admin",
  colors.blue
);

//Race
const vaxByRace = new CategoricalChart(
  "Vaccinations by Race",
  raceKeys,
  data,
  "num_totalvalid",
  raceMapping
);
const vaxByRacePercent = new CategoricalChart(
  "Vaccination by Race %",
  raceKeys,
  data,
  "perc_pop_fully_vaxed",
  raceMapping
);

//Age
const vaxByAge = new CategoricalChart(
  "Vaccinations by Age",
  ageKeys,
  data,
  "num_totalvalid",
  ageMapping
);
const vaxByAgePercent = new CategoricalChart(
  "Vaccinations by Age by %",
  ageKeys,
  data,
  "perc_pop_fully_vaxed",
  ageMapping
);

//Sex
const vaxBySex = new CategoricalChart(
  "Vaccinations by Sex",
  sexKeys,
  data,
  "num_totalvalid",
  sexMapping
);
const vaxBySexPercent = new CategoricalChart(
  "Vaccination by Race %",
  sexKeys,
  data,
  "perc_pop_fully_vaxed",
  sexMapping
);

export {
  doseHistory,
  vaxByRace,
  vaxByRacePercent,
  vaxByAge,
  vaxByAgePercent,
  vaxBySex,
  vaxBySexPercent,
};
