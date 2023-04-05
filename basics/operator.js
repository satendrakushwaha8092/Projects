const output=2<3?true:false
console.log(output)

function issort(arr){
    for(let i=0;i<arr.length-2;i++){
        if(arr[i]<arr[i+1]) continue
        else return false
    }
    return true
}

console.log(issort([6,5,4,3,2,1]))