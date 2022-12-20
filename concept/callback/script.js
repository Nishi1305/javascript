let list = document.getElementById('list')
let students = [
    { name: "nishi", subject: "react.js" },
    { name: "sriyansh", subject: "Node.js" },
    { name: "sandeep", subject: "html" }
];

function getStudent() {
    setTimeout(function(){
    let str = "";
    students.forEach(function (element) {
        // let str="";
        str += `<li>${element.name}  ${element.subject}</li>`;
    })
    list.innerHTML = str;
},2000);
}

// getStudent();

let button= document.getElementById('button');

button.addEventListener('click',function(){
      getStudent();
});










