import { useEffect, useRef, useState } from "react";
import { Code2, Database, Server, Cpu } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Python", level: 95 },
        { name: "Django", level: 50 },
        { name: "RestAPI", level: 45 },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "SQL", level: 92 },
        { name: "MYSQL", level: 88 },
        { name: "PLSQL", level: 85 },
      ],
    },
    {
      title: "Frontend",
      icon: Code2,
      skills: [
        { name: "Html", level: 90 },
        { name: "CSS", level: 85 },
        { name: "Java Script", level: 88 },
      ],
    },
    
    
    {
      title: " Dev Tools",
      icon: Cpu,
      skills: [
        { name: "GitHub", level: 83 },
        { name: "Git", level: 90 },
        { name: "VS Code", level: 86 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, end, duration]);

    return <span>{count}%</span>;
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm font-medium text-primary">
                        <AnimatedCounter end={skill.level} />
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${(categoryIndex * 0.1 + skillIndex * 0.1)}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
