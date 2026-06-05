import { motion } from 'motion/react';

const IDCard = () => {
  return (
    <div className="pointer-events-none fixed top-0 left-4 sm:left-10 lg:left-16 z-20 hidden md:block">
      {/* Strap */}
      <div className="relative mx-auto w-[10px] h-32 bg-gradient-to-b from-foreground/80 to-foreground/60 rounded-b-sm shadow-md" />
      {/* Clip */}
      <div className="relative mx-auto -mt-1 w-10 h-3 bg-muted-foreground/60 rounded-sm shadow" />

      <motion.div
        className="origin-top mt-1"
        initial={{ rotate: -8 }}
        animate={{ rotate: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '50% -20px' }}
      >
        <div className="w-44 sm:w-52 rounded-2xl bg-neutral-900 text-neutral-100 border border-neutral-800 shadow-2xl overflow-hidden">
          <div className="px-5 pt-5">
            <div
              className="text-3xl tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              AP
            </div>
            <p
              className="text-xs italic text-neutral-300 leading-snug mt-2"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Building systems,
              <br />
              shipping ideas,
              <br />
              crafting AI.
            </p>
          </div>
          <div className="flex justify-center pt-4 pb-5">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 border-2 border-neutral-700 overflow-hidden">
              <img
                src="https://avatars.githubusercontent.com/u/abhinavpadige4"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
                alt="Abhinav Padige"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IDCard;