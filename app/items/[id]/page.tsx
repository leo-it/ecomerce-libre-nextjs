import "./Item.scss";

import { Buttons } from "./Buttons";
import Image from "next/image";
import { ImageById } from "./ImageById";
import api from "../../api";

export default async function itemPage({
  params: { id },
}: {
  params: { id: string };
}) {
  //fetch
  const item = await api.item.fetch(id);

  return (
    <section className="grid gap-2">
      <div className="Item">
        {item ? (
          <>
            <div className="itemData">
              <div className="itemTop">
                <div className="itemImage">
                  <ImageById item={item} />
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
                  <Buttons item={item} />
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
