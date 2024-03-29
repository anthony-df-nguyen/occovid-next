import { TabData } from "@/components/charts/TabChartController";
import { MapControllerProps } from "@/components/maps/MapController";
import {
  total_cases_spec,
  daily_cases_spec,
  snf_cases,
  homeless_cases,
  jail_cases,
  recovered,
} from "@/data/transformed/case_history";
import {
  caseByAgeBreakdown,
  caseByRaceBreakdown,
  caseBySexBreakdown,
} from "@/data/transformed/case_breakdown";

export const caseTabs: TabData = [
  { tabName: "Total Cases", tabData: total_cases_spec },
  { tabName: "Daily Cases", tabData: daily_cases_spec },
  { tabName: "SNFs", tabData: snf_cases },
  { tabName: "Homeless", tabData: homeless_cases },
  { tabName: "Jail", tabData: jail_cases },
  { tabName: "Recovered", tabData: recovered },
];

export const caseDemoTabs: TabData = [
  { tabName: "Age", tabData: caseByAgeBreakdown },
  { tabName: "Race", tabData: caseByRaceBreakdown },
  { tabName: "Sex", tabData: caseBySexBreakdown },
];

export const CityCaseStats = {
  Tot_Cases: "Total Cases",
  CaseRate: "Case Rate",
  Total_Pop: "Total Population",
};

export const ZipCaseStats = {
  tot_cas: "Total Cases",
  tot_casrate: "Case Rate",
  pop: "Total Population",
}

export const mapOptions: MapControllerProps = [
  {
    tabName: "Total Cases by City",
    metric: "Tot_Cases",
    popupStats: CityCaseStats,
    fetchURL: "/data/geodata/cities/counts_with_shapes.json",
  },
  {
    tabName: "Case Rate by City",
    metric: "CaseRate",
    popupStats: CityCaseStats,
    fetchURL: "/data/geodata/cities/counts_with_shapes.json",
  },
  {
    tabName: "Total Cases by Zip",
    metric: "tot_cas",
    popupStats: ZipCaseStats,
    fetchURL: "/data/geodata/zips/counts_with_shapes.json",
  },
  {
    tabName: "Case Rate by Zip",
    metric: "tot_casrate",
    popupStats: ZipCaseStats,
    fetchURL: "/data/geodata/zips/counts_with_shapes.json",
  },
];
