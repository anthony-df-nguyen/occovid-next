import { CountySourceData } from "@/data/source/types";

const sortDataByDate = (data: any[], dateKey: string) => {
  return data.sort((a, b) => (a[dateKey] > b[dateKey] ? 1 : -1));
};

const buildDateLabels = (data: any[], dateKey: string) => {
  return data.map((row) =>
    new Date(row[dateKey]).toLocaleDateString()
  );
};

const filterCategoricalData = (
  data: {
    [key: string]: string | number;
  }[],
  categories: string[],
  key: string
) => {
  let values: any[] = [];
  categories.forEach((cat) => {
    const found = data.find((row) => row.category === cat);
    found && values.push(found[key]);
  });
  return values;
};

const promoteChildren = (data: {attributes: {}}[]) => {
  return data.map((item) => ({ ...item.attributes }));
};

export {
  sortDataByDate,
  buildDateLabels,
  filterCategoricalData,
  promoteChildren,
};
