"use client";
import { MapContainer, TileLayer, Popup, GeoJSON } from "react-leaflet";
import BuildGeoJson from "./utils/BuildGeoJson";
import { CountySourceDataGeoJSON } from "@/data/source/types";
import { PopupStats } from "./PopUpContent";

type Props = {
  data: {
    source: CountySourceDataGeoJSON[];
    metric: string;
  };
};

const CityCaseStats = {
  Tot_Cases: "Total Cases",
  CaseRate: "Case Rate",
  Total_Pop: "Total Population",
};

export default function Map({ data }: Props) {
  const tileURL =
    "http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}";
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
          popupContent={CityCaseStats}
        />
      }
    </MapContainer>
  );
}
