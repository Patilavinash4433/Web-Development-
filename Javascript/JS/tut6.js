let arrey =["Xyz","Abc","Pqr","Lmn","Def"]
for (let i = 0; i < arrey.length; i++) {
    const element = arrey[i];
    console.log(element);
}


let arrey2 =["Xyz","Abc","Pqr","Lmn","Def"]
arrey2.forEach(function(element,index,array){
    console.log(element,index,array);
})


let arrey1 =["Xyz","Abc","Pqr","Lmn","Def"]

arrey1.push("Rahul")
arrey1.unshift("Avinash")
arrey1.pop()
arrey1.shift()
arrey1.splice(2,1)
arrey1.reverse()


// Map Function //

let arrey3 = [1,2,3,4,5,6,7,8,9,10]

let Detailsmap = arrey3.map(function(value,index,array){

    return `The value of ${index} is ${value} and the array is ${array}`
})
console.log(Detailsmap);
console.log(arrey3);


// Filter Function //

let arrey4 = [1,2,3,4,5,6,7,8,9,10]

let Detailsfilter = arrey4.filter(function(value,index,array){

    return value > 5
})
console.log(Detailsfilter);


// For Each Function //

let arrey5 = [1,2,3,4,5,6,7,8,9,10]

arrey5.forEach((num)=>{ 
  squre = num * num
    console.log(squre);
})


// For Each Function // 

let arrey7 = [1,2,3,4,5,6,7,8,9,10]

arrey7.forEach((num)=>{
    if(num % 2 == 0){
        console.log(num);
    }
})   // Print Even Number //


// Reduce Function //

let arrey6 = [1,2,3,4,5,6,7,8,9,10]

let Detailsreduce = arrey6.reduce(function(acc,curr){

    return acc + curr
})
console.log(Detailsreduce);