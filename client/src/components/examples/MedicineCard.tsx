import { MedicineCard } from '../MedicineCard';

export default function MedicineCardExample() {
  const sampleMedicines = [
    {
      id: "1",
      name: "Paracetamol",
      dosage: "500mg",
      time: "9:00 AM",
      status: "upcoming" as const,
      notes: "Take with food"
    },
    {
      id: "2", 
      name: "Vitamin D",
      dosage: "1000 IU",
      time: "8:00 AM",
      status: "taken" as const
    },
    {
      id: "3",
      name: "Blood Pressure Med",
      dosage: "10mg",
      time: "7:00 AM", 
      status: "missed" as const
    }
  ];

  const handleStatusChange = (id: string, status: "taken" | "missed") => {
    console.log(`Medicine ${id} marked as ${status}`);
  };

  return (
    <div className="p-6 space-y-6 bg-background">
      {sampleMedicines.map((medicine) => (
        <MedicineCard 
          key={medicine.id}
          medicine={medicine}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
}