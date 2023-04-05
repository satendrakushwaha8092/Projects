function duplicates(arr){
    let frequencies=new Map()
    for(i=0;i<arr.length;i++){
        if(frequencies.get(arr[i])==undefined) frequencies.set(arr[i],1)
        else frequencies.set(arr[i],frequencies.get(arr[i])+1)
    }
    console.log(frequencies)
    
    let res=[]
    for(let pairs of frequencies){
        if(pairs[1]>1) res.push(pairs[0])
    }
    return res
}
console.log("duplicates=",duplicates([1,3,5,2,6,1,3,3,]))