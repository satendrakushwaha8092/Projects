//sliding window algorithm

/*let arr=[1,6,3,8,13,3,33,21]
let max=0
let w=3
let result=[]
for(let i=0;i<arr.length-w+1;i++){
    max=arr[i]
    for(let j=i;j<i+w;j++){
    if(arr[j]>max) max=arr[j]
    }
    result.push(max)
}
console.log(result)*/

/*let arr=[1,6,3,8,13,3,33,21]
let sum=0
let max=0
let subarray=3
for(let i=0;i<arr.length;i++){
    sum=0
    for(let j=i;j<i+subarray;j++){
        sum=sum+arr[j]
    }
    if(sum>max) max=sum

}
console.log(max)*/

/*let arr=[1,6,3,8,13,3,33,21]
let sum=0
let max=0
let subarray=3
for(let i=0;i<arr.length;i++){
    sum=0
    for(let j=i;j<i+subarray;j++){
        sum=sum+arr[j]
    }
    if(sum>max) max=sum

}
console.log(max)*/

/*let arr=[1,6,3,8,13,3,33,21]
let sum=0
let max=0
let subarray=3
let i=0
let j=3
while(i<j&&j<arr.length){
        sum=sum+arr[i]
        if(sum>max) max=sum
    i++
    j++
    //if(sum>max) max=sum

}
console.log(max)*/


let arr = [1, 6, 3, 8, 13, 3, 33, 21]
let n = arr.length
let result = []
let w = 3
const deque = []
for (let cel = 0; cel < w; cel++) {
    while (deque.length > 0 && arr[cel] >= deque[deque.length - 1]) {
        deque.pop()
    }
    deque.push(cel)
}
console.log(deque)
for (let cel = w; cel < n; cel++) {
    result.push(arr[deque[0]])
    while (deque.length >= 0 && arr[cel] >=deque[deque.length - 1]) {
        deque.pop()
    }
    while (deque.length > 0 && cel-w>= deque[0]) {
        deque.shift()
    }
    deque.push(cel)
}
result.push(arr[deque[0]])

console.log(result)