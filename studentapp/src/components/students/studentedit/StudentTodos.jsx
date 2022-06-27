
// import axios from "axios";
// import { StudentList } from "./StudentList";
// // import "./Todos.css";
// import { useRef,useState,useEffect } from "react";
// export const Todos = () => {

//     const defaultStudent={ title: "",
//     name: "",
//     collegeName:"",
//     gender: "",
//     mobile: "",
//   };
//   const studentRef = useRef();
//   const [student, setStudent] = useState(defaultStudent);
//   const [students, setStudents] = useState([]);

//   const handleStudentSubmit = (e) => {
//     e.preventDefault();
//     if (student.trim().length === 0) {
//       console.error("Empty student is not allowed");
//       return;
//     }
//     const token = localStorage.getItem("accessToken");
//     axios
//       .post(
//         "http://localhost:3001/students",
//         { student: student },
//         {
//           headers: {
//             "content-type": "application/json",
//             authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         if (response.data.success) {
//           const student = response.data.data.students;
//           setStudents([...students, student]);
//         }
//       })
//       .catch((error) => console.error(error));
//     setStudent("");
//   };

//   const updateStudentData = (e) => {
//     setStudent(e.target.value);
//   };

//   const handleStudentDelete = (studentId) => {
//     const token = localStorage.getItem("accessToken");
//     axios
//       .delete(`http://localhost:3001/students/${studentId}`, {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         if (response.data.success) {
//           const filteredStudents = students.filter(({ _id }) => _id !== studentId);
//           setStudents(filteredStudents);
//         }
//       })
//       .catch((error) => console.error(error));
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     axios
//       .get("http://localhost:3001/students", {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const students = response.data.data.students;
//         setStudents(students);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div className="students">
//       <div className="students-header">
//         <h1 className="page-title">Students</h1>
//       </div>
//       <div className="student__body">
//         <StudentList todos={students} handleTodoDelete={handleStudentDelete} />
//       </div>
//       <div className="student__footer">
//         <form
//           className="student-form spaced-form"
//           onSubmit={handleStudentSubmit}
//           ref={studentRef}
//         >
//           <div className="input-group">
//             <label htmlFor="name">What is your name?</label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               placeholder="What is your name?"
//               className="input-control"
//               value={student.name}
//               onChange={updateStudentData}
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
//               onChange={updateStudentData}
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
//               onChange={updateStudentData}
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
//               onChange={updateStudentData}
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

