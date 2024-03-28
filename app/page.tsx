import Shell from "@/components/layout/Shell";
import StatCard from "@/components/ui/StatCard";
import summarizedToDates from "@/data/source/static_counts/summarized";
export default function Home() {
  return (
    <main className="">
      <Shell pageURL="/" title="Summary">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <StatCard
            name="Total Cases"
            value={summarizedToDates.cases.total_cases_repo}
            color="text-red-500"
            href="/cases"
          />
          <StatCard
            name="Total Deaths"
            value={summarizedToDates.deaths.total_dth_date}
            color="text-red-500"
            href="/deaths"
          />
                    <StatCard
            name="% Population Vaccination"
            value={summarizedToDates.totalDoses.oc_pop_fully_vaxed}
            color="text-green-500"
            href="/vaccinations"
          />
                    <StatCard
            name="Peak ICU Hospitalizations"
            value={summarizedToDates.hospitalized.peakICU}
            color="text-orange-500"
            href="/hospitalizations"
          />
        </div>
      </Shell>
    </main>
  );
}
