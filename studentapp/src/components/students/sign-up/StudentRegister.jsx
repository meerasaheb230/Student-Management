
// import React from "react";
// import { useForm } from "react-hook-form";
// import "./StudentRegister.css";
// import { useState } from "react";
// import axios from "axios";

// // import { StudentByID } from "../SingleStudent/SingleStudent";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPen } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// import img from "./man.png";
// import book from "./books.jpeg";

// export const StudentRegister =()=>{


// const [studentList,setStudentList]=useState({title: "",
//             name: "",
//           collegeName:"",
//           gender: "",
//             mobile: "",});

      
//     const [student,setStudent]=useState([]);
//     // console.log(student)
//     console.log(student);
//   const { register, handleSubmit, formState: { errors } } = useForm();


//   const handleRegistration = (data) => {
    

//       const token=localStorage.getItem("accessToken");
//       console.log(token);
//     //  console.log(data)
//     axios.post("http://localhost:3001/students",data,{
//       headers:{
//         "content-type":"application/json",
//         authorization: `Bearer ${token}`,
//       }
//     }).then((response)=>{
//       if(response.data.success){
//         console.log(response.data.data)
//         const studentData=response.data.data;
//         setStudent([...student,studentData]);
//         console.log(student);
      
//        setStudent("");
//         console.log(student);
    
//   }
//     }).catch((error)=>{
//       console.log(error);
//       setStudentList("");
     
//     })

// }
//   const handleError = (errors) => {};

//   const registerOptions = {
//     title:{required: "title is required"},
//     name: { required: "Name is required" },
//     collegeName: { required: "collegeName is required" },
//     mobile:{require: "mobile is required."},
//     gender:{ required: "gender is required" },
   
   
//   };

//   return (
//     <form onSubmit={handleSubmit(handleRegistration, handleError)} className="form-group">
//       {/* <StudentByID student={student}/> */}
     
//       <div className="card-box">
//                     <div className="row">
//                           <div className="col">
//                             <div className="card">
//                              <img src={book}  alt="book"  className="card-img-top"/>
//                              <img src={img}  alt="human icon"  className="image"/>
//                                  <div className="card-body">
//                                   {/* {student.map(()=>{
//                                         <li> */}
//                               <div className="map-content">
//                                      <h3><h4>{studentList.title}{ }</h4>{studentList.name}</h3>
//                                      <p className="card-text">
//                                      """ 
//                                      CollegeName: {studentList.collegeName}<br/>
//                                      gender: {studentList.gender}<br/>
//                                      {/* Address: Street::{student.address.street}<br/><br/>
//                                               City:: {student.address.city}<br/><br/>
//                                               Pincode:: {student.address.pincode}<br/><br/> */}
//                                      Mobile: {studentList.mobile}
//                                      """
//                                      </p>
//                                      <div className="todo-action">
//                                       {/* <Routes>
//                                         <Route path="/students/:StudentEdit" element={<StudentEdit/>}/>
//                                       </Routes> */}
//                                       <Link to={"/students" +student._id}>
//                                           <FontAwesomeIcon icon={faPen}  />
//                                           </Link>
//                           {/* <button onClick={handleTodoDelete} className="btn-delete">
//                           <FontAwesomeIcon icon={faTrash} />
//                           </button> */}
//                          </div>
                         

//                          </div>
//                          {/* </li>
//                           })}   */}
//                                  </div>
//                              </div>
//                         </div>
//                   </div>
//               </div>


//        <div id="input-group">
//         <label>Title</label>
//         <select {...register("title")}>
//         <option value="">--select Title--</option>
//        <option value="Ms">Ms</option>
//         <option value="Mr">Mr</option>
//         <option value="Miss">Miss</option>
//       </select>
//         <small title="text-danger">
//           {errors?.title && errors.title.message}
//         </small>
//       </div>
//       <div id="input-group">
//         <label>Name</label>
//         <input name="name" type="text" {...register('name', registerOptions.name) }/>
//         <small className="text-danger">
//           {errors?.name && errors.name.message}
//         </small>
//       </div>
//       <div id="input-group">
//         <label>collegeName</label>
//         <input
//           type="text"
//           name="collegeName"
//           {...register('collegeName', registerOptions.collegeName)}
//         />
//         <small id="text-danger">
//           {errors?.collegeName && errors.collegeName.message}
//         </small>
//       </div>
//       <div id="input-group">
//         <label>gender</label>
//         <select {...register("gender")}>
//         <option value="">--select gender--</option>
//        <option value="female">Female</option>
//         <option value="male">Male</option>
//         <option value="other">Other</option>
//       </select>
//         <small id="input-group">
//           {errors?.gender && errors.gender.message}
//         </small>
//       </div>
      
//       <div id="input-group">
//         <label>Mobile</label>
//         <input name="mobile" type="number" {...register('mobile', registerOptions.mobile) }/>
//         <small className="text-danger">
//           {errors?.mobile && errors.mobile.message}
//         </small>
//       </div>
      
//       <button className="btn btn-outline-success">Submit</button>
//     </form>
//   )
//   }



import React,{useState,useEffect} from 'react';
import "./StudentRegister.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";


export const StudentRegister=()=>{
    const [studentData,setStudentData]=useState({title:'',name:'',collegeName:'',gender:'',mobile:""});
const [form,setForm]=useState("")
const [students,setStudents]=useState([]);
const {title,name,collegeName,gender,mobile}=studentData;
const changeHandler=e=>{
  setStudentData({...studentData,[e.target.name]:e.target.value})
}
const submitHandler=e=>{
    e.preventDefault();
    if(studentData.title.trim().length===0||studentData.name.trim().length===0 || studentData.collegeName.trim().length===0 ||
    studentData.gender.trim().length===0 || studentData.mobile.trim().length===0){
        setForm(true);
        return;
    }
    const token=localStorage.getItem("accessToken")

    console.log(token);
    setForm(false);
    //console.log(data);
    axios.post("http://localhost:3001/students",studentData,{
        headers:{
            "content-type":"application/json",
            authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        if(response.data.success){
            const Student=response.data.data.students;
           // console.log(book);
            setStudents([...students,Student]);
            setStudentData({title:"",name:"",collegeName:"",gender:"",mobile:""})
        }
    }).catch((error)=>console.error(error))
}

const handleStudentDelete=(id)=>{
    const token=localStorage.getItem("accessToken");
    axios.delete(`http://localhost:3001/students/${id}`,{
     headers:{
         authorization:`Bearer ${token}`
     }
    }).then((response)=>{
     if(response.data.success){
         console.log(response.data.success);
         const data=students.filter(({_id})=> _id !== id )
         setStudents(data)
     }
    })
 }


useEffect(() => {
    const token = localStorage.getItem("accessToken");
    // console.log(students)
    axios
      .get("http://localhost:3001/students", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const students = response.data.data.students;
        //console.log(response.data);
       // console.log(books);
        setStudents(students);
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);


return(
    <div className='container'>
    <div className='register'>   
            <form onSubmit={submitHandler} id='register'>
            <h2>Students Registration</h2>
            <br/>
                <div  className='input-group'>
                    {  <ul>
                          { 
                            students.map((item)=>{
                             return(
                                    <li key={item._id}>
                                              <div >
                                                <span >{item.title}</span>
                                            
                                              <p> 
                                                Name:  {item.name}
                                                CollegeName: {item.collegeName}<br/>
                                                gender: {item.gender}<br/>
                                               Mobile: {item.mobile}</p>
                                
                                              <span >
                                                <Link id="bg" to={"/students/" + item._id}>
                                                  <button id="icon">
                                                  <FontAwesomeIcon  icon={faPen} />
                                                  </button>
                                                </Link>
                                                </span>
                                                <span >
                                                <button id="bg" onClick={()=>handleStudentDelete(item._id)} >
                                                  <FontAwesomeIcon  icon={faTrash} />
                                                </button>
                                                </span>
                                              </div>
                                            </li>)
                                        })
                                }
                         </ul>
                    }
                </div>
                <br/>
                
               
                <div>
                    <label>Title</label>
                    <br/>
                    <input id='name' type="text" name="title" value={title} onChange={changeHandler} placeholder="Enter your title"></input>
                </div>
                <br/>
                <div>
                    <label>what is your name?</label><br/>
                    <input id='name' type="text" name="name" value={name} onChange={changeHandler}></input>
                </div>
                <br/>
                <div>
                    <label>what is your gender</label><br/>
                    <input id='gender' type="text" name="gender" value={gender} onChange={changeHandler}></input>
                </div>
                <br/>
                <div>
                    <label>Collage</label><br/>
                    <input id='collegeName' type="text" name="collegeName" value={collegeName} onChange={changeHandler}></input>
                </div>
                <br/>
                <div>
                    <label>Mobile</label><br/>
                    <input id='mobile' type="number" name="mobile" value={mobile} onChange={changeHandler}></input>
                </div>
                <br/>

                <div>
                    <button id='submit' type="submit">Submit</button>
                </div>
            </form>
        {form ? (
        <div className="alert alert-danger">
          <p className="alert-message">
            Title and Category fields are required.
          </p>
        </div>
      ) : null}
    </div>
    </div>
)
}

