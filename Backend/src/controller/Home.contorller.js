const getHome=async(req,res)=>{

    try {
        return  res.status(200).json({message:'Bhadwe AAjaa tu'})

        

        
    } catch (error) {
        return res.status(500).json({message:'Bhadwe jaana tu'})
        
    }


}
module.exports={getHome}