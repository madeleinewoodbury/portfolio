import Navbar from './components/layout/Navbar';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/layout/Footer';
import Gradient from './components/layout/Gradient';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Landing />
        <Gradient />
        <Projects />
        <Gradient />
        <About />
        <Gradient />
        <Contact />
        <Gradient />
      </main>
      <Footer />
    </>
  );
}

export default App;
