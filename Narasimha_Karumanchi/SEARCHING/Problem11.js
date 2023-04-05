function FirstDuplicatesHasing(arr){
    let max=0
    let map=new Map()
    for(let i=0;i<arr.length;i++){
        if(map.get(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }else{
            map.set(arr[i],1)
        }
    }
    for(let key of map){
        if(key[1]>1){
            max=key[0]
            break
        }

    }
    return max
    }
console.log(FirstDuplicatesHasing([1,7,0,8,7,8,5,5,5,5]))