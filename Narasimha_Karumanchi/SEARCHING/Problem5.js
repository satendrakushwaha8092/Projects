function MaxDuplicatesBruteForce(arr){
    let counter=0,max=0
    for(let i=0;i<arr.length;i++){
        counter=0
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]) counter++
        }
        if(counter>max)max=counter
    }
    return max
}
console.log(MaxDuplicatesBruteForce([1,2,3,4,5,3,2,7,4,4,4,5,5,5,5,5]))