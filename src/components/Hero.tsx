import { BackgroundLines } from '@/components/ui/background-lines';
import { EncryptedText } from '@/components/ui/encrypted-text';
import profileHero from '@/assets/profile-hero.png';

const Hero = () => {
  return (
    <BackgroundLines className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-12">
        <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-muted-foreground/20 shadow-2xl shadow-primary/10">
          <img 
            src={profileHero} 
            alt="Abhinav Padige" 
            className="w-full h-full object-cover object-top"
          />
        </div>
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-wider"
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
    </BackgroundLines>
  );
};

export default Hero;
