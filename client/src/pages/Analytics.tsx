import { AdherenceChart } from "@/components/AdherenceChart";
import { DashboardStats } from "@/components/DashboardStats";

export default function Analytics() {
  return (
    <div className="space-y-8" data-testid="page-analytics">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          Detailed insights into your medication adherence and health patterns
        </p>
      </div>

      {/* Overview Stats */}
      <DashboardStats />

      {/* Detailed Charts */}
      <AdherenceChart />
    </div>
  );
}