const { getHome, createApi, updateUser, getAllUsers, deleteUser, softDeleteuser, getUserbyId } = require('../controller/Home.contorller')


const router=require('express').Router()


router.get('/get',getHome)
router.post('/create',createApi)
router.get('/getUserbyId/:id',getUserbyId)
router.put('/update/:id',updateUser)
router.get('/getAllUsers',getAllUsers)
router.delete('/deleteUser/:id',deleteUser)
router.delete('/softDeleteUser/:id',softDeleteuser)


module.exports=router