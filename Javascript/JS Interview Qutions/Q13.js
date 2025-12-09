//Create a function that generates a random number between a given range.

//Answer:
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber);

//Output: Random Number Between a 1 to 10