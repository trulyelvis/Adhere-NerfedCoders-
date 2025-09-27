import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, BarChart3, ArrowRight, Shield, Heart, Smartphone } from "lucide-react"
import heroImage from "@assets/generated_images/Medical_app_hero_image_0c556a69.png"

export function LandingHero() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          {/* Announcement Banner */}
          <div className="flex justify-center mb-8">
            <Badge
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors px-4 py-2 text-sm font-medium"
              data-testid="badge-hero"
            >
              <Heart className="w-4 h-4 mr-2" />
              Trusted by 50,000+ families worldwide
            </Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <div className="text-center lg:text-left">
              <h1
                className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance"
                data-testid="text-hero-title"
              >
                Never Miss Your
                <span className="gradient-text block"> Medicine</span>
                <span className="text-foreground">Again</span>
              </h1>
              <p
                className="mt-6 text-xl leading-8 text-muted-foreground max-w-2xl text-pretty"
                data-testid="text-hero-description"
              >
                Smart reminders, family sharing, and professional analytics to help millions manage their medications
                safely and effectively. Take control of your health today.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex items-center gap-4 justify-center lg:justify-start flex-wrap">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 px-8 py-4 text-lg font-semibold"
                  data-testid="button-get-started"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-foreground border-2 hover:bg-muted/50 px-8 py-4 text-lg font-semibold bg-transparent"
                  data-testid="button-watch-demo"
                >
                  <Smartphone className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>FDA Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary" />
                  <span>Doctor Recommended</span>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-chart-2/20 rounded-3xl blur-3xl transform rotate-6"></div>
                <img
                  src={heroImage || "/placeholder.svg"}
                  alt="Medicine Reminder App Interface"
                  className="relative rounded-2xl shadow-2xl max-h-[500px] object-contain transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted/30 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-destructive/10 text-destructive border-destructive/20">Critical Health Issue</Badge>
          <h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
            data-testid="text-problem-title"
          >
            Over 125,000 deaths annually from medication non-adherence
          </h2>
          <p
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto text-pretty"
            data-testid="text-problem-description"
          >
            Especially affecting elderly patients and busy professionals. Missing doses leads to serious health
            complications, hospital readmissions, and increased healthcare costs. Current solutions are too complicated,
            expensive, or inaccessible for most families.
          </p>

          {/* Statistics */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-destructive">50%</div>
              <div className="text-sm text-muted-foreground mt-1">Don't take meds as prescribed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-destructive">$100B</div>
              <div className="text-sm text-muted-foreground mt-1">Annual healthcare costs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-destructive">125K</div>
              <div className="text-sm text-muted-foreground mt-1">Deaths per year in US</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Powerful Features</Badge>
            <h2
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
              data-testid="text-features-title"
            >
              Everything you need for medication management
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Designed by healthcare professionals, built for real families
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card
              className="group relative overflow-hidden border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              data-testid="card-feature-scheduling"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              <div className="relative p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Smart Scheduling</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Add medicines with dosage and timing. Get intelligent notifications across all your devices.
                </p>
              </div>
            </Card>

            <Card
              className="group relative overflow-hidden border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              data-testid="card-feature-tracking"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-chart-2/5 to-transparent"></div>
              <div className="relative p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-chart-2/10 rounded-2xl mb-6 group-hover:bg-chart-2/20 transition-colors">
                  <CheckCircle className="w-8 h-8 text-chart-2" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">One-Click Tracking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mark medicines as "Taken" or "Missed" with simple one-click logging and progress tracking.
                </p>
              </div>
            </Card>

            <Card
              className="group relative overflow-hidden border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              data-testid="card-feature-analytics"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-chart-4/5 to-transparent"></div>
              <div className="relative p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-chart-4/10 rounded-2xl mb-6 group-hover:bg-chart-4/20 transition-colors">
                  <BarChart3 className="w-8 h-8 text-chart-4" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Professional Analytics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  View detailed adherence statistics with daily, weekly, and monthly insights and reports.
                </p>
              </div>
            </Card>

            <Card
              className="group relative overflow-hidden border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              data-testid="card-feature-sharing"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-chart-3/5 to-transparent"></div>
              <div className="relative p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-chart-3/10 rounded-2xl mb-6 group-hover:bg-chart-3/20 transition-colors">
                  <Users className="w-8 h-8 text-chart-3" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Family Sharing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Secure links let family members monitor medication compliance and support loved ones.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}