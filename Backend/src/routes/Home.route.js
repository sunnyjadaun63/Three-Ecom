const { getHome } = require('../controller/Home.contorller')


const router=require('express').Router()


router.get('/get',getHome)


module.exports=router