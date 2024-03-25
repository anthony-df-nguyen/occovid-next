import Shell from "@/components/layout/Shell";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Break from "@/components/layout/Break";
const caseData = require('../../data/source/geodata/cities/counts_with_shapes.json')
import "leaflet/dist/leaflet.css";

export const metadata: Metadata = {
  title: "OCCOVID | Maps",
  description: "OCCOVID Maps",
};

const Map = dynamic(() => import("../../components/maps/Map"), {
  ssr: false,
});

export default function Maps() {
  return (
    <main className="">
      <Shell pageURL="/maps">
        {/* Cases */}
        <div className="pageTitle">Maps</div>
        <div className="subTitle">as of </div>
        <Break />
        <div>Case Map</div>
        <div className="w-[100%] h-[1000px] shadow">
          <Map data={caseData} />
        </div>
      </Shell>
    </main>
  );
}
