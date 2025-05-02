
import { Shield, Users, Server, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-10" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/30 px-3 py-1 text-sm mb-5">
              <Shield className="w-4 h-4 text-primary" />
              <span>About SecureHorizon</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Protecting Your Digital <span className="gradient-text">Infrastructure</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              SecureHorizon was founded with a clear mission: to make advanced security intelligence and protection 
              accessible to organizations of all sizes. Our team of security experts and data scientists has developed 
              cutting-edge tools that leverage the power of machine learning to predict, identify, and mitigate cyber threats.
            </p>
            <p className="text-muted-foreground mb-8">
              With the increasing sophistication of cyber attacks, traditional security measures are no longer sufficient. 
              Our predictive approach to security allows organizations to stay one step ahead of potential threats, 
              protecting their valuable data and infrastructure from compromise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button className="gap-2">
                  <Users className="w-4 h-4" />
                  Our Team
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="gap-2">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="cyber-card bg-gradient-to-br from-primary/20 to-transparent">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">
                Cybersecurity specialists with decades of combined experience in threat detection and mitigation.
              </p>
            </div>
            
            <div className="cyber-card">
              <Server className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced ML Models</h3>
              <p className="text-sm text-muted-foreground">
                Our tools employ state-of-the-art machine learning algorithms to identify potential threats.
              </p>
            </div>
            
            <div className="cyber-card">
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proactive Defense</h3>
              <p className="text-sm text-muted-foreground">
                Stop attacks before they happen with our predictive security approach.
              </p>
            </div>
            
            <div className="cyber-card">
              <Network className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Coverage</h3>
              <p className="text-sm text-muted-foreground">
                End-to-end protection for your entire digital infrastructure and network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
