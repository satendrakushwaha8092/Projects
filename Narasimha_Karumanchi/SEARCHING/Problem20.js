function printReapeatedElements(arr){
    for(let i=0;i<arr.length;i++){
            if(arr[i]==arr[i+1]) console.log(arr[i])
    }
}
printReapeatedElements([4,2,4,5,2,3,1].sort())
