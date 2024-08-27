import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../main";
import { collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const itemsCollection = collection(db, "items");
        let q;

        if (categoryId) {
          q = query(itemsCollection, where("categoryId", "==", categoryId));
        } else {
          q = itemsCollection;
        }

        const querySnapshot = await getDocs(q);
        const productsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          price: doc.data().price,
          stock: doc.data().stock,
          image: doc.data().imageId,
          categoryId: doc.data().categoryId,
        }));

        console.log("Productos obtenidos:", productsList);

        setProducts(productsList);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div className="container mt-4">
      <h1>{categoryId ? `Categoría: ${categoryId}` : "Todos los Productos"}</h1>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
