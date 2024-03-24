"use client"
import React from "react";
import Card from "../ui/Card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartDataStructure } from "@/data/transformed/utils/helpers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

type Props = {
  data: ChartDataStructure;
  scaleOptions?: {};
};

export function BarChart({ data, scaleOptions }: Props) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: scaleOptions,
    plugins: {
      legend: {
        // Display a legend if there are more than 1 series being passed in
        display: data.datasets.length > 1 ? true : false,
        position: "top" as const,
      },
      title: {
        display: true,
        text: data.title,
      },
    },
  };
  return (
    <Card>
      <div className="min-h-[300px]">
        <Bar options={options} data={data} />
      </div>
    </Card>
  );
}
