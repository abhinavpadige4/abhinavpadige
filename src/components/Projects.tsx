import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Mood-Based Playlist Generator",
      year: "2025",
      techStack: ["React", "Flask", "Spring Boot", "OpenCV", "Keras", "MySQL"],
      highlights: [
        "Developed a full-stack web application that intelligently recommends songs based on a user's current mood, detected through either text sentiment analysis or facial emotion recognition using deep learning.",
        "Attained 95%+ emotion detection accuracy by preprocessing and optimizing facial emotion data for improved model predictions.",
        "Designed a highly responsive and interactive user interface that encourages continuous user interaction and provides instant YouTube-based song playback tailored to real-time mood shifts.",
        "Seamlessly integrated a React frontend with a Flask-based API for facial emotion detection, and a Spring Boot backend for serving mood-based music suggestions from a MySQL database.",
        "Ensured a distraction-free listening experience by embedding YouTube videos using a custom iframe approach, enabling 100% ad-free playback."
      ],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Screamium Ice Creams",
      year: "2024",
      techStack: ["Django", "Python", "HTML/CSS", "Bootstrap"],
      highlights: [
        "Built and deployed a feature-rich ice cream eCommerce platform capable of handling 1,000+ monthly visitors and processing 100+ product orders per month, supporting business scalability.",
        "Enhanced site performance by 40% by leveraging efficient server-side practices and query optimization.",
        "Applied Redis caching mechanisms to reduce server response times, resulting in a 40% improvement in page load speed (from 3.2s to 1.9s), significantly boosting user experience.",
        "Executed a complete mobile-first UI redesign using Bootstrap, leading to a 25% increase in mobile user conversions and overall retention."
      ],
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that showcase technical expertise and real-world impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground font-medium">
                    {project.year}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 mb-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-bold mt-0.5 text-xs">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;