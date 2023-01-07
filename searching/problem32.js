function sum(arr,n){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            for(let k=j+1;k<arr.length;k++){
                if(arr[i]+arr[j]+arr[k]==n) return [arr[i],arr[j],arr[k]]
            }
        }
    }
}

console.log(sum([1,2,3,4,5,6,7,8,9,10,11],19))