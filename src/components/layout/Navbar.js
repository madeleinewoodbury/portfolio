import { Link } from 'react-router-dom';
import { AiFillCode, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav id='nav'>
      <div className='nav-container'>
        <ul>
          <li>
            <h1>
              <Link className='brand' to='/'>
                <AiFillCode aria-hidden='true' className='icon' />
                <span>Madeleine Woodbury</span>
              </Link>
            </h1>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
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
      </div>
    </nav>
  );
};

export default Navbar;
