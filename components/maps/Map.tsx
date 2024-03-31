"use client";
import { MapContainer, TileLayer } from "react-leaflet";
import BuildGeoJson from "./utils/BuildGeoJson";
import { MapComponentProps } from "./types";

export default function Map({
  data,
  metric,
  popupMetrics,
  bias,
  scale,
  legend,
}: MapComponentProps) {
  const tileURL = "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";
  return (
    <MapContainer center={[33.68, -117.8]} zoom={10}>
      <TileLayer
        url={tileURL}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        maxZoom={19}
      />
      {
        <BuildGeoJson
          data={data}
          metric={metric}
          popupMetrics={popupMetrics}
          bias={bias}
          scale={scale}
          legend={legend}
        />
      }
    </MapContainer>
  );
}
