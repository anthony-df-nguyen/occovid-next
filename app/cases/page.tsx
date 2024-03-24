import Shell from "@/components/layout/Shell";
import StatCard from "@/components/ui/StatCard";
import type { Metadata } from "next";
import summarizedToDates from "@/data/source/static_counts/summarized";
import Break from "@/components/layout/Break";
import { BarChart } from "@/components/charts/BarChart";
import {
  total_cases_spec,
  daily_cases_spec,
  snf_cases,
  homeless_cases,
  jail_cases,
  recovered,
} from "@/data/transformed/case_history";

export const metadata: Metadata = {
  title: "OCCOVID | Cases",
  description: "OCCOVID Cases",
};

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
        <div className="grid gap-4 grid-cols-1 xl:grid-cols-2">
          <BarChart data={total_cases_spec} />
          <BarChart data={daily_cases_spec} />
          <BarChart data={snf_cases} />
          <BarChart data={homeless_cases} />
          <BarChart data={jail_cases} />
          <BarChart data={recovered} />
        </div>
      </Shell>
    </main>
  );
}
