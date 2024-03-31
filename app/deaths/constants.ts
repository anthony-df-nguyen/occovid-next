const cityData = require("@/public/data/geodata/cities/counts_with_shapes.json");
const zipData = require("@/public/data/geodata/zips/counts_with_shapes.json");
import { TabData } from "@/components/charts/TabChartController";
import { MapControllerSchema } from "@/components/maps/types";
import { TableControllerSchema } from "@/components/table/TableController";
import {
  deathsByAgeBreakdown,
  deathsByRaceBreakdown,
  deathsBySexBreakdown,
} from "@/data/transformed/death_breakdown";
import {
  total_dth,
  dth_date,
  snf_dth,
  alf_dth,
  jail_dth,
  homeless_dth,
} from "@/data/transformed/death_history";

// Historical CHarts
export const deathTabs: TabData = [
  { tabName: "Daily Deaths", tabData: dth_date },
  { tabName: "Total Deaths", tabData: total_dth },

  // { tabName: "SNFs", tabData: snf_dth },
  // { tabName: "ALFs", tabData: alf_dth },
  // { tabName: "Homeless", tabData: homeless_dth },
  // { tabName: "Jail", tabData: jail_dth },
];

export const deathDemoTabs: TabData = [
  { tabName: "Age", tabData: deathsByAgeBreakdown },
  { tabName: "Race", tabData: deathsByRaceBreakdown },
  { tabName: "Sex", tabData: deathsBySexBreakdown },
];

// Maps
const cityDeathStats = {
  Tot_Deaths: "Total Deaths",
  DeathRate: "Death Rate",
  Total_Pop: "Total Population",
};

const zipDeathStats = {
  tot_dth: "Total Deaths",
  tot_dthrate: "Death Rate",
  pop: "Total Population",
};

export const mapOptions: MapControllerSchema[] = [
  {
    tabName: "City: Deaths",
    metric: "Tot_Deaths",
    popupStats: cityDeathStats,
    fetchURL: "/data/geodata/cities/counts_with_shapes.json",
    bias: "high_is_bad",
    scale: "relative",
  },
  {
    tabName: "City: Deaths per 100k",
    metric: "DeathRate",
    popupStats: cityDeathStats,
    fetchURL: "/data/geodata/cities/counts_with_shapes.json",
    bias: "high_is_bad",
    scale: "relative",
  },
  {
    tabName: "Zip: Deaths",
    metric: "tot_dth",
    popupStats: zipDeathStats,
    fetchURL: "/data/geodata/zips/counts_with_shapes.json",
    bias: "high_is_bad",
    scale: "relative",
  },
  {
    tabName: "Zip: Deaths per 100k",
    metric: "tot_dthrate",
    popupStats: zipDeathStats,
    fetchURL: "/data/geodata/zips/counts_with_shapes.json",
    bias: "high_is_bad",
    scale: "relative",
  },
];

export const deathTableOptions: TableControllerSchema = [
  {
    tabName: "Cities",
    data: cityData,
    colDefs: [
      {
        field: "properties.PrimaryKey",
        headerName: "City",
        pinned: "left",
      },
      {
        field: "properties.Tot_Deaths",
        headerName: "Total Deaths",
      },
      {
        field: "properties.Total_Pop",
        headerName: "Total Population",
      },
      {
        field: "properties.DeathRate",
        headerName: "Death Rate",
      }
    ],
  },
  {
    tabName: "Zip Code",
    data: zipData,
    colDefs: [
      {
        field: "properties.PrimaryKey",
        headerName: "Zip",
        pinned: "left",
      },
      {
        field: "properties.tot_dth",
        headerName: "Total Deaths",
      },
      {
        field: "properties.pop",
        headerName: "Total Population",
      },
      {
        field: "properties.tot_dthrate",
        headerName: "Death Rate",
      }
    ],
  },
];
