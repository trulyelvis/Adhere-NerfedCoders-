import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, BarChart3 } from "lucide-react";
import heroImage from "@assets/generated_images/Medical_app_hero_image_0c556a69.png";

export function LandingHero() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Hero Section */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-6 bg-primary/20 text-primary-foreground border-primary/30" data-testid="badge-hero">
              Smart Medicine Management
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl" data-testid="text-hero-title">
              Never Miss Your
              <span className="text-primary"> Medicine</span> Again
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200" data-testid="text-hero-description">
              Smart reminders, family sharing, and professional analytics to help millions manage their medications safely and effectively.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" data-testid="button-get-started">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" data-testid="button-watch-demo">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary" data-testid="text-problem-label">
            The Problem
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl" data-testid="text-problem-title">
            Millions forget their medicine daily
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground" data-testid="text-problem-description">
            Especially elderly and busy professionals. Missing doses causes serious health risks, but current solutions are too complicated or inaccessible. Families struggle to ensure loved ones follow prescriptions correctly.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary" data-testid="text-features-label">
            Key Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl" data-testid="text-features-title">
            Everything you need for medication management
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6 hover-elevate" data-testid="card-feature-scheduling">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Scheduling</h3>
            <p className="text-muted-foreground">Add medicines with dosage and time. Get automatic browser notifications.</p>
          </Card>

          <Card className="p-6 hover-elevate" data-testid="card-feature-tracking">
            <div className="flex items-center justify-center w-12 h-12 bg-chart-2/10 rounded-lg mb-4">
              <CheckCircle className="w-6 h-6 text-chart-2" />
            </div>
            <h3 className="text-lg font-semibold mb-2">One-Click Tracking</h3>
            <p className="text-muted-foreground">Mark medicines as "Taken" or "Missed" with simple one-click logging.</p>
          </Card>

          <Card className="p-6 hover-elevate" data-testid="card-feature-analytics">
            <div className="flex items-center justify-center w-12 h-12 bg-chart-4/10 rounded-lg mb-4">
              <BarChart3 className="w-6 h-6 text-chart-4" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Professional Analytics</h3>
            <p className="text-muted-foreground">View adherence statistics with daily/weekly charts and insights.</p>
          </Card>

          <Card className="p-6 hover-elevate" data-testid="card-feature-sharing">
            <div className="flex items-center justify-center w-12 h-12 bg-chart-3/10 rounded-lg mb-4">
              <Users className="w-6 h-6 text-chart-3" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Family Sharing</h3>
            <p className="text-muted-foreground">Secure links let family members monitor medication compliance.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}