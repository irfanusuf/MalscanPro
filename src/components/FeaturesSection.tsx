
import { ShieldCheck, Bug, Network, TrendingUp, MonitorCheck, Server } from "lucide-react";

const features = [
  {
    title: "Threat Identification & Mitigation",
    description:
      "Advanced algorithms detect and neutralize potential security threats before they can cause harm to your systems.",
    icon: ShieldCheck,
  },
  {
    title: "Predictive Security Intelligence",
    description:
      "Leverage AI to anticipate security vulnerabilities and prevent breaches before they occur.",
    icon: TrendingUp,
  },
  {
    title: "Automated Incident Response",
    description:
      "When threats are detected, our system automatically initiates the appropriate defense mechanisms.",
    icon: Server,
  },
  {
    title: "Anomaly Detection & Prevention",
    description:
      "Our machine learning models identify unusual patterns that indicate potential security threats.",
    icon: Bug,
  },
  {
    title: "Network Security Analysis",
    description:
      "Comprehensive scanning and monitoring of your network infrastructure for vulnerabilities.",
    icon: Network,
  },
  {
    title: "Real-time Security Monitoring",
    description:
      "24/7 surveillance of your systems with immediate alerts for suspicious activity.",
    icon: MonitorCheck,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-cyber-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced Security <span className="gradient-text">Features</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive suite of security tools provides everything you need to keep your digital assets protected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="cyber-card group">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
