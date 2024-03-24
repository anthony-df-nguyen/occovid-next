import Shell from "@/components/layout/Shell";
import StatCard from "@/components/ui/StatCard";
import type { Metadata } from "next";
import summarizedToDates from "@/data/source/static_counts/summarized";
import { BarChart } from "@/components/charts/BarChart";
import { vaxByRace, vaxByRacePercent, vaxByAge, vaxByAgePercent } from "@/data/transformed/vax_breakdown";

export const metadata: Metadata = {
  title: "OCCOVID | Vaccinations",
  description: "OCCOVID Vaccinations",
};

export default function Vaccinations() {
  return (
    <main className="">
      <Shell pageURL="/vaccinations">
        {/* Cases */}
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
        <br />
        <hr />
        <br />
        <div className="sectionTitle">By Race/Ethnicity</div>
        <br />
        <div className="grid gap-4 grid-cols-2">
          <BarChart data={vaxByRace} />
          <BarChart
            data={vaxByRacePercent}
            scaleOptions={{
              y: {
                min: 0,
                max: 100,
              },
            }}
          />
        </div>
        <br />
        <div className="sectionTitle">By Age</div>
        <br />
        <div className="grid gap-4 grid-cols-2">
          <BarChart data={vaxByAge} />
          <BarChart
            data={vaxByAgePercent}
            scaleOptions={{
              y: {
                min: 0,
                max: 100,
              },
            }}
          />
        </div>
      </Shell>
    </main>
  );
}
