import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ProductCard from "./components/ProductCard";
interface prod {
  productName: string;
  price: number;
  rating: Float64Array;
  discount: number;
  availability: string;
}
function App() {
  const [products, setProducts] = useState<prod[]>();

  const fetchProds = () => {
    axios
      .get("http://localhost:3000/categories/Phone/products", {
        params: {
          top: 10,
          minPrice: 10,
          maxPrice: 10000,
        },
      })
      .then((res) => {
        setProducts(res.data?.data);
      });
  };

  useEffect(() => {
    fetchProds();
  }, []);

  return (
    <>
      <div className="bg-red-400 underline">All Product</div>
      <div className="grid grid-cols-6">
        {products?.length && products.map((x) => <ProductCard data={x} />)}
      </div>
    </>
  );
}

export default App;
