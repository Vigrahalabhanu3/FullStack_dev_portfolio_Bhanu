import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import WelcomeScreen from './components/WelcomeScreen';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import NotFound from './pages/NotFound';

const SESSION_KEY = 'bhanu_intro_shown';

// ── Portfolio page (with welcome intro) ──────────────────────
function PortfolioPage() {
  const [showIntro, setShowIntro] = useState<boolean>(
    () => !sessionStorage.getItem(SESSION_KEY)
  );
  const [portfolioVisible, setPortfolioVisible] = useState<boolean>(
    () => !!sessionStorage.getItem(SESSION_KEY)
  );

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showIntro]);

  const handleIntroComplete = () => {
    sessionStorage.setItem(SESSION_KEY, '1');
    setShowIntro(false);
    setPortfolioVisible(true);
    document.body.style.overflow = '';
  };

  return (
    <>
      {showIntro && <WelcomeScreen onComplete={handleIntroComplete} />}

      <motion.div
        key="portfolio"
        initial={portfolioVisible ? false : { opacity: 0 }}
        animate={portfolioVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ visibility: portfolioVisible ? 'visible' : 'hidden' }}
      >
        <Layout>
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills" className="bg-slate-50/60">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="achievements" className="bg-slate-50/60">
            <Achievements />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Layout>
      </motion.div>
    </>
  );
}

// ── Root App ─────────────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
