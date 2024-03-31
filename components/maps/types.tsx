import { KeyValuePair } from "tailwindcss/types/config";
import { CountySourceDataGeoJSON } from "@/data/source/types";

// Types related to generating a legend and color key
export type Bands = {
  band1: number;
  band2: number;
  band3: number;
  band4: number;
  band5: number;
};
export type ColorContext = "high_is_bad" | "high_is_good";
export type MapScale = "relative" | "percent";

// What the GEOJSON component needs to generate a color
export type MapLegend = {
  max: number;
  min: number;
  bands: Bands;
};

// The generic model for the MapController Parent that each object needs to be to send to the Map Controller
export type MapControllerSchema = {
  tabName: string;
  fetchURL: string;
  popupStats: KeyValuePair;
  bias: ColorContext; 
  scale: MapScale;
  metric: string;
};

export type MapComponentProps = {
  data:  CountySourceDataGeoJSON[];
  metric: string;
  popupMetrics: KeyValuePair;
  bias: ColorContext;
  scale: MapScale;
  legend: MapLegend;
};
