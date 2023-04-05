// function calculateTotalSum(banks){
//     let totalAmount=0
//     for(let balance of banks){
//         totalAmount+=balance
//     }
//     return totalAmount
// }

// function calculateRichestPerson(accounts){
//     let maxAmount=-Infinity;
//     for(let customer of accounts){
//         maxAmount=Math.max(calculateTotalSum(customer),maxAmount)
//     }
//     return maxAmount
// }
// console.log(calculateRichestPerson([[2,8,7],[7,1,10],[1,9,5]]))

function animalCount(animals){
    let animalFreq={}
    for(let animal of animals){
        if(animalFreq[animal]){
            animalFreq[animal]++
        }
        else{
            animalFreq[animal]=1
        }
    }
    console.log(animalFreq)
}
animalCount(["cat","dog","elephant","dog"])

function generatingString(number){

    let alphabet="abcdefghijklmnopqrstuvwxyz"
    let finalStr='',currIndex=0
    while(currIndex<number){
        finalStr+=alphabet[currIndex%26]
        currIndex++
    }
    return finalStr
}
function encodeNumberWithCharacter(arr){
    for(let i=0;i<arr.length;i++){
        arr[i]=generatingString(arr[i])
    }
}
let num=[2,3,5,7]
encodeNumberWithCharacter(num)
console.log(num)
// function calculateRichestPerson(accounts){
//     let maxAmount=-Infinity;
//     for(let customer of accounts){
//         for(let banks of customer){
//             console.log(banks)
//         }
//     }
// }
// console.log(calculateRichestPerson([[2,8,7],[7,1,10],[1,9,5]]))