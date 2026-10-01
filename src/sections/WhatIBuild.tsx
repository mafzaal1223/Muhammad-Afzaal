import { useState } from 'react';
import { motion } from 'framer-motion';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { capabilities } from '../data/portfolio';

export function WhatIBuild() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="capabilities"
      className="bg-[#151817] py-24 lg:py-36"
      aria-label="Capabilities section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 mb-16 lg:mb-20">
          <div className="lg:col-span-3">
            <RevealOnScroll direction="left" delay={0.1}>
              <span className="font-body text-xs tracking-[0.3em] text-[#77736C] uppercase">
                02 / Services
              </span>
            </RevealOnScroll>
          </div>
          <div className="lg:col-span-9">
            <RevealOnScroll delay={0.15}>
              <h2 className="font-heading font-semibold text-4xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-[#F3EFE7]">
                WHAT I BUILD
              </h2>
            </RevealOnScroll>
          </div>
        </div>

        <div className="border-t border-[#F3EFE7]/8">
          {capabilities.map((cap, index) => (
            <RevealOnScroll key={cap.number} delay={0.1 + index * 0.08}>
              <motion.div
                className="border-b border-[#F3EFE7]/8 cursor-default"
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
                data-cursor="hover"
              >
                <div className="py-7 lg:py-9 grid grid-cols-12 gap-4 items-start group">
                  {/* Number */}
                  <div className="col-span-2 lg:col-span-1">
                    <motion.span
                      className="font-body text-xs text-[#77736C] tracking-wide"
                      animate={{ color: activeIndex === index ? '#C4875B' : '#77736C' }}
                      transition={{ duration: 0.3 }}
                    >
                      {cap.number}
                    </motion.span>
                  </div>

                  {/* Title */}
                  <div className="col-span-8 lg:col-span-5">
                    <motion.h3
                      className="font-heading font-medium text-xl lg:text-3xl xl:text-4xl text-[#F3EFE7] tracking-tight"
                      animate={{
                        x: activeIndex === index ? 12 : 0,
                        color: activeIndex === index ? '#F3EFE7' : '#F3EFE7',
                      }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    >
                      {cap.title}
                    </motion.h3>
                  </div>

                  {/* Description */}
                  <div className="col-span-12 lg:col-span-5 pl-0 lg:pl-8">
                    <motion.p
                      className="font-body text-sm text-[#77736C] leading-relaxed lg:text-base"
                      animate={{
                        opacity: activeIndex === index ? 1 : 0.6,
                        color: activeIndex === index ? '#9BAA9A' : '#77736C',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {cap.description}
                    </motion.p>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-2 lg:col-span-1 flex justify-end items-center">
                    <motion.span
                      className="font-heading text-sm text-[#C4875B]"
                      animate={{
                        opacity: activeIndex === index ? 1 : 0,
                        x: activeIndex === index ? 0 : -8,
                      }}
                      transition={{ duration: 0.25 }}
                      aria-hidden="true"
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                {/* Copper progress line on hover */}
                <motion.div
                  className="h-px bg-[#C4875B] origin-left"
                  animate={{ scaleX: activeIndex === index ? 1 : 0, opacity: activeIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  aria-hidden="true"
                />
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
