import { Sparkles } from 'lucide-react';

function WritingSection() {
  return (
    <section id="writing" className="writing-section section-dark">
      <div className="content-width writing-layout">
        <div>
          <p className="section-kicker section-kicker-yellow">04 / NOTES FROM THE FIELD</p>
          <h2>Good systems<br />leave <span>room to think.</span></h2>
        </div>
        <div className="writing-note">
          <div className="writing-note-mark"><Sparkles size={25} /></div>
          <div><p className="writing-note-title">Writing in progress</p><p className="writing-note-copy">Notes on product engineering, making technical systems useful, and learning from software in production are on the way.</p></div>
          <span className="writing-note-index">SOON</span>
        </div>
      </div>
    </section>
  );
}

export default WritingSection;