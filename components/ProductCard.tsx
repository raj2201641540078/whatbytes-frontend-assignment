type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ title, price, image }: Product) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md">
      <img src={image} alt={title} className="h-32 mx-auto mb-4" />
      <h3 className="font-medium">{title}</h3>
      <p className="text-gray-600">${price}</p>
      <button className="mt-3 w-full bg-blue-600 text-white py-1 rounded">
        Add to Cart
      </button>
    </div>
  );
}
