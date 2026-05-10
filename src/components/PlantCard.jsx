import React from "react";

function PlantCard({ plant, onSoldOut }) {
  return (
    <div>
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>

      <p>Status: {plant.soldOut ? "Sold Out" : "Available"}</p>

      {!plant.soldOut && (
        <button onClick={() => onSoldOut(plant.id)}>
          Mark Sold Out
        </button>
      )}
    </div>
  );
}

export default PlantCard;
  return (
    <li className="card" data-testid="plant-item">
      <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>{"plant name"}</h4>
      <p>Price: {"plant price"}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );


export default PlantCard;
