import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Experience = () => {
  const experiences = [
    {
      position: "Founder",
      company: "dofreelancingwithus",
      location: "Hyderabad",
      period: "2025-Present",
      links: {
        github: "https://github.com/dofreelancingwithus/dofreelancingwithus",
        demo: "https://dofreelancingwithus.vercel.app/"
      },
      achievements: [
        "Spearheaded the development and scaling of a freelancing platform, resulting in a 200% revenue growth through the successful delivery of 5+ diverse client projects across web development, AI, and automation domains.",
        "Directed comprehensive end-to-end client management, including requirement analysis, proposal drafting, iterative feedback cycles, and final delivery—leading to a 95%+ client satisfaction rate.",
        "Conceptualized, designed, and deployed 3+ professional-grade portfolio and business websites, contributing to a 30% boost in client digital engagement and lead generation.",
        "Implemented agile project management using JIRA with bi-weekly sprint cycles, reducing project delays by 40% and enhancing delivery timelines.",
        "Provided mentorship and hands-on support to 4 junior developers, leading to a 35% improvement in code quality and consistency through rigorous code reviews and best practice implementation."
      ]
    },
    {
      position: "Data Science Intern (Virtual)",
      company: "Altair – Data Science Master Internship",
      location: "Remote",
      period: "2025",
      achievements: [
        "Completed a 10-week structured internship, covering 10+ core modules in data science and machine learning, including supervised/unsupervised learning, model deployment, and data visualization."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building impactful solutions and leading teams in the tech industry
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-primary">{exp.position}</h3>
                      <h4 className="text-lg font-semibold text-foreground">{exp.company}</h4>
                      
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>

                      {exp.links && (
                        <div className="flex gap-2 mt-3">
                          <Button variant="outline" size="sm" asChild>
                            <a href={exp.links.github} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              GitHub
                            </a>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a href={exp.links.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;