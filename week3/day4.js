function checkInt(inp){
    let pattern=/^-?[0-9]+$/
    let result=pattern.test(inp)
    return result
}
console.log(checkInt("1"))
//Take a number and if number is multiple of 3 print "Foo",
//If number is multiple of 5 print "Bar"
//And if number is multiple of both 3 and 5 print "FooBaar".
//If not multiple of either , print nothing.

//6=>Foo
//10=>Baar
//30=>FooBaar
//13=>

function print(n){
    //if(n%15) console.log("FooBaar")
    //if(n%3==0&&n%5==0) console.log("FooBaar")
    if(n%3==0) console.log("Foo")
    if(n%5==0) console.log("Baar")

}
print(30)








function checkchar(inp){
    let num='12345'.charCodeAt(2)
    let pattern=/^-?[a-z]+$/
    let result=pattern.test(inp)
    return result
}
console.log(checkchar("a"))