import { BackgroundLines } from '@/components/ui/background-lines';
import { EncryptedText } from '@/components/ui/encrypted-text';

const Hero = () => {
  return (
    <BackgroundLines className="min-h-screen flex items-center justify-center relative overflow-hidden">
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