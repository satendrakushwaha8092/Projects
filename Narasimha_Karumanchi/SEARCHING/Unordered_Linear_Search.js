function UnorderedLinearSearch(arr,data){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==data)
        return i
    }
    return -1
}
console.log(UnorderedLinearSearch([5,8,2,4,1,6],4))