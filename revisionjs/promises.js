// function promise1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("promise1 resolved");
//         },1000)
//     })
// }

// function promise2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("promise2 resolved")
//         },1000)
//     })
// }

// // promise1().then(res1=>{
// //     console.log("res1 resolved",res1)
// //     return promise2()
// // }).then(res2=>{
// //     console.log("res2 resolved",res2)
// // })

// async  function myAsyncAwait(){
//     const res1=await promise1()
//     console.log("res1",res1)
//     const res2=await promise2()
//     console.log("res2",res2)
//     console.log("res1",res1)
// }
// myAsyncAwait()
