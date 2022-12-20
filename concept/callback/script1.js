// Sellectors
let list = document.getElementById('list');
let button = document.getElementById('btn');

// event listener
button.addEventListener('click', function () {
    enrollstudent(newStudent,getStudent);
});

// let assume this is your database
let students = [
    { name: 'Nishi', sub: 'JS' },
    { name: 'Sana', sub: 'HTML' },
    { name: 'Divyanshi', sub: 'CSS' },
    { name: 'Anjali', sub: 'Node' },
];

// new Student Data
let newStudent = { name: 'Rishbah', sub: 'C language' };


// print data on screen
function getStudent() {

    setTimeout(function () {
        let str = " ";
        students.forEach(function (element) {
            str += `<li>${element.name}  ${element.sub} </li>`;

        });
        list.innerHTML = str;
    }, 2000);
}


// add new student data in database
function enrollstudent(fnewStudent, getStudent) {
    setTimeout(function(){
        students.push(fnewStudent);
        getStudent();                    //call back function
    }, 5000);
}






