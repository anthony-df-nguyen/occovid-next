import React from "react";
import classNames from "@/utils/makeClassNames";

type Props = {
  children: any;
};

export default function Card({ children }: Props) {
  return (
    <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
      {children}
    </div>
  );
}
