// ES6:-Array destructuring//

// let frnd = ["ram","shyam","rahul","rajesh"];

// let [p1,p2,p3] = frnd;

// console.log(p2);

// let [p,,p2] =frnd;
// console.log(p2);


// ES6:- Object Destructuring//

// let biodata ={name:"nishi",age:"21",deg:"Bsc"};

// let{name,age,deg} = biodata;
// console.log(name);

// // customize object destructuring name //

// let{name:N,age:A,deg:D} =biodata;
// console.log(N);



let bioData  = {
    name:"nishi",
    age:21,
    deg:"bsc",
    hobbies:{
        h1:"reading books",
        h2:"music"
    },
    marks:[40,50,30,80,60]

};

let str = bioData.deg;
console.log(str);
let num = bioData.age;
console.log(num);

let M4 = bioData.marks[3];
console.log(M4);

let hobby= bioData.hobbies.h2;
console.log(hobby);

let{name:N,marks:M,deg:D,hobbies:H,age:A} = bioData;
console.log(M);



