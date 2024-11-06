import { CartIcon } from "../../Icons/ProductIcons";

export default function Button({ colors, iconColors, text, onToggleCart }) {
  return (
    <div
      className={`cursor-pointer rounded-md text-[0.8125rem] font-medium leading-5 flex justify-center items-center text-center mb-3 mx-3 flex-1 ring-1 ${colors}`}
      onClick={onToggleCart}
    >
      <div className="flex px-3 py-2 justify-center">
        <CartIcon className={`mr-2.5 h-5 w-5 flex-none ${iconColors}`} />
        {text}
      </div>
    </div>
  );
}
