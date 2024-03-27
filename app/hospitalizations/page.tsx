import Shell from "@/components/layout/Shell";
import type { Metadata } from "next";
import StatCard from "@/components/ui/StatCard";
import Break from "@/components/layout/Break";
import TabChartController, {
  TabData,
} from "@/components/charts/TabChartController";
import {
  hospital_and_icu,
  hos_by_vax_status,
  ventChart,
} from "@/data/transformed/hospicu_history";
import summarizedToDates from "@/data/source/static_counts/summarized";
import { stackedXY, maxYScale } from "@/components/charts/utils/constants";

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
  },
  {
    tabName: "Ventilators",
    tabData: ventChart,
    scaleOptions: maxYScale,
  },
];

export default function Hospitalizations() {
  const asOf = `Varying date range on data sources`;
  return (
    <main className="">
      <Shell
        pageURL="/hospitalizations"
        title="Hospitalizations"
        subtitle={asOf}
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            name="Peak Non-ICU"
            value={summarizedToDates.hospitalized.peakHospital}
            color="text-yellow-500"
          />{" "}
          <StatCard
            name="Avg Non-ICU"
            value={summarizedToDates.hospitalized.avgHospital}
            color="text-yellow-500"
          />
          <StatCard
            name="Peak ICU"
            value={summarizedToDates.hospitalized.peakICU}
            color="text-red-500"
          />
          <StatCard
            name="Avg ICU"
            value={summarizedToDates.hospitalized.avgICU}
            color="text-red-500"
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-2">          <StatCard
            name="Avg % Hospitalized Vaccinated"
            value={summarizedToDates.hospitalized.perVaxedOfHospital}
            color="text-green-500"
          />
          <StatCard
            name="Avg % Hospitalized Unvaccinated "
            value={summarizedToDates.hospitalized.perUnvaxedOfHospital}
            color="text-orange-500"
          /></div>
        <Break />
        <TabChartController data={data} />
      </Shell>
    </main>
  );
}
