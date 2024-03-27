"use client";
import { MapContainer, TileLayer, Popup, GeoJSON } from "react-leaflet";
import BuildGeoJson from "./utils/BuildGeoJson";
import { CountySourceDataGeoJSON } from "@/data/source/types";
import { KeyValuePair } from "tailwindcss/types/config";

type Props = {
  data: {
    source: CountySourceDataGeoJSON[];
    metric: string;
  };
  popupMetrics: KeyValuePair,
};

export default function Map({ data, popupMetrics }: Props) {
  const tileURL =
    "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";
  return (
    <MapContainer center={[33.68, -117.8]} zoom={10}>
      <TileLayer
        url={tileURL}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        maxZoom={19}
      />
      {
        <BuildGeoJson
          data={data.source}
          metric={data.metric}
          popupContent={popupMetrics}
        />
      }
    </MapContainer>
  );
}
