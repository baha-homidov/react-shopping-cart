import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/Store";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App(props) {
  const [cart, setCart] = useState([]);

  function setCartCallback(newCart) {
    setCart(newCart);
  }

  const storeInventory = [
    {
      name: "Adidas NMD_V3",
      index: 0,
      price: 169,
      imgURL:
        "https://static1.adidas.com.cn/ecp-product/cdn-image/article/GX2088/product/plp/0/GX2088_SLC_eCom_1659522639748.jpg?im=Resize=(1000,1000)",
    },
    {
      name: "Adidas SUPERSTAR Leather Head",
      index: 1,
      price: 139,
      imgURL:
        "https://static1.adidas.com.cn/ecp-product/cdn-image/article/HQ6456/product/plp/0/HQ6456_SLC_eCom_1660704372994.jpg?im=Resize=(1000,1000)",
    },
    {
      name: "Adidas SUPERSTAR White Leather",
      index: 2,
      price: 149,
      imgURL:
        "https://static1.adidas.com.cn/ecp-product/cdn-image/article/H00193/product/plp/0/H00193_SLC_eCom_1659595531244.jpg?im=Resize=(1000,1000)",
    },
    {
      name: "Adidas SUPERSTAR Black Edition",
      index: 3,
      price: 150,
      imgURL:
        "https://static1.adidas.com.cn/ecp-product/cdn-image/article/EG4957/product/plp/0/EG4957_SLC_eCom_1659592893634.jpg?im=Resize=(1000,1000)",
    },
    {
      name: "Adidas SUPERSTAR Vegan Leather",
      index: 4,
      price: 119,
      imgURL:
        "https://static1.adidas.com.cn/ecp-product/cdn-image/article/GY0984/product/plp/0/GY0984_SLC_eCom_1659594608325.jpg?im=Resize=(1000,1000)",
    },
    {
      name: "Adidas NEOx",
      index: 5,
      price: 109,
      imgURL:
        "https://static1.adidas.com.cn/ecp-product/cdn-image/article/GY2187/product/plp/0/GY2187_SLC_eCom_1660885225125.jpg?im=Resize=(1000,1000)",
    },
    {
      name: "Adidas neo HOOPS 3.0 MID",
      index: 6,
      price: 99,
      imgURL:
        "https://static1.adidas.com.cn/ecp-product/cdn-image/article/GY4747/product/plp/0/GY4747_SLC_eCom_1661224584532.jpg?im=Resize=(1000,1000)",
    },
    {
      name: "Adiidas neo FUTRO MIXR",
      index: 7,
      price: 150,
      imgURL:
        "https://static1.adidas.com.cn/ecp-product/cdn-image/article/HP9674/product/plp/0/HP9674_SLC_eCom_1659523606999.jpg?im=Resize=(1000,1000)",
    },
    {
      name: "Adidas LUXE MID",
      index: 8,
      price: 179,
      imgURL:
        "https://static1.adidas.com.cn/ecp-product/cdn-image/article/GW4355/product/plp/0/GW4355_SLC_eCom_1659582046853.jpg?im=Resize=(1000,1000)",
    },
    {
      name: "Adidas Campus ADV",
      index: 9,
      price: 139,
      imgURL:
        "https://static1.adidas.com.cn/ecp-product/cdn-image/article/GY6914/product/plp/0/GY6914_SLC_eCom_1660885262141.jpg?im=Resize=(1000,1000)",
    },
    {
      name: "Adidas DROP STEP SE",
      index: 10,
      price: 129,
      imgURL:
        "https://static1.adidas.com.cn/ecp-product/cdn-image/article/GV9447/product/plp/0/GV9447_SLC_eCom_1660886142123.jpg?im=Resize=(1000,1000)",
    },
    // {
    //   name: "Adidas GAZELLE",
    //   index: 11,
    //   price: 109,
    //   imgURL:
    //     "https://static1.adidas.com.cn/ecp-product/cdn-image/article/BB5487/product/plp/0/BB5487_SLC_eCom_1660900958372.jpg?im=Resize=(1000,1000)",
    // },
    {
      name: "Adidas OZELIA",
      index: 12,
      price: 99,
      imgURL:
        "https://static1.adidas.com.cn/ecp-product/cdn-image/article/H04255/product/plp/0/H04255_SLC_eCom_1659522634043.jpg?im=Resize=(1000,1000)",
    },
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
          <Route
            path="/checkout"
            element={<Checkout />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
