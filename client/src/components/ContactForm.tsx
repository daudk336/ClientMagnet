import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Mail, Phone, MessageSquare, Send, CheckCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select your budget range"),
  timeline: z.string().min(1, "Please select your timeline"),
  message: z.string().min(10, "Please provide more details about your project (minimum 10 characters)"),
  urgency: z.string().default("normal")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
      urgency: "normal"
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // TODO: Replace with actual API call to save to CRM and trigger email automation
      console.log('Form submitted:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you within 24 hours with a detailed proposal.",
      });
      
      // Reset form after success
      form.reset();
      
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="text-center p-8">
          <CardContent className="space-y-6">
            <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-chart-2" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
              <p className="text-muted-foreground">
                Your message has been received. I'll review your project details and get back to you 
                within 24 hours with a customized proposal.
              </p>
            </div>
            <div className="bg-card rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Expected response time: 12-24 hours</span>
              </div>
              <p className="text-xs text-muted-foreground">
                You'll receive an automated confirmation email shortly, followed by my personal response.
              </p>
            </div>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              data-testid="button-send-another"
            >
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-4">Contact</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with GoHighLevel? Fill out the form below 
            and I'll get back to you with a customized proposal within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Get In Touch</h3>
              <p className="text-muted-foreground">
                I'm always excited to discuss new GoHighLevel projects and help businesses 
                achieve their automation goals.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <div className="text-sm text-muted-foreground">daud@ghlexpert.com</div>
                  <div className="text-xs text-muted-foreground">Response within 24 hours</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">WhatsApp/Phone</div>
                  <div className="text-sm text-muted-foreground">Available on request</div>
                  <div className="text-xs text-muted-foreground">For urgent projects</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Live Chat</div>
                  <div className="text-sm text-muted-foreground">AI Assistant available 24/7</div>
                  <div className="text-xs text-muted-foreground">Bottom-right corner</div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">Quick Response Guarantee</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to project inquiries within 12 hours. For urgent requests, 
                please mention it in your message.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>
                  Tell me about your GoHighLevel project and I'll provide a detailed proposal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
                                data-testid="input-name"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="your@email.com" 
                                data-testid="input-email"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+1 (555) 123-4567" 
                                data-testid="input-phone"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your company" 
                                data-testid="input-company"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Project details */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-project-type">
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="ghl-setup">GHL Setup & Config</SelectItem>
                                <SelectItem value="custom-development">Custom Development</SelectItem>
                                <SelectItem value="automation">Marketing Automation</SelectItem>
                                <SelectItem value="integration">API Integration</SelectItem>
                                <SelectItem value="optimization">Process Optimization</SelectItem>
                                <SelectItem value="migration">Platform Migration</SelectItem>
                                <SelectItem value="consultation">Consultation</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget Range *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-budget">
                                  <SelectValue placeholder="Select budget" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="under-1k">Under $1,000</SelectItem>
                                <SelectItem value="1k-3k">$1,000 - $3,000</SelectItem>
                                <SelectItem value="3k-5k">$3,000 - $5,000</SelectItem>
                                <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                                <SelectItem value="10k-plus">$10,000+</SelectItem>
                                <SelectItem value="hourly">Hourly Rate ($40/hr)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="timeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Timeline *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-timeline">
                                  <SelectValue placeholder="Select timeline" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="asap">ASAP (Rush job)</SelectItem>
                                <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                                <SelectItem value="3-4-weeks">3-4 weeks</SelectItem>
                                <SelectItem value="1-2-months">1-2 months</SelectItem>
                                <SelectItem value="3-plus-months">3+ months</SelectItem>
                                <SelectItem value="flexible">Flexible</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Description *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your project requirements, current setup, goals, and any specific challenges you're facing..."
                              className="min-h-32"
                              data-testid="textarea-message"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit button */}
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full"
                      data-testid="button-submit-contact"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Project Details
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}