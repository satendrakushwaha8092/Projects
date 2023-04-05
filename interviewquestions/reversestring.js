// let str="satendra"
// let revstr=[]
// for(let i=str.length-1;i>=0;i--){
//     revstr.push(str[i])
// }
// console.log(revstr)

function reverse(str){
    if(str.length==0) return ""
    return reverse(str.slice(1))+str[0]
}

function revSentWords(sent){
    let words=sent.split(" ")
    for(let i=0;i<words.length;i++){
        words[i]=reverse(words[i])
    }
    return words.join(" ")
}
console.log("revSentWords=",revSentWords("satendra kushwaha"))


