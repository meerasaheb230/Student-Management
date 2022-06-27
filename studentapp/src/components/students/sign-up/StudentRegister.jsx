// import { useState } from "react";
// import axios from "axios";


// export const StudentRegister=()=>{
   
//     const [student,setStudent]=useState({
//         title: "",
//         name: "",
//         collegeName:"",
//         gender: "",
//         // address:{street: "",
//         // city: "",
//         // pincode: "",},
//         mobile: "",
//     });

//     const changeHandler=(e)=>{
//         setStudent({...student,[e.target.name]:e.target.value});
//     }

//     // const streetHandler=(e)=>{
//     //   setStudent(e.target.value);
//     // }
//     // const cityHandler=(e)=>{
//     //   setStudent(e.target.value);
//     // }
//     // const pincodeHandler=(e)=>{
//     //   setStudent(e.target.value);
//     // }

//       const submitHandler=(e)=>{
//         e.preventDefault();
//         console.log(student);
//         const token=localStorage.getItem("accessToken");
//         console.log(token);
//         console.log(student);
//         axios
//         .post("http://localhost:3001/students",{students:student},{
//           headers: {
//             "content-type": "application/json",
//             authorization:`Bearer ${token}`
//           },
//         }).then((response)=>{
//           if(response.data.success){
//                 setStudent({
//         title: response.data.data.title,
//         name: response.data.data.name,
//        collegeName:response.data.data.collegeName,
//        gender: response.data.data.gender,
//       //  address:{street: response.data.data.street,
//       //  city: response.data.data.city,
//       //  pincode: response.data.data.pincode,},
//        mobile: response.data.data.mobile,
//    })
//           }
//         }).catch((error)=>{
//           console.log(error);
          
//         })
//         setStudent({title: "",
//           name: "",
//           collegeName:"",
//           gender: "",
//           // address:{street: "",
//           // city: "",
//           // pincode: "",},
//           mobile: "",})
//       }
    
//     return (
//         <div className="signup">
            

//             <form  className="regisration" onSubmit={submitHandler}>
//             <div className="signup-header">
//                 <h1 className="signup-title">Sign-Up</h1>
//             </div>
         
//                 <div className="input-group">
//                     <lable htmlFor="title">Title</lable>
//                     <input type="text" className="stuident-title"
//                     id="title"
//                     name="title"
//                     value={student.title}
//                     onChange={changeHandler}
//                     />
//                     {/* <lable>Title</lable>
//                     <select {...register("title")}>
//                         <option value="">--select title--</option>
//                         <option value={student.title}>Ms</option>
//                         <option value={student.title}>Ms</option>
//                         <option value={student.title}>Miss</option>
//                     </select> */}
//                 </div>
//                 <div className="input-group">
//                     <lable htmlFor="name">what is your name</lable>
//                     <input type="text" className="student-name" 
//                     id="name"
//                     name="name"
//                     value={student.name}
//                     onChange={changeHandler}
//                     />
//                 </div>
//                 <div className="input-group">
//                     <lable htmlFor="collegeName">what is your collegeName?</lable>
//                     <input type="text" className="student-collegeName" 
//                     id="collegeName"
//                     name="collegeName"
//                     value={student.collegeName}
//                     onChange={changeHandler}
//                     />
//                 </div>
//                 <div className="input-group">
//                         <lable htmlFor="mobile">Mobile</lable>
//                         <input type="number" className="address-pincode" 
//                         id="mobile"
//                         name="mobile"
//                        value={student.mobile}
//                         onChange={changeHandler}
//                         // onChange={addressHandler}
//                         />
//                     </div>
//                 <div className="input-group">
//                     <lable htmlFor="gender">Gender</lable>
//                     <input type="text" className="student-gender" 
//                     id="gender"
//                     name="gender"
//                     value={student.gender}
//                     onChange={changeHandler}
//                     />
//                 </div>
//                 {/* <div className="adress-group">
//                     <div className="input-group">
//                          <lable htmlFor="street">Street</lable>
//                          <input type="text" className="address-street" 
//                             id="street"
//                              name="street"
//                             value={student.address.street}
//                             onChange={streetHandler}
//                             // onChange={addressHandler}
//                          />
//                     </div>
//                     <div className="input-group">
//                         <lable htmlFor="city">City</lable>
//                         <input type="text" className="address-city" 
//                         id="city"
//                         name="city"
//                         value={student.address.city}
//                         onChange={cityHandler}
//                         // onChange={addressHandler}
//                         />
//                     </div>
//                     <div className="input-group">
//                         <lable htmlFor="pincode">Pincode</lable>
//                         <input type="text" className="address-pincode" 
//                         id="pincode"
//                         name="pincode"
//                        value={student.address.pincode}
//                         onChange={pincodeHandler}
//                         // onChange={addressHandler}
//                         />
//                     </div>
//                 </div> */}

//                 <div className="button-submit">
//                   <button className="button btn-primary">Submit</button>
//                 </div>
                

//             </form>
//         </div>
       
//     );

// };

//============================================uuse State ======================================================

// import React from "react";
// import { useForm } from "react-hook-form";


// export const StudentRegister=()=>{
//   const { register, handleSubmit } = useForm();
//   const onSubmit = data => console.log(data);
   
//   return (
//     <div className="option-list">
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName")} />
//       <select {...register("gender")}>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <input type="submit" />
//     </form>
//     </div>
//   );
// }

//===================================================================================

import React from "react";
import { useForm } from "react-hook-form";
import "./StudentRegister.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StudentByID } from "../SingleStudent/SingleStudent";

export const StudentRegister =()=>{

  const navigate=useNavigate();
//   const defaultStudent={ title: title,
//   name: studentName,
//   collegeName:collegeName,
//   gender: gender,
//   mobile: mobile,
//   id:id
// };
    const [student,setStudent]=useState([]);
    // console.log(student)
    console.log(student);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data) => {
    
    
      const token=localStorage.getItem("accessToken");
      console.log(token);
    //  console.log(data)
    axios.post("http://localhost:3001/students",data,{
      headers:{
        "content-type":"application/json",
        authorization: `Bearer ${token}`,
      }
    }).then((response)=>{
      if(response.data.success){
        console.log(response.data.data)
        const studentData=response.data.data.student;
        setStudent([...student,studentData]);
        console.log(student);
        // console.log(studentData)
       
        //   var title=studentData.title;
        //   var studentName=studentData.name;
        //   var collegeName=studentData.collegeName;
        //   var gender=studentData.gender;
        //   var mobile=studentData.mobile;
        //   var id=studentData._id;
        //   console.log(title,name,collegeName,gender,mobile,id)
       setStudent("");
        console.log(student);
     navigate("/students/:Id");
  }
    }).catch((error)=>{
      console.log(error);
     
    })

}
  const handleError = (errors) => {};

  const registerOptions = {
    title:{required: "title is required"},
    name: { required: "Name is required" },
    collegeName: { required: "collegeName is required" },
    mobile:{require: "mobile is required."},
    gender:{ required: "gender is required" },
   
   
  };

  return (
    <form onSubmit={handleSubmit(handleRegistration, handleError)} className="form-group">
      <StudentByID student={student}/>
      <div className="container-form"></div>
       <div id="input-group">
        <label>Title</label>
        <select {...register("title")}>
        <option value="">--select Title--</option>
       <option value="Ms">Ms</option>
        <option value="Mr">Mr</option>
        <option value="Miss">Miss</option>
      </select>
        <small title="text-danger">
          {errors?.title && errors.title.message}
        </small>
      </div>
      <div id="input-group">
        <label>Name</label>
        <input name="name" type="text" {...register('name', registerOptions.name) }/>
        <small className="text-danger">
          {errors?.name && errors.name.message}
        </small>
      </div>
      <div id="input-group">
        <label>collegeName</label>
        <input
          type="text"
          name="collegeName"
          {...register('collegeName', registerOptions.collegeName)}
        />
        <small id="text-danger">
          {errors?.collegeName && errors.collegeName.message}
        </small>
      </div>
      <div id="input-group">
        <label>gender</label>
        <select {...register("gender")}>
        <option value="">--select gender--</option>
       <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select>
        <small id="input-group">
          {errors?.gender && errors.gender.message}
        </small>
      </div>
      
      <div id="input-group">
        <label>Mobile</label>
        <input name="mobile" type="number" {...register('mobile', registerOptions.mobile) }/>
        <small className="text-danger">
          {errors?.mobile && errors.mobile.message}
        </small>
      </div>
      
      <button className="btn btn-outline-success">Submit</button>
    </form>
  )
  }


// //===============================================arpit code================================================


// import axios from "axios";
// import "./StudentRegister.css";
// import { useState } from "react";
// export const StudentRegister = () => {
//   // const todoRef = useRef();
//   const [student, setStudent] = useState({
//     name:"",
//     title:"",
//     collegeName:"",
//     gender:"",
//     mobile:"",
//   });
//   const [students, setStudents] = useState([]);

//   const handleTodoSubmit = (e) => {
//     e.preventDefault();
//     console.log(student)
//     if (student.length === 0) {
//       console.error("Empty student is not allowed");
//       return;
//     }
//     const token = localStorage.getItem("accessToken");
//     axios
//       .post(
//         "http://localhost:3001/students",
//         { students: student },
//         {
//           headers: {
//             "content-type": "application/json",
//             authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         if (response.data.success) {
//           const student = response.data.data;
//           setStudents([...students, student]);
//         }
//       })
//       .catch((error) => console.error(error));
//     setStudent("");
//   };

//   const updateStudent = (e) => {
//     setStudent({...students,[e.target.name]:e.target.value});
//   };
//   // console.log(student)
//   // const handleTodoDelete = (todoId) => {
//   //   const token = localStorage.getItem("accessToken");
//   //   axios
//   //     .delete(`http://localhost:3001/api/todos/${todoId}`, {
//   //       headers: {
//   //         authorization: `Bearer ${token}`,
//   //       },
//   //     })
//   //     .then((response) => {
//   //       if (response.data.success) {
//   //         const filteredTodos = todos.filter(({ _id }) => _id !== todoId);
//   //         setTodos(filteredTodos);
//   //       }
//   //     })
//   //     .catch((error) => console.error(error));
//   // };

//   // useEffect(() => {
//   //   const token = localStorage.getItem("accessToken");
//   //   axios
//   //     .get("http://localhost:3001/api/todos", {
//   //       headers: {
//   //         authorization: `Bearer ${token}`,
//   //       },
//   //     })
//   //     .then((response) => {
//   //       const todos = response.data.data.todos;
//   //       setTodos(todos);
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //     });
//   // }, []);

//   return (
//     <div className="todos">
//       <div className="todos__header">
//         <h1 className="page-title">Todos</h1>
//       </div>
//       {/* <div className="todos__body">
//         <TodoList todos={todos} handleTodoDelete={handleTodoDelete} />
//       </div> */}
//       <div className="todos__footer">
//         <form
//           className="todo-form spaced-form"
//           onSubmit={handleTodoSubmit}
//           // ref={todoRef}
//         >
//           <div className="input-group">
//             <label htmlFor="name">What is your name?</label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               placeholder="Enter your name"
//               className="input-control"
//               value={student.name}
//               onChange={updateStudent}
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="title">What is your title?</label>
//             <input
//               type="text"
//               name="title"
//               id="title"
//               placeholder="What is your title"
//               className="input-control"
//               value={student.title}
//               onChange={updateStudent}
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="collegeName">What is your college?</label>
//             <input
//               type="text"
//               name="collegeName"
//               id="collegeName"
//               placeholder="What is your college"
//               className="input-control"
//               value={student.collegeName}
//               onChange={updateStudent}
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="gender">What is your gender</label>
//             <input
//               type="text"
//               name="gender"
//               id="gender"
//               placeholder="What is your gender"
//               className="input-control"
//               value={student.gender}
//               onChange={updateStudent}
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="mobile">What is your mobile</label>
//             <input
//               type="text"
//               name="mobile"
//               id="mobile"
//               placeholder="What is your mobile"
//               className="input-control"
//               value={student.mobile}
//               onChange={updateStudent}
//             />
//           </div>
//           <div className="input-group">
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// // };

