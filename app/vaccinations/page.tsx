import Shell from "@/components/layout/Shell";
import StatCard from "@/components/ui/StatCard";
import type { Metadata } from "next";
import summarizedToDates from "@/data/source/static_counts/summarized";
import TabChartController from "@/components/charts/TabChartController";
import {
  vaxByRace,
  vaxByRacePercent,
  vaxByAge,
  vaxByAgePercent,
  vaxBySex,
  vaxBySexPercent,
  doseHistory,
} from "@/data/transformed/vax_breakdown";
import { TabData } from "@/components/charts/TabChartController";
import Break from "@/components/layout/Break";
export const metadata: Metadata = {
  title: "OCCOVID | Vaccinations",
  description: "OCCOVID Vaccinations",
};

const maxYScale = {
  y: {
    min: 0,
    max: 100,
  },
  x: {
    stacked: false,
  }
};
const vaxTabs: TabData = [
  {
    tabName: "Race",
    tabData: vaxByRace,
  },
  {
    tabName: "Race Vax %",
    tabData: vaxByRacePercent,
    scaleOptions: maxYScale,
  },
  {
    tabName: "Age",
    tabData: vaxByAge,
  },
  {
    tabName: "Age Vax %",
    tabData: vaxByAgePercent,
    scaleOptions: maxYScale,
  },
  {
    tabName: "Sex",
    tabData: vaxBySex,
  },
  {
    tabName: "Sex Vax %",
    tabData: vaxBySexPercent,
    scaleOptions: maxYScale,
  },
];

export default function Vaccinations() {
  return (
    <main className="">
      <Shell pageURL="/vaccinations">
        <div className="pageTitle">Vaccinations</div>
        <div className="subTitle">as of December 11, 2023</div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
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
        {/* Race */}
        <Break />
        <div className="grid gap-42">
          {/* <BarChart data={doseHistory} /> */}
        </div>
        <Break />
        <div className="grid gap-4">
          <TabChartController data={vaxTabs} />
        </div>
      </Shell>
    </main>
  );
}
