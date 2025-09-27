import React, { useState } from "react";

// Components
import { Header } from "@/components/Header";
import { LandingHero } from "@/components/LandingHero";
import HowItWorks from "@/components/HowItWorks";
import { ThemeToggle } from "@/components/ThemeToggle";

// UI Elements
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const [loading, setLoading] = useState(false);

  const handleGetStarted = () => {
    setLoading(true);
    console.log("Get Started clicked"); // Replace with your action
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <LandingHero />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Call to Action */}
      <div className="text-center my-12">
        <Button
          size="lg"
          onClick={handleGetStarted}
          className="bg-primary hover:bg-primary/90 px-8 h-14 text-lg font-medium"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
