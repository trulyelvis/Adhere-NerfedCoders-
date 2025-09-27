import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Clock, Pill } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function MedicineScheduler() {
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dosage: "",
    time: "",
    notes: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // todo: remove mock functionality - replace with actual API call
    console.log("Adding medicine:", formData);
    
    toast({
      title: "Medicine Added",
      description: `${formData.name} has been added to your schedule.`,
    });

    // Reset form
    setFormData({ name: "", dosage: "", time: "", notes: "" });
    setIsAdding(false);
  };

  const handleCancel = () => {
    setFormData({ name: "", dosage: "", time: "", notes: "" });
    setIsAdding(false);
  };

  if (!isAdding) {
    return (
      <Card className="hover-elevate" data-testid="card-add-medicine">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
            <Plus className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Add New Medicine</h3>
          <p className="text-muted-foreground text-center mb-6">
            Schedule your medications with dosage and timing information
          </p>
          <Button 
            onClick={() => setIsAdding(true)}
            data-testid="button-add-medicine"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Medicine
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card data-testid="card-medicine-form">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Pill className="w-5 h-5 mr-2 text-primary" />
          Add New Medicine
        </CardTitle>
        <CardDescription>
          Enter your medication details for smart reminders
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="medicine-name">Medicine Name</Label>
            <Input
              id="medicine-name"
              placeholder="e.g., Paracetamol"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              data-testid="input-medicine-name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="medicine-dosage">Dosage</Label>
            <Input
              id="medicine-dosage"
              placeholder="e.g., 500mg, 2 tablets"
              value={formData.dosage}
              onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
              required
              data-testid="input-medicine-dosage"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="medicine-time">Time</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="medicine-time"
                type="time"
                className="pl-10"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required
                data-testid="input-medicine-time"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="medicine-notes">Notes (Optional)</Label>
            <Textarea
              id="medicine-notes"
              placeholder="Add any additional notes about this medication..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              data-testid="input-medicine-notes"
            />
          </div>

          <div className="flex space-x-3">
            <Button type="submit" className="flex-1" data-testid="button-save-medicine">
              <Plus className="w-4 h-4 mr-2" />
              Add Medicine
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleCancel}
              data-testid="button-cancel-medicine"
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}