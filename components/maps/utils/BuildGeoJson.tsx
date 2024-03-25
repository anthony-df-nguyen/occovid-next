import { GeoJSON } from "react-leaflet";
import { Popup } from "react-leaflet";
import { SourceDataGeoJSON } from "./types";
import PopUpContent from "../PopUpContent";
import { PopupStats } from "../PopUpContent";

type Props = {
  data: SourceDataGeoJSON[];
  show: PopupStats;
};

const BuildGeoJson = ({ data, show }: Props) => {
  return data.map((row, i) => {
    let popupValues: any = {};
    Object.keys(show).forEach((key, i) => {
      popupValues[show[key]] = row.properties[key];
    });

    const geoArray = [];
    geoArray.push({
      geometry: { ...row.geometry },
      id: row.properties.PrimaryKey,
      type: "Feature",
      properties: { ...row.properties },
    });
    return (
      <GeoJSON
        key={row.properties.PrimaryKey}
        //@ts-expect-error
        data={geoArray}
        pathOptions={{
          color: "#333",
          weight: 0.2,
          fillColor: "red",
          fillOpacity: 0.3,
        }}
      >
        <Popup key={row.properties.PrimaryKey}>
          <PopUpContent
            primaryKey={row.properties.PrimaryKey}
            stats={popupValues}
          />
        </Popup>
      </GeoJSON>
    );
  });
};

export default BuildGeoJson;
