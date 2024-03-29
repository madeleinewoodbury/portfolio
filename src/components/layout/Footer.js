import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <h2>
        Madeleine Woodbury <br />
        Developer
      </h2>
      <ul>
        <li>
          <a
            href='https://www.linkedin.com/in/madeleine-woodbury/'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillLinkedin aria-hidden='true' className='icon' />
            <span className='sr-only'>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href='https://github.com/madeleinewoodbury'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillGithub aria-hidden='true' className='icon' />
            <span className='sr-only'>Github</span>
          </a>
        </li>
        <li>
          <a
            href='mailto:mail@woodburycode.com'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillMail aria-hidden='true' className='icon' />
            <span className='sr-only'>Email me</span>
          </a>
        </li>
      </ul>
      <p>
        <small>&copy; 2023 Madeleine Woodbury. All rights reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
