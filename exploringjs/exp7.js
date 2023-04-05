// function display(name){
//     console.log(name)
// }
// display("satendra")

// const display=(a,b)=>console.log(a,b)
// display("satendra","kush")

// function display2(){
//     console.log('Three');


// }

// function display(){
// console.log('One');
// display2()
// setTimeout(() => console.log('Two'), 3000);
// console.log("four")
// }
// display()

// async function disp(a,b){
//     return a+b
// }
// console.log("1")
// console.log("2")
// console.log(disp(5,7))
// console.log("3")
// console.log("4")

async function add(num){
    return num+10
}

async function result(){
    let res=await add(20)
    console.log(res)
}
result()
console.log("first")
