import Shell from "@/components/layout/Shell";
import StatCard from "@/components/ui/StatCard";
import type { Metadata } from "next";
import summarizedToDates from "@/data/source/static_counts/summarized";
import TabChartController from "@/components/charts/TabChartController";
import MapController from "@/components/maps/MapController";
import Break from "@/components/layout/Break";
import { vaxDemoTabs, vaxTabs, mapOptions } from "./constants";

export const metadata: Metadata = {
  title: "OCCOVID | Vaccinations",
  description: "OCCOVID Vaccinations",
};

export default function Vaccinations() {
  return (
    <main className="">
      <Shell
        pageURL="/vaccinations"
        title="Vaccinations"
        subtitle="as of 12/11/2023"
      >
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
          <StatCard
            name="% Vaccinated"
            value={summarizedToDates.totalDoses.oc_pop_fully_vaxed}
            color="text-green-500"
          />
          <StatCard
            name="Doses Given"
            value={summarizedToDates.totalDoses.num_totalvalid}
            color="text-red-500"
          />
          <StatCard
            name="People w/ at Least 1 Dose"
            value={summarizedToDates.totalDoses.num_atleast1}
          />
          <StatCard
            name="Boosters"
            value={summarizedToDates.totalDoses.num_boosters}
          />
        </div>
        <Break />
        <div className="grid gap-2 grid-cols-1 xl:grid-cols-2 ">
          <TabChartController data={vaxTabs} />
          <TabChartController data={vaxDemoTabs} zoomDisabled />
        </div>
        <Break />
        <MapController
          mapTitle="Fully Vaccinated % by Race"
          mapOptions={mapOptions}
        />
      </Shell>
    </main>
  );
}
