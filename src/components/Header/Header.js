import logo from '../../static/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import BurgerMenu from '../Menu/BurgerMenu';
import CartContext from '../../store/CartContext';

const menuItems = [
  { value: 'Home', href: '/' },
  { value: 'Trucks', href: '/trucks' },
  { value: 'Services', href: '/' },
  { value: 'About', href: '/' },
  { value: 'Contact us', href: '/' },
  { value: 'Cart', href: '/cart' },
  { value: 'Log in', href: '/' },
];

function Header({ onShowCart }) {
  const [menuActive, setMenuActive] = useState(false);
  const ctx = useContext(CartContext);
  const cartLength = ctx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);
  return (
    <header>
      <div className="header-container">
        <div className="header-menu">
          <Link to="/">
            <img className="logo-img" src={logo} alt="logo" />
          </Link>
          <nav className="header-nav">
            <div className="menu-item">
              <Link to="trucks">Trucks</Link>
            </div>
            <div className="menu-item">
              <Link to="/services">Services</Link>
            </div>
            <div className="menu-item">
              <Link to="/abouts">About</Link>
            </div>
            <div className="menu-item">
              <a href="#contacts">Contact us</a>
            </div>
          </nav>
          <div className="account-menu">
            <div onClick={() => onShowCart()}>
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 1024 1024"
                fill="#000000"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M800.8 952c-31.2 0-56-24.8-56-56s24.8-56 56-56 56 24.8 56 56-25.6 56-56 56z m-448 0c-31.2 0-56-24.8-56-56s24.8-56 56-56 56 24.8 56 56-25.6 56-56 56zM344 792c-42.4 0-79.2-33.6-84-76l-54.4-382.4-31.2-178.4c-2.4-19.2-19.2-35.2-37.6-35.2H96c-13.6 0-24-10.4-24-24s10.4-24 24-24h40.8c42.4 0 80 33.6 85.6 76l31.2 178.4 54.4 383.2C309.6 728 326.4 744 344 744h520c13.6 0 24 10.4 24 24s-10.4 24-24 24H344z m40-128c-12.8 0-23.2-9.6-24-22.4-0.8-6.4 1.6-12.8 5.6-17.6s10.4-8 16-8l434.4-32c19.2 0 36-15.2 38.4-33.6l50.4-288c1.6-13.6-2.4-28-10.4-36.8-5.6-6.4-12.8-9.6-21.6-9.6H320c-13.6 0-24-10.4-24-24s10.4-24 24-24h554.4c22.4 0 42.4 9.6 57.6 25.6 16.8 19.2 24.8 47.2 21.6 75.2l-50.4 288c-4.8 41.6-42.4 74.4-84 74.4l-432 32c-1.6 0.8-2.4 0.8-3.2 0.8z"
                  fill=""
                />
              </svg>
              <span>{cartLength}</span>
            </div>
            <a href="#login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.04492 8C9.04492 5.79086 10.8358 4 13.0449 4C15.2541 4 17.0449 5.79086 17.0449 8C17.0449 10.2091 15.2541 12 13.0449 12C10.8358 12 9.04492 10.2091 9.04492 8ZM13.0449 3C10.2835 3 8.04492 5.23858 8.04492 8C8.04492 9.75185 8.94587 11.2933 10.3097 12.1862C7.72068 12.5891 6.3127 13.6203 5.60801 15.0318C5.16544 15.9183 5.03311 16.8982 5.00331 17.8336C4.98835 18.3032 4.99913 18.7716 5.01309 19.2188L5.02136 19.4746C5.0331 19.8322 5.04428 20.1725 5.04428 20.5C5.04428 20.7761 5.26814 21 5.54428 21C5.82042 21 6.04428 20.7761 6.04428 20.5C6.04428 20.1544 6.03241 19.7935 6.0206 19.4348L6.01261 19.1876C5.99874 18.7434 5.98891 18.3015 6.0028 17.8655C6.0307 16.9897 6.15391 16.1771 6.5027 15.4785C7.16758 14.1468 8.78266 13 12.9962 13C17.2098 13 18.8248 14.1468 19.4896 15.4785C19.8383 16.1771 19.9615 16.9897 19.9894 17.8655C20.0033 18.3015 19.9934 18.7434 19.9796 19.1876L19.9716 19.4345C19.9597 19.7934 19.9479 20.1543 19.9479 20.5C19.9479 20.7761 20.1717 21 20.4479 21C20.724 21 20.9479 20.7761 20.9479 20.5C20.9479 20.1724 20.9591 19.8321 20.9708 19.4745L20.9708 19.4743L20.9791 19.2188C20.993 18.7716 21.0038 18.3032 20.9889 17.8336C20.9591 16.8982 20.8268 15.9183 20.3843 15.0318C19.6868 13.6346 18.3002 12.61 15.7611 12.1986C17.1356 11.3076 18.0449 9.76001 18.0449 8C18.0449 5.23858 15.8063 3 13.0449 3Z"
                  fill="black"
                ></path>
              </svg>
            </a>
          </div>
          <div
            className="button-burger"
            onClick={() => setMenuActive(!menuActive)}
          >
            <div className="button-burger-menu">
              {!menuActive && (
                <>
                  <svg
                    width="18"
                    height="2"
                    viewBox="0 0 18 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M1 1H17"
                      stroke="#403F3D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width="18"
                    height="2"
                    viewBox="0 0 18 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M1 1H17"
                      stroke="#403F3D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width="18"
                    height="2"
                    viewBox="0 0 18 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M1 1H17"
                      stroke="#403F3D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </div>
          </div>
          <BurgerMenu
            showCart={onShowCart}
            active={menuActive}
            setActive={setMenuActive}
            header={'Menu'}
            items={menuItems}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
