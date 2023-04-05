//swapping

/*function swapping1() {
    let a = 10
    let b = 20;  //";" for this line
    [a, b] = [b, a]  //es6 syntax
    return [a, b]
}
console.log(swapping1())

function swapping2() {
    let a = 10
    let b = 20;  //";" for this line
    a = a + b
    b = a - b
    a = a - b
    return [a, b]
}
console.log(swapping2())

function swapping3() {
    let a = 10
    let b = 20;  //";" for this line
    a = a * b
    b = a / b
    a = a / b
    return [a, b]
}
console.log(swapping3())

//reverse array without using other array
function revarray(){
    let arr=[1,2,3,4,5,6,7,8,9,0];
    let i=0,j=arr.length-1;
    while(i<j){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        i++
        j--
    }
    return arr
}
console.log(revarray())

function revarray2(){
    let arr=[1,2,3,4,5,6,7,8,9,0];
    let i=0,j=arr.length-1;
    while(i<j){
        arr[i]=arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        i++
        j--
    }
    return arr
}
console.log(revarray2())*/



// let arr=[1,2,3,4,5,6,7,8,9,0];
// arr.splice(1,1)
// arr.unshift(arr.pop()) [2,3,4,5,6,7,8,9,0,1]
// console.log(arr)
// let a=arr.splice(1,1)
// console.log(a)
// arr.push(1)
// console.log(arr)
// arr.push(arr.shift())
// arr.splice(8,8)
// console.log(arr)

function maxFrequency() {
    let map = new Map();
    const arr = [2, 3, 3, 3, 5, 6, 7, 7, 7, 7];
    if (!arr.length) {
        return null;
    }
    let maxFreq = 1;
    let maxFreqElem = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);

            if (maxFreq < map.get(arr[i])) {
                maxFreq = map.get(arr[i]);
                maxFreqElem = arr[i];
            }
        } else {
            map.set(arr[i], 1);
        }
    }
    console.log(map)
    //console.log(maxFreq, maxFreqElem)
    return [maxFreq, maxFreqElem]
}

console.log(maxFrequency())

// function largesttwonumbersum() {
//     let arr = [12, 10, 4, 8, 15]
//     let max1 = null
//     let max2 = null
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max1) {
//             max2 = max1
//             max1 = arr[i]
//         }
//         else if (arr[i] > max2) max2 = arr[i]
//     }
//     return max1 + max2
// }
// console.log(largesttwonumbersum())

