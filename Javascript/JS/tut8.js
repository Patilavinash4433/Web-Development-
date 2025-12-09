/* Arrays Basicly Stored By Data  */

// let arry =[1,3,5,7,9,11]/
// Index   0,1,2,3,4,5,6

// We Can Chenge The Value of Arrys
arry[0]=321;

console.log(arry,typeof arry)
console.log(arry.length)
console.log(arry[0]);
console.log(arry[3]);
console.log(arry[5]);
console.log(arry[2]);

console.log(arry.toString())


let a = [1,52,11,45,21]
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}

// Object //

 let obj2 = {
        name : "Avinash",
        age : 24,
        city : "Delhi",
}
 console.log(obj2);
 console.log(obj2.name);
 console.log(obj2.age);
 console.log(obj2.city);
 console.log(obj2["name"]);
 console.log(obj2["age"]);
 console.log(obj2["city"]);


let obj3 = {    
    name : "Avinash",
    age : 24,
    city : "Delhi",
    fun : function(){
        console.log("Hello")
    }
}

console.log(obj3.fun());


//imp //
// Object inside Array //

let obj4 = [
    {name : "Avinash", age : 24},
    {name : "Anu", age : 24},
    {name : "Rajat", age : 24},
    {name : "Rajeev", age : 24}
]

console.log(obj4);
console.log(obj4[0]);
console.log(obj4[1]);