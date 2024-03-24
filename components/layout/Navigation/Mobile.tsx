import React from "react";
import Links from "./Links";

type Props = {
  pageURL: string;
};

export default function Mobile({ pageURL }: Props) {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-blue-600 px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=white"
          alt="Your Company"
        />
      </div>
      <Links pageURL={pageURL} />
    </div>
  );
}
