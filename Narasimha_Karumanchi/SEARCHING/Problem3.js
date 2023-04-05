function CheckDuplicatesHasing(arr){
let map=new Map()
for(let i=0;i<arr.length;i++){
    if(map.get(arr[i])){
        console.log("Duplicates exist:",arr[i])
        return
    }else{
        map.set(arr[i],1)
    }
}
console.log("No duplicates in given array.")
}
CheckDuplicatesHasing([1,7,0,8])

// function CheckDuplicatesHasing(arr) {
//     let map = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         if (map.get(arr[i])) {
//             map.set(arr[i], map.get(arr[i]) + 1);

//         } else {
//             map.set(arr[i], 1);
//         }
//     }
//     console.log(map)

// }

// CheckDuplicatesHasing([1, 2, 3, 3, 4, 5, 6, 7, 6, 6])
