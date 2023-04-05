//  1.find the pair that sum=n

let arr=[-5,-3,-2,1,2,3]

function multipointer1(n){
    for(let i=0;i<arr.length-1;i++){
        for(j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==n) return true
        }
    }
    return false
    }
    console.log("1.",multipointer1(0))  //O(n^2) 

//2.
function multipointer2(n){
    let i=0
    let j=arr.length-1
    while(i<j){
        if(arr[i]+arr[j]===n) return true
        if(arr[i]+arr[j]>n) {
            j=j-1
        }
        if(arr[i]+arr[j]<n) {
            i=i+1
        }

    }
    return false
}
console.log("2.",multipointer2(0))  //O(n) 

//  2.find the pair that sums closedt to 12

function multipointer(){
    let result=0
    let arr=[1,2,5,8,9,14]
    let proximity=Infinity
    //console.log("proximity=",proximity)
    console.log(Math.abs(4))
    let i=0
    let j=arr.length-1
    while(i<j){
        if(Math.abs(arr[i]+arr[j]-12)>proximity){
            console.log(arr[i],arr[j])
            proximity=Math.abs(arr[i]+arr[j]-12)
        }
         if(arr[i]+arr[j]-12>0) {
           j=j-1
         }
        else {
             (arr[i]+arr[j]-12<0) 
            i=i+1
        }

    }
    return result
}
console.log("2.",multipointer()) 





