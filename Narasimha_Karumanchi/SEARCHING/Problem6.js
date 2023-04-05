function MaxDuplicatesSorting(arr){
    let counter=0
    let max=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1]) counter++
        else counter=0
        if(counter>max) max=counter
    }
    return max+1
}
console.log(MaxDuplicatesSorting([1,2,3,4,4,4,4,4,5,6,7]))