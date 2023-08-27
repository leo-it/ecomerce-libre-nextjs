"use client";

import "./Car.scss";

import React, { useEffect, useState } from "react";

import Card from "../components/Card";

// import Swal from "sweetalert2";

const Car = () => {
  const [items, setItems] = useState({});
  useEffect(() => {
    const items = localStorage.getItem("idsCar");
    if (items) {
      setItems(JSON.parse(items));
    }
  }, []);
  // console.log(items);

  const renderedCards = [];
  const handleDelete = (id) => {
    if (items.hasOwnProperty(id)) {
      delete items[id];
      let objItems = JSON.stringify(items);
      localStorage.setItem("idsCar", objItems);
      window.location.reload();
    } else {
      // console.log("La clave no existe en el objeto principal:", items);
    }
  };
  for (const itemId in items) {
    if (items.hasOwnProperty(itemId)) {
      const item = items[itemId];
      renderedCards.push(
        <div key={item.id} className="flex">
          <Card item={item} />
          <button onClick={() => handleDelete(item.id)}>Eliminar</button>
        </div>
      );
    }
  }

  const deleteCar = () => {
    localStorage.setItem("idsCar", "");
    window.location.reload();
  };
  const buyCar = () => {
    localStorage.setItem("idsCar", "");
    window.location.reload();
    alert("Compra finalizada")
/*     Swal.fire(
      'Compra finalizada!',
      'success'
    ) */
  };
  return (
    <section>
      <article className="grid gap-4">{renderedCards}</article>

      {Object.keys(items).length > 0 ? (
        <div className="flex mt-10 gap-4">
          <button className=" flex itemDelete button">
            <p className="textButton" onClick={deleteCar}>
              Eliminar carrito
            </p>
          </button>
          <button onClick={buyCar} className=" flex itemBuy button">
            <p className="textButton">Comprar</p>
          </button>
        </div>
      ) : (
        <>No hay nada en el carrito</>
      )}
    </section>
  );
};

export default Car;
