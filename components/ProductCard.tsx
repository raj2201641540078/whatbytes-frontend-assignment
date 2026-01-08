"use client";

import { useCart } from "../context/CartContext";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, title, price, image }: Product) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">

      
      <img
  src={image}
  alt={title}
  className="h-28 w-full object-contain mb-3"
/>


      <h3 className="font-medium text-sm">{title}</h3>
      <p className="text-gray-700 font-semibold">${price}</p>

      <button
        onClick={() => addToCart({ id, title, price, image })}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
