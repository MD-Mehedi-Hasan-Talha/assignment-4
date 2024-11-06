import { useState } from "react";
import { CartContext } from "../Contexts";
import showToastMessage from "../utils/showToastMessage";
import textShortener from "../utils/textShortener";

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const handleToggleCart = (item) => {
    const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

    let shortTitle = textShortener(item.title, 10);

    if (isInCart) {
      const updatedCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== item.id
      );
      setCartItems(updatedCartItems);
      showToastMessage(`${shortTitle} has been removed from the cart.`);
    } else {
      const updatedCartItems = [...cartItems, item];
      setCartItems(updatedCartItems);
      showToastMessage(`${shortTitle} has been added to the cart.`);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, handleToggleCart }}>
      {children}
    </CartContext.Provider>
  );
}
