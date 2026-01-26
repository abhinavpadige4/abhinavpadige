import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

const Projects = () => {
  const projects = [
    {
      title: "Multi-Modal Mental Health Assessment",
      status: "Ongoing",
      techStack: ["Spring Boot", "Flask", "Supabase", "JWT", "WebSockets", "LLM"],
      highlights: [
        "Designed a secure doctor–patient consultation platform integrating real-time chat, video, and AI-driven mental health assessment.",
        "Enables clinicians to receive automated insights and risk indicators, reducing manual assessment time.",
        "Future scope includes multimodal emotion fusion and predictive relapse detection."
      ],
      links: {
        github: "https://github.com/abhinavpadige4/mindcare",
        demo: null
      }
    },
    {
      title: "AI WebTest Agent",
      status: "Ongoing",
      techStack: ["Python", "Playwright", "LLM", "CI/CD"],
      highlights: [
        "Developed an autonomous AI agent to generate, execute, and summarize web test cases.",
        "Implemented using Python, Playwright, and LLM-based orchestration.",
        "AI-driven test automation can reduce QA costs by 40–60%."
      ],
      links: {
        github: "https://github.com/abhinavpadige4/ai_agent_infosys",
        demo: null
      }
    },
    {
      title: "Mood-Based Playlist Generator",
      status: "2025",
      techStack: ["React", "Flask", "Spring Boot", "OpenCV", "Keras", "MySQL"],
      highlights: [
        "Built a full-stack application that recommends music using real-time emotion detection.",
        "Achieved 75%+ emotion detection accuracy through facial recognition and text sentiment analysis.",
        "Future scope includes voice-based emotion analysis and Spotify integration."
      ],
      links: {
        github: "https://github.com/abhinavpadige4/mood_playlist",
        demo: "https://sync-mb.vercel.app/"
      }
    },
    {
      title: "AcadExchange – Student Marketplace",
      status: "2024",
      techStack: ["React.js", "Supabase", "Clerk", "Tailwind CSS"],
      highlights: [
        "Developed a student marketplace for buying and selling academic resources.",
        "Enabled real-time listings and secure peer-to-peer transactions.",
        "Future enhancements include AI-based pricing and fraud detection."
      ],
      links: {
        github: "https://github.com/abhinavpadige4",
        demo: "https://acadexchange.vercel.app/"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions showcasing full-stack development and AI/ML expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/30 hover:border-border transition-all duration-300 group"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-foreground/80 transition-colors">
                    {project.title}
                  </h3>
                  <span className={`text-xs px-3 py-1 rounded-full border ${
                    project.status === 'Ongoing' 
                      ? 'border-green-500/30 text-green-400 bg-green-500/10' 
                      : 'border-border/50 text-muted-foreground'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted/30 text-muted-foreground rounded text-xs border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 mb-4">
                  <Button variant="outline" size="sm" asChild className="border-border/50 hover:border-border">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      GitHub
                    </a>
                  </Button>
                  {project.links.demo && (
                    <Button variant="outline" size="sm" asChild className="border-border/50 hover:border-border">
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                {project.highlights.map((highlight, highlightIndex) => (
                  <p key={highlightIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-foreground/50 mt-1.5">•</span>
                    <span>{highlight}</span>
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
