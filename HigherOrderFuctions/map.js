const users=[
    {firstName:"first",lastName:"last1",age:23},
    {firstName:"first2",lastName:"last2",age:24},
    {firstName:"first3",lastName:"last3",age:25},
    {firstName:"firs4",lastName:"last4",age:26}

]

const output=users.map((x)=>x.firstName+" "+x.lastName)
console.log(output)
// const arr=[1,2,3,4,5,6,7,8,9]
// const output=arr.map(x=>x*2)
// console.log(output)