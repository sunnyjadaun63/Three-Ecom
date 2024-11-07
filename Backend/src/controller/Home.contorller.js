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

module.exports={getHome,createApi}