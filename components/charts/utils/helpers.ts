type ChartDataStructure = {
  title: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
};

class SingleSeriesChart implements ChartDataStructure {
  title: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];

  constructor(
    title: string,
    labels: string[],
    data: any[],
    key: string,
    color: string
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
    backgroundColor: string;
  }[];

  constructor(
    title: string,
    labels: string[],
    data: {
      label: string;
      data: any[];
      key: string;
      backgroundColor: string;
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

const sortDataByDate = (data: any[], dateKey:string) => {

  return data.sort((a, b) => (a.attributes[dateKey] > b.attributes[dateKey] ? 1 : -1));
};

const buildDateLabels = (data: any[],dateKey: string) => {
  return data.map((row) => new Date(row.attributes[dateKey]).toLocaleDateString());
};

const filterCategoricalData = (
  data: {
    attributes: {
      [key: string]: string;
    };
  }[],
  key: string,
  value: string
) => {
  return data.filter((entry) => entry.attributes[key] === value);
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

const raceKeys = [
  "Asian/PI",
  "Black",
  "Hispanic",
  "White",
  "Other Race",
]

const sexKeys = [
  "Male", "Female"
]

export type { ChartDataStructure };
export {
  SingleSeriesChart,
  MultiSeriesChart,
  sortDataByDate,
  buildDateLabels,
  filterCategoricalData,
  ageKeys,raceKeys, sexKeys
};
