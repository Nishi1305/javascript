//wajsf that check whether a string is palindrome or not//
function check(str){
    let length = str.length;
    for(let i=0 ; i<length/2 ; i++)
    {
        if (str[i != str[length -1 -i]])
        {
            return `It's not a palindrome`;

        }
    }
    return `It's  a pallindrome`;
}
console.log(check('tinit'))





//wajsf that generate all combination of a string.//








//wajsf to arrange any string in alphabetical order//
// function alphabet(str)
// {
//     return str.split('').sort().join('');

// }
// console.log(alphabet("nishi"));






//wajsf that accept a string as a parameter and find the longest word with in the string//







//wajsf that accept a string as a parameter and count number of vowels in a given string//







//wajsf that accept a number as a parameter and check whether no. is prime or not//
function test(n)
{
    if(n===1)
    {
        return false;
    }
    elseif (n===2)
    {
        return true;
    }

    else
    {
       for (let x=2; x<n; x++)
       {
        if( n%x ===0)
        {
           return false;
        }
       }
       return true;
    }
}
console.log(test(37))



