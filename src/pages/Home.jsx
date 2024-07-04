import React, { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import ProductTile from "../components/ProductTile/ProductTile";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();

      if (result) {
        setLoading(false);
        setProducts(result);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="w-full ">
      {loading ? (
        <div className="flex justify-center items-center w-full min-h-screen">
          <ScaleLoader color="#7f1d1d" cssOverride={{ margin: "0px auto" }} />
        </div>
      ) : (
        <div className="min-h-[80vh] grid grid-cols-4 gap-5">
          {products &&
            products.map((productItem) => <ProductTile item={productItem} />)}
        </div>
      )}
    </div>
  );
}
