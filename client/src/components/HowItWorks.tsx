import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Bell, CheckCircle, BarChart3, ArrowRight, Sparkles } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Plus,
      step: "1",
      title: "Add Your Medicines",
      description:
        "Simply enter medicine names, dosages, and times. Our smart system recognizes over 10,000 medications automatically.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      gradientFrom: "from-primary/5",
    },
    {
      icon: Bell,
      step: "2",
      title: "Receive Smart Reminders",
      description:
        "Get gentle, personalized notifications on all your devices exactly when it's time to take your medicine.",
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
      gradientFrom: "from-chart-2/5",
    },
    {
      icon: CheckCircle,
      step: "3",
      title: "Track Your Progress",
      description:
        "Mark medicines as taken or missed with one tap. Build healthy habits with visual progress tracking and streaks.",
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
      gradientFrom: "from-chart-3/5",
    },
    {
      icon: BarChart3,
      step: "4",
      title: "Share with Family",
      description:
        "Keep loved ones informed with secure sharing and generate professional reports for your healthcare providers.",
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
      gradientFrom: "from-chart-4/5",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">How It Works</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Get Started in
            <span className="gradient-text"> 4 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Our streamlined process makes medicine management effortless. Designed for simplicity, trusted by healthcare
            professionals worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative" data-testid={`step-${step.step}`}>
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0"
                    style={{ width: "calc(100% - 2rem)" }}
                  />
                )}

                <Card className="group relative z-10 text-center border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradientFrom} to-transparent`}></div>
                  <CardContent className="relative p-8">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full text-sm font-bold mb-6 shadow-lg">
                      {step.step}
                    </div>

                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.bgColor} mb-6 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <IconComponent className={`w-8 h-8 ${step.color}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>

                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-card rounded-2xl p-8 shadow-lg border">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-foreground mb-2">Ready to get started?</h3>
              <p className="text-muted-foreground">Join thousands of families managing their health better</p>
            </div>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg px-8 py-4 font-semibold"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}