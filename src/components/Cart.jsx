import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../main";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!buyer.name.trim()) {
      formErrors.name = "El nombre es obligatorio.";
    }

    if (!buyer.phone.trim() || isNaN(buyer.phone)) {
      formErrors.phone = "El teléfono solo debe contener números.";
    }

    if (
      !buyer.email.includes("@") ||
      !buyer.email.includes(".") ||
      buyer.email.indexOf("@") > buyer.email.lastIndexOf(".")
    ) {
      formErrors.email = "El email no es válido.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleCheckout = async () => {
    if (!validateForm()) {
      return;
    }

    const order = {
      buyer,
      items: cart,
      total: cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
      date: new Date().toISOString(),
    };

    try {
      await addDoc(collection(db, "orders"), order);
      clearCart();
      navigate("/thank-you");
    } catch (err) {
      console.error("Error al finalizar la compra:", err);
      setErrors({
        general: "Ocurrió un error al procesar la compra. Inténtalo de nuevo.",
      });
    }
  };

  const totalCart = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4 mb-5">
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "50px", marginRight: "10px" }}
                  />
                  <div>
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="mb-1">Cantidad: {item.quantity}</p>
                    <p className="mb-1">Precio unitario: ${item.price}</p>
                    <p className="mb-1">Total: ${item.price * item.quantity}</p>
                  </div>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemove(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <h3>Total del carrito: ${totalCart}</h3>

          <form>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={buyer.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">Teléfono</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={buyer.phone}
                onChange={handleInputChange}
                required
              />
              {errors.phone && (
                <div className="text-danger">{errors.phone}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={buyer.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && (
                <div className="text-danger">{errors.email}</div>
              )}
            </div>
            {errors.general && (
              <div className="alert alert-danger">{errors.general}</div>
            )}
            <button
              type="button"
              className="btn btn-success"
              onClick={handleCheckout}
            >
              Comprar
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Cart;
