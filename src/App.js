import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/Store";
import ProductPage from "./components/ProductPage";
function App() {
  const [cart, setCart] = useState([]);

  function pushToCart(item) {
    let newCart = [];
    newCart = Object.assign(newCart, cart);
    newCart.push(item);
    setCart(newCart);
  }

  const storeInventory = [
    { name: "Shoe 1" },
    { name: "Shoe 2" },
    { name: "Shoe 3" },
    { name: "Shoe 4" },
  ];
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nav" element={<Navbar />} />
          <Route
            path="/store"
            element={
              <Store
                storeInventory={storeInventory}
                cart={cart}
                pushToCart={pushToCart}
              />
            }
          />
          {storeInventory.map((item, index) => {
            return (
              <Route
                key={index}
                path={`/store/${index}`}
                element={<ProductPage
                  {...item}
                  pushToCart={pushToCart}
                  />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
