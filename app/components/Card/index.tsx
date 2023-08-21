import "./Card.scss";

import React from "react";

// import TruckIcon from "../../../public/img/ic_shipping.png";

const Card = ({ item }) => {
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
          {/*   {item.free_shipping ? (
              <img className="truckIcon" src={TruckIcon} alt="free shipping" />
            ) : (
              ""
            )} */}
          </span>
          <span className="productName">{item.title}</span>
        </div>
      </div>
      <div className="productLocation">{item.location}</div>
    </div>
  );
};

export default Card;
