import "./Card.scss";

import React, { FC } from "react";

// import TruckIcon from "../../../public/img/ic_shipping.png";
interface Item {
  id: string;
  title: string;
  thumbnail: string;
  quantity: number;
  price: number;
  currency_id: string;
  location: string;
}
interface Props {
  item: Item;
}
const Card: FC<Props> = ({ item }) => {
  // console.log("asd",item);

  return (
    <div className="Card">
      <div className="productData">
        <div className="image">
          <img src={item.thumbnail} alt="{item.title}" />
        </div>
        <div className="productDetails">
          <span className="price">
            {Number(item.price).toLocaleString("es-AR", {
              style: "currency",
              currency: item.currency_id,
            })}
          </span>
          <span className="productName">{item.title}</span>
        </div>
      </div>
      <div className="productLocation">{item.location}</div>
    </div>
  );
};

export default Card;
