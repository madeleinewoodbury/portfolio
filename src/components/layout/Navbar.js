import { AiFillCode, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <a className='brand' href='#intro'>
              <AiFillCode aria-hidden='true' className='icon' />
              <span>Madeleine Woodbury</span>
            </a>
          </h1>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
        <li>
          <a href='https://github.com/madeleinewoodbury'>
            <AiFillLinkedin aria-hidden='true' className='icon' />
            <span className='sr-only'>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href='https://www.github.com'>
            <AiFillGithub aria-hidden='true' className='icon' />
            <span className='sr-only'>Github</span>
          </a>
        </li>
        <li>
          <a href='#resume' className='btn'>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
