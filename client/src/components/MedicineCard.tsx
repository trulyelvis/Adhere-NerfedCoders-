import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Pill, CheckCircle, XCircle } from "lucide-react";

export interface Medicine {
  id: string;
  name: string;
  dosage: string;
  time: string;
  status: "upcoming" | "taken" | "missed";
  notes?: string;
}

interface MedicineCardProps {
  medicine: Medicine;
  onStatusChange?: (id: string, status: "taken" | "missed") => void;
}

export function MedicineCard({ medicine, onStatusChange }: MedicineCardProps) {
  const getStatusColor = (status: Medicine["status"]) => {
    switch (status) {
      case "taken":
        return "bg-chart-2/10 text-chart-2 border-chart-2/20";
      case "missed":
        return "bg-chart-3/10 text-chart-3 border-chart-3/20";
      default:
        return "bg-chart-4/10 text-chart-4 border-chart-4/20";
    }
  };

  const getStatusIcon = (status: Medicine["status"]) => {
    switch (status) {
      case "taken":
        return <CheckCircle className="w-4 h-4" />;
      case "missed":
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <Card className="p-6 hover-elevate" data-testid={`card-medicine-${medicine.id}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
            <Pill className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold" data-testid={`text-medicine-name-${medicine.id}`}>
              {medicine.name}
            </h3>
            <p className="text-muted-foreground" data-testid={`text-medicine-dosage-${medicine.id}`}>
              {medicine.dosage}
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground" data-testid={`text-medicine-time-${medicine.id}`}>
                {medicine.time}
              </span>
            </div>
            {medicine.notes && (
              <p className="text-sm text-muted-foreground mt-2" data-testid={`text-medicine-notes-${medicine.id}`}>
                {medicine.notes}
              </p>
            )}
          </div>
        </div>
        <Badge className={getStatusColor(medicine.status)} data-testid={`badge-medicine-status-${medicine.id}`}>
          {getStatusIcon(medicine.status)}
          <span className="ml-1 capitalize">{medicine.status}</span>
        </Badge>
      </div>

      {medicine.status === "upcoming" && onStatusChange && (
        <div className="flex space-x-3 mt-6">
          <Button
            size="sm"
            variant="default"
            className="flex-1 bg-chart-2 hover:bg-chart-2/90 text-white"
            onClick={() => onStatusChange(medicine.id, "taken")}
            data-testid={`button-mark-taken-${medicine.id}`}
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark Taken
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1 border-chart-3 text-chart-3 hover:bg-chart-3/10"
            onClick={() => onStatusChange(medicine.id, "missed")}
            data-testid={`button-mark-missed-${medicine.id}`}
          >
            <XCircle className="w-4 h-4 mr-2" />
            Mark Missed
          </Button>
        </div>
      )}
    </Card>
  );
}