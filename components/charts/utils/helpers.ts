import { KeyValuePair } from "tailwindcss/types/config";

/**
 * The format of the object that must be passed into ChartJS to correctly plot.
 */
type ChartDataStructure = {
  title: string;
  labels: string[];
  datasets: {
    label?: string;
    data: number[];
    backgroundColor: string | string[];
  }[];
};

/**
 *A single series chart that expects the ChartDataStructure
 */
class SingleSeriesChart implements ChartDataStructure {
  title: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string | string[];
  }[];

  constructor(
    title: string,
    labels: string[],
    data: any[],
    key: string,
    color: string | string[]
  ) {
    this.title = title;
    this.labels = labels;
    this.datasets = [
      {
        label: "Total",
        data: data.map((row) => row.attributes[key]),
        backgroundColor: color,
      },
    ];
  }
}

class MultiSeriesChart implements ChartDataStructure {
  title: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string | string[];
  }[];

  constructor(
    title: string,
    labels: string[],
    data: {
      label: string;
      data: any[];
      key: string;
      backgroundColor: string | string[];
    }[]
  ) {
    this.title = title;
    this.labels = labels;
    this.datasets = data.map((series) => {
      return {
        label: series.label,
        data: series.data.map((entry) => entry.attributes[series.key]),
        backgroundColor: series.backgroundColor,
      };
    });
  }
}

/**
 * Builds a ChartDataStructure suitable for categorical non-timebased data.
 * @params
 * title: string
 * label: array of strings
 * data: pass in your array of data
 * metric: the metric you wish to find data from
 * pass in a key value pair object
 */
class CategoricalChart implements ChartDataStructure {
  title: string;
  labels: string[];
  datasets: {
    label: string,
    data: number[];
    backgroundColor: string | string[];
  }[];

  constructor(
    title: string, //Pass it in
    labels: string[],
    data: any[],
    metric: string,
    colors: KeyValuePair,
  ) {
    this.title = title,
    this.labels = labels,
    this.datasets = [{
      label: "",
      data: filterCategoricalData(data, labels, metric),
      backgroundColor: Object.values(colors),
    }]
  }
}


const sortDataByDate = (data: any[], dateKey: string) => {
  return data.sort((a, b) =>
    a.attributes[dateKey] > b.attributes[dateKey] ? 1 : -1
  );
};

const buildDateLabels = (data: any[], dateKey: string) => {
  return data.map((row) =>
    new Date(row.attributes[dateKey]).toLocaleDateString()
  );
};

const filterCategoricalData = (
  data: {
    attributes: {
      [key: string]: string | number;
    };
  }[],
  categories: string[],
  key: string
) => {
  let values: any[] = [];
  categories.forEach((cat) => {
    const found = data.find((row) => row.attributes.category === cat);
    found && values.push(found.attributes[key]);
  });
  return values;
};

const ageKeys = [
  "0-4 yrs",
  "5-11 yrs",
  "12-17 yrs",
  "18-24 yrs",
  "25-34 yrs",
  "35-44 yrs",
  "45-54 yrs",
  "55-64 yrs",
  "65-74 yrs",
  "75-84 yrs",
  "85+ yrs",
];

const raceKeys = ["Asian/PI", "Black", "Hispanic", "White", "Other Race"];

const sexKeys = ["Male", "Female"];

export type { ChartDataStructure };
export {
  SingleSeriesChart,
  MultiSeriesChart,
  CategoricalChart,
  sortDataByDate,
  buildDateLabels,
  filterCategoricalData,
  ageKeys,
  raceKeys,
  sexKeys,
};
