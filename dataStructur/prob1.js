let arr=[1,1,1,5,5,2,3,8,8,9,9,9,9,9]
let map=new Map
for(let i=0;i<arr.length;i++){
    if(map.get(arr[i])){
        map.set(arr[i],map.get(arr[i])+1)
    }else{
        map.set(arr[i],1)
    }
}

console.log(map)

for(let ele of map){
    console.log(ele)
}