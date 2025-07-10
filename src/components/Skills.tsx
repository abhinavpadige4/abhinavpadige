import { 
  Code, Database, BarChart3, Cloud, Users, TrendingUp,
  Cpu, Globe, Layers, Server, GitBranch, Smartphone,
  Brain, Eye, PieChart, LineChart, Settings, Target
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Full-Stack Development",
      icon: Code,
      skills: [
        { name: "Java", icon: Cpu },
        { name: "Python", icon: Code },
        { name: "C", icon: Cpu },
        { name: "JavaScript (ES6+)", icon: Globe },
        { name: "React.js", icon: Layers },
        { name: "Next.js", icon: Layers },
        { name: "Django", icon: Server },
        { name: "Flask", icon: Server },
        { name: "Spring Boot", icon: Server },
        { name: "RESTful APIs", icon: Globe },
        { name: "Tailwind CSS", icon: Smartphone }
      ]
    },
    {
      title: "Data Engineering & AI/ML",
      icon: Brain,
      skills: [
        { name: "SQL", icon: Database },
        { name: "MySQL", icon: Database },
        { name: "MongoDB", icon: Database },
        { name: "Pandas", icon: BarChart3 },
        { name: "NumPy", icon: BarChart3 },
        { name: "OpenCV", icon: Eye },
        { name: "TensorFlow", icon: Brain },
        { name: "Keras", icon: Brain },
        { name: "Computer Vision", icon: Eye },
        { name: "Machine Learning", icon: Brain },
        { name: "Predictive Analytics", icon: TrendingUp }
      ]
    },
    {
      title: "Data Visualization & BI",
      icon: PieChart,
      skills: [
        { name: "Power BI", icon: BarChart3 },
        { name: "Tableau", icon: BarChart3 },
        { name: "Matplotlib", icon: LineChart },
        { name: "Seaborn", icon: LineChart },
        { name: "Dashboard Development", icon: PieChart },
        { name: "Business Intelligence", icon: TrendingUp }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "Docker", icon: Cloud },
        { name: "Jenkins", icon: Settings },
        { name: "CI/CD Pipelines", icon: GitBranch },
        { name: "Git Version Control", icon: GitBranch },
        { name: "GitHub Actions", icon: GitBranch },
        { name: "Kubernetes", icon: Cloud },
        { name: "Microservices Architecture", icon: Server }
      ]
    },
    {
      title: "Agile & Product Management",
      icon: Users,
      skills: [
        { name: "JIRA", icon: Target },
        { name: "Scrum", icon: Users },
        { name: "Agile Methodologies", icon: Users },
        { name: "Product Lifecycle Management", icon: Target },
        { name: "Requirement Analysis", icon: Target },
        { name: "Stakeholder Management", icon: Users }
      ]
    },
    {
      title: "Business & Analytics",
      icon: TrendingUp,
      skills: [
        { name: "Data Analysis", icon: BarChart3 },
        { name: "Business Analysis", icon: TrendingUp },
        { name: "Market Research", icon: Target },
        { name: "Client Acquisition", icon: Users },
        { name: "Freelance Project Management", icon: Target },
        { name: "SEO Fundamentals", icon: Globe }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, data science, and DevOps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <div 
                key={index}
                className="group bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <CategoryIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2 p-2 bg-background/30 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 group/skill"
                      >
                        <SkillIcon className="w-4 h-4 text-muted-foreground group-hover/skill:text-primary transition-colors duration-300" />
                        <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;