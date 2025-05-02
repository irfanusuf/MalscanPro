
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { ShieldAlert, Database, Bug, BellRing, Lock, Key, Info } from "lucide-react";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

const tools = [
  {
    id: "threat-prediction",
    name: "Threat Prediction",
    description: "Identify potential security threats before they materialize using advanced machine learning algorithms.",
    icon: ShieldAlert,
    requiresLogin: true,
    features: ["Decision Trees", "Logistic Regression", "Random Forest", "Neural Networks"],
    details: "Our flagship tool uses a combination of machine learning approaches to analyze network traffic and identify potential security threats. By examining patterns in connection data, it can predict attacks before they happen with high accuracy."
  },
  {
    id: "anomaly-detection",
    name: "Anomaly Detection",
    description: "Detect unusual patterns in your network traffic that may indicate security breaches.",
    icon: Database,
    requiresLogin: true,
    features: ["Statistical Analysis", "Behavior Modeling", "Pattern Recognition", "Real-time Alerts"],
    details: "The Anomaly Detection tool continuously monitors your network traffic to establish baseline patterns of normal behavior. When deviations from these patterns occur, it flags them as potential security incidents for further investigation."
  },
  {
    id: "incident-response",
    name: "Incident Response",
    description: "Automate your security incident response process to minimize damage and recovery time.",
    icon: Bug,
    requiresLogin: true,
    features: ["Automated Containment", "Recovery Workflows", "Forensic Analysis", "Post-incident Reporting"],
    details: "When security incidents are detected, our Incident Response tool automatically initiates containment procedures to limit the impact. It guides security teams through the recovery process and provides detailed forensic analysis."
  },
  {
    id: "security-intelligence",
    name: "Security Intelligence",
    description: "Gain insights into your security posture with comprehensive reports and analytics.",
    icon: BellRing,
    requiresLogin: false,
    features: ["Threat Landscape Analysis", "Risk Assessment", "Vulnerability Management", "Compliance Monitoring"],
    details: "Our Security Intelligence tool aggregates data from multiple sources to provide a comprehensive view of your security posture. It identifies potential vulnerabilities and recommends mitigation strategies based on current threat intelligence."
  }
];

const Tools = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <div className="flex-1">
        <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-cyber-primary to-background">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Security <span className="gradient-text">Tools</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
              Our comprehensive suite of cybersecurity tools helps organizations predict, prevent, and respond to security threats.
            </p>
            
            <Tabs defaultValue="all" className="max-w-lg mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all" onClick={() => setActiveTab("all")}>All Tools</TabsTrigger>
                <TabsTrigger value="prediction" onClick={() => setActiveTab("prediction")}>Prediction</TabsTrigger>
                <TabsTrigger value="response" onClick={() => setActiveTab("response")}>Response</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </section>
        
        <section className="py-12 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {tools
                .filter(tool => 
                  activeTab === "all" || 
                  (activeTab === "prediction" && (tool.id === "threat-prediction" || tool.id === "anomaly-detection")) ||
                  (activeTab === "response" && (tool.id === "incident-response" || tool.id === "security-intelligence"))
                )
                .map((tool) => (
                  <div key={tool.id} className="cyber-card cyber-card-glow">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <tool.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">{tool.name}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{tool.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm uppercase text-muted-foreground font-semibold mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {tool.features.map((feature, index) => (
                          <div key={index} className="bg-secondary/30 p-3 rounded-md text-sm">
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-6">{tool.details}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to={tool.requiresLogin ? "/login" : `/tools/${tool.id}`}>
                        <Button className="gap-2">
                          {tool.requiresLogin ? (
                            <>
                              <Lock className="w-4 h-4" />
                              Login To Access
                            </>
                          ) : (
                            <>
                              <Key className="w-4 h-4" />
                              Try Now
                            </>
                          )}
                        </Button>
                      </Link>
                      <Link to={`/tools/${tool.id}`}>
                        <Button variant="outline" className="gap-2">
                          <Info className="w-4 h-4" />
                          Learn More
                        </Button>
                      </Link>
                    </div>
                    
                    {tool.requiresLogin && (
                      <p className="text-xs text-muted-foreground mt-4">
                        This tool requires authentication. Please log in or register to access.
                      </p>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </section>
        
        <section className="py-12 px-6 md:px-10 bg-cyber-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Custom Security <span className="gradient-text">Solutions?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Our team can develop tailored security tools to address your specific cybersecurity challenges.
            </p>
            <Link to="/contact">
              <Button size="lg">Contact Our Team</Button>
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Tools;
