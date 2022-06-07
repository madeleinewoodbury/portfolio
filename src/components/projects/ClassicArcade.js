import image from '../../img/classic-arcade-game.png';

const ClassicArcade = () => {
  return (
    <article>
      <div class='text'>
        <h4>Object Oriented JavaScript</h4>
        <h3>Classic Arcade Game</h3>
        <div class='info'>
          <p>
            This is a classic frogger-like arcade game where the goal is for the
            player to collect as many gems as possible and reach the star at the
            top before the timer runs out. Created with Object Oriented
            JavaScript.
          </p>
          <div className='links'>
            <a
              href='https://madeleinewoodbury.github.io/arcade-game-udacity/'
              target='_blank'
              rel='noreferrer'
            >
              View Site
            </a>
            <a
              href='https://github.com/madeleinewoodbury/arcade-game-udacity'
              target='_blank'
              rel='noreferrer'
            >
              View Code
            </a>
          </div>
        </div>
        <h4>Technologies used include:</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
      <div class='image'>
        <img src={image} alt='Screenshot of Classic Arcade Game' />
      </div>
    </article>
  );
};

export default ClassicArcade;
