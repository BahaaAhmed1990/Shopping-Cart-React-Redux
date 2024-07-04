import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/CartTile/CartTile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  console.log(cart, totalCart);
  return (
    <>
      {cart && cart.length ? (
        <>
          <div className="container grid grid-cols-2 gap-14">
            <div className="min-h-[80vh]">
              <div className="flex flex-col justify-center items-center">
                {cart && cart.length
                  ? cart.map((cartItem) => <CartTile cartItem={cartItem} />)
                  : null}
              </div>
            </div>
            <div className="flex flex-col items-end justify-center">
              <h1>Cart summary</h1>
              <p>
                <span className="font-bold text-gray-800">items Number</span>{" "}
                <span>{cart.length}</span>
              </p>
              <p>
                <span className="font-bold text-gray-800">total price</span>{" "}
                <span>{totalCart.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[500px] flex flex-col items-center justify-center gap-2">
          <h1 className="text-gray-800">No Items Added</h1>
          <Link to={"/"}>
            <button className="text-white w-[220px] h-11 rounded-xl bg-red-900 font-semibold">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
