import React from "react";
import { useDispatch } from "react-redux";
import { RemoveFromCart } from "../../store/slices/cartSlice";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(RemoveFromCart(cartItem));
  }
  return (
    <div className="flex items-center gap-[50px] bg-red-700 rounded-xl w-[42rem] max-w-2xl p-6 mb-2">
      <div className="h-28 rounded-xl flex-grow">
        <img src={cartItem.image} alt="" className="w-full h-full" />
      </div>
      <h1 className="truncate flex-grow max-w-32 text-center text-white">
        {cartItem.title}
      </h1>

      <div className="flex flex-grow justify-center items-center">
        <button
          className="text-white w-[220px] h-11 rounded-xl bg-red-900 font-semibold"
          onClick={handleRemoveFromCart}
        >
          Remove From cart
        </button>
      </div>
    </div>
  );
}
