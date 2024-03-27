import Shell from "@/components/layout/Shell";
import type { Metadata } from "next";
import Break from "@/components/layout/Break";
import TabChartController, {TabData} from "@/components/charts/TabChartController";
import { hospital_and_icu, hos_by_vax_status, ventChart } from "@/data/transformed/hospicu_history";
import summarizedToDates from "@/data/source/static_counts/summarized";
import { stackedXY } from "@/components/charts/utils/constants";

export const metadata: Metadata = {
  title: "OCCOVID | Hospitalizations",
  description: "OCCOVID Hospitalizations",
};

const data: TabData = [
  {
    tabName: "Total Hospitalizations and ICU",
    tabData: hospital_and_icu,
    scaleOptions: stackedXY,
  },
  {
    tabName: "By Vaccination Status",
    tabData: hos_by_vax_status,
    scaleOptions: stackedXY,
  },{
    tabName: "Ventilators",
    tabData: ventChart,
  }
];

export default function Hospitalizations() {
  const asOf = `as of ${new Date(
    summarizedToDates.hospitalized.date
  ).toLocaleDateString()}`;
  return (
    <main className="">
      <Shell
        pageURL="/hospitalizations"
        title="Hospitalizations"
        subtitle={asOf}
      >
        <TabChartController data={data} />
      </Shell>
    </main>
  );
}
