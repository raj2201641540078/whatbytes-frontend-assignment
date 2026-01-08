"use client";

import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [price, setPrice] = useState(1000);

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 bg-blue-50 rounded-lg">
        
        {/* Sidebar */}
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          price={price}
          setPrice={setPrice}
        />

        {/* Product Section */}
        <section>
          <h1 className="text-xl font-semibold mb-5">
            Product Listing
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products
              .filter((product) =>
                selectedCategory === "All"
                  ? true
                  : product.category === selectedCategory
              )
              .filter((product) => product.price <= price)
              .map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
          </div>
        </section>

      </main>
    </>
  );
}
