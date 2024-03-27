import Shell from "@/components/layout/Shell";
import StatCard from "@/components/ui/StatCard";
import type { Metadata } from "next";
import summarizedToDates from "@/data/source/static_counts/summarized";
import ChartController from "@/components/charts/ChartController";
import TabChartController, { TabData } from "@/components/charts/TabChartController";
import {
  vaxByRace,
  vaxByRacePercent,
  vaxByAge,
  vaxByAgePercent,
  vaxBySex,
  vaxBySexPercent,
  doseHistory,
} from "@/data/transformed/vax_breakdown";
import { maxYScale } from "@/components/charts/utils/constants";
import Break from "@/components/layout/Break";

export const metadata: Metadata = {
  title: "OCCOVID | Vaccinations",
  description: "OCCOVID Vaccinations",
};


const vaxTabs: TabData = [
  {
    tabName: "by Race",
    tabData: vaxByRace,
  },
  {
    tabName: "by Race %",
    tabData: vaxByRacePercent,
    scaleOptions: maxYScale,
  },
  {
    tabName: "by Age",
    tabData: vaxByAge,
  },
  {
    tabName: "by Age %",
    tabData: vaxByAgePercent,
    scaleOptions: maxYScale,
  },
  {
    tabName: "by Sex",
    tabData: vaxBySex,
  },
  {
    tabName: "by Sex %",
    tabData: vaxBySexPercent,
    scaleOptions: maxYScale,
  },
];

export default function Vaccinations() {
  return (
    <main className="">
      <Shell pageURL="/vaccinations" title="Vaccinations" subtitle="as of 12/11/2023"  >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <StatCard
            name="% of OC Population Vaccinated"
            value={summarizedToDates.totalDoses.oc_pop_fully_vaxed}
            color="text-green-500"
          />
          <StatCard
            name="Total Doses Administered"
            value={summarizedToDates.totalDoses.num_totalvalid}
            color="text-red-500"
          />
          <StatCard
            name="People w/ at Least 1 Dose"
            value={summarizedToDates.totalDoses.num_atleast1}
          />
          <StatCard
            name="1st and 2nd Shot"
            value={summarizedToDates.totalDoses.num_1st2nd}
          />
          <StatCard
            name="Boosters"
            value={summarizedToDates.totalDoses.num_boosters}
          />
        </div>
        <Break />
        <div className="">
          <ChartController data={doseHistory} />
        </div>
        <Break />
        <div className="">
          <TabChartController data={vaxTabs} zoomDisabled/>
        </div>
      </Shell>
    </main>
  );
}
