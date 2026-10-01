import { motion } from 'framer-motion';
import { RevealOnScroll } from '../components/RevealOnScroll';

const statements = ['DESIGN.', 'DEVELOP.', 'DEPLOY.', 'IMPROVE.'];

export function About() {
  return (
    <section
      id="about"
      className="bg-[#F3EFE7] text-[#0D0F0F] py-24 lg:py-36"
      aria-label="About section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0">

          {/* Label column */}
          <div className="lg:col-span-3">
            <RevealOnScroll direction="left" delay={0.1}>
              <span className="font-body text-xs tracking-[0.3em] text-[#77736C] uppercase">
                01 / About
              </span>
            </RevealOnScroll>
          </div>

          {/* Content column */}
          <div className="lg:col-span-9">
            <RevealOnScroll delay={0.15}>
              <h2 className="font-heading font-semibold text-4xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-[#0D0F0F] mb-12 lg:mb-16">
                ABOUT ME
              </h2>
            </RevealOnScroll>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Main copy */}
              <div>
                <RevealOnScroll delay={0.2}>
                  <p className="font-body text-base lg:text-lg text-[#151817] leading-relaxed mb-6">
                    I'm Muhammad Afzaal, an App & Web Developer focused on
                    building modern digital experiences and real-world solutions.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll delay={0.28}>
                  <p className="font-body text-base text-[#77736C] leading-relaxed mb-6">
                    My work combines development, design and problem-solving to
                    create websites and applications that are practical,
                    responsive and easy to use.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll delay={0.36}>
                  <p className="font-body text-base text-[#77736C] leading-relaxed">
                    I work with technologies including React, JavaScript, PHP
                    and MySQL, while continuously expanding my skills across
                    modern web development.
                  </p>
                </RevealOnScroll>

                {/* Education block */}
                <RevealOnScroll delay={0.44}>
                  <div className="mt-10 pt-8 border-t border-[#0D0F0F]/10">
                    <span className="font-body text-[0.65rem] tracking-[0.25em] text-[#77736C] uppercase mb-3 block">
                      Education
                    </span>
                    <p className="font-heading font-medium text-lg text-[#0D0F0F]">
                      ADP Computer Science
                    </p>
                    <p className="font-body text-sm text-[#77736C] mt-0.5">
                      Superior University Lahore
                    </p>
                  </div>
                </RevealOnScroll>
              </div>

              {/* Statement */}
              <div className="flex flex-col justify-between">
                <div className="space-y-0">
                  {statements.map((s, i) => (
                    <RevealOnScroll key={s} delay={0.2 + i * 0.1} direction="right">
                      <motion.div
                        className="py-4 border-b border-[#0D0F0F]/10 group cursor-default"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="font-heading font-semibold text-3xl lg:text-4xl text-[#0D0F0F] group-hover:text-[#C4875B] transition-colors duration-300 tracking-tight">
                          {s}
                        </span>
                      </motion.div>
                    </RevealOnScroll>
                  ))}
                </div>

                {/* Location */}
                <RevealOnScroll delay={0.6}>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="w-6 h-px bg-[#C4875B]" aria-hidden="true" />
                    <span className="font-body text-sm text-[#77736C]">
                      Pattoki, Punjab, Pakistan
                    </span>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
