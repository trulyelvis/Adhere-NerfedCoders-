import { MedicineCard } from "@/components/MedicineCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

// todo: remove mock functionality
const allMedicines = [
  {
    id: "1",
    name: "Paracetamol",
    dosage: "500mg",
    time: "9:00 AM",
    status: "taken" as const,
    notes: "Take with food"
  },
  {
    id: "2",
    name: "Paracetamol",
    dosage: "500mg", 
    time: "2:30 PM",
    status: "upcoming" as const,
    notes: "Take with food"
  },
  {
    id: "3",
    name: "Vitamin D",
    dosage: "1000 IU",
    time: "8:00 AM",
    status: "taken" as const,
  },
  {
    id: "4",
    name: "Blood Pressure Med",
    dosage: "10mg",
    time: "7:00 AM",
    status: "missed" as const,
  },
  {
    id: "5",
    name: "Blood Pressure Med",
    dosage: "10mg",
    time: "7:00 PM",
    status: "upcoming" as const,
  },
];

export default function Medicines() {
  const [medicines, setMedicines] = useState(allMedicines);

  const handleStatusChange = (id: string, status: "taken" | "missed") => {
    setMedicines(prev => 
      prev.map(med => 
        med.id === id ? { ...med, status } as typeof med : med
      )
    );
    console.log(`Medicine ${id} marked as ${status}`);
  };

  const upcomingMedicines = medicines.filter(med => med.status === "upcoming");
  const completedMedicines = medicines.filter(med => med.status !== "upcoming");

  return (
    <div className="space-y-8" data-testid="page-medicines">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Medicines</h1>
          <p className="text-muted-foreground">
            Manage your medication schedule and track adherence
          </p>
        </div>
        <Link href="/add">
          <Button data-testid="button-add-medicine">
            <Plus className="w-4 h-4 mr-2" />
            Add Medicine
          </Button>
        </Link>
      </div>

      {/* Upcoming Medicines */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Upcoming ({upcomingMedicines.length})
        </h2>
        {upcomingMedicines.length > 0 ? (
          <div className="grid gap-4">
            {upcomingMedicines.map((medicine) => (
              <MedicineCard
                key={medicine.id}
                medicine={medicine}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No upcoming medicines scheduled
          </div>
        )}
      </div>

      {/* Completed Medicines */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Today's Activity ({completedMedicines.length})
        </h2>
        {completedMedicines.length > 0 ? (
          <div className="grid gap-4">
            {completedMedicines.map((medicine) => (
              <MedicineCard
                key={medicine.id}
                medicine={medicine}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No activity recorded today
          </div>
        )}
      </div>
    </div>
  );
}