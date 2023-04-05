// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(j=i;j<arr.length;j++){
//             if(arr[i]>=arr[j]){
//                 let temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
// }
// let arr=[1,6,2,4,8,1,2]
// bubbleSort(arr)
// console.log(arr)

function BubbleSort() {
    let arr = [1, 3, 2, 5, 22, 89, 0, 8]
    let issort = false
    for (let i = 0; i < arr.length - 1; i++) {
        issort = false
        for (let j = i; j < arr.length; j++) {
            if (arr[i] >= arr[j])
                [arr[i], arr[j]] = [arr[j], arr[i]]
            issort = true
        }
        if (!issort) break
    }
    console.log(arr)
}
BubbleSort()

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let temp=arr[i]
//         j=i
//         while(j>=1&&arr[j-1]>temp){
//                 arr[j]=arr[j-1]
//                 j--
//         }
//         arr[j]=temp
//     }
// }
// let arr=[1,6,2,4,8,1,2]
// insertionSort(arr)
// console.log(arr)

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let j=i
//         while(j>=1&&arr[j-1]>arr[j]){
//                 [arr[j-1],arr[j]]=[arr[j],arr[j-1]]
//                 j--
//         }
//     }
// }
// let arr=[1,6,2,4,8,1,2]
// insertionSort(arr)
//console.log(arr)