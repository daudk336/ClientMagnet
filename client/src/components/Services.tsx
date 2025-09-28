import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  Code, 
  Zap, 
  Target, 
  Smartphone, 
  BarChart3, 
  Workflow, 
  Palette,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "GoHighLevel Setup & Configuration",
    description: "Complete GHL platform setup, custom workflows, and automation configuration to streamline your business operations.",
    features: ["CRM Setup", "Workflow Automation", "Pipeline Configuration", "Integration Setup"],
    price: "Starting at $500"
  },
  {
    icon: Code,
    title: "Custom Coding & Development",
    description: "Tailored code solutions for GoHighLevel including custom widgets, API integrations, and enhanced functionality.",
    features: ["Custom Widgets", "API Integration", "Database Customization", "Third-party Connections"],
    price: "Starting at $800"
  },
  {
    icon: Smartphone,
    title: "Front-end Development",
    description: "Responsive landing pages, funnels, and websites built with modern technologies and optimized for conversions.",
    features: ["Landing Pages", "Sales Funnels", "Mobile Optimization", "Conversion Optimization"],
    price: "Starting at $600"
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Advanced automation sequences for lead generation, nurturing, and customer retention with measurable results.",
    features: ["Email Campaigns", "SMS Sequences", "Lead Scoring", "Behavioral Triggers"],
    price: "Starting at $400"
  },
  {
    icon: BarChart3,
    title: "Business Process Optimization",
    description: "Analyze and optimize your workflows to increase efficiency, reduce manual work, and boost productivity.",
    features: ["Process Analysis", "Workflow Optimization", "Performance Metrics", "ROI Tracking"],
    price: "Starting at $700"
  },
  {
    icon: Target,
    title: "Lead Generation & Capture",
    description: "Comprehensive lead generation strategies with optimized capture forms and nurture sequences.",
    features: ["Lead Magnets", "Capture Forms", "Landing Pages", "Nurture Sequences"],
    price: "Starting at $350"
  }
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-4">Services</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            GoHighLevel Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive GoHighLevel development services to transform your business 
            operations and accelerate growth through proven automation strategies.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover-elevate transition-all duration-300 border-card-border"
                data-testid={`service-card-${index}`}
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Features list */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-chart-2"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Price and CTA */}
                  <div className="pt-4 border-t border-card-border">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">{service.price}</span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={scrollToContact}
                        className="group/btn"
                        data-testid={`button-get-quote-${index}`}
                      >
                        Get Quote
                        <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl border border-card-border p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Workflow className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Need a Custom Solution?
              </h3>
              <p className="text-muted-foreground">
                Every business is unique. Let's discuss your specific GoHighLevel requirements 
                and create a tailored solution that drives results.
              </p>
              <Button 
                size="lg" 
                onClick={scrollToContact}
                data-testid="button-custom-solution"
                className="mt-4"
              >
                Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}