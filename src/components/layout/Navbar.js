import { NavLink, Link } from 'react-router-dom';
import { AiFillCode, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
const Navbar = () => {
  return (
    <nav>
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
          <NavLink to='#projects'>Projects</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
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
