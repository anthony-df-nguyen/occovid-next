import Shell from "@/components/layout/Shell";
import StatCard from "@/components/ui/StatCard";
import type { Metadata } from "next";
import { deathTabs, mapOptions } from "./constants";
import summarizedToDates from "@/data/source/static_counts/summarized";
import TabChartController from "@/components/charts/TabChartController";
import MapController from "@/components/maps/MapController";
import Break from "@/components/layout/Break";

export const metadata: Metadata = {
  title: "OCCOVID | Deaths",
  description: "OCCOVID Deaths",
};

export default function Deaths() {
  const asOf = `as of ${new Date(
    summarizedToDates.deaths.date
  ).toLocaleDateString()}`;
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
        <MapController mapOptions={mapOptions} />
      </Shell>
    </main>
  );
}
