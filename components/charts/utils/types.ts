import { KeyValuePair } from "tailwindcss/types/config";
import { filterCategoricalData } from "../../../data/transformed/utils/helpers";

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
        data: data.map((row) => row[key]),
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
        data: series.data.map((entry) => entry[series.key]),
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


export type { ChartDataStructure };
export {
  SingleSeriesChart,
  MultiSeriesChart,
  CategoricalChart,
};
