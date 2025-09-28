import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Facebook, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-foreground">Muhammad Daud Khan</h3>
              <p className="text-muted-foreground">GoHighLevel Expert</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Experienced developer specializing in GoHighLevel solutions, 
              custom coding, and business process optimization.
            </p>
          </div>

          {/* Services column */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>GoHighLevel Development</li>
              <li>Custom Coding</li>
              <li>Front-end Development</li>
              <li>Marketing Automation</li>
              <li>Business Process Optimization</li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Multan, Pakistan</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>daud@ghlexpert.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>Available on request</span>
              </div>
            </div>
          </div>

          {/* Social column */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Connect</h4>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="icon"
                asChild
                data-testid="social-linkedin"
              >
                <a href="https://pk.linkedin.com/in/muhammad-daudk" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                data-testid="social-upwork"
              >
                <a href="https://www.upwork.com/freelancers/~01fc41292e2a702dca" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                data-testid="social-facebook"
              >
                <a href="https://www.facebook.com/Daud.khan.LS/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Available for freelance projects
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Muhammad Daud Khan. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <button className="hover:text-foreground transition-colors" data-testid="link-privacy">
              Privacy Policy
            </button>
            <button className="hover:text-foreground transition-colors" data-testid="link-terms">
              Terms of Service
            </button>
          </div>
        </div>

        {/* SEO Keywords footer note */}
        <div className="mt-8 pt-4 border-t border-card-border">
          <p className="text-xs text-muted-foreground text-center">
            GoHighLevel Expert | GHL Expert | HL Expert | Highlevel Expert | GHL Pro | HL Pro | 
            Highlevel Pro | Gohighlevel Pro | Muhammad Daud Khan | GoHighLevel Developer
          </p>
        </div>
      </div>
    </footer>
  );
}