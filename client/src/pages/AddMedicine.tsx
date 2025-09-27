import { MedicineScheduler } from "@/components/MedicineScheduler";

export default function AddMedicine() {
  return (
    <div className="space-y-8" data-testid="page-add-medicine">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add Medicine</h1>
        <p className="text-muted-foreground">
          Schedule a new medication with smart reminders
        </p>
      </div>

      {/* Medicine Scheduler */}
      <div className="max-w-2xl">
        <MedicineScheduler />
      </div>
    </div>
  );
}