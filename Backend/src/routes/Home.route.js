const { getHome, createApi } = require('../controller/Home.contorller')


const router=require('express').Router()


router.get('/get',getHome)
router.post('/create',createApi)


module.exports=router