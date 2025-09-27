import { Button } from "@/components/ui/button";
import { LandingHero } from "@/components/LandingHero";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "wouter";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center justify-between px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-primary" data-testid="text-logo">
              MediRemind
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/dashboard">
              <Button data-testid="button-enter-app">Enter App</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <LandingHero />
      </main>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 MediRemind. Professional medicine management for everyone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}