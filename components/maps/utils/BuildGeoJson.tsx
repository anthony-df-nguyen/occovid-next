import { GeoJSON } from "react-leaflet";
import { Popup } from "react-leaflet";
import { CountySourceDataGeoJSON } from "@/data/source/types";
import PopUpContent from "../PopUpContent";
import { PopupStats } from "../PopUpContent";
import { handleColor } from "../utils/relativeColors";
import { MapComponentProps, Bands } from "../types";

const BuildGeoJson = ({
  data,
  metric,
  popupMetrics,
  bias,
  scale,
  legend,
}: MapComponentProps) => {
  return data.map((row, i) => {
    let popupValues: PopupStats = {};

    //Build the popup stats my mapping matching data
    Object.keys(popupMetrics).forEach((key, i) => {
      popupValues[popupMetrics[key]] = row.properties[key];
      //valueArray.push(row.properties[metric]);
    });

    let geoArray = [];
    geoArray.push({
      geometry: { ...row.geometry },
      id: row.properties.PrimaryKey,
      type: "Feature",
      properties: { ...row.properties },
    });

    const valueForColoring = row.properties[metric];

    return (
      <GeoJSON
        key={row.properties.PrimaryKey}
        //@ts-expect-error
        data={geoArray}
        pathOptions={{
          color: "white",
          weight: 1.5,
          fillColor: handleColor(valueForColoring, bias, scale, legend.bands),
          fillOpacity: 0.4,
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
