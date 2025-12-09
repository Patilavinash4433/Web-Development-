//Q9. Create an object representing a car with properties like make, model, and yearAdd a method to the car object to start the engine.

// Answer:
let car = {
    model: "Audi",
    year: 2020,
    color: "Black"
}
Car.Engine = function() {
    console.log("Engine Started");
}
console.log(car.Engine);

// Output: Engine Started