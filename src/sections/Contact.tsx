import { motion } from 'framer-motion';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { personal, availability } from '../data/portfolio';

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0D0F0F] py-24 lg:py-36 overflow-hidden"
      aria-label="Contact section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <RevealOnScroll direction="left" delay={0.1}>
              <span className="font-body text-xs tracking-[0.3em] text-[#77736C] uppercase">
                06 / Contact
              </span>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-9">
            {/* Main CTA heading */}
            <RevealOnScroll delay={0.15}>
              <h2 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-7xl xl:text-8xl leading-[1.0] tracking-tight text-[#F3EFE7] mb-6">
                LET'S BUILD
                <span className="block text-[#C4875B]">SOMETHING</span>
                REAL.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.25}>
              <p className="font-body text-base lg:text-lg text-[#77736C] leading-relaxed max-w-lg mb-12">
                Have a project, idea or opportunity?<br />
                Let's turn it into a practical digital experience.
              </p>
            </RevealOnScroll>

            {/* Availability indicator */}
            <RevealOnScroll delay={0.3}>
              <div className="inline-flex flex-col gap-3 border border-[#F3EFE7]/8 p-6 mb-12">
                <div className="flex items-center gap-2.5">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#9BAA9A]"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    aria-hidden="true"
                  />
                  <span className="font-heading text-xs font-medium tracking-[0.2em] text-[#F3EFE7] uppercase">
                    {availability.status}
                  </span>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  {availability.types.map((type) => (
                    <span
                      key={type}
                      className="font-body text-[0.65rem] tracking-wide text-[#77736C] border border-[#F3EFE7]/8 px-3 py-1"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* CTA buttons */}
            <RevealOnScroll delay={0.35}>
              <div className="flex flex-wrap items-center gap-4 mb-16">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading font-medium text-sm tracking-wide px-8 py-4 bg-[#C4875B] text-[#0D0F0F] hover:bg-[#F3EFE7] transition-all duration-300 group flex items-center gap-2"
                >
                  START A PROJECT
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading font-medium text-sm tracking-wide px-8 py-4 border border-[#F3EFE7]/15 text-[#F3EFE7] hover:border-[#C4875B] hover:text-[#C4875B] transition-all duration-300 flex items-center gap-2 group"
                >
                  CONNECT ON LINKEDIN
                  <span className="group-hover:translate-x-1 transition-transform duration-300">↗</span>
                </a>
              </div>
            </RevealOnScroll>

            {/* LinkedIn feature block */}
            <RevealOnScroll delay={0.4}>
              <div className="border-t border-[#F3EFE7]/8 pt-12">
                <div className="grid sm:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="font-heading font-semibold text-2xl lg:text-3xl text-[#F3EFE7] mb-3">
                      LET'S CONNECT
                    </h3>
                    <p className="font-body text-sm text-[#77736C] leading-relaxed mb-6 max-w-sm">
                      Interested in technology, collaboration, digital products
                      and new opportunities?
                    </p>
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-sm font-medium tracking-[0.2em] text-[#C4875B] hover:text-[#F3EFE7] transition-colors duration-300 uppercase flex items-center gap-2 group"
                    >
                      CONNECT ON LINKEDIN
                      <motion.span
                        className="inline-block"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </a>
                  </div>

                  {/* Quick info */}
                  {personal.email && (
                    <div>
                      <span className="font-body text-[0.65rem] tracking-[0.2em] text-[#77736C] uppercase block mb-2">
                        Email
                      </span>
                      <a
                        href={`mailto:${personal.email}`}
                        className="font-heading text-base text-[#F3EFE7] hover:text-[#C4875B] transition-colors duration-300"
                      >
                        {personal.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
