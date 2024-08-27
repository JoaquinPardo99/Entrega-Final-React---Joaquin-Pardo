import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../main";
import { doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "items", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const product = {
            id: docSnap.id,
            title: docSnap.data().title,
            description: docSnap.data().description,
            price: docSnap.data().price,
            stock: docSnap.data().stock,
            image: docSnap.data().imageId,
            categoryId: docSnap.data().categoryId,
          };

          console.log("Producto obtenido:", product);

          setItem(product);
        } else {
          console.log("No se encontró el producto!");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) {
    return <div>Cargando detalles del producto...</div>;
  }

  if (!item) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div className="container mt-4">
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;
