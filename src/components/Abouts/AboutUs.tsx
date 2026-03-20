import {Link, Outlet} from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      <ul className="links">
        <li>
          <Link to="site-mission">Mision del sitio</Link>
        </li>
        <li>
          <Link to="site-history">Historia del sitio</Link>
        </li>
      </ul>
      <p>Aquí puedes encontrar más información sobre nuestro sitio.</p>
      <Outlet />
    </div>
  );
}

export default AboutUs;
