/* Function Key */

// function Nice(Name) {
//     console.log("Hey " + Name + " you are nice!")
//     console.log("Hey " + Name + " you are good!")
//     console.log("Hey " + Name + " your tshirt is nice!")
//     console.log("Hey " + Name + " your course is good too!") 
// }
// Nice("om")

// function Sum(a , b,c=3) {
//     return a+b+c;
// }

// result1 = Sum(5,5)
// result2 = Sum(2,4)
// result3 = Sum(5,65)

// console.log("This is the sum of A+b :",result1);
// console.log("This is the sum of A+b :",result2);
// console.log("This is the sum of A+b :",result3);

/* Arrow Function */

// let func1 = (X) =>{
//     console.log("I am Arrow Function =",X);
// }
// func1(32)
// func1(62)
// func1(54)

// function Avi(a) {
//     console.log("I am Avi" + a)
// }
// Avi('nash')
// Avi('nash')
// Avi('nash')
// Avi('nash')
// Avi('nash')

let b = 10;
function scope(){
    let a = 5;
    console.log("I am Local scope =",a);
    console.log("I am Global scope =",b);
    
}
scope()


const obj = function(){
    console.log("I am Object Function")
}
obj();


(function(){
    console.log("I am IIFE Function")
})();




