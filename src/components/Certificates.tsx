import { Award } from "lucide-react";
import cert1 from "@/assets/cert-1.jpg";
import cert2 from "@/assets/cert-2.jpg";
import cert3 from "@/assets/cert-3.jpg";

const Certificates = () => {
  const certificates = [
    {
      title: "Python Full Stack Developer ",
      organization: "Vcube Software solutions",
      date: "2025",
      image: cert1,
    },
    {
      title: "Advanced Machine Learning",
      organization: "edX",
      date: "2024",
      image: cert2,
    },
    {
      title: "Full Stack Development",
      organization: "Udacity",
      date: "2023",
      image: cert3,
    },
  ];

  return (
    <section id="certificates" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Certificates & Achievements
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.organization}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
