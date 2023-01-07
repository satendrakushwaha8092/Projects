function sum(arr,n){
    let j=0;
    let k=arr.length-1
    for(let i=0;i<arr.length;i++){
        while(j<k){
            if(arr[i]+arr[j]+arr[k]==n) return [arr[i],arr[j],arr[k]]
            if(arr[i]+arr[j]+arr[k]<n) j++;
            else k--
        }
    }
}

console.log(sum([1,2,3,4,5,6,7,8,9,10,11],19))