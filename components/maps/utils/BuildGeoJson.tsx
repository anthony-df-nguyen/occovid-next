import { GeoJSON } from "react-leaflet";
import { Popup } from "react-leaflet";
import { CountySourceDataGeoJSON } from "@/data/source/types";
import PopUpContent from "../PopUpContent";
import { PopupStats } from "../PopUpContent";
import { relativeColors } from "../utils/relativeColors";
import { KeyValuePair } from "tailwindcss/types/config";

type Props = {
  data: CountySourceDataGeoJSON[];
  metric: string;
  popupContent: KeyValuePair;
};

const BuildGeoJson = ({ data, metric, popupContent }: Props) => {
  let valueArray: number[] = data.map((key) => key.properties[metric]);
  const maxValue = Math.max(...valueArray);
  const minValue = Math.min(...valueArray);

  return data.map((row, i) => {
    let popupValues: PopupStats = {};

    Object.keys(popupContent).forEach((key, i) => {
      popupValues[popupContent[key]] = row.properties[key];
      valueArray.push(row.properties[metric]);
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
          color: "black",
          weight: 0.2,
          fillColor: relativeColors(
            valueForColoring,
            "high_is_bad",
            maxValue,
            minValue
          ),
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
