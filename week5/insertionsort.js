// function InsertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let curr=i
//         while(curr>=1&&arr[curr-1]>arr[curr]){
//         [arr[curr-1],arr[curr]]=[arr[curr],arr[curr-1]]
//         curr--
//         }
//     }
// }
// const arr=[5,4,3,2,1]
// InsertionSort(arr)
// console.log(arr)

// function InsertionSort(arr){
//     let i,j,v
//     for(i=1;i<arr.length;i++){
//         v=arr[i]
//         j=i
//         while(arr[j-1]>v&&j>=1){
//             arr[j]=arr[j-1]
//             j--
//         }
//         arr[j]=v
//     }
// }
// const arr=[5,4,3,2,1]
// InsertionSort(arr)
// console.log(arr)

function InsertionSort(arr) {
    for (i = 1; i < arr.length; i++) {
        j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            tmp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = tmp;
            j--;
        }
    }
}
const arr = [5, 4, 3, 2, 1]
InsertionSort(arr)
console.log(arr)