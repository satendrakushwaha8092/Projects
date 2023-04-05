function FindMissingNumber(arr) {
    let max = Math.max(...arr)
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return (max * (max + 1)) / 2 - sum
}
console.log(FindMissingNumber([1,4,9,2,3,6,7,8]))