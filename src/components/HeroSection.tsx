
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, ShieldAlert, Database, Bug, BellRing } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative py-20 px-6 md:px-10 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1f2c_1px,transparent_1px),linear-gradient(to_bottom,#1a1f2c_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/30 px-3 py-1 text-sm">
                <span className="animate-pulse-slow">●</span>
                <span>Next-Gen Security Intelligence</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Predict and <span className="gradient-text">Prevent</span> Security Threats
              </h1>
              <p className="text-lg text-muted-foreground">
                Harness the power of machine learning to identify, analyze, and mitigate cyber threats before they impact your systems.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="gap-2 text-md py-6">
                  <Shield className="w-5 h-5" />
                  Get Started
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="gap-2 text-md py-6">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative grid grid-cols-2 gap-4">
            <div className="cyber-card cyber-card-glow col-span-2 p-6 flex items-center gap-4 bg-gradient-to-br from-secondary/50 to-cyber-primary/50">
              <ShieldAlert className="w-10 h-10 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Threat Prediction</h3>
                <p className="text-muted-foreground text-sm">AI-powered analysis of potential security risks</p>
              </div>
            </div>
            
            <div className="cyber-card p-5">
              <Database className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-semibold">Anomaly Detection</h3>
              <p className="text-xs text-muted-foreground">Identify unusual patterns</p>
            </div>
            
            <div className="cyber-card p-5">
              <Bug className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-semibold">Incident Response</h3>
              <p className="text-xs text-muted-foreground">Automated mitigation</p>
            </div>
            
            <div className="cyber-card p-5">
              <BellRing className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-semibold">Security Intelligence</h3>
              <p className="text-xs text-muted-foreground">Real-time insights</p>
            </div>


            <div className="cyber-card bg-gradient-to-br from-primary/20 to-transparent p-5">
             <Shield className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-semibold">Secure Today</h3>
              <p className="text-xs text-muted-foreground">Enterprise-grade protection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
