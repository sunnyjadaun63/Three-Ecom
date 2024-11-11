const { getHome, createApi, updateUser, getAllUsers, deleteUser, softDeleteuser, getUserbyId } = require('../controller/Home.contorller')
const {authentication}=require('../middleware/Auth/Auth.middleware')

const router=require('express').Router()


router.get('/get',getHome)
router.post('/create',createApi)
router.get('/getUserbyId/:id',authentication,getUserbyId)
router.put('/update/:id',authentication,updateUser)
router.get('/getAllUsers',authentication,getAllUsers)
router.delete('/deleteUser/:id',authentication,deleteUser)
router.delete('/softDeleteUser/:id',authentication,softDeleteuser)


module.exports=router