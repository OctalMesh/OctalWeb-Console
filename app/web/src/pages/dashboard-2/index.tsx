import { createFileRoute } from "@tanstack/react-router";

import { BaseLayout } from "@app/layouts/base-layout";

import { CustomerInsights } from "@pages/dashboard-2/-components/customer-insights";
import { MetricsOverview } from "@pages/dashboard-2/-components/metrics-overview";
import { QuickActions } from "@pages/dashboard-2/-components/quick-actions";
import { RecentTransactions } from "@pages/dashboard-2/-components/recent-transactions";
import { RevenueBreakdown } from "@pages/dashboard-2/-components/revenue-breakdown";
import { SalesChart } from "@pages/dashboard-2/-components/sales-chart";
import { TopProducts } from "@pages/dashboard-2/-components/top-products";

export const Route = createFileRoute("/dashboard-2/")({
  component: DashboardPage2,
});

function DashboardPage2() {
  return (
    <BaseLayout>
      <div className="flex-1 space-y-6 px-6 pt-0">
        {/* Enhanced Header */}

        <div className="flex md:flex-row flex-col md:items-center justify-between gap-4 md:gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold tracking-tight">Business Dashboard</h1>
            <p className="text-muted-foreground">Monitor your business performance and key metrics in real-time</p>
          </div>
          <QuickActions />
        </div>

        {/* Main Dashboard Grid */}
        <div className="@container/main space-y-6">
          {/* Top Row - Key Metrics */}

          <MetricsOverview />

          {/* Second Row - Charts in 6-6 columns */}
          <div className="grid gap-6 grid-cols-1 @5xl:grid-cols-2">
            <SalesChart />
            <RevenueBreakdown />
          </div>

          {/* Third Row - Two Column Layout */}
          <div className="grid gap-6 grid-cols-1 @5xl:grid-cols-2">
            <RecentTransactions />
            <TopProducts />
          </div>

          {/* Fourth Row - Customer Insights and Team Performance */}
          <CustomerInsights />
        </div>
      </div>
    </BaseLayout>
  );
}
