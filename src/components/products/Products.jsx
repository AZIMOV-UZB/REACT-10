import { useStateValue } from "@/context/Index";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Products = ({ data, title }) => {
  const navigate = useNavigate();
  const [_, dispatch] = useStateValue();
  let items = data?.map((product) => (
    <div className="border p-3 mb-7 relative" key={product.id}>
      <div className="w-full h-64 py-4 bg-gray-200 rounded-lg">
        <img
          className="w-full h-full object-contain duration-300 hover:scale-110"
          src={product.images[0]}
          alt="Photo"
        />
      </div>
      <div className="flex flex-col my-2  	gap-2">
        <p className="text-xl font-bold">{product.title}</p>
        <div className="flex items-center	px-2 gap-1">
        <FaStar className="text-yellow-300" />
        <p>
        {product.rating}</p>
        </div>
        <p className="bg-yellow-300 w-32  rounded

	px-3">{product.price} USD</p>
        <div className="absolute top-[20px] right-[20px] text-xl text-white">
          <button>
            <FaHeart
              onClick={() => {
                dispatch({ type: "ADD_TO_WISHLIST", payload: product });
                toast.success("Mahsulot  qo'shildi", {position: "bottom-right"
                });
              }}
              className="text-50px ease-in-out	 hover:text-red-600"
            />
          </button>
        </div>
        <button
          className="border bg-lime-700 py-1 text-[#fff] "
          onClick={() => {
            navigate(`/Cart`);
            dispatch({ type: "CART", payload: product });
            toast.success("Maxsulot qoshildi", {position: "bottom-right"
            });
          }}
        >
          Add Card
        </button>
      </div>
    </div>
  ));
  return (
    <div className="container mx-auto px-8">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <div className=" grid gap-2 grid-cols-1   md:grid-cols-2  lg:grid-cols-4 mb-11">{items}</div>
    </div>
  );
};

export default Products;
