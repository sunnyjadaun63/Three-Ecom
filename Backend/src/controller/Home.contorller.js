const userModel=require('../models/User.schema')

const getHome=async(req,res)=>{

    try {
        return  res.status(200).json({message:'Bhadwe AAjaa tu'})

        

        
    } catch (error) {
        return res.status(500).json({message:'Bhadwe jaana tu'})
        
    }


}
// The api is for creating something

const createApi=async(req,res)=>{

    try {

        const data=req.body

        if (!data){
            return res.status(400).json({message:'Please provide data to create '})
        }

        const createUser=await userModel.create(data)
        return res.status(201).json({message:'Data created successfully',data:createUser})

        
    } catch (error) {
        console.log('error: ', error);

      return  res.status(500).json({message:"Bhadwe mt bana api"})
        
    }
}
const getUserbyId=async(req,res)=>{
try {
    const id=req.params.id
    if(!id){
        return res.status(400).json({message:'Bhai Id to bhej params me khaa se dhundu tera user'})

    }

    const user= await userModel.findOne({_id:id,isDeleted:false})
    if(!user){
        return res.status(404).json({message:'No user with this id found or might be missing'})
    }

    res.status(200).json({message:'le tera user',data:user})
    
} catch (error) {
    return res.status(500).json({message:'User nhi mil paayega bhai 200 rupee de'})
    
}

}
const updateUser=async(req,res)=>{

    try {
        const data=req.body
        const {id}=req.params
        if(!id){
        return    res.status(400).json({message:"Bhadwe Id to dede atleast"})
        }
        if (!data){
            return res.status(400).json({message:'Please provide data to create '})
        }
        const updatedUser=await userModel.findOneAndUpdate(
            {_id:id,isDeleted:false} ,//filter
            // {$set:{name:data.name,age:data.age}}
            {$set:data},// updating feilds data
            {new:true}, //options sends new data from db       
    )

    if(updateUser){
        return res.status(200).json({message:'User Updated Succesfully',data:updatedUser})
    }



        
       
        
        
    } catch (error) {

        return res.status(500).json({message:"Nhi krunga update jaana bhadwe"})
        
    }

}
const getAllUsers=async(req,res)=>{

    try {
        // const responseData= await userModel.find()
        const responseData= await userModel.find({isDeleted:false}).select({createdAt:0,updatedAt:0,password:0}) // jo field dikhaana  h unke aage select krke 1 jo nhi dikhaane unke aage 0
        // const responseData= await userModel.find().select({createdAt:0,updatedAt:0}) // jo field dikhaana  h unke aage select krke 1 jo nhi dikhaane unke aage 0
        if (!responseData && responseData.length<0){
         return   res.status(404).json({message:"Koi User h nhi dikhaane ko"})
        }

        return res.status(200).json({message:"Le re ye le tere users",data:responseData})
        
    } catch (error) {
        
      return  res.status(500).json({message:"Bhadwe Users nahi dikhaunga",error})
    }
}

const deleteUser=async(req,res)=>{
    try {

        const id=req.params.id
        if(!id){
            return res.status(400).json({message:"Id params me bhej"})
        }
        const deletedData= await userModel.findByIdAndDelete(id)
        if (!deletedData){
            return res.status(400).json({message:"Id shi se nhi bheji"})
        }
        return res.status(200).json({message:'Haa bhai krdiaa delete'})

        
    } catch (error) {
        return res.status(500).json({message:'User delete nhi kr skta kuch dikkat h ptaa nhi h dikkat h kya'})
        
    }
}
const softDeleteuser=async(req,res)=>{
    try {

        const id=req.params.id
        if(!id){
            return res.status(400).json({message:"Id params me bhej"})
        }

        const softDelete=await userModel.findByIdAndUpdate(id,{isDeleted:true})

  
        if (!softDelete){
            return res.status(400).json({message:"Id shi se nhi bheji"})
        }
        return res.status(200).json({message:'Haa bhai krdiaa delete'})

        
    } catch (error) {
        return res.status(500).json({message:'User delete nhi kr skta kuch dikkat h ptaa nhi h dikkat h kya'})
        
    }
}

module.exports={getHome,createApi,updateUser,getAllUsers,deleteUser,softDeleteuser,getUserbyId}