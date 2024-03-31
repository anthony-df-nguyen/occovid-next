const vaxZipData = require("@/public/data/geodata/zips/vaccinations_combined.json");
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
import { MapControllerSchema } from "@/components/maps/types";
import { TableControllerSchema } from "@/components/table/TableController";

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

export const mapOptions: MapControllerSchema[] = [
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

export const vaccineTableOptions: TableControllerSchema = [
  {
    tabName: "Vaccinations by Zip Code",
    data: vaxZipData,
    colDefs: [
      {
        field: "properties.PrimaryKey",
        headerName: "City",
        pinned: "left",
      },
      {
        field: "properties.Tot_fullv",
        headerName: "Fully Vaxed",
      },
      {
        field: "properties.Tot_pop",
        headerName: "Total Population",
      },
      {
        field: "properties.overall_percent",
        headerName: "Overall Fully Vaxed %",
      },
      {
        field: "Fully Vaxed by Race",
        children: [
          {
            field: "properties.AsiPI_fullv",
            headerName: "Asians/PI",
          },
          {
            field: "properties.Black_fullv",
            headerName: "Black",
          },
          {
            field: "properties.Hisp_fullv",
            headerName: "Hispanic",
          },
          {
            field: "properties.White_fullv",
            headerName: "White",
          },
          {
            field: "properties.Oth_fullv",
            headerName: "Other",
          },
          {
            field: "properties.Unk_fullv",
            headerName: "Unknown",
          },
        ],
      },
    ],
  },
];
