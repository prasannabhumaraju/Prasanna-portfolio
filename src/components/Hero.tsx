import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Python Developer", "Database Developer", "AI Enthusiast","MYSQL Developer","Backend Developer","Full-Stack Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Prasanna_bhumaraju_Resume.pdf'; // path from public folder
  link.download = 'Prasanna_bhumaraju_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};






  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Prasanna Bhumaraju
        </h1>
        
        <div className="h-12 mb-4">
          <p className="text-xl md:text-2xl text-muted-foreground animate-slide-up">
            {roles[currentRole]}
          </p>
        </div>

        <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-8">
          Python Developer who loves transforming complex problems into simple, elegant solutions
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
          href="/Prasanna_bhumaraju_Resume.pdf"
          download="Prasanna_bhumaraju_Resume.pdf"
          >
            
          <Button variant="hero" size="lg">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          </a>


          <Button variant="outline-gradient" size="lg" onClick={scrollToContact}>
            Contact Me
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/prasannabhumaraju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/prasanna-bhumaraju-95076b304"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:prasannabhumaraju1@gmail.com"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
