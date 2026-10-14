import type { ReactNode } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <Navigation />
      <main id="top">{children}</main>
      <Footer />
    </div>
  );
}

export default PortfolioLayout;