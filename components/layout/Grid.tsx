import React from "react";
import classNames from "@/utils/makeClassNames";

type Props = {
  children: any;
};

export default function Grid({ children }: Props) {
  return (
    <div
      className={classNames(
        `grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4`,
      )}
    >
      {children}
    </div>
  );
}
