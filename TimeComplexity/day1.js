//1.
function fun1(x){  
    x=x+1  //c+c
    return x*5  //c+c
}
console.log("1.",fun1(7))  //totloperations=c+c+c+c=4c


//2.
function fun2(n){
    sum=0
for(let i=1;i<=n;i++){  //1+1+1+1+1
    sum=sum+i  //1+1
}
return sum  //1
}
console.log("2.",fun2(1))

//3.
function max(m,n){
    if(m>n) return m  //1+1
    else return n  
}
console.log("3.",max(9,7))  //totloperations=1+1=2

//4.
let n
for(let i=0;i<n;i++){ 
        ______________
        ______________
    
}  //O(n)

//5.
for(let i=0;i<n;i++){ 
    for(let j=0;j<n;j++){
        ______________
        ______________

    }
    
}  //O(n^2)

//6.
for(let i=0;i<n;i++){ 
    for(let j=0;j<n;j++){
        ______________
        ______________

    }
    
}  //O(n^2)

//7.
for(let i=0;i<n;i++){ 
    for(let j=0;j<n;j++){
        for(let k=0;k<n;k++){
        ______________
        ______________

        }
    }
    
}  //O(n^3)


//8.
for(let i=0;i<n;i++){ 

    ______________
    ______________

}
    for(let j=0;j<n;j++){
        ______________
        ______________

    }
        for(let k=0;k<n;k++){
            ______________
            ______________

        }  //O(3n)  //O(n)