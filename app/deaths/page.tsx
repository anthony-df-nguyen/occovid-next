import Shell from "@/components/layout/Shell";
import StatCard from "@/components/ui/StatCard";
import type { Metadata } from "next";
import summarizedToDates from "@/data/source/static_counts/summarized";
import { BarChart } from "@/components/charts/BarChart";
import { total_dth,dth_date, snf_dth, alf_dth, jail_dth,homeless_dth  } from "@/data/transformed/death_history";


export const metadata: Metadata = {
  title: "OCCOVID | Deaths",
  description: "OCCOVID Deaths",
};

export default function Deaths() {
  return (
    <main className="">
      <Shell pageURL="/deaths">
        {/* Cases */}
        <div className="pageTitle">Deaths</div>
        <div className="subTitle">as of December 31, 2022</div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
        <br />
        <hr />
        <br />
        <div className="grid gap-4 grid-cols-1 xl:grid-cols-2">
          <BarChart data={total_dth} />
          <BarChart data={dth_date} />
          <BarChart data={snf_dth} />
          <BarChart data={alf_dth} />
          <BarChart data={jail_dth} />
          <BarChart data={homeless_dth} />
        </div>
      </Shell>
    </main>
  );
}
