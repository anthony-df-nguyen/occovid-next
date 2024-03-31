import React, { useState, useEffect } from "react";
import { generateRelativeColor, generatePercentColors } from "./utils/relativeColors";
import { Bands, ColorContext, MapScale } from "./types";

type Props = {
  bands: Bands;
  context: ColorContext;
  scale: MapScale;
};

export default function MapLegendBars({ bands, context, scale }: Props) {
  const [colors, handleColors] = useState<string[]>([""]);

  useEffect(() => {
    const { band1, band2, band3, band4, band5 } = bands;
    let color1: string,
      color2: string,
      color3: string,
      color4: string,
      color5: string;
    if (scale == "relative") {
      color1 = generateRelativeColor(context, band1, bands);
      color2 = generateRelativeColor(context, band2, bands);
      color3 = generateRelativeColor(context, band3, bands);
      color4 = generateRelativeColor(context, band4, bands);
      color5 = generateRelativeColor(context, band5, bands);
    } else {
      color1 = generatePercentColors(band1 - 1, context);
      color2 = generatePercentColors(band2 - 1, context);
      color3 = generatePercentColors(band3 - 1, context);
      color4 = generatePercentColors(band4 - 1, context);
      color5 = generatePercentColors(band5 - 1, context);
    }
    const newColorArray = [color1, color2, color3, color4, color5];
    handleColors(newColorArray);
  }, [bands, scale, context]);

  const renderRangeText = (i: number, value: number) => {
    if (i === 0) {
      return `<= ${value.toFixed(0)}`;
    } else if (i === 4) {
      return `>= ${Object.values(bands)[3].toFixed(0)}`;
    } else {
      return `${Object.values(bands)[i - 1].toFixed(0)} - ${Object.values(
        bands
      )[i].toFixed(0)}`;
    }
  };
  return (
    <div className="lg:w-[230px]">
      <div className="font-bold mb-2">Legend</div>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-1 gap-2">
        {" "}
        {Object.entries(bands).map((key, i) => (
          <div
            className="text-center rounded text-xs py-1 text-gray-700"
            key={`${key[0]}`}
            style={{
              backgroundColor: colors[i] + "88",
            }}
          >
            {renderRangeText(i, key[1])}
          </div>
        ))}
      </div>
    </div>
  );
}
