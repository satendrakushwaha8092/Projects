//write a functionto merge these two arrays two & result should be like this.
let array1=[
    {name:"a",value:123},
    {name:"b",value:666}
]
let array2=[
    {name:"c",value:444},
    {name:"d",value:999},
    {name:"b",value:111}
]
// result:[
//     {name:"a",value:123},
//     {name:"b",value:111},
//     {name:"c",value:444},
//     {name:"d",value:999}
// ]






function maximumWord(sentences){
    let max=0

    for(let currSentence of sentences){
        
        let currWordCount=currSentence.split(" ").length
        if(currWordCount>max) max=currWordCount;
    }
    return max
}
console.log(maximumWord(["please wait","continue to flight","continue to win","z a b c"]))


function findSqrt(n){
    return Math.pow(n,1/2)
    //return Math.sqrt(n)
}

console.log(findSqrt(9))

function missingNumberln(arr){
    let maxNumber=Math.max(...arr)
    let totalSum=0
    for(let i=0;i<arr.length;i++){
        totalSum+=arr[i]
    }
    return (maxNumber*(maxNumber+1)/2)-totalSum
}
//console.log(missingNumber([1,2,3,4,5,6,8]))

function missingNumber(arr){
    let min=Math.min(...arr)
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i]-min+1
    }
    let missingNumber=missingNumberln(arr)
    return missingNumber+min-1
}
console.log(missingNumber([4,5,6,8,7,9,11]))