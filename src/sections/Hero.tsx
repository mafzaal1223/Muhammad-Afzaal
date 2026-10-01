import { motion, type Variants } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import { personal } from '../data/portfolio';

const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const lineVariants: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: 0.75, ease: EASE },
  },
};




const headlineLines = ['BUILDING DIGITAL', 'EXPERIENCES', 'THAT WORK.'];

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0D0F0F] flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #F3EFE7 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* Copper accent line - top */}
      <motion.div
        className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-transparent to-[#C4875B] ml-12 lg:ml-24"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ transformOrigin: 'top' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen lg:min-h-0 lg:h-screen">

          {/* LEFT — Content */}
          <motion.div
            className="flex flex-col justify-center lg:pr-16 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="mb-6 lg:mb-8">
              <span className="font-body text-xs tracking-[0.3em] text-[#77736C] uppercase">
                App Developer / Web Developer
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-heading font-semibold text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] xl:text-[4.8rem] leading-[1.05] tracking-tight mb-6 lg:mb-8" aria-label="Building digital experiences that work.">
              {headlineLines.map((line, i) => (
                <span key={i} className="line-mask block">
                  <motion.span
                    className="block"
                    variants={lineVariants}
                    custom={i}
                  >
                    {line === 'THAT WORK.' ? (
                      <>
                        {'THAT '}
                        <span className="text-[#C4875B]">WORK.</span>
                      </>
                    ) : (
                      <span className="text-[#F3EFE7]">{line}</span>
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Supporting text */}
            <motion.p
              variants={itemVariants}
              className="font-body text-base lg:text-lg text-[#77736C] leading-relaxed max-w-md mb-8 lg:mb-10"
            >
              I build modern web applications, responsive websites and practical
              digital solutions using technologies like React, JavaScript, PHP
              and MySQL.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-12 lg:mb-16">
              <a
                href="#work"
                onClick={(e) => { e.preventDefault(); handleScroll('#work'); }}
                className="font-heading font-medium text-sm tracking-wide px-7 py-3.5 bg-[#C4875B] text-[#0D0F0F] hover:bg-[#F3EFE7] transition-all duration-300 group"
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-medium text-sm tracking-wide px-7 py-3.5 border border-[#F3EFE7]/20 text-[#F3EFE7] hover:border-[#C4875B] hover:text-[#C4875B] transition-all duration-300"
              >
                Let's Connect
              </a>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#9BAA9A]" aria-hidden="true" />
              <span className="font-body text-xs text-[#77736C] tracking-wide">
                {personal.location}
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Portrait */}
          <div className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2 pt-24 lg:pt-0">
            {/* Decorative vertical text - left */}
            <motion.div
              className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 flex-col items-center gap-1"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              aria-hidden="true"
            >
              {['W', 'E', 'B'].map((char, i) => (
                <span
                  key={i}
                  className="font-heading text-[0.6rem] tracking-[0.2em] text-[#77736C]/50 rotate-180"
                  style={{ writingMode: 'vertical-rl' }}
                >
                  {char}
                </span>
              ))}
              <div className="w-px h-12 bg-gradient-to-b from-[#77736C]/20 to-transparent mt-2" />
            </motion.div>

            {/* Portrait container */}
            <div className="relative">
              {/* Copper frame accent */}
              <motion.div
                className="absolute -top-3 -right-3 w-24 h-24 border-t border-r border-[#C4875B]/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                aria-hidden="true"
              />
              <motion.div
                className="absolute -bottom-3 -left-3 w-24 h-24 border-b border-l border-[#C4875B]/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                aria-hidden="true"
              />

              {/* Image */}
              <motion.div
                className="relative overflow-hidden w-[300px] h-[400px] sm:w-[340px] sm:h-[460px] lg:w-[400px] lg:h-[520px]"
                initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
                animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
                transition={{
                  clipPath: { duration: 1.1, delay: 0.6, ease: 'easeOut' },
                  opacity: { duration: 0.3, delay: 0.6 },
                }}
              >
                <img
                  src={profileImg}
                  alt="Muhammad Afzaal — App & Web Developer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  fetchPriority="high"
                />
                {/* Warm overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0D0F0F]/20 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </motion.div>

              {/* Number tag */}
              <motion.div
                className="absolute -bottom-5 -right-5 lg:-bottom-6 lg:-right-6 bg-[#151817] border border-[#F3EFE7]/8 px-5 py-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                aria-hidden="true"
              >
                <p className="font-heading text-[0.6rem] text-[#77736C] tracking-[0.2em] uppercase mb-0.5">Digital Solutions</p>
                <p className="font-heading text-xs text-[#C4875B] tracking-wider">React · PHP · MySQL</p>
              </motion.div>
            </div>

            {/* Decorative text - right */}
            <motion.div
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col items-center gap-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
              aria-hidden="true"
            >
              <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#77736C]/20 mb-2" />
              {['D', 'E', 'V'].map((char, i) => (
                <span
                  key={i}
                  className="font-heading text-[0.6rem] tracking-[0.2em] text-[#77736C]/50"
                  style={{ writingMode: 'vertical-rl' }}
                >
                  {char}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="font-body text-[0.6rem] text-[#77736C] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-[#77736C]/60 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
