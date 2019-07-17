import React from "react";
import "./memoryCard.css";

function MemoryCard(props) {
  const { imageUrl, clicked } = props;
  return (
    <div className="card mx-1">
      <div className="card-body">
        <img src={imageUrl} alt="memory card" className="card-img-top" />
        <p>{clicked}</p>
      </div>
    </div>
  );
}

export default MemoryCard;
