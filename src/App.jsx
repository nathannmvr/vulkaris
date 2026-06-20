import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Areas from './components/Areas';
import Projects from './components/Projects';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';

function App() {
  return (
    <div className="app">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Areas />
        <Projects />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
