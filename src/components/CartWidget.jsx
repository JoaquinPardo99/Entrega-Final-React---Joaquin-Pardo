import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <button className="btn btn-outline-light" onClick={handleCartClick}>
      <i className="bi bi-cart"></i> Carrito ({totalItems})
    </button>
  );
}

export default CartWidget;
