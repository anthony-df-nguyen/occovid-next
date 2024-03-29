import { TabData } from "@/components/charts/TabChartController";
import { MapControllerProps } from "@/components/maps/MapController";
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
  { tabName: "Total Deaths", tabData: total_dth },
  { tabName: "Daily Deaths", tabData: dth_date },
  { tabName: "SNFs", tabData: snf_dth },
  { tabName: "ALFs", tabData: alf_dth },
  { tabName: "Homeless", tabData: homeless_dth },
  { tabName: "Jail", tabData: jail_dth },
];

// Maps
const cityDeathStats = {
    Tot_Deaths: "Total Deaths",
    DeathRate: "Death Rate",
    Total_Pop: "Total Population",
  }

  const zipDeathStats = {
    tot_dth: "Total Deaths",
    tot_dthrate: "Death Rate",
    pop: "Total Population",
  }

export const mapOptions: MapControllerProps = [
  {
    tabName: "Total Deaths by City",
    metric: "Tot_Deaths",
    popupStats: cityDeathStats,
    fetchURL: "/data/geodata/cities/counts_with_shapes.json",
  },
  {
    tabName: "Death Rate by City",
    metric: "DeathRate",
    popupStats: cityDeathStats,
    fetchURL: "/data/geodata/cities/counts_with_shapes.json",
  },
  {
    tabName: "Total Deaths by Zip",
    metric: "tot_dth",
    popupStats: zipDeathStats,
    fetchURL: "/data/geodata/zips/counts_with_shapes.json",
  },
  {
    tabName: "Death Rate by Zip",
    metric: "tot_dthrate",
    popupStats: zipDeathStats,
    fetchURL: "/data/geodata/zips/counts_with_shapes.json",
  },
];
