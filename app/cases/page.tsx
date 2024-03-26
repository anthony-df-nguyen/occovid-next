import Shell from "@/components/layout/Shell";
import StatCard from "@/components/ui/StatCard";
import type { Metadata } from "next";
import summarizedToDates from "@/data/source/static_counts/summarized";
import MapController from "@/components/maps/MapController";
import TabChartController from "@/components/charts/TabChartController";
import Break from "@/components/layout/Break";
import {
  total_cases_spec,
  daily_cases_spec,
  snf_cases,
  homeless_cases,
  jail_cases,
  recovered,
} from "@/data/transformed/case_history";
import { TabData } from "@/components/charts/TabChartController";

export const metadata: Metadata = {
  title: "OCCOVID | Cases",
  description: "OCCOVID Cases",
};

const caseTabs: TabData = [
  { tabName: "Total Cases", tabData: total_cases_spec },
  { tabName: "Daily Cases", tabData: daily_cases_spec },
  { tabName: "SNFs", tabData: snf_cases },
  { tabName: "Homeless", tabData: homeless_cases },
  { tabName: "Jail", tabData: jail_cases },
  { tabName: "Recovered", tabData: recovered },
];

export default function Home() {
  return (
    <main className="">
      <Shell pageURL="/cases">
        {/* Cases */}
        <div className="pageTitle">Cases</div>
        <div className="subTitle">
          as of {new Date(summarizedToDates.cases.date).toLocaleDateString()}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            name="Total Cases"
            value={summarizedToDates.cases.total_cases_repo}
            color="text-red-500"
          />
          <StatCard
            name="Jail Cases"
            value={summarizedToDates.cases.jail_cases}
          />
          <StatCard
            name="Skilled Nursing Facilities"
            value={summarizedToDates.cases.snf_cases}
          />
          <StatCard
            name="Homeless"
            value={summarizedToDates.cases.homeless_cases}
          />
        </div>
        <Break />
        <TabChartController data={caseTabs} />
        <Break />
        <MapController />
      </Shell>
    </main>
  );
}
