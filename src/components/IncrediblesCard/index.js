import React from "react";
import "./style.css";

function IncrediblesCard(props) {
  return (
    <div className="card" onClick={() => props.clickCount(props.id)}>
      <div className="img-container">
        <img alt="" src={props.urlImage}/>
      </div>
    </div>
  );
}


export default IncrediblesCard;