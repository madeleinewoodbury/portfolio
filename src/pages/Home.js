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

        <p>I'm a web developer specializing in React and JavaScript.</p>

        <p>
          Currently, I'm working on a degree in Computer Engineering at{' '}
          <a
            href='https://en.uit.no/startsida'
            target='_blank'
            rel='noreferrer'
          >
            UIT
          </a>
          .
        </p>
      </section>
      <Gradient />
      <Projects />
      <Gradient />
    </>
  );
};

export default Home;
