"use client";

import { ShoppingCart, Search } from "lucide-react";
import { useCart } from "../context/CartContext";

type HeaderProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function Header({ search, setSearch }: HeaderProps) {
  const { cartCount } = useCart(); // ✅ use cartCount

  return (
    <header className="bg-blue-700 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        {/* Logo */}
        <div className="text-white font-bold text-lg">
          Logo
        </div>

        {/* Search */}
        <div className="flex items-center bg-blue-600 rounded-md px-3 py-1 w-full max-w-md">
          <Search size={18} className="text-white" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products..."
            className="bg-transparent outline-none text-white placeholder-blue-200 px-2 w-full"
          />
        </div>

        {/* Cart */}
        <button className="bg-blue-800 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <ShoppingCart size={18} />
          Cart ({cartCount})
        </button>

      </div>
    </header>
  );
}
