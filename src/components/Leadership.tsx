import { Award, Trophy, Users } from 'lucide-react';

const Leadership = () => {
  const achievements = [
    {
      icon: Users,
      title: "Executive Committee Member",
      organization: "Innovation Club & IIC, CVR College of Engineering",
      year: "2025",
      description: "Leading innovation initiatives and driving technological advancement within the college community"
    },
    {
      icon: Trophy,
      title: "NASA Space Settlement Project",
      organization: "NASA Conference, USA",
      year: "2024",
      description: "Led a 9-member team for NASA Space Settlement Project and presented at NASA Conference, USA"
    },
    {
      icon: Award,
      title: "Top 50",
      organization: "JNTUH Innovation Challenge",
      year: "2024",
      description: "Secured top 50 position in the prestigious JNTUH Innovation Challenge among thousands of participants"
    }
  ];

  return (
    <section id="leadership" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Leadership & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition for leadership excellence and innovative contributions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group text-center"
            >
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              <div className="mb-3">
                <h3 className="text-lg font-bold text-primary mb-1">
                  {achievement.title}
                </h3>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {achievement.organization}
                </h4>
                <span className="text-xs text-muted-foreground font-medium">
                  {achievement.year}
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;