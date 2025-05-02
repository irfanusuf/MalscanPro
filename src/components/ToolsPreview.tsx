
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Database, Bug, BellRing } from "lucide-react";

const tools = [
  {
    id: "threat-prediction",
    name: "Threat Prediction",
    description: "Identify potential security threats before they materialize using advanced machine learning algorithms.",
    icon: ShieldAlert,
    requiresLogin: true,
    features: ["Decision Trees", "Logistic Regression", "Random Forest", "Neural Networks"]
  },
  {
    id: "anomaly-detection",
    name: "Anomaly Detection",
    description: "Detect unusual patterns in your network traffic that may indicate security breaches.",
    icon: Database,
    requiresLogin: true,
    features: ["Statistical Analysis", "Behavior Modeling", "Pattern Recognition", "Real-time Alerts"]
  },
  {
    id: "incident-response",
    name: "Incident Response",
    description: "Automate your security incident response process to minimize damage and recovery time.",
    icon: Bug,
    requiresLogin: true,
    features: ["Automated Containment", "Recovery Workflows", "Forensic Analysis", "Post-incident Reporting"]
  },
  {
    id: "security-intelligence",
    name: "Security Intelligence",
    description: "Gain insights into your security posture with comprehensive reports and analytics.",
    icon: BellRing,
    requiresLogin: false,
    features: ["Threat Landscape Analysis", "Risk Assessment", "Vulnerability Management", "Compliance Monitoring"]
  }
];

const ToolsPreview = () => {
  const [activeTab, setActiveTab] = useState("threat-prediction");
  
  const activeTool = tools.find(tool => tool.id === activeTab) || tools[0];

  return (
    <section className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Security <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive suite of security tools designed to protect your digital infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-2">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setActiveTab(tool.id)}
                className={`w-full p-4 rounded-lg text-left flex items-center gap-3 transition-all ${
                  activeTab === tool.id
                    ? "bg-secondary border-l-4 border-primary"
                    : "hover:bg-secondary/50"
                }`}
              >
                <tool.icon className={`w-5 h-5 ${activeTab === tool.id ? "text-primary" : "text-muted-foreground"}`} />
                <span className={`font-medium ${activeTab === tool.id ? "text-foreground" : "text-muted-foreground"}`}>
                  {tool.name}
                </span>
              </button>
            ))}
          </div>
          
          <div className="md:col-span-8">
            <div className="cyber-card h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <activeTool.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{activeTool.name}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{activeTool.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm uppercase text-muted-foreground font-semibold mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  {activeTool.features.map((feature, index) => (
                    <div key={index} className="bg-secondary/30 p-3 rounded-md text-sm">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={activeTool.requiresLogin ? "/login" : `/tools/${activeTool.id}`}>
                  <Button className="gap-2">
                    {activeTool.requiresLogin ? "Login To Access" : "Try Now"}
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline">Request Demo</Button>
                </Link>
              </div>
              
              {activeTool.requiresLogin && (
                <p className="text-sm text-muted-foreground mt-4">
                  This tool requires authentication. Please log in or register to access.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsPreview;
