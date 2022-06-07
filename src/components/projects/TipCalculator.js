import image from '../../img/tip-calc.png';

const TipCalculator = () => {
  return (
    <article>
      <div class='text'>
        <h3>Tip Calculator</h3>
        <div class='info'>
          <p>
            This project was a coding challenge from{' '}
            <a href='https://www.frontendmentor.io/' target='_blank'>
              Frontend Mentor
            </a>
            . The app was built with React, the Context API, and Chakra UI for
            styling. Calculate the correct tip and total cost of the bill per
            person.
          </p>
          <div className='links'>
            <a
              href='https://tip-calculator-kohl-chi.vercel.app/'
              target='_blank'
            >
              View Site
            </a>
            <a
              href='https://github.com/madeleinewoodbury/tip-calculator'
              target='_blank'
            >
              View Code
            </a>
          </div>
        </div>
        <h4>Technologies used include:</h4>
        <ul>
          <li>React</li>
          <li>Chakra Ui</li>
        </ul>
      </div>
      <div class='image'>
        <img src={image} alt='Screenshot of Tip Calculator' />
      </div>
    </article>
  );
};

export default TipCalculator;
