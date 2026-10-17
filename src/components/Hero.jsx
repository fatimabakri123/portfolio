import { ArrowRight, Download } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-eyebrow">
            HI, I'M FATIMA
          </p>

          <h1>
            I Build Clean,
            <span> Modern Web Experiences.</span>
          </h1>

          <p className="hero-description">
            I'm a Computer Science graduate and Web Developer passionate
            about creating modern, useful, and beautiful digital experiences.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              View My Projects
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>

          </div>

        </div>

        <div className="hero-image">
          <div className="image-frame">
            <div className="image-placeholder">
              <span>FA</span>
              <p>Creative Developer</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;