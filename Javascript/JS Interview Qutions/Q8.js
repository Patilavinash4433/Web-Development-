//Q8. Write a function that takes an array of numbers and returns the sum of those numbers. Use the reduce method to do this.

// Answer:
let sum = [28,32,32,34,56,87,89]

function add(sum) {
    return sum.reduce((a,b) => a+b,0);
    // return sum.reduce((a,b) => a-b,0);
    // return sum.reduce((a,b) => a*b);
    // return sum.reduce((a,b) => a/b);
}
console.log(add(sum)); 

//output: 348



