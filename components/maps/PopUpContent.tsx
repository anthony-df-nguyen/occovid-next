import React from "react";

export type PopupStats = {
  [key: string]: number;
};

type Props = {
  primaryKey: number;
  stats: PopupStats;
};

export default function PopUpContent({ primaryKey, stats }: Props) {
  return (
    <div>
      <div className="font-bold text-lg">{primaryKey}</div>
      <div>
        {Object.keys(stats).map((stat) => {
          const value = stats[stat];
          return (
            <div key={primaryKey + stat} className="flex gap-2">
              <div className="font-bold">{stat}</div>
              <div>{value?.toLocaleString()}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
