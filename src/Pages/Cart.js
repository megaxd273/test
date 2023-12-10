import Modal from '../components/UI/Modal';
import { useContext } from 'react';
import CartContext from '../store/CartContext';
import CartItem from '../components/CartItem/CartItem';
import './Cart.css';

function Cart({ onHideCart }) {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount}`;
  function removeHandler(id) {
    ctx.removeItem(id);
  }
  function addHandler(item) {
    ctx.addItem({ ...item, amount: 1 });
  }
  const cartItems = (
    <ul className="cart-items">
      {ctx.items.map((el) => (
        <CartItem
          key={el.id}
          name={el.name}
          price={el.price}
          amount={el.amount}
          onAdd={addHandler.bind(null, el)}
          onRemove={removeHandler.bind(null, el.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal hide={onHideCart}>
      Cart
      {cartItems}
      <div className="total">
        <span>Total:</span>
        <span>{totalAmount}</span>
      </div>
      <div className="cart-actions">
        <button className="button-close" onClick={onHideCart}>
          Close
        </button>
        {ctx.items.length > 0 && (
          <button className="button-order">Order</button>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
