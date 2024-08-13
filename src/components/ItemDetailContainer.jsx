import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const foundItem = productsData.find((product) => product.id === id);
    setItem(foundItem);
  }, [id]);

  if (!item) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card bg-dark text-white">
        <img src={item.image} className="card-img-top" alt={item.name} />
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
