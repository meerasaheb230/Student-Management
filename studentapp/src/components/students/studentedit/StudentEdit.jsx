import React,{useState,useEffect} from 'react';
import { useNavigate ,useParams} from "react-router-dom";
import axios from 'axios';
export const StudentEdit=()=>{

    const navigate=useNavigate();
    const [students,setStudents]=useState({title:"", brief:"",category:"",subCategory:""});
    const { id: studentId } = useParams();
console.log({ id: studentId });
    const {title,name,gender,collegeName,mobile}=students;
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        axios
          .get(`http://localhost:3001/${studentId}`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            if (response.data.success) {
              setStudents(response.data.data.students);
            }
          })
          .catch((error) => console.error(error));
      }, [studentId]);

      const handleStudentEdit = (e) => {
        e.preventDefault();
        if (students.title.trim().length===0||students.name.trim().length===0 ||students.gender.trim().length===0 
        ||students.collegeName.trim().length===0 ||students.mobile.trim().length===0
        ) {
          return;
        }
        const token = localStorage.getItem("accessToken");
        axios
          .put(`http://localhost:3001/${students._id}`, students, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            if (response.data.success) {
              navigate("/students");
            }
          })
          .catch((error) => console.error(error));
      };

      const changeHandler = (e) => {
        setStudents({ ...students, [e.target.name]: e.target.value });
      };

    return(
      <div className='main'>
        <div className='edit'>
                <form id='edit' onSubmit={handleStudentEdit}>
                  <h2>Here Edit your details</h2>
                  <br/>
                <div>
                    <label>Title</label><br/>
                    <input id="title" type="text" name="title" value={title} onChange={changeHandler}></input>
                </div>
                <br/>
                <div>
                    <label>Name</label><br/>
                    <input id="name" type="text" name="name" value={name} onChange={changeHandler}></input>
                </div>
                <br/>
                <div>
                    <label>collegeName</label><br/>
                    <input id="collegeName" type="text" name="collegeName" value={collegeName} onChange={changeHandler}></input>
                </div>
                <br/>
                <div>
                    <label>gender</label><br/>
                    <input id="gender" type="text" name="gender" value={gender} onChange={changeHandler}></input>
                </div>
                <br/>
                <br/>
                <div>
                    <label>mobile</label><br/>
                    <input id="mobile" type="number" name="mobile" value={mobile} onChange={changeHandler}></input>
                </div>

                <div>
                    <button id="submit" type="submit">Submit</button>
                </div>
                </form>
        </div>
        </div>
    )
}
