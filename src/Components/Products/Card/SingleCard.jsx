import { useContext } from "react";
import { CartContext } from "../../../Contexts";
import Button from "./Button";

export default function SingleCard({ item }) {
  const { cartItems, handleToggleCart } = useContext(CartContext);

  return (
    <div className="relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
        />
      </div>
      <div className="mt-4 px-3 pb-4">
        <div>
          <h3 className="text-sm text-gray-700">{item.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{item.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${item.price}</p>
      </div>
      {cartItems.some((cartItem) => cartItem.id === item.id) ? (
        <Button
          colors="bg-red-500 text-white ring-red-500 hover:bg-red-600"
          iconColors="stroke-white"
          text="Remove From Cart"
          onToggleCart={() => handleToggleCart(item)}
        />
      ) : (
        <Button
          colors="bg-white text-slate-700 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900"
          iconColors="stroke-slate-400"
          text="Add To Cart"
          onToggleCart={() => handleToggleCart(item)}
        />
      )}
    </div>
  );
}
