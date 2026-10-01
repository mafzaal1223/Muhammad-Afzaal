import { motion } from 'framer-motion';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { timelineItems } from '../data/portfolio';

export function Journey() {
  return (
    <section
      id="journey"
      className="bg-[#F3EFE7] text-[#0D0F0F] py-24 lg:py-36"
      aria-label="Development journey section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 lg:mb-20">
          <div className="lg:col-span-3">
            <RevealOnScroll direction="left" delay={0.1}>
              <span className="font-body text-xs tracking-[0.3em] text-[#77736C] uppercase">
                05 / Journey
              </span>
            </RevealOnScroll>
          </div>
          <div className="lg:col-span-9">
            <RevealOnScroll delay={0.15}>
              <h2 className="font-heading font-semibold text-4xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-[#0D0F0F]">
                MY JOURNEY
              </h2>
            </RevealOnScroll>
          </div>
        </div>

        {/* Timeline */}
        <div className="lg:ml-[25%]">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#C4875B] via-[#0D0F0F]/20 to-transparent"
              aria-hidden="true"
            />

            {timelineItems.map((item, index) => (
              <RevealOnScroll key={index} delay={0.1 + index * 0.12} direction="left">
                <div className="relative pl-10 pb-12 last:pb-0 group">
                  {/* Dot */}
                  <motion.div
                    className="absolute left-[-4px] top-2 w-2 h-2 rounded-full border border-[#C4875B] bg-[#F3EFE7]"
                    whileInView={{ backgroundColor: ['#F3EFE7', '#C4875B', '#F3EFE7'] }}
                    transition={{ duration: 1.2, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    aria-hidden="true"
                  />

                  {/* Label */}
                  <span className="font-body text-[0.65rem] tracking-[0.25em] text-[#C4875B] uppercase block mb-2">
                    {item.year}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-xl lg:text-2xl text-[#0D0F0F] mb-3 group-hover:text-[#C4875B] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm lg:text-base text-[#77736C] leading-relaxed max-w-lg">
                    {item.description}
                  </p>

                  {/* Connector line to next */}
                  {index < timelineItems.length - 1 && (
                    <div
                      className="absolute left-[-0.5px] top-6 h-full w-px bg-[#0D0F0F]/10"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
