import { TerrainShader } from '@/components/ui/terrain-shader';
import { EncryptedText } from '@/components/ui/encrypted-text';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Terrain Shader Background */}
      <TerrainShader className="opacity-80" />
      
      {/* Content overlay */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight">
          <EncryptedText 
            text="Abhinav Padige" 
            className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            revealDelayMs={100}
            encryptedClassName="text-white/30"
            revealedClassName="text-white"
          />
        </h1>
      </div>
      
      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none z-[5]" />
    </div>
  );
};

export default Hero;