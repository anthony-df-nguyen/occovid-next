import React from "react";
import Card from "./Card";
import classNames from "@/utils/makeClassNames";

type Props = {
  name: string;
  value: number | string;
  color?: string;
};

export default function StatCard({ name, value, color }: Props) {
  return (
    <Card>
      <dt className="truncate text-sm font-medium text-gray-500">{name}</dt>
      <dd
        className={classNames(
          "mt-1 text-3xl font-semibold tracking-tight",
          color
        )}
      >
        {value.toLocaleString()}
      </dd>
    </Card>
  );
}
