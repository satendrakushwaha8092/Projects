function Search(arr,k){
    let loIndex,hiIndex,sum;
    for(loIndex=0;hiIndex=arr.length-1;loIndex<hiIndex){
        sum=arr[loIndex]+arr[hiIndex]
        if(sum==k){
            console.log("Elements found:",loIndex,hiIndex)
            return
        }else if(sum<k) loIndex=loIndex+1
        else hiIndex=hiIndex-1
    }
}
Search([5,8,1,0,2,5].sort(),9)