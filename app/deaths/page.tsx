import Shell from "@/components/layout/Shell";
import StatCard from "@/components/ui/StatCard";
import type { Metadata } from "next";
import summarizedToDates from "@/data/source/static_counts/summarized";
import {
  total_dth,
  dth_date,
  snf_dth,
  alf_dth,
  jail_dth,
  homeless_dth,
} from "@/data/transformed/death_history";
import Break from "@/components/layout/Break";
import TabChartController from "@/components/charts/TabChartController";
import { TabData } from "@/components/charts/TabChartController";

export const metadata: Metadata = {
  title: "OCCOVID | Deaths",
  description: "OCCOVID Deaths",
};

const deathTabs: TabData = [
  { tabName: "Total Deaths", tabData: total_dth },
  { tabName: "Daily Deaths", tabData: dth_date },
  { tabName: "SNFs", tabData: snf_dth },
  { tabName: "ALFs", tabData: alf_dth },
  { tabName: "Homeless", tabData: homeless_dth },
  { tabName: "Jail", tabData: jail_dth },
];

export default function Deaths() {
  const asOf = `as of ${new Date(summarizedToDates.deaths.date).toLocaleDateString()}`
  return (
    <main className="">
      <Shell pageURL="/deaths" title="Deaths" subtitle={asOf}>
        {/* Cases */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            name="Total Deaths"
            value={summarizedToDates.deaths.total_dth_date}
            color="text-red-500"
          />
          <StatCard
            name="Jail Deaths"
            value={summarizedToDates.deaths.jail_dth}
          />
          <StatCard
            name="Skilled Nursing Facilities"
            value={summarizedToDates.deaths.snf_dth}
          />
          <StatCard
            name="Homeless"
            value={summarizedToDates.deaths.homeless_dth}
          />
        </div>
        <Break />
        <TabChartController data={deathTabs} />
        <Break />
      </Shell>
    </main>
  );
}
