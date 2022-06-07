import TipCalculator from '../components/projects/TipCalculator';
import CovidStats from '../components/projects/CovidStats';

const Projects = () => {
  return (
    <section id='projects' className='container'>
      <h2>Projects I'm proud of</h2>
      <TipCalculator />
      <CovidStats />
    </section>
  );
};

export default Projects;
