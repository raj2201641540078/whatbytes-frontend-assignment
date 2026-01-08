"use client";

import { useCart } from "../context/CartContext";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  featured?: boolean;
};

export default function ProductCard({
  id,
  title,
  price,
  image,
  featured = false,
}: ProductCardProps) {
  const { addToCart } = useCart(); // ✅ THIS WAS MISSING

  return (
    <div
      className={`bg-white rounded-xl shadow p-4 flex flex-col ${
        featured ? "lg:col-span-2 row-span-2" : ""
      }`}
    >
      <img
        src={image}
        alt={title}
        className={`mx-auto object-contain ${
          featured ? "h-64" : "h-40"
        }`}
      />

      <h3 className="font-semibold mt-4">{title}</h3>
      <p className="font-bold mb-3">${price}</p>

      {featured && (
        <p className="text-sm text-gray-600 mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      )}

      {/* ✅ NOW BUTTON ACTUALLY WORKS */}
      <button
        onClick={() =>
          addToCart({
            id,
            title,
            price,
            image,
          })
        }
        className="bg-blue-600 text-white w-full py-2 rounded mt-auto"
      >
        Add to Cart
      </button>
    </div>
  );
}
