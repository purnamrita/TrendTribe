import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success"

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products/:category" element={<ProductList />} />

        <Route path="/product/:id" element={<Product />} />
        
        <Route path="/cart" element={<Cart />} />

        <Route path="/success" element={ <Success />} />

        <Route path="/login" element={user ? <Home/> :  <Login />} />

        <Route path="/register" element={user ? <Home/> : <Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
