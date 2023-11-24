
 const StudentModel=require("../models/Student")
//Create Students
  const CreateStudent= async(req,res)=>{
    try{
      let reqBody=req.body;
      let result= await StudentModel.create(reqBody);
      res.status(200).json({message:"Student Created Successfully",data:result});
    }
    catch(error){
        res.status(404).json({message:"Failed to Student Create",data:error});
    }

  }


//Update Students
const UpdateStudent= async(req,res)=>{
    try{
        let id=req.params.id;
        let query={_id:id};
        let bodyData=req.body;
        let result=await StudentModel.updateOne(query,bodyData);
        res.status(200).json({message:"Student Update Successfully",data:result});

    }
    catch(error){
        res.status(404).json({message:"Failed to Student Update",data:error});
    }

}

//Get All Students

const GetAllStudent= async(req,res)=>{
    try{
         let result=await StudentModel.find();
        res.status(200).json({message:"Get All Student Successfully",data:result});

    }
    catch(error)
    {  res.status(404).json({message:"No Data Found",data:error});}

}


//Get Student By Id

const GetStudentById= async(req,res)=>{
    try{
        let id=req.params.id;
        let query={_id:id};
        let result=await StudentModel.find(query);
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(404).json({status:"fail",data:e})
    }

}
//Delete Student

const DeleteStudent= async(req,res)=>{
    try{
        let id= req.params.id;
        let Query={_id:id};
        let result= await StudentModel.deleteOne(Query)
        res.status(200).json({message:"Student Delete Successfully",data:result});

    }
    catch(error)
    {  res.status(404).json({message:"No Data Found",data:error});}
}

module.exports={
    CreateStudent,
    UpdateStudent,
    GetAllStudent,
    GetStudentById,
    DeleteStudent
}

