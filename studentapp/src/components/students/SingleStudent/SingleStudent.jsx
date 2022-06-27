import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
// import {Routes,Route} from "react-router-dom";
// import { StudentEdit } from "../studentedit/StudentEdit";

import "./SingleStudent.css";

import img from "./man.png";
import book from "./books.jpeg";
import axios from "axios";


export const StudentByID=(student)=>{
  const navigate=useNavigate();
    // const [student,setStudent]=useState([]);
    // const { id: StudentId } = useParams();

useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log(student);
    axios
      .get(`http://localhost:3001/students/${student._id}`, {
        headers: {
            "content-type":"application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
      
        const students = response.data.data.students;
        console.log(students)

        // setStudent(students);
        // setStudents(students);
        // console.log(students);
      })
      .catch((error) => {
        console.error(error);
      });
  }, );

   const onClickHandler=(e)=>{
    navigate("/students"+student._id);
   }

    return (
        <div className="container-students text-center text-white pt-5">
              <div className="card-box">
                    <div className="row">
                          <div className="col">
                            <div className="card">
                             <img src={book}  alt="book"  className="card-img-top"/>
                             <img src={img}  alt="human icon"  className="image"/>
                                 <div className="card-body">
                                     <h3><h4>{student.title}{ }</h4>{student.name}</h3>
                                     <p className="card-text">
                                     """ 
                                     CollegeName: {student.collegeName}<br/>
                                     gender: {student.gender}<br/>
                                     {/* Address: Street::{student.address.street}<br/><br/>
                                              City:: {student.address.city}<br/><br/>
                                              Pincode:: {student.address.pincode}<br/><br/> */}
                                     Mobile: {student.mobile}
                                     """
                                     </p>
                                     <div className="todo-action">
                                      {/* <Routes>
                                        <Route path="/students/:StudentEdit" element={<StudentEdit/>}/>
                                      </Routes> */}
                                      <Link to={"/students" +student._id}>
                                          <FontAwesomeIcon icon={faPen} onClick={onClickHandler} />
                                          </Link>
                          {/* <button onClick={handleTodoDelete} className="btn-delete">
                          <FontAwesomeIcon icon={faTrash} />
                          </button> */}
                         </div>
                                 </div>
                             </div>
                        </div>
                  </div>
              </div>
        </div>
    )
}





// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

// export const Student = ({ student, onStudentDelete }) => {
//   const handleStudentDelete = () => {
//     onStudentDelete(student._id);
//   };
//   return (
//     <li
//       key={student._id}
//       className={`student-item ${student.isCompleted ? "todo-item--completed" : ""}`}
//     >
//       <div className="todo-content">
//         {student.student}
//       </div>
//       <div className="student-action">
//         <Link to={"/todos/" + student._id}>
//           <FontAwesomeIcon icon={faPen} />
//         </Link>
//         <button onClick={handleStudentDelete} className="btn-delete">
//           <FontAwesomeIcon icon={faTrash} />
//         </button>
//       </div>
//     </li>
//   );
// };