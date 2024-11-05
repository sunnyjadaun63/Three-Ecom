const { getHome } = require('../controller/Home.contorller')


const router=require('express').Router()


router.get('/get',getHome)
router.get('/signup',getHome)


module.exports=router