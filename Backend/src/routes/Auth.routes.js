const { signUp } = require('../controller/Auth.contoroller')



const router=require('express').Router()



router.post('/signup',signUp)


module.exports=router