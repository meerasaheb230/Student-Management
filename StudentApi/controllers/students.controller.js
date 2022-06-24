


const getAllStudents=async (req,res)=>{
    res.send("welcome students");
};

const newStudent=async (req,res,next)=>{
  const studentData=req.body;
  res.send(studentData);
}

const updateStudent=async (req,res,next)=>{
    res.send("user updated");
}

const deleteStudent=async (req,res,next)=>{
    res.send("user deleted");
}


module.exports={
    getAllStudents,
    newStudent,
    updateStudent,
    deleteStudent
}