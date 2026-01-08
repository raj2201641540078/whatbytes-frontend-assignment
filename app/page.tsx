import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

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
        </section>

      </main>
    </>
  );
}
