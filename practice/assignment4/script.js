//wap to compute the greatest common divisor (GCD) of two positive integers//
// let x,y;
// x=prompt("enter a first positive integer:");
// y=prompt("enter a second positive integer:");
// for(let i=1; i<=x && i<=y; i++)
// {
//     if (x%i == 0  &&  y%i == 0)
//     {
//         GCD=i;
//     }
// }
// console.log(`GCD of ${x} and ${y} is ${GCD}`);





//WAP to sum the multiples of 3 and 5 under 1000//
// let sum=0;
// for(let x=0; x<=1000; x++)
// if(x%3==0  ||  x%5==0)
// {
//     sum +=x;
// }
// console.log(sum);






// // wap which compute ,the average marks//

// let students=[['David',80],['Vinoth',77],['Divya',88],['Ishitha',95],['Thomas',68]];
// let avgmarks=0;

// for(let i=0; i<students.length; i++){
//     avgmarks+=students[i][1];

//     avg =(avgmarks/students.length);

// }
// console.log("average grade:" + (avgmarks)/students.length);
//     if (avg<60)
//     {
//         console.log("grade:F");

//     }
//     else if(avg<70)
//     {
//         console.log("grade:D");
//     }
//     else if(avg<80)
//     {
//         console.log("grade:C")
//     }
//     else if(avg<90)
//     {
//         console.log("grade:B")
//     }
//     else if(avg<100)
//     {
//         console.log("grade:A")
//     }







//WAP which iterates the integers from 1 to 100.//
// for (let i=1 ; i<=100 ; i++)
// {
//     if( i%3 ===0 && i%5 ===0)
//     {
//         console.log(i + "FizzBuzz");
//     }
//     else if( i%3 === 0)
//     {
//         console.log(i + "Fizz")

//     }
//     else if (i%5 === 0)
//     {
//         console.log(i + "Buzz")

//     }
//     else{
//         console.log(i)

//     }
// }








//wap to find the armstrong no. of 3 digits //










//wap to print number from 1 to 10//
// for(let i=1; i<=10; i++)
// {
//     console.log(i)
// }





//wap to find the power of a number //
// let x=5,y=3;
// let power = Math.pow(x,y);
// console.log(power);






//wap to print a pattern//
// let x=8;
// let num=" ";
// for (let i=1; i<=x ;i++)
// {
//     for(let j=1 ; j<= i; j++)
//     {
//         num+=j;                     //or num+=i;   
//     }
//     num+="\n";
// }
// console.log(num);







//wap to find the no. of digits in number //
// function digits_count(n){
//     let count = 0;
//     if (n>=1) ++count;
//     while( n/10 >= 1)
//     {n/=10;
//         ++count;
//     }
//     return count ;
// }
// console.log(digits_count(12112));
// console.log(digits_count(475));






// wap to calculate the sum of digits in a number//








//wap to find N value in the Fibonacci series for a given  number//
// let num;
// num=prompt("enter a number of term:");
// let n1=0,n2=1,nextTerm;
// console.log('Fibonacci Series:');
// for (let i=1; i<=num ; i++)
// {
//     console.log(n1);
//     nextTerm = n1+n2;
//     n1 = n2;
//     n2 = nextTerm;
// }






// wap to count all letters in word //
// function char_count(str,letter)
// {
//     let letter_count=0;
//     for (let position =0;position<str.length; position++){
//         if (str.charAt(position)==letter)
//         {
//             letter_count +=1;

//         }
//     }
//     return letter_count;
// }

// console.log(char_count('nishi','i'));







//wap to find the largest number in an array//
// let points=[40,100, 1,15,25,10];
// points.sort(function(a,b)
// {return b-a});

// let largest=points[0];
// console.log(largest);





//wap tp print greatest even number in given array//

// function even(array){
//     array.sort((x,y)=> y-x)
//     for(let i=0; i< array.length;i++){
//         if(array[i]%2 == 0)
//         return array[i];
//     }
// }

// console.log(even([20,25,30,13,60]));





//wap tp print even number in given array//
// function even(array){
//     for(let i=0; i< array.length;i++){
//         if(array[i]%2 == 0)
//         return array[i];
//     }
// }

// console.log(even([20,25,30,13,60]));






//wap to find the most frequent items of an array//

// let array=[6,"b","b","b",2,3,"b",3,"a","y",7,9,"b"];
// let mf=1;
// let m=0;
// let item;
// for(let i=0;i<array.length;i++)
// {
//     for(let j=1;j<array.length;j++)
//     {
//         if (array[i]==array[j])
//             m++;
//             if (mf<m)
//             {
//                 mf=m;
//                 item = array[i];
//             }

//     }
//     m=0;
// }

// console.log(item +"("+ mf +"times)");








//wap to find duplicate values in a given array //







//wap to print an elements of the array//
// let a=[[1,2,3,4],[5,6,7,8,9,0]];
// for (let i in a)
// {
//     console.log("row"+ i);
//     for (let j in a[i]){
//         console.log(" "+a[i][j]);
//     }
// }










//wap to compute the sum and product of an array of integer//
// let array=[1,2,8,4,5,6,7];
// s = 0;
// p = 1;
// let i;
// for(i=0; i<array.length; i+=1)
// {
//     s += array[i];
//     p *= array[i];

// }
// console.log('sum:' + s + '  product:' +p);








//wajsf to capatilize the first letter of a string.//
// function cap(str)
// {
//     return str.charAt(0).toUpperCase() + str.slice(1);

// }
// console.log(cap('the quik brown fox'));








//wajsf to capatilize the first letter of each word in a string.//









//wajsf that takes a string which has lower and upper case letter as a parameter and
// convert  upper  case letter to lower case, and 
//          lower  case letter to upper case//











//wajsf to concatenates a given string n times//
function repeat(str,count){
    if(typeof(count) == "undefined")
    {
        count =1;

    }
    return count < 1 ? '': new array(count + 1).join(str);
}
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));









//wajsf to chop a string into chunks of a given length.//








//wajsf to count the occurrense of a substring in a string //