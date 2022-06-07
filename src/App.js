import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Gradient from './components/Gradient';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Landing />
        <Gradient />
        <Projects />
      </main>
    </>
  );
}

export default App;
