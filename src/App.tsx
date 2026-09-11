import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ProfessionalDevelopment from "./components/ProfessionalDevelopment/ProfessionalDevelopment";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const documentElement = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) return;

    documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" }
    );

    document.querySelectorAll<HTMLElement>(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      documentElement.classList.remove("motion-ready");
    };
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const hero = document.querySelector<HTMLElement>(".hero");

    if (reducedMotion || !finePointer || !hero) return;

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const updateParallax = () => {
      frame = 0;
      hero.style.setProperty("--hero-parallax-x", `${pointerX * 7}px`);
      hero.style.setProperty("--hero-parallax-y", `${pointerY * 6}px`);
      hero.style.setProperty("--hero-detail-x", `${pointerX * -3}px`);
      hero.style.setProperty("--hero-detail-y", `${pointerY * -3}px`);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();
      pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
      pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };

    hero.addEventListener("pointermove", handlePointerMove);
    return () => {
      hero.removeEventListener("pointermove", handlePointerMove);
      if (frame) window.cancelAnimationFrame(frame);
      hero.style.removeProperty("--hero-parallax-x");
      hero.style.removeProperty("--hero-parallax-y");
      hero.style.removeProperty("--hero-detail-x");
      hero.style.removeProperty("--hero-detail-y");
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <section className="technology-strip" aria-label="Interests and thoughts on technology">
        <p className="technology-strip-title">INTERESTS AND THOUGHTS ON TECHNOLOGY</p>
        <div className="technology-note" aria-label="Technology thoughts">
        </div>
        <div className="technology-marquee">
          <div className="technology-marquee-track">
            <div className="technology-marquee-set">
              <span>Exploring AI</span><b>✦</b><span>Building with Data</span><b>•</b><span>Creating with Code</span><b>•</b><span>Learning Something New</span><b>✦</b><span>Turning Curiosity into Code</span><b>•</b><span>SQL</span><b>•</b><span>Generative AI</span><b>•</b>
            </div>
            <div className="technology-marquee-set" aria-hidden="true">
              <span>Exploring AI</span><b>✦</b><span>Building with Data</span><b>•</b><span>Creating with Code</span><b>•</b><span>Learning Something New</span><b>✦</b><span>Turning Curiosity into Code</span><b>•</b><span>SQL</span><b>•</b><span>Generative AI</span><b>•</b>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <ProfessionalDevelopment />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
