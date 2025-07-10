import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B. Tech in Computer Science & Data Science",
      institution: "CVR College of Engineering (CVRCOE)",
      location: "Hyderabad",
      year: "2023",
      type: "Bachelor's Degree"
    },
    {
      degree: "B.Sc. in Data Science",
      institution: "IIT Madras",
      location: "Chennai",
      year: "2022",
      type: "Bachelor's Degree"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-primary">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation in computer science and data science from prestigious institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="mb-3">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      {edu.type}
                    </span>
                    <h3 className="text-lg font-bold text-primary mt-1">
                      {edu.degree}
                    </h3>
                    <h4 className="text-base font-semibold text-foreground">
                      {edu.institution}
                    </h4>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;