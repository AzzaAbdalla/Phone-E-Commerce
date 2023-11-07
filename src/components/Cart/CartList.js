import React from "react";
import CartIem from "./CartItem";

export default function CartList({ value }) {
  const { cart } = value;
  return (
    <div className="container-fluid">
      {cart.map((item) => {
        return <CartIem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
}
