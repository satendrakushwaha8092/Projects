//2.
let arr1=[10,20,30]
let arr2=[20,25,30,40,50]
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j])
        console.log(arr1[i])
        break
    }
}