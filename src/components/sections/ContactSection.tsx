import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { contactEmail } from '../../data/portfolio';

function ContactSection() {
  const [formError, setFormError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const sender = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!name || !sender || !message) {
      setFormError('Complete each field before composing your message.');
      return;
    }

    setFormError('');
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${sender})`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="contact-section">
      <div className="content-width contact-layout">
        <div className="contact-copy">
          <p className="section-kicker">05 / YOUR NEXT MOVE</p>
          <h2>Let&apos;s make<br /><span>something useful.</span></h2>
          <p className="contact-intro">Have a product idea, a stubborn engineering problem, or a team that cares about what it ships? Let&apos;s talk.</p>
          <a className="contact-email" href={`mailto:${contactEmail}`}><Mail size={20} />{contactEmail}<ArrowUpRight size={17} /></a>
          <div className="contact-place"><MapPin size={17} /> Remote, Nigeria</div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/nehemiah-daniel-844177231" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
            <a href="https://github.com/nehedev" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading"><span>DROP A MESSAGE</span><Send size={18} /></div>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" placeholder="Name" autoComplete="name" required />
          <label htmlFor="sender-email">Email address</label>
          <input id="sender-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          <label htmlFor="message">What are you working on?</label>
          <textarea id="message" name="message" rows={4} placeholder="Tell me a little about it..." required />
          <button className="form-submit" type="submit">Compose email <ArrowUpRight size={17} /></button>
          {formError && <p className="form-error" role="alert">{formError}</p>}
          <p className="form-footnote">Opens your email app with the message ready to send.</p>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;