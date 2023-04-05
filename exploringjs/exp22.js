class userDetail{
    constructor(Name,Age,Gender){
    this.name=Name
    this.age=Age
    this.gender=Gender
    this.biodata="hii i m ram"
    }
}

class boardDetail extends userDetail{
    constructor(name,age,gender,markes){
        super(name,age,gender)
        this.markes=markes
    }
}

class interDetail extends boardDetail{
    constructor(name,age,gender,markes,markes2){
        super(name,age,gender,markes)
        this.markes2=markes2
    }
}
//const obj=new userDetail("ram",30,"male")
const obj2=new interDetail("ram",30,"male","50%","70%")
//console.log(obj)
console.log(obj2)