import React from "react";
import Links from "./Links";
import { ChartBarSquareIcon } from "@heroicons/react/24/solid";

type Props = {
  pageURL: string;
};

export default function Mobile({ pageURL }: Props) {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-blue-600 px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center gap-2">
      <ChartBarSquareIcon fill="white" className="w-10 h-10"/>
        <div className="font-base text-white text-2xl">OCCOVID</div>
      </div>
      <Links pageURL={pageURL} />
    </div>
  );
}
