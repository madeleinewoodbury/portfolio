import { AiFillCode, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <a className='brand' href='/'>
              <AiFillCode aria-hidden='true' className='icon' />
              <span>Madeleine Woodbury</span>
            </a>
          </h1>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='about.html'>About</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
        <li>
          <a href='www.linkedin.com' rel='noreferrer'>
            <AiFillLinkedin aria-hidden='true' className='icon' />
            <span className='sr-only'>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href='www.github.com' rel='noreferrer'>
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
