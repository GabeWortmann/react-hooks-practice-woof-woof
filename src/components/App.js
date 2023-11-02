import React, { useState, useEffect } from "react";
import DogsContainer from "./DogsContainer";

function App() {
  const [dogs, setDogs] = useState([])
  const [clickedDog, setClickedDog] = useState(null)
  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((res) => res.json())
      .then((dogData) => {setDogs(dogData)})
  }, []);

  const dogDetails = dog.find((dog) => dog.id === clickedDog)

  const updateDog = (dogToUpdate) => {
    const updateDogData = dogs.map((dog) =>(
      dog.id === dogToUpdate.id ? dogToUpdate : dog
    ))
    setDogs(updateDogData)
  }

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        <DogsContainer dogs={dogs} setClickedDogs={setClickedDog} />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogInfo dogDetails={dogDetails} updateDog={updateDog} />
        </div>
      </div>
    </div>
  );
}


export default App;
