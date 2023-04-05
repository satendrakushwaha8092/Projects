/*let arr=[1,3,2,5,1,6,2,2,1,1,1,9,5,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3]
let c=0
let maxcount=0
let maxcountelement=0
for(let i=0;i<arr.length;i++){
    c=0
    for(j=0;j<arr.length;j++){
        if(arr[i]==arr[j])  c++
    }
    if(maxcount<c) {
        maxcount=c
        maxcountelement=arr[i]  
    }
    console.log("element",arr[i],"count=",c)

}
console.log("-------->",maxcount,"---------->",maxcountelement)*/

let arr=[1,3,2,5,1,6,2,2,1,1,1,9,5,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3]
let freqobject={}
let max_occurance=0
let max_occurance_element=0
for(let i=0;i<arr.length;i++){
    console.log(freqobject.hasOwnProperty(arr[i]))
    if(freqobject.hasOwnProperty(arr[i])){
        
        freqobject[arr[i]]+=1
    }
    else{
        freqobject[arr[i]]=1
}
console.log(freqobject)

if(max_occurance<freqobject[arr[i]]){
    max_occurance=freqobject[arr[i]]
    max_occurance_element=arr[i]
}

}
console.log("max_occurance_element=",max_occurance_element,"max_occurance=",max_occurance)
