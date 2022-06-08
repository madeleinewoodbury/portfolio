import Landing from '../components/layout/Landing';
import Projects from '../components/Projects';
import Gradient from '../components/layout/Gradient';

const Home = () => {
  return (
    <main>
      <Landing />
      <Gradient />
      <Projects />
      <Gradient />
    </main>
  );
};

export default Home;
