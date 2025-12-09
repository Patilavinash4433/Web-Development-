// First class Citizen
let add = function sum(a , b){
    console.log(a+b);
} 
console.log(add(20,30))

// You Can return Function 

function x(callback){
    console.log('Hello Guys');
    callback(); // you can call back the Function
}

function y(){
    console.log('Byy Guys');
    
}
x(y)
y(x)

// return function
function add(a , b) {
    return a + b;
    
}
let sum = add(20,30);
console.log(sum);