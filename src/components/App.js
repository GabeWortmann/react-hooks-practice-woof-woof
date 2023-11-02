import React, { useState, useEffect } from "react";

function App() {
  const [pets, setPups] = useState([])

  useEffect(() => {
    const fetchPupData = () => {
      fetch("http://localhost:3001/pups")
        .then((res) => res.json())
        .then((data) => {
          setPups(data);
        })
        .catch((error) => {
          console.error("Error fetching pup data:", error);
        });
    };

   
    fetchPupData();
  }, []);

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        {pets.map((pet) => (
          <span key={pet.id} onClick={() => clickFunction()}>{pet.name}</span>
        ))}
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info"></div>
      </div>
    </div>
  );
}


export default App;
