"use client";
import { useState } from "react";
import React from "react";
import dynamic from "next/dynamic";
import Tabs from "../ui/Tabs";
import Card from "../ui/Card";
import { ChartDataStructure } from "./utils/helpers";

const BarChart = dynamic(() => import("./BarChart"), {
  ssr: false,
});

export type TabData = {
  tabName: string;
  tabData: ChartDataStructure;
}[];

type Props = { data: TabData; scaleOptions?: {} };

export default function ChartController({ data, scaleOptions }: Props) {
  const [activeTab, handleActiveTab] = useState(0);
  return (
    <div>
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
            scaleOptions={scaleOptions}
          />
        </div>
      </Card>
    </div>
  );
}
