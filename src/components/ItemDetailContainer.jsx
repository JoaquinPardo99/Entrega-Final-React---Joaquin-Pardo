// src/components/ItemDetailContainer.jsx
import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products"; // Asegúrate de importar los productos

function ItemDetailContainer() {
  const { id } = useParams();

  // Buscar el producto por su ID en el array de productos
  const item = products.find((product) => product.id === id);

  // Si no se encuentra el producto, mostramos un mensaje de error
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
