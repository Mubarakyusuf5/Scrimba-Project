import React from "react";
import "./Card2.css";

const Card2 = (props) => {
  let result;

  if (props.openSpots === 0) {
    result = "SOLD OUT";
  } else if (props.location === "Online") {
    result = "ONLINE";
  }
  return (
    <>
      <div className="card2-container">
        <div className="img-con">
          <img src={`src/assets/${props.coverImg}`} alt="" />
          {result && <div className="badge">{result}</div>}
        </div>
        <div className="con">
          <p className="rating">
            <img src={props.rateimg} alt="" />
            {props.stats.rating}
            <span>
              ({props.stats.reviewCount})&bull;{props.location}
            </span>
          </p>
          <p className="title">{props.title}</p>
          <p className="price">
            <b>from ${props.price}</b> / person
          </p>
        </div>
      </div>
    </>
  );
};

export default Card2;
