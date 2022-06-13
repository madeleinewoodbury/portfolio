import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiGit,
} from 'react-icons/si';

const Skills = () => {
  return (
    <section id='skills' className='bg-dark'>
      <div className='container'>
        <h2>Technical Skills</h2>
        <ul>
          <li>
            <span>
              <SiHtml5 />
            </span>
            <span>HTML</span>
          </li>
          <li>
            <span>
              <SiCss3 />
            </span>
            <span>CSS</span>
          </li>
          <li>
            <span>
              <SiJavascript />
            </span>
            <span>JavaScript</span>
          </li>
          <li>
            <span>
              <SiNodedotjs />
            </span>
            <span>Node.js</span>
          </li>
          <li>
            <span>
              <SiReact />
            </span>
            <span>React</span>
          </li>
          <li>
            <span>
              <SiGit />
            </span>
            <span>Git</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
