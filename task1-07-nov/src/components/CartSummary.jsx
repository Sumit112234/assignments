import React from "react";

export default function CartSummary({ cart }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="border p-4 rounded-md mb-4">
      <h2 className="text-lg font-semibold mb-2">Cart Summary</h2>
      <p>Total Items: {itemCount}</p>
      <p>Total Price: ${total.toFixed(2)}</p>
    </div>
  );
}
