
import { ShieldAlert, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cyber-primary border-t border-border py-10 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold">MalScanPro</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Intelligent cybersecurity solutions powered by advanced machine learning algorithms.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/tools" className="text-muted-foreground hover:text-foreground text-sm">Security Tools</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tools/threat-prediction" className="text-muted-foreground hover:text-foreground text-sm">Threat Prediction</Link>
              </li>
              <li>
                <Link to="/tools" className="text-muted-foreground hover:text-foreground text-sm">Anomaly Detection</Link>
              </li>
              <li>
                <Link to="/tools" className="text-muted-foreground hover:text-foreground text-sm">Incident Response</Link>
              </li>
              <li>
                <Link to="/tools" className="text-muted-foreground hover:text-foreground text-sm">Security Intelligence</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex gap-2 items-start">
                <Mail className="w-4 h-4 mt-1 text-primary" />
                <span className="text-muted-foreground text-sm">contact@malscanpro.com</span>
              </li>
              <li className="flex gap-2 items-start">
                <Phone className="w-4 h-4 mt-1 text-primary" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </li>
              {/* <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 mt-1 text-primary" />
                <span className="text-muted-foreground text-sm">
                  123 Security Street, Cyber City, CS 12345
                </span>
              </li> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MalScanPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
