import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

// TODO: Remove mock testimonials when real CRM data is connected
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Johnson Real Estate",
    role: "CEO",
    image: "", // Will use fallback
    rating: 5,
    testimonial: "Muhammad transformed our entire lead generation process with GoHighLevel. We went from manually managing 20 leads per month to automatically handling 300+ leads with 85% automation. The custom dashboard he built gives us insights we never had before.",
    results: "300% increase in leads",
    project: "Real Estate CRM & Automation"
  },
  {
    id: 2,
    name: "David Chen",
    company: "Elite Coaching",
    role: "Business Coach",
    image: "",
    rating: 5,
    testimonial: "The booking system Muhammad created is incredible. Our show-up rate improved from 60% to 90% with his automated SMS reminder sequences. The ROI was immediate - we generated an extra $50K in revenue within the first quarter.",
    results: "90% show-up rate",
    project: "Coaching Business Automation"
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    company: "TechStart Solutions",
    role: "Operations Director",
    image: "",
    rating: 5,
    testimonial: "Working with Muhammad was a game-changer. He didn't just implement GoHighLevel - he analyzed our entire business process and optimized everything. The custom integrations he built save us 15 hours per week.",
    results: "75% time savings",
    project: "Business Process Optimization"
  },
  {
    id: 4,
    name: "James Mitchell",
    company: "Healthcare Plus",
    role: "Practice Manager",
    image: "",
    rating: 5,
    testimonial: "Muhammad delivered a HIPAA-compliant patient management system that revolutionized our practice. Appointment scheduling is now automated, and patient follow-ups happen seamlessly. Our admin workload decreased by 80%.",
    results: "80% admin reduction",
    project: "Healthcare Practice Management"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    company: "E-commerce Pro",
    role: "Founder",
    image: "",
    rating: 5,
    testimonial: "The e-commerce automation suite Muhammad built handles everything from inventory to customer lifecycle management. It's like having a 24/7 employee that never makes mistakes. Our efficiency doubled overnight.",
    results: "200% efficiency increase",
    project: "E-commerce Automation"
  },
  {
    id: 6,
    name: "Robert Kim",
    company: "Multi-Location Retail",
    role: "Regional Manager",
    image: "",
    rating: 5,
    testimonial: "Managing 8 locations was a nightmare before Muhammad's solution. Now we have unified reporting, location-specific automations, and centralized control. What used to take days now happens in real-time.",
    results: "Unified multi-location ops",
    project: "Multi-Location Management"
  }
];

export default function Testimonials() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients say about working 
            with me on their GoHighLevel projects.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="hover-elevate transition-all duration-300 relative"
              data-testid={`testimonial-${testimonial.id}`}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="h-4 w-4 text-primary" />
              </div>

              <CardHeader className="space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-chart-2 text-chart-2" />
                  ))}
                </div>

                {/* Client info */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Testimonial text */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  "{testimonial.testimonial}"
                </p>

                {/* Project info */}
                <div className="pt-4 border-t border-card-border space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Project:</span>
                    <span className="font-medium text-foreground">{testimonial.project}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs text-chart-2 border-chart-2">
                      {testimonial.results}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground">Client Retention</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl border border-card-border p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your GoHighLevel project and create a solution that delivers 
              the results your business needs.
            </p>
            <Button 
              size="lg"
              onClick={scrollToContact}
              data-testid="button-get-started"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}