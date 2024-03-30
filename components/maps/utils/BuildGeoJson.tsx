import { GeoJSON } from "react-leaflet";
import { Popup } from "react-leaflet";
import { CountySourceDataGeoJSON } from "@/data/source/types";
import PopUpContent from "../PopUpContent";
import { PopupStats } from "../PopUpContent";
import { generateColors } from "../utils/relativeColors";
import { KeyValuePair } from "tailwindcss/types/config";

type Props = {
  data: CountySourceDataGeoJSON[];
  metric: string;
  popupContent: KeyValuePair;
  bias: "high_is_bad" | "high_is_good";
  scale: "relative" | "percent";
};

const BuildGeoJson = ({ data, metric, popupContent, bias, scale }: Props) => {
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
    //console.log(geoArray)

    const valueForColoring = row.properties[metric];
    //console.log('valueForColoring: ', valueForColoring);
    //console.log(row.properties.PrimaryKey);

    return (
      <GeoJSON
        key={row.properties.PrimaryKey}
        //@ts-expect-error
        data={geoArray}
        pathOptions={{
          color: "white",
          weight: 1.5,
          fillColor: generateColors(
            valueForColoring,
            bias,
            scale,
            maxValue,
            minValue
          ),
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
