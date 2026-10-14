import { ArrowDownRight, ArrowUpRight, MapPin } from 'lucide-react';

function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> Product Engineer</p>
          <h1>I build useful products <span>people rely on.</span></h1>
          <p className="hero-intro">
            Hi, I&apos;m Nehemiah. I connect product thinking with software engineering, taking ideas from a real user problem through to a dependable release.
          </p>
          <div className="hero-actions">
            <a className="button button-yellow" href="#projects">Explore my work <ArrowDownRight size={18} /></a>
            <a className="button button-quiet" href="#contact">Let&apos;s talk <ArrowUpRight size={17} /></a>
          </div>
          <div className="hero-footnote"><MapPin size={15} /> Remote, Nigeria <span /> Building for the long run</div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-frame">
            <img src="/images/nehemiah.jpeg" alt="Portrait of Nehemiah" />
            <div className="portrait-caption"><span>NEHEMIAH</span><span>PROBLEM / PRODUCT / IMPACT</span></div>
          </div>
          <div className="portrait-sticker sticker-blue"><span>FROM IDEA<br />TO IMPACT</span><ArrowDownRight size={21} /></div>
          <div className="portrait-sticker sticker-product"><span>PRODUCT</span><i>ENGINEER</i></div>
          <div className="portrait-crosshair" aria-hidden="true">+</div>
        </div>
      </div>
      <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15} /></a>
    </header>
  );
}

export default HeroSection;