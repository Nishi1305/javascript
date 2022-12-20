//********************Case1*********************//

let list = document.getElementById("list");
 
let arr =["nishi","sandeep","shriyansh","sameer"];
let str =" ";
arr.forEach(function(element)

{
    str += `<li>${element}</li>`;
    
}); 

list.innerHTML = str;


//************************Case2******************//

let student =[
    {name:'nishi',subject:'js'},
    {name:'nishi',subject:'js'},
    {name:'nishi',subject:'js'},
    {name:'nishi',subject:'js'}

]

let string="";

student.forEach(function(element)
{
    string +=`<li>${element.name} ${element.subject}</li>`
})


document.getElementById('list').innerHTML = string;




