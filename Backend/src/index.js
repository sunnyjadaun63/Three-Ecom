const express = require('express')
const bodyParser=require('body-parser')
const HomeRoutes=require('./routes/Home.route')
const AuthRoutes=require('./routes/Auth.routes')
const connectDB = require('./Database/db')


const app =express()
 connectDB()

app.use(express.json())
app.use("/api/home",HomeRoutes)
app.use("/api/auth",AuthRoutes)




app.listen(8000,()=>{
    console.log("server running on port 8000")
})