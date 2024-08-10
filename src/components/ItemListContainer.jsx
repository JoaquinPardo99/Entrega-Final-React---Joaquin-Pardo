import React from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import products from "../data/products";

function ItemListContainer() {
  const { categoryId } = useParams();

  const filteredProducts = categoryId
    ? products.filter(
        (product) => product.category.toLowerCase() === categoryId.toLowerCase()
      )
    : products;

  return (
    <div>
      <h1>{categoryId ? `Categoría: ${categoryId}` : "Catálogo"}</h1>
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Item
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
