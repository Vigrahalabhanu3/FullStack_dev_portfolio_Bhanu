import Layout from './components/Layout';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

function App() {
  return (
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
  );
}

export default App;
