const dotenv=require("dotenv").config()
const express=require('express')
const cors=require('cors')
const { connectToDB } = require("./database/db")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")

const server=express()

// database connection
connectToDB()


// middlewares
server.use(cors({origin:process.env.ORIGIN,credentials:true,exposedHeaders:['X-Total-Count'],methods:['GET','POST','PATCH','DELETE']}))
server.use(express.json())
server.use(cookieParser())
server.use(morgan("tiny"))

server.get("/",(req,res)=>{
    res.status(200).json({message:'running'})
})

server.listen(8000,()=>{
    console.log('server [STARTED] ~ http://localhost:8000');
})