import Hero from './Hero/Hero';
import logo from '../../static/dumpest-trucks-high-resolution-logo-transparent.png';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-menu">
          <img className="logo-img" src={logo} alt="logo" />
          <nav className="header-nav">
            <div className="menu-item">
              <a href="#trucks">Trucks</a>
            </div>
            <div className="menu-item">
              <a href="#services">Services</a>
            </div>
            <div className="menu-item">
              <a href="#abouts">About</a>
            </div>
            <div className="menu-item">
              <a href="#contacts">Contact us</a>
            </div>
          </nav>
          <div className="account-menu">
            <div className="menu-item">
              <a href="#login"> Mock!!!!!</a>
            </div>
          </div>
        </div>
      </div>
      <Hero />
    </header>
  );
}

export default Header;
