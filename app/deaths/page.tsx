import Shell from "@/components/layout/Shell";
import StatCard from "@/components/ui/StatCard";
import type { Metadata } from "next";
import { deathTabs, deathDemoTabs, mapOptions, deathTableOptions } from "./constants";
import summarizedToDates from "@/data/source/static_counts/summarized";
import TabChartController from "@/components/charts/TabChartController";
import MapController from "@/components/maps/MapController";
import Break from "@/components/layout/Break";
import TableController from "@/components/table/TableController";

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
        <div className="grid gap-2 grid-cols-2 lg:grid-cols-4">
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
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          <TabChartController data={deathTabs} />
          <TabChartController data={deathDemoTabs} zoomDisabled />
        </div>

        <Break />
        <MapController mapTitle="Death Data by City/Zip" mapOptions={mapOptions} />
        <Break />
        <TableController tableTitle="Death Data Table" tableOptions={deathTableOptions}/>
      </Shell>
    </main>
  );
}
