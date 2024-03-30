"use client";
import React, { useState, useEffect } from "react";
import { KeyValuePair } from "tailwindcss/types/config";
import { CountySourceDataGeoJSON } from "@/data/source/types";
import dynamic from "next/dynamic";
import Tabs from "../ui/Tabs";
import Card from "../ui/Card";
import "leaflet/dist/leaflet.css";
const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

type MapControllerSchema = {
  tabName: string;
  metric: string;
  bias: "high_is_bad" | "high_is_good";
  popupStats: KeyValuePair;
  fetchURL: string;
  scale: "relative" | "percent";
};

export type MapControllerProps = MapControllerSchema[];

type Props = {
  mapOptions: MapControllerProps;
  mapTitle: string;
};

export default function MapController({ mapOptions, mapTitle }: Props) {
  const [activeTab, handleActiveTab] = useState<number>(0);
  const [activeMap, updateActiveMap] = useState<MapControllerSchema>(
    mapOptions[activeTab]
  );
  const [activeDataset, handleActiveDataset] = useState<any[]>([]);

  useEffect(() => {
    let mounted = true;
    const fetchMapData = async () => {
      const fetchURL = mapOptions[activeTab].fetchURL;
      console.log("fetchURL: ", fetchURL);
      await fetch(fetchURL)
        .then((res) => res.json())
        .then((data) => handleActiveDataset(data));
    };
    // When user clicks a tab, switch the active map data to the corresponding index and fetch map data
    if (mounted) {
      updateActiveMap(mapOptions[activeTab]);
      fetchMapData();
    }
    return () => {
      mounted = false;
    };
  }, [activeTab]);

  return (
    <div>
      <div className="sectionTitle">{mapTitle}</div>
      <Tabs
        label="Select Map"
        tabs={mapOptions.map((opt) => opt.tabName)}
        activeTab={activeTab}
        handleChange={handleActiveTab}
      />
      <Card>
        <div className="w-[100%] h-min-[500px] h-[60vh] shadow-inset">
          <Map
            data={{
              source: activeDataset,
              metric: activeMap.metric,
            }}
            popupMetrics={activeMap.popupStats}
            bias={activeMap.bias}
            scale={activeMap.scale}
          />
        </div>
      </Card>
    </div>
  );
}
