//Recursion
//-----------------------------

//1. printing number n to 1  n,n-1,n-2,n-3,--------------,3,2,1 using recursion
function print(n){
    if(n==0){
        return 0
    }
    else{
        console.log(n)
            return print(n-1)
        }
    }
    print(4)

//2. finding factorial of n using recursion
function fact(n){
    if(n==1){
        return 1
    }
    else if(n==0)
    return 1
    else{
        return n*fact(n-1)
    }
}
console.log(fact(5))  

//Problem-2 Given an array, check whether the array is in sorted order with recursion.
function issortarry(arr,n){
    if(n==1) return "array is sorted"
  return (arr[n-1]<arr[n-2])?"array is not sorted":issortarry(arr,n-1)
}
let arr=[4,5,6,8,9,10]
let n=arr.length
console.log(issortarry(arr,n))


