// let age=20;
// if(age<18)
// {
//     console.log("child")
// }
// else
// {
//     console.log("adult")
// }




// let temperature=25;
// if(temperature>=25)
// {
//     console.log("temperatureis warm");
// }
// else
// {
//     console.log("temperature is cold");
// }



let age;
age=prompt("enter your age");
if (age<=17)
{
    console.log("child");

}
else if ( age>=18 || age<=24)
{
    console.log("adult");
}
else if (age>=25 || age<=35)
{
    console.log("mature");

}
else if(age>=36 || age<=59)
{
    console.log("adult,mature,financial stable,experienced");
}
else
{
    console.log("old");
}