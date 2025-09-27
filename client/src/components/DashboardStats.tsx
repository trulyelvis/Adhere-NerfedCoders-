import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Calendar, Clock } from "lucide-react";

// todo: remove mock functionality
const stats = [
  {
    title: "Adherence Rate",
    value: "85%",
    description: "This month",
    trend: "up",
    change: "+5%",
    icon: TrendingUp,
    color: "text-chart-2",
  },
  {
    title: "Active Medications",
    value: "4",
    description: "Currently tracking",
    trend: "neutral",
    change: "Same as last month",
    icon: Calendar,
    color: "text-primary",
  },
  {
    title: "Next Dose",
    value: "2:30 PM",
    description: "Paracetamol 500mg",
    trend: "neutral",
    change: "In 1 hour",
    icon: Clock,
    color: "text-chart-4",
  },
  {
    title: "Missed This Week",
    value: "2",
    description: "Down from last week",
    trend: "down",
    change: "-3 doses",
    icon: TrendingDown,
    color: "text-chart-3",
  },
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="hover-elevate" data-testid={`card-stat-${index}`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid={`text-stat-value-${index}`}>
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground" data-testid={`text-stat-description-${index}`}>
                {stat.description}
              </p>
              <p className={`text-xs mt-1 ${
                stat.trend === "up" ? "text-chart-2" : 
                stat.trend === "down" ? "text-chart-3" : 
                "text-muted-foreground"
              }`} data-testid={`text-stat-change-${index}`}>
                {stat.change}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}