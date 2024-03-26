export type CountySourceData = {
  attributes: {
    [key: string]: string | number | null;
  };
}[];

export type CountySourceDataGeoJSON = {
  type: "Feature";
  id?: number;
  geometry: {
    type: "Polygon" | "MultiPolygon" | "Point";
    coordinates: [];
  };
  properties: {
    [key: string]: number;
  };
};
