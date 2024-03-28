import React from "react";
import Card from "./Card";
import classNames from "@/utils/makeClassNames";
import Link from "next/link";

type Props = {
  name: string;
  value: number | string;
  color?: string;
  href?: string;
};

export default function StatCard({ name, value, color, href }: Props) {
  return (
    <Link href={href ? href : ""}>
      <Card>
        <dt className="truncate text-sm font-medium text-gray-500">{name}</dt>
        <dd
          className={classNames(
            "mt-1 text-3xl font-semibold tracking-tight",
            color
          )}
        >
          {value.toLocaleString()}
        </dd>{" "}
      </Card>
    </Link>
  );
}
