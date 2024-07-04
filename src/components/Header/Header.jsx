import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between mb-[24px]">
      <h1 className="text-4xl text-red-900 capitalize font-semibold">
        <Link to={"/"}>Redux shopping cart</Link>
      </h1>
      <ul className="flex justify-center gap-5 items-center">
        <li className="font-semibold">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="font-semibold">
          <Link to={"/cart"}>Cart</Link>
        </li>
      </ul>
    </div>
  );
}
