import { SectionCards } from "../components/dashboard/section-cards";
import { ChartAreaInteractive } from "../components/dashboard/chart-area-interactive";
import { DataTable } from "../components/dashboard/data-table";

import data from "./data.json";

export const AdminDashboardView = () => {
  return (
    <>
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </>
  );
};
