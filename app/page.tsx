import Shell from "@/components/layout/Shell";
import StatCard from "@/components/ui/StatCard";
import summarizedToDates from "@/data/source/static_counts/summarized";
export default function Home() {
  return (
    <main className="">
      <Shell pageURL="/" title="Summary">
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            name="Total Cases"
            value={summarizedToDates.cases.total_cases_repo}
            color="text-red-500"
          />
          <StatCard
            name="Total Deaths"
            value={summarizedToDates.deaths.total_dth_date}
            color="text-red-500"
          />
        </div>
      </Shell>
    </main>
  );
}
