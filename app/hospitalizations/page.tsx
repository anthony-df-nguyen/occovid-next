import Shell from "@/components/layout/Shell";
import StatCard from "@/components/ui/StatCard";
import type { Metadata } from "next";
import summarizedToDates from "@/data/source/static_counts/summarized";
import { BarChart } from "@/components/charts/BarChart";
import {
  hospital,
  icu,
  hospital_and_icu,
} from "@/data/transformed/hospicu_history";

export const metadata: Metadata = {
  title: "OCCOVID | Hospitalizations",
  description: "OCCOVID Hospitalizations",
};

export default function Hospitalizations() {
  return (
    <main className="">
      <Shell pageURL="/Hospitalizations">
        {/* Cases */}
        <div className="pageTitle">Hospitalizations</div>
        <div className="subTitle">as of December 31, 2022</div>
        <br />
        <hr />
        <br />
        <div className="grid gap-4 grid-cols-1">
          <BarChart data={hospital_and_icu} />
        </div>
      </Shell>
    </main>
  );
}
