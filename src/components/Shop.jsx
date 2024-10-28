import React from "react";
import { useSelector } from "react-redux";

function Shop() {
  const info = useSelector((state) => state.User.product);
  return (
    <div className="shop">
      {info.map((item, i) => (
        <div key={i} className="container_shop">
          <div className="part_right">
            <img
              src={item.img}
              style={{ height: "65px", width: "100%" }}
              alt=""
            />{" "}
          </div>
          <div>
            <div className="part_left">
              <p>{item.name}</p>
              <p>{item.color}</p>
              <p>${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;
