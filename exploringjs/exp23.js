class personalDetail{
    constructor(name,age,markes1,markes2){
        this.name=name
        this.age=age
        class markes{
            constructor(markes1,markes2){
                this.markes1=markes1
                this.markes2=markes2
            }
        }
        this.obj2=new markes(markes1,markes2)
        //console.log(this.obj2)
    }
}

const obj1=new personalDetail("bame",40,60,20)
console.log(obj1)