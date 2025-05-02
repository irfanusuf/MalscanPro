
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section className="py-20 px-6 md:px-10 bg-cyber-primary" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Advanced <span className="gradient-text">Security?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contact our team of security experts for personalized solutions tailored to your organization's needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="cyber-card cyber-card-glow">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="bg-secondary/30"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Mail"
                    className="bg-secondary/30"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Organization"
                  className="bg-secondary/30"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your security needs..."
                  className="bg-secondary/30 min-h-[120px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="cyber-card">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a 
                      href="mailto:contact@securehorizon.com" 
                      className="text-muted-foreground hover:text-primary"
                    >
                      contact@malscanpro.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a 
                      href="tel:+15551234567" 
                      className="text-muted-foreground hover:text-primary"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                {/* <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <p className="text-muted-foreground">
                      123 Security Street<br />
                      Cyber City, CS 12345
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="cyber-card">
              <h3 className="text-xl font-semibold mb-4">Enterprise Support</h3>
              <p className="text-muted-foreground mb-4">
                For enterprise-level security solutions and dedicated support, contact our specialized team.
              </p>
              <Button variant="outline" className="w-full">
                Enterprise Solutions
              </Button>
            </div>
            <div className="cyber-card bg-gradient-to-br from-primary/20 to-transparent">
              <h3 className="text-xl font-semibold mb-2">Emergency Response</h3>
              <p className="text-muted-foreground mb-3">
                Experiencing a security incident? Contact our 24/7 emergency response team immediately.
              </p>
              <div className="flex items-center justify-center gap-2 bg-destructive/20 p-3 rounded-md">
                <Phone className="w-5 h-5 text-destructive" />
                <span className="font-semibold text-destructive">+1 (555) 911-0000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
