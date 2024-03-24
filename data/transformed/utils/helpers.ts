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

const sortDataByDate = (data: any[]) => {
  return data.sort((a, b) => (a.attributes.date > b.attributes.date ? 1 : -1));
};

const buildDateLabels = (data: any[]) => {
  return data.map((row) => new Date(row.attributes.date).toLocaleDateString());
};

export type { ChartDataStructure };
export { SingleSeriesChart, MultiSeriesChart, sortDataByDate, buildDateLabels };
