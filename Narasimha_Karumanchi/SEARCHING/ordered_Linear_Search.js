function OrderedLinearSearch(arr,data){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==data)
        return i
        else if(arr[i]>data)
        return -1
    }
    return -1
}
console.log(OrderedLinearSearch([1,2,3,4,5,6],4))