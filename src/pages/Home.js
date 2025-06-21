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

        <p>I'm a software developer specializing in React, Three.js, and modern JavaScript.</p>

        <p>
          Computer Engineering graduate from{' '}
          <a
            href='https://en.uit.no/startsida'
            target='_blank'
            rel='noreferrer'
          >
            UIT
          </a>{' '}
          with 2+ years of frontend development experience..
        </p>
      </section>
      <Gradient />
      <Projects />
      <Gradient />
    </>
  );
};

export default Home;

