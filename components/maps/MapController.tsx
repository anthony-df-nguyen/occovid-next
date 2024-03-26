"use client";
import React, { useState, useEffect } from "react";
const caseData = require("../../data/source/geodata/cities/counts_with_shapes.json");
//import Map from "./Map";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
const Map = dynamic(() => import("./Map"), {
  ssr: false,
});
import SelectMenu from "../ui/Forms/Select";

type Props = {};

export default function MapController({}: Props) {
  const [dataSeries, updateDataSeries] = useState({
    source: caseData,
    metric: "Tot_Cases",
  });

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 my-4">
        <SelectMenu
          label="Select A View"
          defaultValue={"Tot_Cases"}
          options={[{ key: "Total Cases", value: "Tot_Cases" },{ key: "Total Deaths", value: "Tot_Deaths" }]}
        />
      </div>
      <div className="w-[100%] h-min-[500px] h-[60vh] shadow">
        <Map data={dataSeries} />
      </div>
    </div>
  );
}
