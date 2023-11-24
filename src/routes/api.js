const express =require("express");
const router=express.Router();

const StudentCtrl=require("../controller/StudentController");

//Api

router.post("/CreateStudent", StudentCtrl.CreateStudent);
router.get("/GetAllStudent",StudentCtrl.GetAllStudent);
router.post("/UpdateStudent/:id",StudentCtrl.UpdateStudent);
router.get("/DeleteStudent/:id",StudentCtrl.DeleteStudent);
router.get("/GetStudentById/:id",StudentCtrl.GetStudentById);


module.exports=router;