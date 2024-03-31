"use client";
import React, { useState, useEffect } from "react";
import { generateBands } from "./utils/relativeColors";
import dynamic from "next/dynamic";
import Tabs from "../ui/Tabs";
import Card from "../ui/Card";
import "leaflet/dist/leaflet.css";
import { MapLegend, MapControllerSchema } from "./types";
import MapLegendBars from "./MapLegendBars";
const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

type Props = {
  mapOptions: MapControllerSchema[];
  mapTitle: string;
};

export default function MapController({ mapOptions, mapTitle }: Props) {
  // This is a number to keep track of the active tab
  const [activeTab, handleActiveTab] = useState<number>(0);

  // This is an object that only has some metadata for the child map, no Map data
  const [activeMap, updateActiveMap] = useState<MapControllerSchema>(
    mapOptions[activeTab]
  );

  // This is the actual Map Data that is sent to the child Map
  const [activeDataset, handleActiveDataset] = useState<any[]>([]);

  // This is the max, min, and bands sent to the child Map
  const [legendData, handleLegendData] = useState<MapLegend>({
    max: 0,
    min: 0,
    bands: { band1: 0, band2: 0, band3: 0, band4: 0, band5: 0 },
  });

  // 1. When the user changes the active tab, fetch the correct Map datasource
  useEffect(() => {
    let mounted = true;
    const fetchMapData = async () => {
      const fetchURL = mapOptions[activeTab].fetchURL;
      //console.log("fetchURL: ", fetchURL);
      await fetch(fetchURL)
        .then((res) => res.json())
        .then((data) => {
          // Update the active source data to send to the child map
          handleActiveDataset(data);
        });
    };
    // When user clicks a tab, switch the active map data to the corresponding index and fetch map data
    if (mounted) {
      //Update the map information to sent to the child map component
      updateActiveMap(mapOptions[activeTab]);

      // Get the new map data
      fetchMapData();
    }
    return () => {
      mounted = false;
    };
  }, [activeTab]);

  // 2. When the active datasource has changed, run calcs to determine the new legend
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      // Generate the max and min value to pass the child map
      let valueArray: number[] = activeDataset.map(
        (key: any) => key.properties[activeMap.metric]
      );
      const maxValue = Math.max(...valueArray);
      const minValue = Math.min(...valueArray);
      const bands = generateBands(maxValue, minValue, activeMap.scale);
      handleLegendData({
        max: maxValue,
        min: minValue,
        bands: bands,
      });
    }
    () => {
      mounted = false;
    };
  }, [activeDataset]);

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
        <div className="flex flex-col lg:flex-row gap-2">
          <MapLegendBars bands={legendData.bands} context={activeMap.bias} scale={activeMap.scale} />
          <div className="w-[100%] md:h-min-[500px] h-[60vh] shadow-inset">
            <Map
              data={activeDataset}
              metric={activeMap.metric}
              popupMetrics={activeMap.popupStats}
              bias={activeMap.bias}
              scale={activeMap.scale}
              legend={legendData}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
