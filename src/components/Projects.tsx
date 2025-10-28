import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Grosary Management System",
      description: "Full-stack e-commerce solution with Django and React, featuring real-time inventory management and secure payment processing.",
      image: "images/prj-1.jpg",
      technologies: ["Python", "Django", "React", "MySQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Tic Tac Toe Game",
      description: "A classic tic-tac-toe game built using HTML, CSS, and JavaScript. Player vs. Player mode available.",
      image: "images/prj-2.webp",
      technologies: ["Html","css","Java script"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
           Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
