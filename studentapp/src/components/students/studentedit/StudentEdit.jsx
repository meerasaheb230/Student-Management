import {  useState } from "react";
import {  useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export const StudentEdit = () => {
  // const navigate = useNavigate();
  const [student, setStudent] = useState({ todo: "" });
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { id: StudentId } = useParams();

  

  const handleStudentEdit = (e) => {
    // e.preventDefault();
    // if (student.name.length ===0) {
    //     alert("name is required ");
    //   return;
    // }
    const token = localStorage.getItem("accessToken");
    axios
      .put(`http://localhost:3001/students/${StudentId}`, student, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.success) {
            setStudent(response.data.data);
         
        }
      })
      .catch((error) => console.error(error));
  };

//   const handleOnChange = (e) => {
//     setTodo({ ...todo, [e.target.name]: e.target.value });
//   };

  return (
    <form onSubmit={handleSubmit(handleStudentEdit)} className="form-group">
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
      <input name="name" type="text" {...register('name') }/>
      <small className="text-danger">
        {errors?.name && errors.name.message}
      </small>
    </div>
    <div id="input-group">
      <label>collegeName</label>
      <input
        type="text"
        name="collegeName"
        {...register('collegeName')}
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
      <input name="mobile" type="number" {...register('mobile') }/>
      <small className="text-danger">
        {errors?.mobile && errors.mobile.message}
      </small>
    </div>
    
    <button className="btn btn-outline-success">Submit</button>
  </form>  );
};


//========================================================================




// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// export const StudentEdit = () => {
//   const navigate = useNavigate();
//   const [student, setStudent] = useState("" );
//   const { id: studentId } = useParams();

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     axios
//       .get(`http://localhost:3001/students/${studentId}`, {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         if (response.data.success) {
//           setStudent(response.data.data.student);
//         }
//       })
//       .catch((error) => console.error(error));
//   }, [studentId]);

//   const handleStudentEdit = (e) => {
//     e.preventDefault();
//     // if (todo.todo.trim().length === 0) {
//     //   return;
//     // }
//     const token = localStorage.getItem("accessToken");
//     axios
//       .put(`http://localhost:3001/students/${student._id}`, student, {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         if (response.data.success) {
//           navigate("/todos");
//         }
//       })
//       .catch((error) => console.error(error));
//   };

//   const handleOnChange = (e) => {
//     setStudent({ ...student, [e.target.name]: e.target.value });
//   };

//   return (
//     <form className="todo-form spaced-form" onSubmit={handleStudentEdit}>
  
//       <div className="input-group">
//             <label htmlFor="name">What is your name?</label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               placeholder="What is your name?"
//               className="input-control"
//               value={student.name}
//               onChange={handleOnChange}
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="collegeName">What is your collegeName?</label>
//             <input
//               type="text"
//               name="collegeName"
//               id="collegeName"
//               placeholder="collegeName"
//               className="input-control"
//               value={student.collegeName}
//               onChange={handleOnChange}
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="gender">What is your gender?</label>
//             <input
//               type="text"
//               name="gender"
//               id="gender"
//               placeholder="--- type your gender----"
//               className="input-control"
//               value={student.gender}
//               onChange={handleOnChange}
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="mobile">What is your mobile?</label>
//             <input
//               type="text"
//               name="mobile"
//               id="mobile"
//               placeholder=" mobile"
//               className="input-control"
//               value={student.mobile}
//               onChange={handleOnChange}
//             />
//           </div>
//       <div className="input-group">
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };