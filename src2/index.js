const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://Satendrakushwaha:LR42b0N3nw0xCgNl@cluster0.pa1oj.mongodb.net/practice?authSource=admin&replicaSet=atlas-c5v59u-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',{
    useNewUrlParser:true
})
    .then(()=>console.log('Mongodb is connected'))
    .catch((err)=>console.log(err))

app.get('/test',(req,res)=>{
    res.send("tested")
})

app.listen((process.env.PORT||3000),function(){
    console.log("express is running on port",(process.env.PORT||3000))
})