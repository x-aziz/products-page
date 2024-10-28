import React from "react";
import { useDispatch } from "react-redux";
import { increment, pushProduct } from "../Redux/userSlice";
function Cards({ data }) {
  const dispatch = useDispatch();
  return (
    <div className="Card">
      <img src={data.img} style={{ height: "150px", width: "100%" }} />
      <p>name : {data.name} </p>
      <p>color : {data.color} </p>
      <p>price : ${data.price} </p>
      <button
        onClick={() => {
          dispatch(increment());
          dispatch(pushProduct(data));
        }}
      >
        add to pannier
      </button>
    </div>
  );
}

export default Cards;
