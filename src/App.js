import NavBar from './components/NavBar';
import { Hero, AboutMe } from './components/Hero';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Languages />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
