import { createFileRoute } from "@tanstack/react-router";

import { BaseLayout } from "@app/layouts/base-layout";

import { ChartAreaInteractive } from "@pages/dashboard/-components/chart-area-interactive";
import { DataTable } from "@pages/dashboard/-components/data-table";
import { SectionCards } from "@pages/dashboard/-components/section-cards";
import data from "@pages/dashboard/-data/data.json";
import focusDocumentsData from "@pages/dashboard/-data/focus-documents-data.json";
import keyPersonnelData from "@pages/dashboard/-data/key-personnel-data.json";
import pastPerformanceData from "@pages/dashboard/-data/past-performance-data.json";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <BaseLayout title="Dashboard" description="Welcome to your admin dashboard">
      <div className="@container/main px-4 lg:px-6 space-y-6">
        <SectionCards />
        <ChartAreaInteractive />
      </div>
      <div className="@container/main">
        <DataTable
          data={data}
          pastPerformanceData={pastPerformanceData}
          keyPersonnelData={keyPersonnelData}
          focusDocumentsData={focusDocumentsData}
        />
      </div>
    </BaseLayout>
  );
}
