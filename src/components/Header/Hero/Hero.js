import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero-container">
      <div className="offer">
        <h1 className="hero-text">
          The DUMPEST truck lineup
          <br />
          <span>Driving Progress</span>
        </h1>
        <Link className="hero-button" to="/trucks">
          <span>
            View all <strong>TRUCKS</strong>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
