import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className='container'>
        <Landing />
      </main>
    </>
  );
}

export default App;
