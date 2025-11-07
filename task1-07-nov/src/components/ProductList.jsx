import React from "react";

export default function ProductList({ products, addToCart }) {
  return (
    <div className="grid gap-3 mb-6">
      <h2 className="text-xl font-semibold">Available Products</h2>
      {products.map((product) => (
        <div
          key={product.id}
          className="flex justify-between border p-3 rounded-md"
        >
          <span>
            {product.name} - ${product.price}
          </span>
          <button
            className="bg-blue-600 text-white px-3 py-1 rounded"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
