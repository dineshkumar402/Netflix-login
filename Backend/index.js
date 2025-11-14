const express = require("express")
const cors = require("cors")

const app = express()

const email = "abc@gmail.com"
const password = "1234"

app.use(express.json())

app.use(cors())

app.use(express.urlencoded({extended:true}))

app.post("/sign", function(req,res)
{
    console.log(req.body.email)
    if(req.body.email === email && req.body.password === password)
    {
        res.send(true)
    }
    else
    {
        res.send(false)
    }
})

app.listen(3000,function(){
    console.log("Server Started...");
    
})