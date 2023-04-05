// function BubbleSort() {
//     let arr = [1, 3, 2, 5, 22, 89, 0, 8]
//     let issort = false
//     for (let i = 0; i < arr.length - 1; i++) {
//         issort = false
//         for (let j = i; j < arr.length; j++) {
//             if (arr[i] >= arr[j])
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//             issort = true
//         }
//         if (!issort) break
//     }
//     console.log(arr)
// }
// BubbleSort()

//Narasimha_Karumanchi
function BubbleSort(arr, n) {
    for (let pass = n - 1; pass >= 0 ; pass--) {
        for (let i = 0; i <= pass - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
            }
        }
    }
    console.log(arr)
}
BubbleSort([1, 3, 2, 5, 22, 89, 0, 8],8)

//Narasimha_Karumanchi
function BubbleSortImproved(arr, n) {
    let swapped=1
    for (let pass = n - 1; pass >= 0 && swapped; pass--) {
         swapped = 0
        for (let i = 0; i <= pass - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                swapped = 1
            }
        }
    }
    console.log(arr)
}
BubbleSortImproved([1, 3, 2, 5, 22, 89, 0, 8],8)
//Worst case complexity : O(n2)
//Best case complexity (Improved version) : O(n)
//Average case complexity (Basic version) : O(n2)
