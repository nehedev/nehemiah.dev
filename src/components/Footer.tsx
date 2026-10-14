import { ArrowUpRight } from 'lucide-react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-width footer-inner">
        <p>(c) {new Date().getFullYear()} Nehemiah.</p>
        <a href="#top" className="back-to-top">Back to top <ArrowUpRight size={15} /></a>
      </div>
    </footer>
  );
}

export default Footer;