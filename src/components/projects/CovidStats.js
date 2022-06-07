import image from '../../img/covid-stats.png';

const CovidStats = () => {
  return (
    <article>
      <div class='text'>
        <h4>API Project</h4>
        <h3>Covid Stats by Country</h3>
        <div class='info'>
          <p>
            This project was built with React and uses Bootstrap for styling.
            The app fetches data from the{' '}
            <a href='https://covid19api.com/' target='_blank'>
              Covid 19 API
            </a>{' '}
            and gets the covid statistics by country. Shows new cases from the
            past 14 day and how many cases per 100k.
          </p>
          <div className='links'>
            <a
              href='https://covid-stats-by-country.netlify.app/'
              target='_blank'
            >
              View Site
            </a>
            <a
              href='https://github.com/madeleinewoodbury/covid-stats'
              target='_blank'
            >
              View Code
            </a>
          </div>
        </div>
        <h4>Technologies used include:</h4>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div class='image'>
        <img src={image} alt='Screenshot of Tip Calculator' />
      </div>
    </article>
  );
};

export default CovidStats;
