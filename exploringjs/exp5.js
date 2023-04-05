function revstr(str){
    if(str.length==0) return
    let newstr=[]
    //return revstr(str.slice(1))+str[0]
    newstr.concat(str[str.length-1])
    return revstr(str.slice(1))
}
let str=["how","are","you"]
console.log(revstr(str))