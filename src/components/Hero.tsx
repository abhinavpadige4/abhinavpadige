import { BackgroundLines } from '@/components/ui/background-lines';
import { EncryptedText } from '@/components/ui/encrypted-text';
import profileHero from '@/assets/profile-hero.png';

const Hero = () => {
  return (
    <BackgroundLines className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background profile image */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.75]"
        style={{
          backgroundImage: `url(${profileHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          filter: 'blur(2px)',
        }}
      />
      <div className="relative z-10 text-center">
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
