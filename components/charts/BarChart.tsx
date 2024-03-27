"use client";
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
import ZoomPlugin from "chartjs-plugin-zoom";
import { ChartDataStructure, CategoricalChart } from "./utils/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  ZoomPlugin
);

type Props = {
  data: ChartDataStructure | CategoricalChart;
  scaleOptions?: {};
  disableZoom?: boolean;
};

const zoom = {
  zoom: {
    mode: "x",
    wheel: {
      enabled: true,
    },
    pinch: {
      enabled: true,
    },
    drag: {
      enabled: true,
    },
  },
};

const BarChart = ({ data, scaleOptions, disableZoom }: Props) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: scaleOptions,
    plugins: {
      legend: {
        // Display a legend if there are more than 1 series being passed in
        display: data.datasets.length > 1 ? true : false,
        //position: "top" as const,
      },
      title: {
        display: true,
        text: data.title,
      },
      zoom: !disableZoom && zoom,
    },
  };
  return (
    <div className="">
      {/* @ts-expect-error */}
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
