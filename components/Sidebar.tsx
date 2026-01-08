export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 bg-blue-700 text-white p-4 rounded-lg">
      
      <h2 className="font-semibold mb-4">Filters</h2>

      {/* Category */}
      <div className="mb-6">
        <p className="font-medium mb-2">Category</p>

        {["All", "Electronics", "Clothing", "Home"].map((cat) => (
          <label key={cat} className="flex items-center gap-2 mb-2">
            <input type="radio" name="category" />
            {cat}
          </label>
        ))}
      </div>

      {/* Price */}
      <div>
        <p className="font-medium mb-2">Price</p>
        <input type="range" min="0" max="1000" className="w-full" />
        <div className="flex justify-between text-sm">
          <span>0</span>
          <span>1000</span>
        </div>
      </div>

    </aside>
  );
}
