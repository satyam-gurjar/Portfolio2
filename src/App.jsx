import { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Loader from './components/common/Loader';
import ScrollIndicator from './components/common/ScrollIndicator';
import { portfolioData } from './config/portfolio.jsx';

// Lazy load sections for better performance
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Contact = lazy(() => import('./components/sections/Contact'));

/**
 * Main App Component
 * Orchestrates the entire portfolio with lazy loading and smooth transitions
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-dark-500 gradient-bg">
      {/* Navbar */}
      <Navbar data={portfolioData.personal} />

      {/* Main Content */}
      <main className="relative">
        <Suspense fallback={<Loader />}>
          <Hero data={portfolioData.hero} />
          <About data={portfolioData.about} />
          <Skills data={portfolioData.skills} />
          <Projects data={portfolioData.projects} />
          <Experience data={portfolioData.experience} />
          <Contact data={portfolioData.contact} />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer data={portfolioData.personal} />

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
}

export default App;
