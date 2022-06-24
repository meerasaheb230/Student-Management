const express=require("express");
const router=express.Router();

const studentController=require("../../controllers/students.controller");

router.get("/students",studentController.getAllStudents);
router.post("/students",studentController.newStudent);
router.put("/students",studentController.updateStudent);
router.delete("/students",studentController.deleteStudent);


module.exports=router;