
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Users, Award, TrendingUp, Server, Network } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <div className="flex-1">
        {/* Hero */}
        <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-cyber-primary to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/30 px-3 py-1 text-sm mb-5">
              <Shield className="w-4 h-4 text-primary" />
              <span>Our Mission</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Securing the Digital <span className="gradient-text">Future</span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-8">
              MalscanPro was founded with a clear vision: to democratize access to advanced 
              security intelligence and provide cutting-edge protection for organizations of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  Contact Us
                </Button>
              </Link>
              <Link to="/tools">
                <Button size="lg" variant="outline" className="gap-2">
                  Explore Tools
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
                {/* <p className="text-muted-foreground mb-4">
                  MalscanPro was founded in 2020 by a team of cybersecurity experts and data scientists 
                  who recognized that traditional security measures were becoming increasingly ineffective 
                  against sophisticated attacks.
                </p> */}
                <p className="text-muted-foreground mb-4">
                  Our founding team had extensive experience working with Big companies and 
                  government agencies, witnessing firsthand how even well-resourced security teams struggled 
                  to keep pace with evolving threats.
                </p>
                <p className="text-muted-foreground">
                  We set out to build a suite of tools that leverage machine learning and artificial intelligence 
                  to predict potential security threats before they materialize, providing organizations with the 
                  foresight they need to protect their critical assets.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="cyber-card bg-gradient-to-br from-primary/20 to-transparent p-6">
                  <TrendingUp className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-muted-foreground text-sm">
                    Pioneering predictive security analytics through cutting-edge machine learning models
                  </p>
                </div>
                <div className="cyber-card p-6">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Protection</h3>
                  <p className="text-muted-foreground text-sm">
                    Providing comprehensive security solutions that safeguard digital infrastructure
                  </p>
                </div>
                <div className="cyber-card p-6">
                  <Server className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                  <p className="text-muted-foreground text-sm">
                    Ensuring consistent and dependable security monitoring and response
                  </p>
                </div>
                <div className="cyber-card p-6">
                  <Award className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                  <p className="text-muted-foreground text-sm">
                    Committing to the highest standards of security practice and service delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-20 px-6 md:px-10 bg-cyber-primary">
          <div className="max-w-6xl mx-auto">
            {/* <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Expert <span className="gradient-text">Team</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the security experts and data scientists behind our advanced security tools
              </p>
            </div>
             */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Dr. Alex Chen",
                  role: "Chief Executive Officer",
                  bio: "Former head of cybersecurity at a Fortune 100 company with 15+ years of experience.",
                },
                {
                  name: "Sarah Williams",
                  role: "Chief Technology Officer",
                  bio: "PhD in Machine Learning with expertise in applying AI to security challenges.",
                },
                {
                  name: "Michael Rodriguez",
                  role: "Chief Security Officer",
                  bio: "Former intelligence officer specialized in cyber defense and threat analysis.",
                },
                {
                  name: "Priya Patel",
                  role: "Lead Data Scientist",
                  bio: "Expert in neural networks and anomaly detection with multiple patents.",
                },
              ].map((member, index) => (
                <div key={index} className="cyber-card text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div> */}
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Our team includes over 30 security experts, data scientists, and software engineers dedicated to developing cutting-edge security solutions.
              </p>
              <Link to="/contact">
                <Button variant="outline">Join Our Team</Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Our Approach */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="gradient-text">Approach</span>
                </h2>
                <p className="text-muted-foreground mb-4">
                  At SecureHorizon, we believe that effective security requires a proactive, rather than reactive, approach. Our methodology centers on three key principles:
                </p>
                
                <div className="space-y-6 mt-8">
                  <div className="flex gap-4">
                    <div className="p-2 bg-primary/10 rounded-full h-fit">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Prediction</h3>
                      <p className="text-muted-foreground">
                        Using advanced machine learning models to anticipate potential security threats before they manifest
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="p-2 bg-primary/10 rounded-full h-fit">
                      <Network className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Prevention</h3>
                      <p className="text-muted-foreground">
                        Implementing automated safeguards that respond to potential threats in real-time
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="p-2 bg-primary/10 rounded-full h-fit">
                      <Server className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Protection</h3>
                      <p className="text-muted-foreground">
                        Providing comprehensive security coverage across all digital assets and infrastructure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="cyber-card cyber-card-glow p-8">
                <h3 className="text-2xl font-bold mb-6">Our Technology Stack</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Machine Learning Models</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-secondary/30 p-3 rounded-md text-sm">Decision Trees</div>
                      <div className="bg-secondary/30 p-3 rounded-md text-sm">Random Forest</div>
                      <div className="bg-secondary/30 p-3 rounded-md text-sm">Neural Networks</div>
                      <div className="bg-secondary/30 p-3 rounded-md text-sm">LSTM Networks</div>
                      <div className="bg-secondary/30 p-3 rounded-md text-sm">Logistic Regression</div>
                      <div className="bg-secondary/30 p-3 rounded-md text-sm">CNN</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Analysis Metrics</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-secondary/30 p-3 rounded-md text-sm">Service Count</div>
                      <div className="bg-secondary/30 p-3 rounded-md text-sm">Host Count</div>
                      <div className="bg-secondary/30 p-3 rounded-md text-sm">Error Rates</div>
                      <div className="bg-secondary/30 p-3 rounded-md text-sm">Traffic Patterns</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-20 px-6 md:px-10 bg-gradient-to-t from-cyber-primary to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your <span className="gradient-text">Digital Future?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Take the first step towards proactive security with our advanced threat prediction and prevention tools.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="gap-2">
                  Get Started
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="gap-2">
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
