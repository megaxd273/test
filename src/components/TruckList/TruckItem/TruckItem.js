import './TruckItem.css';
import { useContext } from 'react';
import CartContext from '../../../store/CartContext';

const TruckItem = ({ id, photo, name, description, price }) => {
  const ctx = useContext(CartContext);
  function clickHandler() {
    ctx.addItem({
      id,
      name,
      amount: 1,
      price,
    });
  }
  return (
    <li key={id} className="truck">
      <div className="img-container">
        <img src={photo} alt="truck" />
        <div class="overlay">
          <p>Click to learn more</p>
        </div>
      </div>
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="truck-offer">
          <span className="price">${price}</span>
          <button onClick={clickHandler}>Add to Cart</button>
        </div>
      </div>
    </li>
  );
};
export default TruckItem;
