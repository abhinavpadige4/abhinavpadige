const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Full-Stack Development",
      skills: [
        "Java", "Python", "C", "JavaScript (ES6+)", "React.js", "Next.js", 
        "Django", "Flask", "Spring Boot", "RESTful APIs", "Tailwind CSS"
      ]
    },
    {
      title: "Data Engineering & AI/ML",
      skills: [
        "SQL", "MySQL", "MongoDB", "Pandas", "NumPy", "OpenCV", "TensorFlow", 
        "Keras", "Computer Vision", "Machine Learning", "Predictive Analytics"
      ]
    },
    {
      title: "Data Visualization & BI",
      skills: [
        "Power BI", "Tableau", "Matplotlib", "Seaborn", "Dashboard Development", "Business Intelligence"
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "Docker", "Jenkins", "CI/CD Pipelines", "Git Version Control", 
        "GitHub Actions", "Kubernetes", "Microservices Architecture"
      ]
    },
    {
      title: "Agile & Product Management",
      skills: [
        "JIRA", "Scrum", "Agile Methodologies", "Product Lifecycle Management", 
        "Requirement Analysis", "Stakeholder Management"
      ]
    },
    {
      title: "Business & Analytics",
      skills: [
        "Data Analysis", "Business Analysis", "Market Research", "Client Acquisition", 
        "Freelance Project Management", "SEO Fundamentals"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, data science, and DevOps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
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