"use client";

import React from "react";

export const ButtonDelete = ({ items, id }: { items: any; id: string }) => {
  const handleDelete = (id:string) => {
    if (items.hasOwnProperty(id)) {
      delete items[id];
      let objItems = JSON.stringify(items);
      localStorage.setItem("idsCar", objItems);
      window.location.reload();
    } else {
      // console.log("La clave no existe en el objeto principal:", items);
    }
  };
  return <button onClick={() => handleDelete(items.id)}>Eliminar</button>;
};
