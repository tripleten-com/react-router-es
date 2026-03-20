import { Outlet, Link } from 'react-router-dom';
import './AboutMe.css';

function AboutMe(): React.JSX.Element {

  return (
    <div className='about'>
      <ul className='links'>
        <li>
          <Link to='my-story'>Mi historia</Link>
        </li>
        <li>
          <Link to='hobbies'>Hobbies</Link>
        </li>
        <li>
          <Link to='contact'>Mi información de contacto</Link>
        </li>
      </ul>
      <p>Soy una persona sencilla. Veo Emojis, escribo reseñas.</p>
      <Outlet />
    </div>
  );
}

export default AboutMe;