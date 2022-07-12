import image from '../../img/about.png';

const Info = () => {
  return (
    <section id='about'>
      <div className='container'>
        <article>
          <div className='text'>
            {/* <h2>About Me</h2> */}
            <div className='info'>
              <p>
                <span className='first-line'>I am a Web Developer</span> and an
                experienced multi-cam director. My passion for programming began
                when I discovered the endless possibilities of mixing technology
                and creativity.
                <br />
                <br />
                In my work as a newscast director I have experienced firsthand
                the importance of high-quality software and the difference it
                can make in a workplace environment. This is the reason why I am
                enthusiastic about finding new solutions through software
                development and to continually learn and improve upon my skills
                as a developer.
              </p>
            </div>
          </div>
          <div className='image'>
            <img src={image} alt='Profile of me' />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Info;
