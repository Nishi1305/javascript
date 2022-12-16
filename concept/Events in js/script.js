

// let button = document.querySelector("#btn");

// // console.log(button);

// button.onclick = doSome;


// function doSome()
// {
//     prompt();
// }



let button = document.querySelector("#btn");
let heading = document.getElementById("heading");


button.addEventListener('click',function doSome(){
    heading.style.color = "red";
    heading.style.fontSize = "80px";
    heading.style.transition = "0.5s";
});






















