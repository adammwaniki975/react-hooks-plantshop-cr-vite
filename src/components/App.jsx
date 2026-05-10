import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;import { useState, useEffect } from "react";
import PlantList from "./PlantList";
import PlantForm from "./PlantForm";
import SearchBar from "./SearchBar";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ 1. Fetch plants on page load
  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then(res => res.json())
      .then(data => setPlants(data));
  }, []);

  // ✅ 2. Add plant (POST)
  function addPlant(newPlant) {
    fetch("http://localhost:3000/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant)
    })
      .then(res => res.json())
      .then(createdPlant => {
        setPlants([...plants, createdPlant]);
      });
  }

  // ✅ 3. Mark sold out (PATCH)
  function markSoldOut(id) {
    fetch(`http://localhost:3000/plants/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ soldOut: true })
    })
      .then(res => res.json())
      .then(updatedPlant => {
        setPlants(
          plants.map(p => (p.id === updatedPlant.id ? updatedPlant : p))
        );
      });
  }

  // ✅ 4. Search filter
  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <PlantForm onAddPlant={addPlant} />

      <PlantList plants={filteredPlants} onSoldOut={markSoldOut} />
    </div>
  );
}

export default App;