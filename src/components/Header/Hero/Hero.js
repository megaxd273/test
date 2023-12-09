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
        <p className="hero-small-text">
          The story of DUMPEST Trucks so far isn't just about the process of
          building, creating, developing and refining our vehicles. True,
          there's a fascinating story to be told there - one that includes all
          of our iconic models, ground-breaking technologies and the innovations
          that brought us this far.
        </p>
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
