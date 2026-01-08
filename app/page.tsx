import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Product Section */}
        <section>
          <h1 className="text-lg font-semibold mb-4">
            Product Listing
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

      </main>
    </>
  );
}
