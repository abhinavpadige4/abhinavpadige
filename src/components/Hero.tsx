import { BackgroundLines } from '@/components/ui/background-lines';
import { EncryptedText } from '@/components/ui/encrypted-text';
import profileHero from '@/assets/profile-hero.png';

const Hero = () => {
  return (
    <BackgroundLines className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6 w-full max-w-7xl">
        {/* Text side */}
        <div className="flex-1 text-center md:text-left">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wider"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <EncryptedText 
              text="Abhinav Padige" 
              className="text-foreground"
              revealDelayMs={100}
              encryptedClassName="text-muted-foreground/30"
              revealedClassName="text-foreground"
            />
          </h1>
        </div>
        {/* Image side */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl overflow-hidden border-2 border-foreground/10 shadow-2xl">
            <img 
              src={profileHero} 
              alt="Abhinav Padige" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
};

export default Hero;
