"use client"
const cityData = require("@/public/data/geodata/cities/counts_with_shapes.json");
const zipData = require("@/public/data/geodata/zips/counts_with_shapes.json");
import { TabData } from "@/components/charts/TabChartController";
import { MapControllerSchema } from "@/components/maps/types";
import { TableControllerSchema } from "@/components/table/TableController";
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
  { tabName: "Daily Cases", tabData: daily_cases_spec },
  { tabName: "Total Cases", tabData: total_cases_spec },

  // { tabName: "SNFs", tabData: snf_cases },
  // { tabName: "Homeless", tabData: homeless_cases },
  // { tabName: "Jail", tabData: jail_cases },
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
};

export const mapOptions: MapControllerSchema[] = [
  {
    tabName: "City: Cases",
    metric: "Tot_Cases",
    popupStats: CityCaseStats,
    fetchURL: "/data/geodata/cities/counts_with_shapes.json",
    bias: "high_is_bad",
    scale: "relative",
  },
  {
    tabName: "City: Cases per 100k",
    metric: "CaseRate",
    popupStats: CityCaseStats,
    fetchURL: "/data/geodata/cities/counts_with_shapes.json",
    bias: "high_is_bad",
    scale: "relative",
  },
  {
    tabName: "Zip: Cases",
    metric: "tot_cas",
    popupStats: ZipCaseStats,
    fetchURL: "/data/geodata/zips/counts_with_shapes.json",
    bias: "high_is_bad",
    scale: "relative",
  },
  {
    tabName: "Zip: Cases per 100k",
    metric: "tot_casrate",
    popupStats: ZipCaseStats,
    fetchURL: "/data/geodata/zips/counts_with_shapes.json",
    bias: "high_is_bad",
    scale: "relative",
  },
];

export const caseTableOptions: TableControllerSchema = [
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
        field: "properties.Tot_Cases",
        headerName: "Total Cases",
      },
      {
        field: "properties.Total_Pop",
        headerName: "Total Population",
      },
      {
        field: "properties.CaseRate",
        headerName: "Case Rate",
      },
      {
        field: "properties.Cases_0_18",
        headerName: "Cases Ages 0 to 18",
      },
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
        field: "properties.tot_cas",
        headerName: "Total Cases",
      },
      {
        field: "properties.pop",
        headerName: "Total Population",
      },
      {
        field: "properties.tot_casrate",
        headerName: "Case Rate",
      },
      {
        field: "properties.Cases_0_18",
        headerName: "Cases Ages 0 to 18",
      },
    ],
  },
];
