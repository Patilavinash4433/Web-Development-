//Q7. Write a function to check whether a year is a leap year or not.

// Answer:
let leepYear = (year) => {{
    if (year % 4 == 0) {
        console.log("Leap Year");
    }
    else {
        console.log("Not a Leap Year");
    }
}}

console.log(leepYear(2028)); 

//output: Leap Year