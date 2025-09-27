import { DashboardStats } from "@/components/DashboardStats";
import { AdherenceChart } from "@/components/AdherenceChart";
import { MedicineCard } from "@/components/MedicineCard";
import { useState } from "react";

// todo: remove mock functionality
const initialMedicines = [
  {
    id: "1",
    name: "Paracetamol",
    dosage: "500mg",
    time: "2:30 PM",
    status: "upcoming" as const,
    notes: "Take with food"
  },
  {
    id: "2",
    name: "Vitamin D",
    dosage: "1000 IU",
    time: "8:00 AM",
    status: "taken" as const,
  },
  {
    id: "3",
    name: "Blood Pressure Med",
    dosage: "10mg",
    time: "7:00 AM",
    status: "missed" as const,
  },
];

export default function Dashboard() {
  const [medicines, setMedicines] = useState(initialMedicines);

  const handleStatusChange = (id: string, status: "taken" | "missed") => {
    setMedicines(prev => 
      prev.map(med => 
        med.id === id ? { ...med, status } as typeof med : med
      )
    );
    console.log(`Medicine ${id} marked as ${status}`);
  };

  const upcomingMedicines = medicines.filter(med => med.status === "upcoming");
  const recentMedicines = medicines.filter(med => med.status !== "upcoming");

  return (
    <div className="space-y-8" data-testid="page-dashboard">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Track your medication adherence and manage your health
        </p>
      </div>

      {/* Stats Overview */}
      <DashboardStats />

      {/* Upcoming Medicines */}
      {upcomingMedicines.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Upcoming Medicines</h2>
          <div className="grid gap-4">
            {upcomingMedicines.map((medicine) => (
              <MedicineCard
                key={medicine.id}
                medicine={medicine}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        </div>
      )}

      {/* Recent Activity */}
      {recentMedicines.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="grid gap-4">
            {recentMedicines.map((medicine) => (
              <MedicineCard
                key={medicine.id}
                medicine={medicine}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        </div>
      )}

      {/* Charts */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Adherence Analytics</h2>
        <AdherenceChart />
      </div>
    </div>
  );
}