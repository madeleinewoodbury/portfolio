import image from '../img/about.png';

const About = () => {
  return (
    <section id='about'>
      <div className='container'>
        <article>
          <div className='text'>
            <h2>About Me</h2>
            <div className='info'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis doloremque quaerat labore? Perspiciatis tenetur,
                similique ad libero maiores velit illo eligendi necessitatibus.
                Maiores neque vero modi, repudiandae quae velit reiciendis.
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

export default About;
