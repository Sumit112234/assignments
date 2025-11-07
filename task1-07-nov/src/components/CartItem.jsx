import React from "react";

export default function CartItem({ item, addToCart, removeFromCart, deleteFromCart }) {
  return (
    <div className="flex justify-between items-center border p-3 mb-2 rounded-md">
      <div>
        <p className="font-semibold">{item.name}</p>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.qty}</p>
      </div>
      <div className="space-x-2">
        <button className="bg-green-500 text-white px-2 rounded" onClick={() => addToCart(item)}>+</button>
        <button className="bg-yellow-500 text-white px-2 rounded" onClick={() => removeFromCart(item)}>-</button>
        <button className="bg-red-600 text-white px-3 py-1 rounded" onClick={() => deleteFromCart(item)}>Remove</button>
      </div>
    </div>
  );
}
