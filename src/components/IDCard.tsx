import { motion, useScroll, useTransform } from 'motion/react';
import mydp from '@/assets/mydp.jpg';

const IDCard = () => {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 400], [0, 18]);
  const y = useTransform(scrollY, [0, 400], [0, 60]);

  return (
    <div className="pointer-events-none absolute top-0 left-2 sm:left-4 z-20 hidden md:block scale-90 origin-top-left">
      {/* Strap */}
      <div className="relative mx-auto w-[8px] h-24 bg-gradient-to-b from-foreground/80 to-foreground/60 rounded-b-sm shadow-md" />
      {/* Clip */}
      <div className="relative mx-auto -mt-1 w-9 h-3 bg-muted-foreground/60 rounded-sm shadow" />

      <motion.div
        className="origin-top mt-1"
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '50% -16px', rotate, y }}
      >
        <div className="w-40 rounded-2xl bg-neutral-900 text-neutral-100 border border-neutral-800 shadow-2xl overflow-hidden">
          <div className="px-4 pt-4">
            <div
              className="text-2xl tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              AP
            </div>
            <p
              className="text-[11px] italic text-neutral-300 leading-snug mt-1.5"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Building systems,
              <br />
              shipping ideas,
              <br />
              crafting AI.
            </p>
          </div>
          <div className="flex justify-center pt-3 pb-4">
            <div className="w-20 h-20 rounded-full bg-neutral-800 border-2 border-neutral-700 overflow-hidden">
              <img
                src={mydp}
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