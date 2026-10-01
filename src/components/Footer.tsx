import { personal } from '../data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0D0F0F] border-t border-[#F3EFE7]/5 py-12 lg:py-16"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-heading font-semibold text-sm tracking-[0.12em] text-[#F3EFE7] uppercase mb-4">
              Muhammad Afzaal
            </p>
            <p className="font-body text-xs text-[#77736C] leading-relaxed">
              App Developer<br />
              Web Developer<br />
              Digital Solutions
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-[0.65rem] tracking-[0.2em] text-[#77736C] uppercase mb-4">
              Navigate
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {['About', 'Work', 'Skills', 'Journey', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.querySelector(`#${item.toLowerCase()}`);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="font-body text-xs text-[#77736C] hover:text-[#F3EFE7] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="font-body text-[0.65rem] tracking-[0.2em] text-[#77736C] uppercase mb-4">
              Connect
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-[#77736C] hover:text-[#C4875B] transition-colors duration-300"
                >
                  LinkedIn ↗
                </a>
              </li>
              {personal.github && (
                <li>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs text-[#77736C] hover:text-[#C4875B] transition-colors duration-300"
                  >
                    GitHub ↗
                  </a>
                </li>
              )}
              {personal.email && (
                <li>
                  <a
                    href={`mailto:${personal.email}`}
                    className="font-body text-xs text-[#77736C] hover:text-[#C4875B] transition-colors duration-300"
                  >
                    Email ↗
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#F3EFE7]/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[0.65rem] text-[#77736C]">
            © {year} Muhammad Afzaal. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#C4875B]" aria-hidden="true" />
            <p className="font-body text-[0.65rem] text-[#77736C]">
              Pattoki, Punjab, Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
