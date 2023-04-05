//prime number tech
//sencond maximum in array

// function isPrime(n){
//     let c=0
//     for(i=1;i<n;i++){
//         if(n%i==0) c++
//     }
//     if(c==1) return "prime"
//     else return "notprime"
// }
// console.log(isPrime(18))

// function isPrime(number){
//     for(i=2;i<parseInt(number/2);i++){
//         if(number%i===0) return false
//     }
//     return true
// }
// console.log(isPrime(17))

function isPrime(number){
    for(i=2;i<parseInt(Math.sqrt(number/2));i++){
        if(number%i===0) return false
    }
    return true
}
console.log(isPrime(18))

function first1000PrimeNumber(){
    let count=0
    let number=2
    while(count<1000){
        if(isPrime(number)){
            count++
            console.log(`${count} prime number is ${number}`)
        }
        number++
    }
    return count
}
console.log(first1000PrimeNumber())

function secondMax(){
    let arr=[4,2,7,10,9]
    let max1=arr[0]
    let max2=null
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max1){
            max2=max1
            max1=arr[i]
        }
        else if(arr[i]>max2) max2=arr[i]
    }
    return max2

}
console.log(secondMax())