const { signUp, logIn } = require('../controller/Auth.contoroller')



const router=require('express').Router()



router.post('/signup',signUp)
router.post('/login',logIn)


module.exports=router