import { Briefcase, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const Experience = () => {
  const experiences = [
    {
      position: "Founder",
      company: "Dofreelancingwithus",
      location: "Hyderabad",
      period: "2025 - Present",
      links: {
        website: "https://dofreelancingwithus.vercel.app/"
      },
      achievements: [
        "Founded a freelance software agency delivering 3+ production-grade applications across web and AI domains.",
        "Led end-to-end delivery for 5+ client features, from requirement analysis to deployment.",
        "Guided a 4-member development team and managed multiple deployments, improving delivery efficiency by 30%+."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building impactful solutions and leading development teams
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-border/30 hover:border-border transition-colors duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-foreground border-4 border-background"></div>
              
              <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/30 hover:border-border transition-all duration-300 mb-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      {exp.position}
                    </h3>
                    <p className="text-muted-foreground">{exp.company} | {exp.location}</p>
                  </div>
                  <span className="text-sm text-muted-foreground border border-border/50 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>

                {/* Links */}
                <div className="flex gap-3 mb-4">
                  <a 
                    href={exp.links.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Website
                  </a>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-foreground/50 mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;