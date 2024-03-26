"use client";
import { useState } from "react";
import React from "react";
import dynamic from "next/dynamic";
import Tabs from "../ui/Tabs";
import Card from "../ui/Card";
import { ChartDataStructure, CategoricalChart } from "./utils/helpers";

const BarChart = dynamic(() => import("./BarChart"), {
  ssr: false,
});

export type TabData = {
  tabName: string;
  tabData: ChartDataStructure | CategoricalChart,
  scaleOptions?: {},
}[];

type Props = { data: TabData };

export default function TabChartController({ data }: Props) {
  const [activeTab, handleActiveTab] = useState(0);
  return (
    <div className="sm:top-[-10px] relative">
      <Tabs
        label="Select Metric"
        tabs={data.map((tabs) => tabs.tabName)}
        activeTab={activeTab}
        handleChange={handleActiveTab}
      />
      <Card>
        <div className="chartContainer">
          <BarChart
            data={data[activeTab].tabData}
            scaleOptions={data[activeTab].scaleOptions}
          />
        </div>
      </Card>
    </div>
  );
}
