function checkDuplicate(arr){
    for(var i=0; i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]) console.log(arr[i])
        }
    }
}

checkDuplicate([1,2,3,4,1,2,7,7])