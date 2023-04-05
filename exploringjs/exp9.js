//cello copy vs deep copy
let data1={
    name:"satendra",
    lastname:"kushwaha"
}
let data2=[...data1]
data1.address= { state: 'jharkhand', city: 'jamshedpur', pincode: 831017 }
data2.skill="bd"
console.log("data1:",data1)
console.log("data2:",data2)