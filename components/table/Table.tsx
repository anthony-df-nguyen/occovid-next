"use client";
import React, { useState } from "react";
import Card from "../ui/Card";
import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

export type GridRowModel = { [key: string]: any }[];
export type GridColModel = {
  field?: string;
  headerName?: string;
  pinned?: "left" | "right";
  children?: any[];
}[];

type Props = {
  rows: GridRowModel;
  cols: GridColModel;
};

export default function Table({ rows, cols }: Props) {
  return (
    // wrapping container with theme & size
    <Card>
      <div
        className="ag-theme-quartz" // applying the grid theme
        style={{ height: 500 }} // the grid will fill the size of the parent container
      >
        <AgGridReact rowData={rows} columnDefs={cols} autoSizeStrategy={{
          type: "fitGridWidth",
        }}/>
      </div>
    </Card>
  );
}
