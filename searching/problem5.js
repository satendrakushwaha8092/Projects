function checkDuplicate(arr){
    let maxelement=null;
    let max=0
    const map=new Map();
    for(let element of arr){
        if(map.get(element)){
            map.set(element,map.get(element)+1)
        }else{
            map.set(element,1)
        }
    }
    for(let ele of map){
        if(ele[1]>max){
            max=ele[1]
            maxelement=ele[0]
        }
    }
    console.log(maxelement)
}

checkDuplicate([1,2,3,4,1,2,7,7,2,2,2])