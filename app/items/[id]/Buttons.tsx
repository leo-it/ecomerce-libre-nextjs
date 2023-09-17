"use client";

import React, { FC } from "react";

import { useRouter } from "next/navigation";
import useStore from "@/app/store";

interface Item {
  id: string;
  title: string;
  thumbnail: string;
  // quantity: number;
  price: number;
  currency_id: string;
}
interface Props {
  item: Item;
}
export const Buttons: FC<Props> = ({ item }) => {
  const router = useRouter();
  const { setCarLength } = useStore();
  let arrayIds = [];

  const handleCar = (item: Item) => {
    const idObjectJSON = localStorage.getItem("idsCar");
    let idObject = {};

    if (idObjectJSON) {
      idObject = JSON.parse(idObjectJSON);
    }

    // @ts-ignore
    // Paso 2: Agregar un nuevo ID al objeto
    idObject[item.id] = {
      id: item.id,
      title: item.title,
      thumbnail: item.thumbnail,
      quantity: "1",
      price: item.price,
      currency_id: item.currency_id,
    };

    const idObjectActualizadoJSON = JSON.stringify(idObject);
    localStorage.setItem("idsCar", idObjectActualizadoJSON);
    let carLength = Object.keys(
      // @ts-ignore

      JSON.parse(localStorage.getItem("idsCar"))
    ).length;

    setCarLength(carLength);

    router.push("/car", { scroll: false });
  };
  return (
    <div className="grid gap-2">
      <button onClick={() => alert("Compra realizada correctamente")} className="itemBuy">
        Comprar
      </button>
      <button onClick={() => handleCar(item)} className="itemCar">
        Agregar al carrito
      </button>
    </div>
  );
};
