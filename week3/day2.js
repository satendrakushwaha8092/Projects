//["abc","def","ghi"]==> [ 'Abc', 'Def', 'Ghi' ]
function capitaliseFn(arr){
    let result=[]
    if(arr.length==0) return []
    let s=arr[0][0].toUpperCase()+arr[0].slice(1)
    //console.log(s)
    result.push(s)
    //console.log(result.concat(capitaliseFn(arr.slice(1))))
    return result.concat(capitaliseFn(arr.slice(1)))
}
console.log("capitalisefn=",capitaliseFn(["abc","def","ghi"]))

//"satendra kushwaha"==>"ardnetas ahawhsuk"
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

//[1,3,5,2,6,1,3,3,]==>[ 1, 3 ]
function duplicates(arr){
    let frequencies=new Map()
    for(i=0;i<arr.length;i++){
        if(frequencies.get(arr[i])==undefined) frequencies.set(arr[i],1)
        else frequencies.set(arr[i],frequencies.get(arr[i])+1)
    }
    console.log(frequencies)
    
    let res=[]
    for(let pairs of frequencies){
        if(pairs[1]>1) res.push(pairs[0])
    }
    return res
}
console.log("duplicates=",duplicates([1,3,5,2,6,1,3,3,]))

