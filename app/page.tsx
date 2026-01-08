"use client";

import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { products } from "../data/products";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [price, setPrice] = useState(1000);
  const [search, setSearch] = useState("");

  return (
    <>
      {/* Header */}
      <Header search={search} setSearch={setSearch} />
      <main className="max-w-7xl mx-auto p-6 rounded-lg">

      {/* <main className="max-w-7xl mx-auto p-6 bg-blue-50 rounded-lg"> */}
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">

          {/* Sidebar */}
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            price={price}
            setPrice={setPrice}
          />

          {/* Product Listing */}
          <section>
            <h1 className="text-xl font-semibold mb-5">
              Product Listing
            </h1>

            {/* 🔹 SINGLE GRID (ASSESSMENT STYLE) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6">

              {products
                .filter((product) =>
                  selectedCategory === "All"
                    ? true
                    : product.category === selectedCategory
                )
                .filter((product) => product.price <= price)
                .filter((product) =>
                  product.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((product) => {
                  // ⭐ SMARTPHONE AS FEATURED CARD
                  if (product.title === "Smartphone") {
                    return (
                      <ProductCard
                        key={product.id}
                        {...product}
                        featured
                      />
                    );
                  }

                  return (
                    <ProductCard
                      key={product.id}
                      {...product}
                    />
                  );
                })}

            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
