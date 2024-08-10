import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

function ItemDetailContainer() {
  const { id } = useParams();

  const item = products.find((product) => product.id === id);

  if (!item) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card bg-dark text-white">
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
          <a href="#" className="btn btn-primary">
            Agregar al carrito
          </a>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
