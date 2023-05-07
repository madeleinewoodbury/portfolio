import image from '../../img/streaming-availability.png';

const StreamingAvailability = () => {
  return (
    <article>
      <div className='text'>
        <h4>API Project</h4>
        <h3>Streaming Availability</h3>
        <div className='info'>
          <p>
            This project was built with React and Vite as the build tool. The
            app fetches movies from the{' '}
            <a href='https://www.omdbapi.com/' target='_blank' rel='noreferrer'>
              OMDb API
            </a>{' '}
            and information about streaming availability from the{' '}
            <a
              href='https://rapidapi.com/gox-ai-gox-ai-default/api/ott-details/details'
              target='_blank'
              rel='noreferrer'
            >
              OTT API
            </a>
            . Search for movies and get information about the movie and where to
            stream it.
          </p>
          <div className='links'>
            <a
              href='https://streaming-availability-one.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              View Site
            </a>
            <a
              href='https://github.com/madeleinewoodbury/streaming-availability'
              target='_blank'
              rel='noreferrer'
            >
              View Code
            </a>
          </div>
        </div>
        <h4>Technologies used include:</h4>
        <ul>
          <li>React</li>
          <li>Vite</li>
          <li>React Query</li>
        </ul>
      </div>
      <div className='image'>
        <img src={image} alt='Screenshot of Streaming Availability' />
      </div>
    </article>
  );
};

export default StreamingAvailability;
