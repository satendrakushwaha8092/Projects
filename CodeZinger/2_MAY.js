/*Count the number of increasing subsequences of size K

Given an array of N integers, write a program to count the number of increasing subsequences of size K in the array.

 

Input:

    5

    2 6 4 5 7

    3

    

    where:

First line represents the number of elements in the array.
Second line represents the elements of the array.
Third line represents the value of 'K'
 

Output:

    5

 

Explanation: The increasing subsequences of size '3' are: {2, 6, 7}, {2, 4, 5}, {2, 4, 7}, {2, 5, 7} and {4, 5, 7}, and their count is 5, hence the output 5.
*/
function problem1(){
let arr=[2, 6, 4, 5, 7]
const k=3
let newarr=[]
let max=0
for(i=0;i<arr.length-k+1;i++){
    if(max>arr[i]) max=arr[i]
    newarr=[]
    for(j=i;j<i+k;j++){
        newarr.push(arr[j])

    }
    console.log(newarr)

}
}
console.log("problem1=",problem1)










/*Find substrings whose sum of ASCII value is divisible by K

Given a string S and a number K, find the number of substrings of length K whose sum of ASCII value of characters is divisible by K.

 

Input:

    bcgabc

    3

 

where:

First line represents the input string S
Second line represents K
 

Output:

     2

 

Explanation:

Substring “bcg” has sum of ASCII values 300 and “abc” has sum of ASCII values 294 which are divisible by 3.*/

function problem2(){
let str="bcgabc"
let sumascii=0
let c=0
for(i=0;i<str.length;i=i+3){
    sumascii=0
    for(j=i;j<i+3;j++){
        sumascii=sumascii+str.charCodeAt(j)
    }
        if(sumascii%3==0) c++
}
return c
}
console.log("problem2=",problem2())



/*
Count number of substrings with exactly K distinct characters

Given a string S of lowercase alphabets, count all possible substrings (not necessarily distinct) that have exactly K distinct characters

 

Input:

     abc

     2

 

    where:

First line represents input String S.
Second line represents K.
 

Output:

     2

 

Explanation:

Possible substrings with 2 distinct characters are {"ab", "bc"}
 

Assumptions:

Value of K can be 1 to 26.
*/

function problem3(){
    let str="abc"
    let k=2
    return str.length-k+1
    }
    console.log("problem3=",problem3())

