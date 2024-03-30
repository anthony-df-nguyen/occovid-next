import { TabData } from "@/components/charts/TabChartController";
import { maxYScale } from "@/components/charts/utils/constants";
import {
  vaxByRace,
  vaxByRacePercent,
  vaxByAge,
  vaxByAgePercent,
  vaxBySex,
  vaxBySexPercent,
  doseHistory,
  totalDoseHistory,
} from "@/data/transformed/vax_breakdown";
import { MapControllerProps } from "@/components/maps/MapController";

//Charts

export const vaxTabs: TabData = [
  {
    tabName: "Daily Doses",
    tabData: doseHistory,
  },
  {
    tabName: "Total Doses",
    tabData: totalDoseHistory,
  },
];
export const vaxDemoTabs: TabData = [
  {
    tabName: "Race",
    tabData: vaxByRace,
  },
  {
    tabName: "Race %",
    tabData: vaxByRacePercent,
    scaleOptions: maxYScale,
  },
  {
    tabName: "Age",
    tabData: vaxByAge,
  },
  {
    tabName: "Age %",
    tabData: vaxByAgePercent,
    scaleOptions: maxYScale,
  },
  {
    tabName: "Sex",
    tabData: vaxBySex,
  },
  {
    tabName: "Sex %",
    tabData: vaxBySexPercent,
    scaleOptions: maxYScale,
  },
];

//Maps
const vaccineZipStatsAll = {
  Tot_pop: "Total Population",
  Tot_fullv: "Fully Vaccinated",
  overall_percent: "% Fully Vaccinated",
};

const vaccineZipStatsAsian = {
  AsiPI_Pop: "Asian/PI Population",
  AsiPI_fullv: "Fully Vaccinated",
  asian_percent: "% Fully Vaccinated",
};
const vaccineZipStatsBlack = {
  Black_pop: "Black Population",
  Black_fullv: "Fully Vaccinated",
  black_percent: "% Fully Vaccinated",
};
const vaccineZipStatsHispanic = {
  Hisp_pop: "Hispanic Population",
  Hisp_fullv: "Fully Vaccinated",
  hisp_percent: "% Fully Vaccinated",
};
const vaccineZipStatsWhite = {
  White_Pop: "White Population",
  White_fullv: "Fully Vaccinated",
  white_percent: "% Fully Vaccinated",
};

export const mapOptions: MapControllerProps = [
  {
    tabName: "All Races",
    metric: "overall_percent",
    bias: "high_is_good",
    scale: "percent",
    popupStats: vaccineZipStatsAll,
    fetchURL: "/data/geodata/zips/vaccinations_combined.json",
  },
  {
    tabName: "Asian/PI",
    metric: "asian_percent",
    bias: "high_is_good",
    scale: "percent",
    popupStats: vaccineZipStatsAsian,
    fetchURL: "/data/geodata/zips/vaccinations_combined.json",
  },
  {
    tabName: "Black",
    metric: "black_percent",
    bias: "high_is_good",
    scale: "percent",
    popupStats: vaccineZipStatsBlack,
    fetchURL: "/data/geodata/zips/vaccinations_combined.json",
  },
  {
    tabName: "Hispanic",
    metric: "hisp_percent",
    bias: "high_is_good",
    scale: "percent",
    popupStats: vaccineZipStatsHispanic,
    fetchURL: "/data/geodata/zips/vaccinations_combined.json",
  },
  {
    tabName: "White",
    metric: "white_percent",
    bias: "high_is_good",
    scale: "percent",
    popupStats: vaccineZipStatsHispanic,
    fetchURL: "/data/geodata/zips/vaccinations_combined.json",
  },
];
