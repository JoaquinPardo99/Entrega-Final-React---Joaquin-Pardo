import React from "react";
import { Link } from "react-router-dom";

function Item({ id, name, description, image }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <Link to={`/item/${id}`} className="btn btn-primary">
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
