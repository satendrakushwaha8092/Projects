function checkDuplicate(arr){
    const map=new Map();
    for(let element of arr){
        if(map.get(element)){
            map.set(element,map.get(element)+1)
        }else{
            map.set(element,1)
        }
    }
    for(let ele of map){
        if(ele[1]>1) console.log(ele[0])
    }
}

checkDuplicate([1,2,3,4,1,2,7,7])