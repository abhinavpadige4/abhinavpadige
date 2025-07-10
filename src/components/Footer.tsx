import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © Abhinav Padige 2025 — Built with 
            <Heart className="w-4 h-4 text-primary fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;