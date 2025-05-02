
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <div className="flex-1">
        <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-cyber-primary to-background">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our team of security experts is ready to assist with your cybersecurity needs.
              Reach out to us for personalized security solutions.
            </p>
          </div>
        </section>
        
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
