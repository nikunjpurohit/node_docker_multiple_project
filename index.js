const express = require("express")
const mongoose =require("mongoose")
const app = express()

mongoose.connect("mongodb://nikunj:mypassword@mongo:27017/?authSource=admin")
.then(()=> console.log('succesfuly connected to db'))
.catch((e)=> console.log(e))

app.get('/', (req,res)=>{
    res.send("<h2>Hi There! yo !!</h2>")
})


const port = process.env.PORT || 3000

app.listen(port, ()=> console.log(`listensing on port ${port}`))

