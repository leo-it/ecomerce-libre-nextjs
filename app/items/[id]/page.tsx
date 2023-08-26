"use client";

import "./Item.scss";

import api from "../../api";
import { useRouter } from 'next/navigation'

//todo aplicartipado a toda
export default async function itemPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const router = useRouter()
  //fetch
  const item = await api.item.fetch(id);
  //handler
  let arrayIds = [];
  const handleCar = (item) => {
    const idObjectJSON = localStorage.getItem("idsCar");
    let idObject = {};

    if (idObjectJSON) {
      idObject = JSON.parse(idObjectJSON);
    }

    // Paso 2: Agregar un nuevo ID al objeto
    idObject[item.id] = {
      ...item,title:item.title,img:item.thumbnail, quantity: "1", price: parseFloat((parseFloat(item?.price)).toFixed(3))};
    };

    // Paso 3: Convertir el objeto actualizado a JSON y guardar en el LocalStorage
    const idObjectActualizadoJSON = JSON.stringify(idObject);
    localStorage.setItem("idsCar", idObjectActualizadoJSON);

    router.push("/car", { scroll: false });
  };

  return (
    <section className="grid gap-2">
      <div className="Item">
        {item ? (
          <>
            {/* <div className="itemBreadcrumb">
            <Breadcrumb categories={product.item.categories} />
          </div> */}
            <div className="itemData">
              <div className="itemTop">
                <div className="itemImage">
                  <img src={item.thumbnail} alt="" />
                </div>
                <div className="itemInfo">
                  <div className="itemDetails">
                    <span className="estadoItem">
                      {item.condition === "new" ? "Nuevo " : "Usado"}
                    </span>
                    {item.sold_quantity !== 0 ? (
                      <span className="ventasItem">
                        - {item.sold_quantity} vendidos
                      </span>
                    ) : null}
                  </div>
                  <div className="itemName">{item.title}</div>
                  <div className="itemPrice">
                    {" "}
                    {Number(item.price).toLocaleString("es-AR", {
                      style: "currency",
                      currency: item.currency_id,
                    })}
                  </div>
                  <div className="grid gap-2">
                    <button className="itemBuy">Comprar</button>
                    <button
                      onClick={() => handleCar(item)}
                      className="itemCar"
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
              <div className="itemDescription">
                <div className="itemDescriptionTitle">
                  Descripción del producto
                </div>
                <div className="itemDescriptionText"> {item.description}</div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
