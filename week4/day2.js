// function sort01(arr){
//     let count0=0
//     let count1=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==0) count0++
//         else count1++
//     }
//     for(let i=0;i<count0;i++){
//         arr[i]=0
//     }
//     for(let i=count0;i<arr.length;i++){
//         arr[i]=1
//     }
//     return arr
// }

// function sort01(arr) {
//     let i = 0;
//     let j = arr.length - 1;
//     while (i < j) {
//         if (arr[i] == 1&&arr[j]==0) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//         }
//         if (arr[i] == 0) i++
//         else j--
//     }
//     return arr
// }
// console.log(sort01([1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1,1,1,1,1,0,1,0]))

function sort01(arr){
    let curr=0,count0=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0) count0++
    }
    let count1=arr.length-count0
    
    while(count0>0){
        arr[curr]=0
        count0--
        curr++
    }

    while(count1>0){
        arr[curr]=1
        count1--
        curr++
    }
    return arr
}
console.log(sort01([1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1,1,1,1,1,0,1,0]))


function kconusucativesum(arr, k) {
    let sum1 = 0
    for (i = 0; i < kconusucativesum; i++) {
        sum1 += arr[i]
    }
    let sum2 = sum1
    let maxsum = sum1
    for (let i = k; i < arr.length; i++) {
        sum2 += arr[i]
        sum2 = sum2 - arr[i - k]
        //console.log(sum2)
        if (sum2 > maxsum)
            maxsum = sum2
    }
    return maxsum
}
console.log(kconusucativesum([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))

function simpleMaxSumOf3Cosecutive(arr) {
    if (arr.length < 3) return
    let CurrMax = -Infinity
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] + arr[i + 1] + arr[i + 2] > CurrMax) CurrMax = arr[i] + arr[i + 1] + arr[i + 2]
    }
    return CurrMax
}
console.log(simpleMaxSumOf3Cosecutive([1, 2, 3, 4, 5, 6, 7, 8, 9]))

function simpleMaxSumOf3Cosecutive2(arr, k) {
    if (arr.length < k) return
    let CurrMax = -Infinity
    for (let i = 0; i < arr.length - k; i++) {
        let sum = 0
        for (let j = i; j < i + k; j++) {
            sum += arr[i];
        }
        if (sum > CurrMax) CurrMax = sum
    }
    return CurrMax
}
console.log(simpleMaxSumOf3Cosecutive2([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))

function simpleMaxSumOfKCosecutive(arr, k) {
    if (arr.length < k) return
    let CurrMax = -Infinity
    let totalSum = 0, leftWindowItemSum = 0;
    for (i = 0; i < k; i++) {
        totalSum += arr[i]
    }
    CurrMax = totalSum
    for (let i = k; i < arr.length; i++) {
        leftWindowItemSum += arr[i - k]
        totalSum += arr[i]
        if (totalSum - leftWindowItemSum > CurrMax) {
            CurrMax = totalSum - leftWindowItemSum
        }
    }
    return CurrMax
}
console.log(simpleMaxSumOfKCosecutive([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))