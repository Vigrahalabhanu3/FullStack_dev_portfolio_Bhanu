import Layout from './components/Layout';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Certifications from "./sections/Certifications";
import Progress from './sections/Progress';

function App() {
  return (
    <Layout>
      <section id="home" className="min-h-screen">
        <Home />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="skills" className="min-h-screen">
        <Skills />
      </section>
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
      <section id="certifications" className="min-h-screen">
        <Certifications />
      </section>
      <section id="progress" className="min-h-screen">
        <Progress />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </Layout>
  );
}

export default App;
