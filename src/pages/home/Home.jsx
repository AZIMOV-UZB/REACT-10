import React from "react";
// import Child from "./Child";
import { useStateValue } from "@/context/Index";
import Products from "@/components/products/Products";
import { useFetch } from "@/hooks/useFetch";

const Home = () => {
  const { data, loading } = useFetch("/products", { limit: 16 });

  return (
    <div>
      <h2 className="text-center text-4xl font-bold py-5">Home</h2>
      <Products  title={"New products"} data={data?.products} />
      {loading && <div className="loader m-auto"></div>}
    </div>
  );
};

export default Home;
