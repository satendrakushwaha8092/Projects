let arr=[1,1,1,3,3,7,7,7,4]
let obj={}
for(let ele of arr){
    if(obj[ele]){
        obj[ele]++
    }
    else{
        obj[ele]=1
    }
}
for(let ele in obj){
console.log(ele,obj[ele])
}