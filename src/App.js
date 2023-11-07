import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/" element={<ProductList />} />
          <Route path="/details/" element={<Details />} />
          <Route path="/cart/" element={<Cart />} />
          <Route path="*" element={<Default />} />
        </Routes>
        <Modal />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
