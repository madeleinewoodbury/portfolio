import Projects from './Projects';
import Gradient from '../components/layout/Gradient';

const Home = () => {
  return (
    <>
      <section id='intro' className='container'>
        <p className='name'>
          Hi, my name is <span>Madeleine Woodbury.</span>
        </p>
        <h2>I create awesome websites.</h2>

        <p>I'm a developer specializing in React and Node.js.</p>

        <p>
          Currently, I'm working on a degree in Information Technology at{' '}
          <a href='https://www.ntnu.no/'>NTNU</a>.
        </p>
      </section>
      <Gradient />
      <Projects />
      <Gradient />
    </>
  );
};

export default Home;
