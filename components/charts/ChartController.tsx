"use client";
import React from "react";
import dynamic from "next/dynamic";
import Card from "../ui/Card";
import { ChartDataStructure } from "../../data/transformed/utils/helpers";

const BarChart = dynamic(() => import("./BarChart"), {
  ssr: false,
});

type Props = { data: ChartDataStructure; scaleOptions?: {} };

export default function ChartController({ data, scaleOptions }: Props) {
  return (
    <Card>
      <div className="chartContainer">
        <BarChart data={data} scaleOptions={scaleOptions} />
      </div>
    </Card>
  );
}
