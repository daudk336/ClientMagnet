import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, DollarSign, Calendar } from "lucide-react";
import professionalHeadshotUrl from "@assets/generated_images/Professional_headshot_portrait_3e900bad.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-chart-2/5"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Status badge */}
            <Badge variant="secondary" className="inline-flex items-center gap-2">
              <div className="w-2 h-2 bg-chart-2 rounded-full animate-pulse"></div>
              Available for new projects
            </Badge>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Muhammad
                <span className="block text-primary">Daud Khan</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                Experienced GoHighLevel Developer
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              4+ years of expertise in GoHighLevel development, specializing in custom coding, 
              front-end development, and business process optimization. I deliver practical 
              solutions that drive results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">4+ Years</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">$40/hr</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Pakistan</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 text-chart-2" />
                <span className="text-muted-foreground">5.0 Rating</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("contact")}
                data-testid="button-hire-me"
                className="text-lg px-8"
              >
                Hire Me Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                data-testid="button-view-work"
                className="text-lg px-8"
              >
                View My Work
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-chart-2 border-2 border-background"
                    ></div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Trusted by 50+ businesses
                </span>
              </div>
            </div>
          </div>

          {/* Right content - Professional photo */}
          <div className="relative">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-chart-2/20 rounded-2xl blur-2xl"></div>
              
              {/* Main image container */}
              <div className="relative">
                <img
                  src={professionalHeadshotUrl}
                  alt="Muhammad Daud Khan - GoHighLevel Expert"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  data-testid="img-professional-headshot"
                />
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-background border border-border rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-chart-2 rounded-full"></div>
                    <span className="text-sm font-medium">GoHighLevel</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4+</div>
                    <div className="text-xs text-muted-foreground">Years Exp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}