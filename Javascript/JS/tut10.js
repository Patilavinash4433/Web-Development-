let a = 6

function Factorial(number) {
    let arry =Array.from(Array(number+1).keys())
    console.log(arry.slice(1,))
    let c =arry.slice(1,).reduce((a,b) =>{
        return a*b
    })
    return c
}

function Facfor(number) {
    let fac =1
    for (let index = 1; index <= number; index++) {
       fac = fac * index;
    }
    return fac
}

console.log(Factorial(a));
console.log(Facfor(a))

confirm("Do you want to close this page?") ? console.log("Yes") : console.log("No")

    
    