import { EncryptedText } from '@/components/ui/encrypted-text';
import MacWindow from '@/components/MacWindow';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl">
        <MacWindow title="~ / abhinav-padige — zsh" bodyClassName="p-8 sm:p-14">
          <div className="text-center space-y-6">
            <p className="text-sm sm:text-base text-muted-foreground font-mono">
              <span className="text-[hsl(142,70%,45%)]">$</span> whoami
            </p>
            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl italic tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
            >
              <EncryptedText
                text="Abhinav Padige"
                className="text-foreground"
                revealDelayMs={100}
                encryptedClassName="text-muted-foreground/30"
                revealedClassName="text-foreground"
              />
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {['Development', 'Systems', 'AI Products', 'Architecture'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-muted/60 border border-border text-xs sm:text-sm text-foreground/80 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </MacWindow>
      </div>
    </section>
  );
};

export default Hero;
