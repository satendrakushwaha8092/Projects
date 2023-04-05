/*Problem-18 Find the Number Occurring an Odd Number of Times: Given an array of
positive integers, all numbers occur an even number of times except one number which
occurs an odd number of times. Find the number in O(n) time & constant space. Example :
I/P = [1,2,3,2,3,1,3] O/P = 3*/

function OddNumberReapeatedElements(arr){
    let count=0
    for(let i=0;i<arr.length;i++){
        count=0
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]) count++
        }
        if(count%3==0) return arr[i]
    }
}

console.log(OddNumberReapeatedElements([1,2,3,2,3,1,3]))
