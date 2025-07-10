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
          <img 
            src="/lovable-uploads/3854074e-1b5f-4671-96ef-f5e5b45c9375.png" 
            alt="Abhinav Padige Logo" 
            className="w-24 h-24 mx-auto mb-6 animate-pulse"
          />
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
            Hi, I'm <span className="text-primary">Abhinav Padige</span> 👋
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8">
            Full-Stack Developer | Data Scientist | DevOps Enthusiast
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm sm:text-base">
          <a href="tel:+918639081837" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            +91 8639081837
          </a>
          <a href="mailto:abhinavpadige06@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            abhinavpadige06@gmail.com
          </a>
          <a href="https://github.com/abhinavpadige" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a href="https://linkedin.com/in/abhinavpadige" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <a href="#projects">Let's Build Something Awesome</a>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;