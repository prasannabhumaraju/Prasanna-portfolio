import { GraduationCap, Laptop, Rocket } from "lucide-react";

const About = () => {
  const milestones = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Built strong foundation in computer science and programming",
    },
    {
      icon: Laptop,
      title: "Development",
      description: "Mastered full-stack development with Python and modern frameworks",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Exploring AI and building scalable, intelligent solutions",
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-center text-muted-foreground leading-relaxed">
           I’m a  Developer passionate about writing clean, scalable, and efficient code. 
           I enjoy building backend systems, APIs, and automation tools that make complex tasks simple and effective. 
           Currently, I’m exploring the world of Artificial Intelligence and Machine Learning, 
           learning how intelligent systems can enhance real-world applications. My journey in tech is driven by curiosity, 
           creativity, and a deep desire to keep learning and improving every day. 
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <milestone.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
              <p className="text-muted-foreground">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
