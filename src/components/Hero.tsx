import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url("/src/assets/hero-bg.jpg")',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Hi, I'm <span className="text-primary">Abhinav Padige</span> 👋
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-in [animation-delay:0.3s]">
            Full-Stack Developer | Data Scientist | DevOps Enthusiast
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm sm:text-base animate-fade-in [animation-delay:0.6s]">
          <a href="tel:+918639081837" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
            <Phone className="w-4 h-4" />
            +91 8639081837
          </a>
          <a href="mailto:abhinavpadige06@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
            <Mail className="w-4 h-4" />
            abhinavpadige06@gmail.com
          </a>
          <a href="https://github.com/abhinavpadige" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a href="https://linkedin.com/in/abhinavpadige" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-fade-in [animation-delay:0.9s]">
          <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transform hover:scale-105 transition-all duration-300" asChild>
            <a href="#projects">Let's Build Something Awesome</a>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary/50 hover:bg-primary/10 transform hover:scale-105 transition-all duration-300" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;