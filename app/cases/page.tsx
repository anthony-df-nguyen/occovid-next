import Shell from "@/components/layout/Shell";
import StatCard from "@/components/ui/StatCard";
import type { Metadata } from "next";
import summarizedToDates from "@/data/source/static_counts/summarized";
import MapController from "@/components/maps/MapController";
import TabChartController from "@/components/charts/TabChartController";
import Break from "@/components/layout/Break";
import { caseTabs, caseDemoTabs, mapOptions } from "./constants";

export const metadata: Metadata = {
  title: "OCCOVID | Cases",
  description: "OCCOVID Cases",
};

export default function Home() {
  const asOf = ` as of ${new Date(
    summarizedToDates.cases.date
  ).toLocaleDateString()}`;

  return (
    <main className="">
      <Shell pageURL="/cases" title="Cases" subtitle={asOf}>
        {/* Cases */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <TabChartController data={caseTabs} />{" "}
          <TabChartController data={caseDemoTabs} zoomDisabled />
        </div>

        <Break />
        <MapController mapTitle="Case Data per City/Zip" mapOptions={mapOptions} />
      </Shell>
    </main>
  );
}
