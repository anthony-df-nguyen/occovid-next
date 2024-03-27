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

export { sortDataByDate, buildDateLabels, filterCategoricalData };
