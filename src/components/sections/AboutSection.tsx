import { ArrowRight } from 'lucide-react';

function AboutSection() {
  return (
    <section id="about" className="about-section section-light">
      <div className="about-angle" aria-hidden="true" />
      <div className="content-width about-layout">
        <div className="about-copy">
          <p className="section-kicker">01 / A LITTLE ABOUT ME</p>
          <h2>Engineering products<br /><span>from the inside out.</span></h2>
          <p className="body-copy">
            I care about the whole product: the problem it solves, the experience it creates, and the systems that keep it dependable. I bring that lens to backend services, cloud infrastructure, delivery, and observability.
          </p>
          <div className="about-stats">
            <article><strong>04</strong><span>Featured projects</span></article>
            <article><strong>40%</strong><span>Faster CI/CD pipeline execution</span></article>
          </div>
          <a className="text-link" href="#experience">See what I work on <ArrowRight size={16} /></a>
        </div>
        <div className="terminal-card">
          <div className="terminal-head"><div className="terminal-dots"><i /><i /><i /></div><span>nehemiah / profile</span><span className="terminal-live">CURRENT</span></div>
          <div className="terminal-content">
            <p className="terminal-prompt">$ whoami</p>
            <p className="terminal-output">Product engineer<br />building useful, dependable software.</p>
            <p className="terminal-prompt">$ cat product-loop.txt</p>
            <div className="terminal-focus"><span>understand the problem</span><span>design and build the product</span><span>learn from production</span></div>
            <p className="terminal-prompt terminal-prompt-last">$ status --location</p>
            <p className="terminal-status">Remote / Nigeria <span className="cursor-block" /></p>
          </div>
          <div className="terminal-stamp">EST. ON<br />CURIOSITY</div>
        </div>
      </div>
      <div className="content-width focus-strip" id="experience">
        <article className="focus-item"><span>01</span><h3>Product thinking</h3><p>Start with the user problem and shape a useful outcome.</p></article>
        <article className="focus-item"><span>02</span><h3>End-to-end building</h3><p>Connect application code, APIs, and delivery into one product.</p></article>
        <article className="focus-item"><span>03</span><h3>Production ownership</h3><p>Make products observable, reliable, and ready to evolve.</p></article>
      </div>
    </section>
  );
}

export default AboutSection;