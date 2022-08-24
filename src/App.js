import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/Store";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";

function App(props) {
  const [cart, setCart] = useState([]);

  function setCartCallback(newCart) {
    setCart(newCart);
  }

  const storeInventory = [
    { name: "Shoe 1", index: 0, price: 120 },
    { name: "Shoe 2", index: 1, price: 130 },
    { name: "Shoe 3", index: 2, price: 140 },
    { name: "Shoe 4", index: 3, price: 150 },
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
                pushToCart={setCartCallback}
              />
            }
          />
          {storeInventory.map((item, index) => {
            return (
              <Route
                key={index}
                path={`/store/${index}`}
                element={
                  <ProductPage
                    {...item}
                    setCartCallback={setCartCallback}
                    cart={cart}
                  />
                }
              />
            );
          })}
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCartCallback={setCartCallback}
                storeInventory={storeInventory}
              />
            }
          />
        </Routes>
      </BrowserRouter>

      {cart.map((item, index) => {
        return (
          <>
            <div>
              Name: {item.name} Index: {item.index} Quantity: {item.quantity}{" "}
              Price: {item.price}
            </div>
          </>
        );
      })}
    </>
  );
}

export default App;
