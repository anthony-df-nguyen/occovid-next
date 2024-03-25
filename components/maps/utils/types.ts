export type SourceDataGeoJSON = {
  type: "Feature";
  id?: number;
  geometry: {
    type: "Polygon" | "MultiPolygon" | "Point";
    coordinates: [];
  };
  properties: {
    [key: string]: string | number | null;
  };
};
