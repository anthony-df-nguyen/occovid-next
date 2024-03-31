"use client";
import React, { useEffect, useState } from "react";
import Table from "./Table";
import Tabs from "../ui/Tabs";
import { GridColModel } from "@/components/table/Table";

export type TableControllerSchema = {
  tabName: string;
  data: any[];
  colDefs: GridColModel;
}[];

type Props = {
  tableTitle: string;
  tableOptions: TableControllerSchema;
};

export default function TableController({ tableTitle, tableOptions }: Props) {
  const [activeTab, handleActiveTab] = useState<number>(0);

  const [activeTable, handleTable] = useState({
    rows: tableOptions[0].data,
    cols: tableOptions[0].colDefs,
  });

  //When the tab changes, change the table to the correlated tab data
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      handleTable({
        rows: tableOptions[activeTab].data,
        cols: tableOptions[activeTab].colDefs,
      });
    }
    () => {
      mounted = false;
    };
  }, [activeTab, tableOptions]);

  return (
    <div>
      <div className="sectionTitle">{tableTitle}</div>
      {tableOptions.length > 1 && (
        <Tabs
          label="Select Table"
          tabs={tableOptions.map((opt) => opt.tabName)}
          activeTab={activeTab}
          handleChange={handleActiveTab}
        />
      )}
      {tableOptions.length === 1 && <div className="mt-2"></div>}
      <Table rows={activeTable.rows} cols={activeTable.cols} />
    </div>
  );
}
