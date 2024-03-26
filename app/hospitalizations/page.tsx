import Shell from "@/components/layout/Shell";
import type { Metadata } from "next";
import Break from "@/components/layout/Break";
import ChartController from "@/components/charts/ChartController";
import dynamic from "next/dynamic";
import { hospital_and_icu } from "@/data/transformed/hospicu_history";
import summarizedToDates from "@/data/source/static_counts/summarized";

export const metadata: Metadata = {
  title: "OCCOVID | Hospitalizations",
  description: "OCCOVID Hospitalizations",
};

const BarChart = dynamic(() => import("../../components/charts/BarChart"), {
  ssr: false,
});

export default function Hospitalizations() {
  return (
    <main className="">
      <Shell pageURL="/hospitalizations">
        {/* Cases */}
        <div className="pageTitle">Hospitalizations</div>
        <div className="subTitle">
          as of{" "}
          {new Date(summarizedToDates.hospitalized.date).toLocaleDateString()}
        </div>
        <Break />
        <ChartController
          data={hospital_and_icu}
          scaleOptions={{
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          }}
        />
      </Shell>
    </main>
  );
}
