import { useState } from 'react';
import { motion } from 'framer-motion';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { projects } from '../data/portfolio';

function ProjectPlaceholder({ number }: { number: string }) {
  return (
    <div className="w-full h-full bg-[#151817] flex flex-col items-center justify-center gap-3 border border-dashed border-[#F3EFE7]/10">
      <span className="font-heading text-4xl font-semibold text-[#F3EFE7]/10">{number}</span>
      <span className="font-body text-xs text-[#77736C] tracking-[0.2em] uppercase text-center px-4">
        Add project image to /public/projects/
      </span>
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const isPlaceholder = !project.image || project.liveUrl === '#';

  return (
    <RevealOnScroll delay={0.1 + index * 0.12}>
      <article
        className="group relative border border-[#F3EFE7]/8 overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-cursor="hover"
      >
        {/* Project image */}
        <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-[#151817]">
          {project.image ? (
            <motion.img
              src={project.image}
              alt={`${project.title} — ${project.category}`}
              className="w-full h-full object-cover"
              animate={{ scale: hovered ? 1.04 : 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              loading="lazy"
            />
          ) : (
            <ProjectPlaceholder number={project.number} />
          )}

          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-[#0D0F0F]/60 flex items-center justify-center"
            animate={{ opacity: hovered && !isPlaceholder ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            aria-hidden="true"
          >
            {!isPlaceholder && (
              <span className="font-heading font-medium text-sm tracking-[0.2em] text-[#F3EFE7] uppercase">
                View Project →
              </span>
            )}
          </motion.div>

          {/* Number badge */}
          <div className="absolute top-4 left-4">
            <span className="font-body text-xs text-[#77736C] bg-[#0D0F0F]/80 px-2 py-1">
              {project.number}
            </span>
          </div>

          {/* Copper accent on hover */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-[#C4875B]"
            animate={{ width: hovered ? '100%' : '0%' }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            aria-hidden="true"
          />
        </div>

        {/* Project info */}
        <div className="p-6 lg:p-8 bg-[#151817]">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <p className="font-body text-[0.65rem] tracking-[0.2em] text-[#C4875B] uppercase mb-2">
                {project.category}
              </p>
              <motion.h3
                className="font-heading font-semibold text-xl lg:text-2xl text-[#F3EFE7] tracking-tight"
                animate={{ x: hovered ? 6 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h3>
            </div>
            <motion.span
              className="font-heading text-lg text-[#C4875B] flex-shrink-0 mt-1"
              animate={{ opacity: hovered ? 1 : 0.3, x: hovered ? 0 : -6 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            >
              →
            </motion.span>
          </div>

          <p className="font-body text-sm text-[#77736C] leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-body text-[0.65rem] tracking-wide text-[#9BAA9A] border border-[#F3EFE7]/8 px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-4">
            {project.liveUrl && project.liveUrl !== '#' ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-xs font-medium tracking-[0.15em] text-[#F3EFE7] hover:text-[#C4875B] transition-colors duration-300 uppercase flex items-center gap-2 group/link"
              >
                <span>VIEW PROJECT</span>
                <span className="group-hover/link:translate-x-1 transition-transform duration-300">↗</span>
              </a>
            ) : (
              <span className="font-heading text-xs tracking-[0.15em] text-[#77736C] uppercase">
                Coming Soon
              </span>
            )}

            {project.githubUrl && project.githubUrl !== '#' && (
              <>
                <span className="text-[#F3EFE7]/10">·</span>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-xs font-medium tracking-[0.15em] text-[#77736C] hover:text-[#F3EFE7] transition-colors duration-300 uppercase"
                >
                  GitHub ↗
                </a>
              </>
            )}
          </div>
        </div>
      </article>
    </RevealOnScroll>
  );
}

export function SelectedWork() {
  return (
    <section
      id="work"
      className="bg-[#0D0F0F] py-24 lg:py-36"
      aria-label="Selected work section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-6">
          <div className="lg:col-span-3">
            <RevealOnScroll direction="left" delay={0.1}>
              <span className="font-body text-xs tracking-[0.3em] text-[#77736C] uppercase">
                04 / Work
              </span>
            </RevealOnScroll>
          </div>
          <div className="lg:col-span-9">
            <RevealOnScroll delay={0.15}>
              <h2 className="font-heading font-semibold text-4xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-[#F3EFE7] mb-4">
                SELECTED WORK
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="font-body text-sm text-[#77736C] leading-relaxed max-w-lg">
                A selection of digital projects, experiments and real-world solutions.
              </p>
            </RevealOnScroll>
          </div>
        </div>

        {/* Edit notice */}
        <RevealOnScroll delay={0.25}>
          <div className="lg:ml-[25%] mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-3 border border-dashed border-[#C4875B]/30 px-4 py-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C4875B]/60 animate-pulse" aria-hidden="true" />
              <p className="font-body text-xs text-[#77736C]">
                Edit <code className="text-[#C4875B] font-mono text-[0.65rem]">src/data/portfolio.ts</code> to add your real projects.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Projects grid */}
        <div className="lg:ml-[25%] grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
