import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, RemoveFromCart } from "../../store/slices/cartSlice";

export default function ProductTile({ item }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function handleAddToCart() {
    dispatch(AddToCart(item));
  }
  function handleRemoveFromCart() {
    dispatch(RemoveFromCart(item));
  }
  return (
    <div>
      <div className="group flex flex-col items-center h-[360px] border-2 border-red-900 rounded-xl">
        <div className="h-[180px] w-[180px] mt-6 flex">
          <img
            src={item?.image}
            alt={item?.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="w-[180px] m-[30px]
         flex justify-center items-center"
        >
          <h1 className="truncate font-semibold">{item?.title}</h1>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="text-white w-[220px] h-11 rounded-xl bg-red-900 font-semibold"
            onClick={
              cart.some((cartItem) => cartItem.id === item.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
          >
            {cart.some((cartItem) => cartItem.id === item.id)
              ? "Remove From cart"
              : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
