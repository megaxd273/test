import './BurgerMenu.css';

function BurgerMenu({ active, setActive, header, items }) {
  return (
    <div className={active ? 'menu active' : 'menu'}>
      <div className="blur" />
      <div className="menu-content">
        <div className="menu-header">{header}</div>
        <ul>
          {items.map((el) => {
            return (
              <li>
                <a href={el.href}>{el.value}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
