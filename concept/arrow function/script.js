//******/ ES5:-/********//

function sum()
{
    let a=10,b=20,c=10;
    let A = a+b+c;
    return A;
}
let B = sum();
console.log(B)


let Sum = function()
{
    let a=10,b=20,c=10;
    let A = a+b+c;
    return A;
}


//******/ ES6:-/********//
const summ = () => {
    let a=10,b=20,c=10;
    let A = a+b+c;
    console.log(A);
}





// const pro = (x,y,z) => {
//     return x*y*z;
// }

// let product = pro (10,20,30);
// console.log(product);




// *****/ return statement without using return keywords /*******//
const pro = (x,y,z) => (x*y*z)
let A = pro (10,20,30)
console.log(A);
