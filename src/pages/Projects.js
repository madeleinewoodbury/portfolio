import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import TipCalculator from '../components/projects/TipCalculator';
import TinyChatRooms from '../components/projects/TinyChatRooms';
import ClassicArcade from '../components/projects/ClassicArcade';
import StreamingAvailability from '../components/projects/StreamingAvailability';

const Projects = () => {
  const projectRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/projects') {
      projectRef.current.scrollIntoView();
    }
  }, [pathname]);

  return (
    <section ref={projectRef} id='projects' className='bg-dark'>
      <div className='container'>
        <h2>Projects I'm proud of</h2>
        <StreamingAvailability />
        <TipCalculator />
        <TinyChatRooms />
        <ClassicArcade />
      </div>
    </section>
  );
};

export default Projects;
