const express = require('express')
const bodyParser=require('body-parser')
const HomeRoutes=require('./routes/Home.route')


const app =express()

app.use(express.json())
app.use("/api/home",HomeRoutes)
app.listen(8000,()=>{
    console.log("server running on port 8000")
})