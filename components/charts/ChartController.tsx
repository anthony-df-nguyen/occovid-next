"use client";
import { useState, useEffect } from "react";
import React from "react";
import BarChart from "./BarChart";
import Tabs from "../ui/Tabs";
import Card from "../ui/Card";
import { ChartDataStructure } from "./utils/helpers";

export type TabData = {
  tabName: string;
  tabData: ChartDataStructure;
}[];

type Props = {
  data: TabData;
};

export default function ChartController({ data }: Props) {
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
          <BarChart data={data[activeTab].tabData} />
        </div>
      </Card>
    </div>
  );
}
