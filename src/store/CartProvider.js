import { useReducer } from 'react';
import CartContext from './CartContext';

const initState = {
  items: [],
  totalAmount: 0,
};

function CartReducer(state, action) {
  if (action.type === 'ADD') {
    const updatedTotal =
      state.totalAmount + action.item.price * action.item.amount;

    const existingIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    const existingItem = state.items[existingIndex];

    let updatedItem;
    let updatedItems;

    if (existingItem) {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingIndex] = updatedItem;
    } else {
      updatedItem = {
        ...action.item,
      };
      updatedItems = state.items.concat(updatedItem);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotal,
    };
  }
  return initState;
}

function CartProvider(props) {
  const [cartState, DispatchAction] = useReducer(CartReducer, initState);
  const addItemHandler = (item) => {
    DispatchAction({ type: 'ADD', item: item });
  };
  const removeItemHandler = (id) => {
    DispatchAction({ type: 'REMOVE', id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
