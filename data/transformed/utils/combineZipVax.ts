const youth = require("@/public/data/geodata/zips/vaccinations_less_65.json");
const old: any[] = require("@/public/data/geodata/zips/vaccinations_65_up.json");
 
//@ts-ignore
let combined = [];

const join = (zip: number, key: string, youthValue: number) => {
  const rightZIP = old.filter((row) => row.properties.ZIP_NUM === zip);
  //zip !== rightZIP[0].properties.ZIP_NUM && console.error(false)
  const oldValue = rightZIP[0].properties[key];
  //console.log(`${zip} has youth Value of ${youthValue} and old value of ${oldValue} for ${key}`)
  const combinedValue = youthValue + oldValue;
  return combinedValue;
};

youth.forEach(
  (row: {
    properties: {
      [key: string]: number;
    };
  }) => {
    const zipCode = row.properties.ZIP_NUM;
    const obj = row.properties;
    let newObj = row;

    //Loop through each key and perform the join
    Object.keys(obj).forEach((entry) => {
      const youthValue = row.properties[entry];

      if (entry === "ZIP" || entry === "ZIP_NUM" || entry === "ZIP_id") {
        newObj.properties[entry] = youthValue;
      } else {
        newObj.properties[entry] = join(zipCode, entry, youthValue);
      }
    });
    combined.push(newObj);
  }
);
