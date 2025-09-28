import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import ghlDashboardUrl from "@assets/generated_images/GoHighLevel_dashboard_interface_a08c5ba3.png";
import businessWebsiteUrl from "@assets/generated_images/Business_website_homepage_1291d575.png";
import leadCaptureUrl from "@assets/generated_images/Lead_capture_landing_page_71da9a24.png";

const portfolioProjects = [
  {
    id: 1,
    title: "GoHighLevel Multi-Page Business Website",
    description: "Complete business website with integrated CRM, automated lead capture, and custom dashboard for a real estate agency.",
    image: businessWebsiteUrl,
    technologies: ["GoHighLevel", "JavaScript", "CSS3", "HTML5"],
    category: "Web Development",
    results: ["300% increase in leads", "85% automation rate", "50+ new clients"],
    liveUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 2,
    title: "GoHighLevel Lead Capture & Scheduling",
    description: "Advanced lead capture system with automated scheduling, SMS follow-ups, and conversion tracking for coaching business.",
    image: leadCaptureUrl,
    technologies: ["GoHighLevel", "Automation", "SMS API", "Calendar Integration"],
    category: "Lead Generation",
    results: ["400% booking increase", "90% show-up rate", "$50K revenue boost"],
    liveUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 3,
    title: "Custom GoHighLevel CRM Dashboard",
    description: "Custom-coded dashboard with advanced analytics, pipeline management, and automated reporting for enterprise client.",
    image: ghlDashboardUrl,
    technologies: ["GoHighLevel API", "Custom Coding", "JavaScript", "Data Analytics"],
    category: "CRM Development",
    results: ["60% time savings", "Real-time insights", "Improved decision making"],
    liveUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 4,
    title: "E-commerce Automation Suite",
    description: "Complete e-commerce automation including inventory management, order processing, and customer lifecycle management.",
    image: businessWebsiteUrl,
    technologies: ["GoHighLevel", "E-commerce API", "Automation", "Webhooks"],
    category: "E-commerce",
    results: ["75% less manual work", "24/7 automation", "200% efficiency gain"],
    liveUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 5,
    title: "Multi-Location Business Management",
    description: "Centralized GoHighLevel system managing multiple business locations with unified reporting and location-specific automations.",
    image: ghlDashboardUrl,
    technologies: ["GoHighLevel", "Multi-tenant Setup", "Custom Workflows", "Reporting"],
    category: "Business Management",
    results: ["Unified operations", "Cross-location insights", "Streamlined management"],
    liveUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 6,
    title: "Healthcare Practice Automation",
    description: "HIPAA-compliant patient management system with appointment scheduling, follow-ups, and treatment reminders.",
    image: leadCaptureUrl,
    technologies: ["GoHighLevel", "HIPAA Compliance", "Healthcare APIs", "Security"],
    category: "Healthcare",
    results: ["100% HIPAA compliant", "80% admin reduction", "Better patient care"],
    liveUrl: "#",
    caseStudyUrl: "#"
  }
];

const categories = ["All", "Web Development", "Lead Generation", "CRM Development", "E-commerce", "Business Management", "Healthcare"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-4">Portfolio</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground">
            GoHighLevel Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real projects, real results. Explore how I've helped businesses transform 
            their operations with custom GoHighLevel solutions.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              data-testid={`filter-${category.toLowerCase().replace(' ', '-')}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`portfolio-item-${project.id}`}
            >
              {/* Project image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`portfolio-image-${project.id}`}
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <Button size="icon" variant="secondary" data-testid={`button-view-${project.id}`}>
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" data-testid={`button-external-${project.id}`}>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Results */}
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-card-foreground">Key Results:</h5>
                  <ul className="space-y-1">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-chart-2"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    data-testid={`button-case-study-${project.id}`}
                  >
                    Case Study
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    data-testid={`button-live-demo-${project.id}`}
                  >
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="text-center mt-16">
          <div className="bg-background rounded-2xl border border-border p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to See Your Project Here?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can create a custom GoHighLevel solution that delivers 
              measurable results for your business.
            </p>
            <Button 
              size="lg"
              data-testid="button-start-project"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Import React's useState
import { useState } from "react";