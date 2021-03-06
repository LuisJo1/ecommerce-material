import React from "react";
import CheckoutPage from "./CheckoutPage";
import Navbar from "./Navbar";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./Footer";

const Home = ({ carrito, addCarrito, deleteCarrito, setSesionStatus }) => {
  return (
    <div>
      <Navbar setSesionStatus={setSesionStatus} carrito={carrito} />
      <Routes>
        <Route path="/" element={<Products addCarrito={addCarrito} />} />
        <Route
          path="/checkout-page"
          element={
            <CheckoutPage carrito={carrito} deleteCarrito={deleteCarrito} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default Home;
