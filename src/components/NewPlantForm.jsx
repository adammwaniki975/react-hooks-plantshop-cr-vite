import React from "react";

function NewPlantForm() {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}
import { useState } from "react";

function PlantForm({ onAddPlant }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlant({
      name,
      description,
      soldOut: false
    });

    setName("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Plant name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <button type="submit">Add Plant</button>
    </form>
  );
}

export default PlantForm;
export default NewPlantForm;
