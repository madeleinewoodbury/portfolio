import image from '../../img/tiny-chat-rooms.png';

const TinyChatRooms = () => {
  return (
    <article>
      <div className='text'>
        <h4>Realtime App</h4>
        <h3>Tiny Chat Rooms</h3>
        <div className='info'>
          <p>
            A Realtime Chat Application built with React on the front-end and
            Node.js and Socket.io on the server side.
          </p>
          <div className='links'>
            <a
              href='https://tiny-chat-rooms.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              View Site
            </a>
            <a
              href='https://github.com/madeleinewoodbury/tiny-chat-rooms'
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
          <li>Node.js</li>
          <li>Socket.io</li>
        </ul>
      </div>
      <div className='image'>
        <img src={image} alt='Screenshot of Tiny Chat Rooms' />
      </div>
    </article>
  );
};

export default TinyChatRooms;
