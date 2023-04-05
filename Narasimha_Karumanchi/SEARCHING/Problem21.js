function printReapeatedElements(arr){
    let map=new Map
    for(let i=0;i<arr.length;i++){
        if(map.get(arr[i])) map.set(arr[i],map.get(arr[i])+1)
        else {
            map.set(arr[i],1)
        }
    }
    for(let ele of map){
        if(ele[1]%2==0)
        console.log(ele[0])
    }
}
printReapeatedElements([4,2,4,5,2,3,1])