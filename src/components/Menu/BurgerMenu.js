import './BurgerMenu.css';
import { Link } from 'react-router-dom';

function BurgerMenu({ showCart, active, setActive, header, items }) {
  return (
    <>
      <div
        className={active ? 'blur' : 'disblur'}
        onClick={() => setActive(false)}
      />
      <div
        className={active ? 'menu active' : 'menu'}
        onClick={() => setActive(false)}
      >
        <div className="menu-content">
          <div className="menu-header">
            {header}
            <div className="button-burger" onClick={() => setActive(false)}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L17 17M1 17L17 1L1 17Z"
                  stroke="#403F3D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <ul>
            {items.map((el) => {
              return (
                <li key={el.value}>
                  {el.value === 'Cart' ? (
                    <Link to={el.href} onClick={() => showCart()}>
                      {el.value}
                    </Link>
                  ) : (
                    <Link to={el.href}>{el.value}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
