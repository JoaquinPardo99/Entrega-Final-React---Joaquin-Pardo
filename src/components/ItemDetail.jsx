import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <div className="card bg-dark text-white mb-5">
      <img src={item.image} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>{" "}
        <p className="card-text">Precio: ${item.price}</p>
        <ItemCount product={item} />
      </div>
    </div>
  );
}

export default ItemDetail;
