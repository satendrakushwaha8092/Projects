let arr=[1,2,3,4,5,6,7,8]
let arr2=arr.map(x=>x*3).filter(x=>x>9)
console.log(arr2)
let arr3=arr.reduce(function(max,curr){
    if(curr>max){
        max=curr
    }
return max
},0)
console.log(arr3)

let sum=arr.reduce((sum,curr)=>sum+=curr,0)
console.log(sum)

let min=arr.reduce((min,curr)=>min>curr?min=curr:min=min,arr[0])
console.log(min)