import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Wishlist from "@/pages/wishlist/Wishlist";
import Login from "@/pages/login/Login";
import Layotu from "@/pages/layout/Layout";
import Cart from "./pages/cart/Cart";
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./pages/not-found/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layotu />}>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NotFound/>}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
