import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

function ItemCount({ product }) {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: count });
    setCount(1);
    toast.success(`${product.title} agregado al carrito!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleIncrease = () => {
    if (count < product.stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>Stock disponible: {product.stock}</p> {}
      <div className="d-flex align-items-center mb-2">
        <button className="btn btn-outline-primary" onClick={handleDecrease}>
          -
        </button>
        <span className="mx-2">{count}</span>
        <button className="btn btn-outline-primary" onClick={handleIncrease}>
          +
        </button>
      </div>
      <button className="btn btn-primary" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
