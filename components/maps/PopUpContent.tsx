import React from "react";

export type PopupStats = {
  [key: string]: string | number;
};

type Props = {
  primaryKey: string | number | null;
  stats: PopupStats;
};

export default function PopUpContent({ primaryKey, stats }: Props) {
  return (
    <div>
      <div className="font-bold text-lg">{primaryKey}</div>
      <div>
        {Object.keys(stats).map((stat) => {
          return (
            <div key={primaryKey + stat} className="flex gap-2">
              <div className="font-bold">{stat}</div>
              <div>{stats[stat]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
