function selection(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        [arr[min],arr[i]]=[arr[i],arr[min]]
    }
}
let arr=[5,7,2,1,4]
selection(arr)
console.log(arr)