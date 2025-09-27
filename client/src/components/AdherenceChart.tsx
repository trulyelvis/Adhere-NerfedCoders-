import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from "recharts";

// todo: remove mock functionality
const weeklyData = [
  { day: "Mon", adherence: 95 },
  { day: "Tue", adherence: 100 },
  { day: "Wed", adherence: 85 },
  { day: "Thu", adherence: 100 },
  { day: "Fri", adherence: 90 },
  { day: "Sat", adherence: 100 },
  { day: "Sun", adherence: 95 },
];

const adherenceData = [
  { name: "Taken", value: 85, color: "hsl(var(--chart-2))" },
  { name: "Missed", value: 15, color: "hsl(var(--chart-3))" },
];

const medicineData = [
  { name: "Paracetamol", taken: 28, missed: 2 },
  { name: "Vitamin D", taken: 25, missed: 5 },
  { name: "Blood Pressure", taken: 30, missed: 0 },
  { name: "Diabetes Med", taken: 27, missed: 3 },
];

export function AdherenceChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Weekly Adherence Trend */}
      <Card data-testid="card-weekly-trend">
        <CardHeader>
          <CardTitle>Weekly Adherence Trend</CardTitle>
          <CardDescription>
            Your medication adherence over the past week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="day" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Line 
                type="monotone" 
                dataKey="adherence" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Overall Adherence */}
      <Card data-testid="card-overall-adherence">
        <CardHeader>
          <CardTitle>Overall Adherence</CardTitle>
          <CardDescription>
            Total medication compliance this month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={adherenceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {adherenceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Medicine-specific Stats */}
      <Card className="lg:col-span-2" data-testid="card-medicine-stats">
        <CardHeader>
          <CardTitle>Medicine-Specific Statistics</CardTitle>
          <CardDescription>
            Adherence breakdown by individual medications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={medicineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Bar dataKey="taken" fill="hsl(var(--chart-2))" name="Taken" />
              <Bar dataKey="missed" fill="hsl(var(--chart-3))" name="Missed" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}