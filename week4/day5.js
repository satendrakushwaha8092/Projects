function countNegativeNumber(arr){
    let c=0;
    for(let elem of arr){
        if(elem<0) c++
    }
    return c
}
console.log(countNegativeNumber([1,2,3,-2,-4,-8]))

function RepeatCharacterCount(arr){
    let charfreq=new Map()
    for(let i=0;i<arr.length;i++){
        if(charfreq.get(arr[i])) charfreq.set(arr[i],charfreq.get(arr[i])+1)
        else charfreq.set(arr[i],1)
    }
    let maxFreq=0
    for(let key of charfreq){
        if(key[1]>0) maxFreq++
    }
    return maxFreq
}
RepeatCharacterCount("ggfffess")