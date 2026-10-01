import { RevealOnScroll } from '../components/RevealOnScroll';
import { technologies } from '../data/portfolio';

// Duplicate for infinite scroll
const techList = [...technologies, ...technologies];

const techIcons: Record<string, string> = {
  JavaScript: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="2" fill="#F0D048"/><path d="M19.472 22.688c.4.648.92 1.128 1.84 1.128.776 0 1.272-.388 1.272-.924 0-.64-.508-.868-1.36-1.24l-.468-.2c-1.348-.572-2.244-1.292-2.244-2.808 0-1.396 1.064-2.46 2.724-2.46 1.184 0 2.032.412 2.644 1.492l-1.448.928c-.32-.572-.664-.796-1.196-.796-.544 0-.892.348-.892.796 0 .556.348.78 1.152 1.128l.468.2c1.588.68 2.488 1.376 2.488 2.936 0 1.684-1.32 2.596-3.092 2.596-1.732 0-2.852-.824-3.396-1.904l1.508-.872zm-7.164.18c.292.52.56.96 1.204.96.616 0 1-.24 1-.856V16.3h1.828v6.7c0 1.412-.828 2.056-2.036 2.056-1.092 0-1.724-.564-2.048-1.244l1.052-.944z" fill="#000"/></svg>`,
  React: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="2" fill="#151817"/><path d="M16 18.4a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8z" fill="#61DAFB"/><path d="M16 8c3.588 0 6.764.608 9.072 1.6C27.32 10.584 28.8 11.96 28.8 13.6c0 1.64-1.48 3.016-3.728 4-2.308.992-5.484 1.6-9.072 1.6s-6.764-.608-9.072-1.6C4.68 16.616 3.2 15.24 3.2 13.6c0-1.64 1.48-3.016 3.728-4C9.236 8.608 12.412 8 16 8z" stroke="#61DAFB" strokeWidth="1.2"/><path d="M11.504 10.8c1.794-3.108 3.988-5.34 5.952-6.472C19.42 3.196 21.16 3.088 22.4 3.82c1.24.716 1.784 2.36 1.528 4.56-.256 2.2-1.36 4.828-3.152 7.932-1.796 3.108-3.988 5.34-5.952 6.472-1.964 1.132-3.704 1.24-4.944.508-1.24-.716-1.784-2.36-1.528-4.56.256-2.2 1.36-4.828 3.152-7.932z" stroke="#61DAFB" strokeWidth="1.2"/><path d="M20.496 10.8c1.792 3.104 2.896 5.732 3.152 7.932.256 2.2-.288 3.844-1.528 4.56-1.24.732-2.98.624-4.944-.508-1.964-1.132-4.156-3.364-5.952-6.472-1.792-3.104-2.896-5.732-3.152-7.932C7.816 6.18 8.36 4.536 9.6 3.82c1.24-.732 2.98-.624 4.944.508 1.964 1.132 4.156 3.364 5.952 6.472z" stroke="#61DAFB" strokeWidth="1.2"/></svg>`,
  PHP: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="2" fill="#7B7FB5"/><path d="M5 16c0-4.418 4.92-8 11-8s11 3.582 11 8-4.92 8-11 8S5 20.418 5 16z" fill="#4F5B93"/><path d="M10.012 19l1.28-6.4h2.356c1.048 0 1.788.204 2.22.612.432.408.568.96.408 1.656-.132.608-.436 1.072-.912 1.392-.476.32-1.116.48-1.92.48h-1.04L12.02 19h-2.008zm2.18-3.332h.736c.356 0 .616-.072.78-.216.164-.144.268-.344.312-.6.044-.232.016-.4-.084-.504-.1-.104-.304-.156-.612-.156h-.776l-.356 1.476z" fill="white"/><path d="M17.468 19l1.28-6.4h1.96l-.244 1.236c.308-.48.652-.832 1.032-1.056A2.68 2.68 0 0122.688 12.4c.584 0 1.02.168 1.308.504.288.336.372.804.252 1.404L23.26 17.2h-1.94l.864-4.192c.064-.312.044-.528-.06-.648-.104-.12-.288-.18-.552-.18-.304 0-.572.096-.804.288-.232.192-.388.48-.468.864L19.428 17.2h-1.96z" fill="white"/></svg>`,
  MySQL: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="2" fill="#00758F"/><path d="M5 10.5h4.5l3 7.5 3-7.5H20v11h-3V14l-2.5 7.5h-2L10 14v7.5H7V10.5H5z" fill="white"/><path d="M21 20.5c1.5-1 3-2 4-4-1-.5-2.5-.5-3.5 0-.5.5-1 1-1 1.5s.5 1 .5 1.5-.5 1-1 1.5" fill="#F29111"/><path d="M21 20.5c.5.5 1 1 2 1h2" stroke="#F29111" strokeWidth="1" strokeLinecap="round"/></svg>`,
  Firebase: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="2" fill="#1C1C1C"/><path d="M7 24l5.5-14.5 3 6L12 22 7 24z" fill="#FFA000"/><path d="M15.5 15.5L12 22l11-6.5L20 6l-4.5 9.5z" fill="#F57F17"/><path d="M12 22l11-6.5-6-1.5L12 22z" fill="#FFCA28"/></svg>`,
  HTML: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="2" fill="#E34F26"/><path d="M6 5l2 18 8 2 8-2 2-18H6zm14.5 5.5H12l.3 3h8l-.8 8.5-3.5 1-3.5-1-.2-2.5H15l.1 1.3 1 .3 1-.3.1-1.5H11l-.5-6h9l-.5 3.2z" fill="white"/></svg>`,
  CSS: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="2" fill="#264DE4"/><path d="M6 5l2 18 8 2 8-2 2-18H6zm14.5 5.5h-9l.2 2.5h8.5l-.5 5.5-3.7 1-3.7-1-.2-2.5H15l.1 1.2 1.5.4 1.5-.4.2-2.2H11l-.5-6h9.5l-.5 1.5z" fill="white"/></svg>`,
  Git: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="2" fill="#F05032"/><path d="M27.2 14.8l-10-10a1.5 1.5 0 00-2.1 0L13 6.9l2.6 2.6a1.8 1.8 0 002.3 2.3l2.5 2.5a1.8 1.8 0 102.1.7l-2.4-2.4v-1a1.8 1.8 0 10-1.8 0v.5l-2.5-2.5a1.8 1.8 0 00-.5 1.3c0 .5.2 1 .5 1.3L8.7 19.3a1.5 1.5 0 000 2.1l1.1 1.1a1.5 1.5 0 002.1 0l7.1-7.1c.4.3.9.5 1.5.5a2 2 0 000-4 2 2 0 00-1.7 1l-2.4-2.4L12 14.3l-7.2 7.2a1.5 1.5 0 000 2.1l2 2a1.5 1.5 0 002.1 0L20.2 14l.6.6a2 2 0 102.8-2.8l-.6-.6 4.2-4.2c.6-.5.6-1.5 0-2.2z" fill="white"/></svg>`,
  Figma: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="2" fill="#1E1E1E"/><path d="M13 25a3 3 0 003-3v-3h-3a3 3 0 000 6z" fill="#0ACF83"/><path d="M10 16a3 3 0 013-3h3v6h-3a3 3 0 01-3-3z" fill="#A259FF"/><path d="M10 10a3 3 0 013-3h3v6h-3a3 3 0 01-3-3z" fill="#F24E1E"/><path d="M16 7h3a3 3 0 010 6h-3V7z" fill="#FF7262"/><path d="M22 16a3 3 0 11-6 0 3 3 0 016 0z" fill="#1ABCFE"/></svg>`,
};

export function TechStack() {
  return (
    <section
      id="skills"
      className="bg-[#0D0F0F] py-24 lg:py-32 overflow-hidden"
      aria-label="Technologies section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <RevealOnScroll direction="left" delay={0.1}>
              <span className="font-body text-xs tracking-[0.3em] text-[#77736C] uppercase">
                03 / Skills
              </span>
            </RevealOnScroll>
          </div>
          <div className="lg:col-span-9">
            <RevealOnScroll delay={0.15}>
              <h2 className="font-heading font-semibold text-4xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-[#F3EFE7]">
                TOOLS I WORK WITH
              </h2>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* Scrolling tech strip */}
      <div
        className="relative overflow-hidden py-8"
        role="region"
        aria-label="Technology stack"
      >
        {/* Edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0D0F0F] to-transparent z-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0D0F0F] to-transparent z-10 pointer-events-none" aria-hidden="true" />

        <div className="tech-scroll-track" aria-hidden="true">
          {techList.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-4 flex-shrink-0 group cursor-default"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                dangerouslySetInnerHTML={{ __html: techIcons[tech.name] || '' }}
                aria-hidden="true"
              />

              {/* Name */}
              <span className="font-heading font-medium text-xl lg:text-2xl text-[#77736C] group-hover:text-[#F3EFE7] transition-colors duration-300 whitespace-nowrap tracking-tight">
                {tech.name}
              </span>

              {/* Divider */}
              <span className="ml-8 text-[#C4875B]/30 text-xl" aria-hidden="true">·</span>
            </div>
          ))}
        </div>
      </div>

      {/* Static grid below scroll */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16">
        <RevealOnScroll delay={0.2}>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-px border border-[#F3EFE7]/5 overflow-hidden">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group bg-[#151817] hover:bg-[#1C2020] transition-colors duration-300 p-5 flex flex-col items-center gap-3 cursor-default border-[#F3EFE7]/5"
                aria-label={tech.name}
              >
                <div
                  className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  dangerouslySetInnerHTML={{ __html: techIcons[tech.name] || '' }}
                  aria-hidden="true"
                />
                <span className="font-body text-[0.65rem] text-[#77736C] group-hover:text-[#F3EFE7] transition-colors duration-300 tracking-wide text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
