import animals, { useAnimals } from "./data";
import cars from "./practice";

// console.log(animals);

// const [cat, dog] = animals; // var cat = animals[0] et var dog = animals[1]

// console.log(cat); //names need to be unique when you destructure

//const { name, sound } = cat; //meme chose que cat.name et cat.sound
//const {name: catName , sound: catSound} = cat;  CHANGE variable names
//console.log(catName);

//const {name = "Fluffy" , sound ="Purr"} = cat; GIVE DEFAULT VALUES to the variables if they are not defined

//DESTRUCTURE NESTED OBJECT
// const {
//   feedingReq: { food, water },
// } = cat;
// console.log(water);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);

// //CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";

const [honda, tesla] = cars;
const {
  coloursByPopularity: [hondaTopColour, secCo],
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;
const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

console.log(honda);
console.log(tesla);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
      {/* <td>{secCo}</td> */}
    </tr>
  </table>,
  document.getElementById("root")
);
