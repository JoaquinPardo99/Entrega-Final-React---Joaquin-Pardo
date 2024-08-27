import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import ThankYou from "./components/ThankYou";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          {" "}
          {}
          <NavBar />
          <div className="container mt-4 flex-grow-1">
            {" "}
            {}
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </div>
          <Footer /> {}
        </div>
        <ToastContainer /> {}
      </Router>
    </CartProvider>
  );
}

export default App;
