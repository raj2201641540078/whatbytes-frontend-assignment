"use client";

type SidebarProps = {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  price: number;
  setPrice: (value: number) => void;
};

export default function Sidebar({
  selectedCategory,
  setSelectedCategory,
  price,
  setPrice,
}: SidebarProps) {
  return (
    <aside className="bg-blue-700 text-white p-4 rounded-xl h-fit shadow-md">
      <h2 className="font-semibold mb-4">Filters</h2>

      {/* Category */}
      <div className="mb-6">
        <p className="font-medium mb-2">Category</p>

        {["All", "Electronics", "Clothing", "Home"].map((cat) => (
          <label key={cat} className="flex items-center gap-2 mb-2 text-sm">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === cat}
              onChange={() => setSelectedCategory(cat)}
            />
            {cat}
          </label>
        ))}
      </div>

      {/* Price */}
      <div>
        <p className="font-medium mb-2">Price</p>
        <input
          type="range"
          min="0"
          max="1000"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs mt-1">
          <span>0</span>
          <span>{price}</span>
        </div>
      </div>
    </aside>
  );
}
