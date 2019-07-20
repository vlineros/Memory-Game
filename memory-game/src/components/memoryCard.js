import React from "react";
import "./memoryCard.css";

function MemoryCard(props) {
  const { imageUrl, clicked, checkIfClicked, id } = props;
  return (
    <div className="card mx-1">
      <div className="card-body">
        <img
          onClick={checkIfClicked}
          src={imageUrl}
          alt="memory card"
          className="card-img-top"
          clicked={clicked.toString()}
          id={id}
        />
      </div>
    </div>
  );
}

export default MemoryCard;
