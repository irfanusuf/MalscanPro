
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ShieldAlert, User } from 'lucide-react';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 px-6 md:px-10 flex items-center justify-between relative z-50">
      <Link to="/" className="flex items-center gap-2">
        <ShieldAlert className="w-8 h-8 text-primary" />
        <span className="text-xl font-bold gradient-text">MalScanPro</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
          Home
        </Link>
        <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
          About Us
        </Link>
        <Link to="/tools" className="text-foreground/80 hover:text-foreground transition-colors">
          Tools
        </Link>
        <Link to="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
          Contact
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-3">
        <Link to="/login">
          <Button variant="outline" className="gap-2">
            <User size={16} />
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
      </div>

      {/* Mobile menu button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? (
          <X className="h-6 w-6 text-foreground" />
        ) : (
          <Menu className="h-6 w-6 text-foreground" />
        )}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 md:hidden flex flex-col gap-4">
          <Link to="/" className="text-foreground/80 hover:text-foreground py-2" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground py-2" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to="/tools" className="text-foreground/80 hover:text-foreground py-2" onClick={() => setIsOpen(false)}>
            Tools
          </Link>
          <Link to="/contact" className="text-foreground/80 hover:text-foreground py-2" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <div className="flex flex-col gap-3 pt-2">
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full gap-2">
                <User size={16} />
                Login
              </Button>
            </Link>
            <Link to="/register" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Register</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
