function CheckDuplicatesSorting(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1]) console.log("Duplicates exist:",arr[i])
        return
    }
    console.log("No duplicates in given array.")
}
console.log(CheckDuplicatesSorting([1,2,3,4,5,6,7]))