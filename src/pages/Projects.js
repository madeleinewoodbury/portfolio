import TipCalculator from '../components/projects/TipCalculator';
import CovidStats from '../components/projects/CovidStats';
import TinyChatRooms from '../components/projects/TinyChatRooms';

const Projects = () => {
  return (
    <section id='projects' className='bg-dark'>
      <div className='container'>
        <h2>Projects I'm proud of</h2>
        <TipCalculator />
        <CovidStats />
        <TinyChatRooms />
      </div>
    </section>
  );
};

export default Projects;
