import React from "react";
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div className="card bg-dark text-white">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Precio: ${product.price}</p>
        <Link to={`/item/${product.id}`} className="btn btn-primary">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
