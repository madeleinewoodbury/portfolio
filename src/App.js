import Navbar from './components/layout/Navbar';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Gradient from './components/layout/Gradient';
import Footer from './components/layout/Footer';
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
        <Footer />
      </main>
    </>
  );
}

export default App;
