//Recursion2
//-----------------------------

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

//product of array using recursion
function product(arr){
    if(arr.length==0) return 1
    return arr[0]*product(arr.splice(1))
}
console.log("product=",product([2,8,9]))

//1,1,2,3,5,8,13,21,----------------
function fibo(n){
    if(n<=2) return 1
    return fibo(n-1)+fibo(n-2)
}
console.log("fibo=",fibo(6))

//making pow function using recursion
function pow(b,exp){
    if(exp==0) return 1
    return b*pow(b,exp-1)  

}
console.log("pow=",pow(2,3))

//-------------------------------------------------------------------------------------------


function sumofarray(arr){
    if(arr.length==0) return 0
    return arr[0]+sumofarray(arr.splice(1))
}
console.log("sumofarray=",sumofarray([1,1,8]))

function sumofarray2(arr){
    if(arr.length==0) return 0
    return arr[0]+sumofarray2(arr.splice(-1))
}
console.log("sumofarray2=",sumofarray2([1,1,8]))

function sumofarray3(arr){
    if(arr.length==0) return 0
    return arr.pop()+sumofarray3(arr)
}
console.log("sumofarray3=",sumofarray3([1,1,8]))

function sumofarray4(arr){
    if(arr.length==0) return 0
    return arr.shift()+sumofarray4(arr)
}
console.log("sumofarray4=",sumofarray4([1,1,8]))


