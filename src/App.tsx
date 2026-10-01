import './index.css';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { WhatIBuild } from './sections/WhatIBuild';
import { TechStack } from './sections/TechStack';
import { SelectedWork } from './sections/SelectedWork';
import { Journey } from './sections/Journey';
import { Contact } from './sections/Contact';

function App() {
  return (
    <>
      {/* Custom cursor — desktop only, auto-disabled on touch */}
      <CustomCursor />

      {/* Skip to main content — accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#C4875B] focus:text-[#0D0F0F] focus:font-heading focus:text-sm font-medium"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content">
        <Hero />
        <About />
        <WhatIBuild />
        <TechStack />
        <SelectedWork />
        <Journey />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
