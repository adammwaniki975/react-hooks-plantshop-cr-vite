import React from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  return (
    <ul className="cards">{/* render PlantCards components in here */}</ul>
  );
}

export default PlantList;
import PlantCard from "./PlantCard";

function PlantList({ plants, onSoldOut }) {
  return (
    <div>
      {plants.map(plant => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onSoldOut={onSoldOut}
        />
      ))}
    </div>
  );
}

export default PlantList;