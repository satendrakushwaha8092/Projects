function checkDuplicate(arr){
    for(var i=0; i<arr.length;i++){
        if(arr[i]==arr[i+1]) console.log(arr[i]);
    }
}

checkDuplicate([1,2,3,4,1,2,7].sort())