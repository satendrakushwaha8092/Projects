//printing n,n-1,n-2,n-3,.................
function print(n){
    if(n<0) return
    console.log(n)
    return print(n-1)
}

//array is sort or not
function issort(arr,n){
    if(n==1) return true
    return (arr[n-1]<arr[n-2])?issort(arr,n-1):false
}

//factorial
function fact(n){
    if(n==1) return 1
    return n*fact(n-1)
}

//sum of array
function SumOfArray(arr){
    if(arr.length==0) return 0
    return arr[0]+SumOfArray(arr.splice(1))
}

//product of arrray elements
function ProductOfArray(arr){
    if(arr.length==0) return 0
    return arr[0]+ProductOfArray(arr.splice(1))
}

//string is palimdrome or not
function palimdrome(str){
    if (str.length==0||str.length==1) return true
    return str[0]==str[str.length-1]?palimdrome(str.slice(1,-1)):false
    // if(str[0]==str[str.length-1]) return palimdrome(str.slice(1,-1))
    // else return false
}

//revere string
function revstr(str){
    if(str.length==0) return " "
    return revstr(str.slice(1))+str[0]
}

//reverse sentence of each word
function revsentence(sentence){
    words=sentence.split(' ')
    for(let i=0;i<words.length;i++){
        words[i]=revstr(words[i])
    }
    return words.join('')
}
console.log(revsentence("my name is satendra"))