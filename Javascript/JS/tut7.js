// Basic Stored By Data coulme vise
let a = "Avinash"
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
// console.log(a[7]) This Command Undifined//

let Name = "Avi"
let Frd = "Anu"
console.log("My Name is "+ Name +" and My Friend Name is "+Frd)
// Templeat Literals //
console.log(`My Name is ${Name} and my Friend Name is ${Frd}`) //Using Backpkey tab key upeer (`) key //

/*Escape Sequence.*/
let b = "Shivam"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,5))
console.log(b.slice(2))
console.log(b.concat(a),"Rahul","...")


// Push Function //

let arrey6 = ["Avinash","Anu","Rajat","Rajeev"]
arrey6.push("Rahul");
console.log(arrey6);

// Unshift Function //  

let arrey7 = ["Avinash","Anu","Rajat","Rajeev"]
arrey7.unshift("Rahul");
console.log(arrey7);

// Pop Function //  

let arrey8 = ["Avinash","Anu","Rajat","Rajeev"]
arrey8.pop();
console.log(arrey8);

// Shift Function //

let arrey9 = ["Avinash","Anu","Rajat","Rajeev"]
arrey9.shift(1,2);
console.log(arrey9);

// Splice Function //

let arrey10 = ["Avinash","Anu","Rajat","Rajeev"]
arrey10.splice(1,0,"Rahul");
console.log(arrey10);

// Reverse Function //

let arrey11 = ["Avinash","Anu","Rajat","Rajeev"]
arrey11.reverse();
console.log(arrey11);

// Slice Function //

let arrey12 = ["Avinash","Anu","Rajat","Rajeev"]
let s = arrey12.slice(1,4);
console.log(s);

// IndexOf Function //

let arrey13 = ["Avinash","Anu","Rajat","Rajeev"]
let s1 = arrey13.indexOf("Avinash");
console.log(s1);

// Join Function //

let arrey14 = ["Avi","nash", "Raj","eev"]    
let s2 = arrey14.join("");
console.log(s2);
 

// For in Loop //

let obj = {
    name : "Avinash",
    age : 24,
    city : "Delhi"
}
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}

// For of Loop //

let arrey15 = ["Avinash","Anu","Rajat","Rajeev"]
for(let element of arrey15){
    console.log(element);
}

// Set Time Out Function //

function greet(){
    console.log("Good Morning");
}
setTimeout(greet,1000);

// Set Interval Function //

function greet1(){
    console.log("Good Morning");
}
setInterval(greet1,2000);

// Local Storage //

localStorage.setItem("Name","Avinash")
localStorage.getItem("Name")
localStorage.removeItem("Name")
localStorage.clear()

// JSON //

obj1 = {name : "Avinash", age : 24}     
jso = JSON.stringify(obj1)
console.log(jso);
console.log(typeof jso);
parsed = JSON.parse(`{"name":"Avinash","age":24}`)
console.log(parsed);
console.log(typeof parsed);


// Date Function //

let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());
console.log(myDate.getSeconds());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getTimezoneOffset());
console.log(myDate.getMilliseconds());

// multidimensional array //

let arr = [
    [ " John" ,30],
    [ "Thomas" , 28],
    [ "Robert" , 22],
    [ "Mark" , 25]
    ]
    for(let i=e;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            console.log(arr[i][j])
        }
    }
    
    
 // Destruct Arry //

 let A = ["Avinash","Anu","Rajat","Rajeev"]
 let [item1,item2,item3,item4] = A;

    console.log(item1);
    console.log(item2);
    console.log(item3);
    console.log(item4);


