function BubbleSort(arr){
    for(let pass=arr.length-1;pass>=0;pass--){
        for(let i=0;i<=pass-1;i++){
            if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
            }
        }
    }
}

function BubbleSortImproved(arr){
    for(let pass=arr.length-1;pass>=0&&swapped;pass--){
        swapped=0
        for(let i=0;i<=pass-1;i++){
            if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
            swapped=1
            }
        }
    }
}


// function bubblesort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i;j<arr.length;j++){
//             if(arr[i]>=arr[j]){
//                 [arr[i],arr[j]]=[arr[j],arr[i]]
//                 // let temp=arr[i]
//                 // arr[i]=arr[j]
//                 // arr[j]=temp
//             }
//         }
//     }
// }
let arr=[5,7,2,1,4]
BubbleSort(arr)
console.log(arr)