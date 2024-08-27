import React from "react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div className="container mt-4 text-center">
      <h1>Gracias por su compra!</h1>
      <p>Su pedido ha sido procesado.</p>
      <Link to="/" className="btn btn-primary">
        Volver al catálogo
      </Link>
    </div>
  );
}

export default ThankYou;
