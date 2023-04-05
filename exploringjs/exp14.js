let arr=[1,1,1,2,2,4,0,0,6,8,8,8,8]
let map=new Map()
for(let i=0;i<arr.length;i++){
    if(map.get(arr[i])){
        map.set(arr[i],map.get(arr[i])+1)
    }
    else{
        map.set(arr[i],1)
    }
}
console.log(map)