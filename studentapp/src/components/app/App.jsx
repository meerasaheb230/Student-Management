
import {Routes,Route} from "react-router-dom";
import './App.css';
import { NavBar } from '../navbar/Navbar';
import { SignUp } from "../users/user-signup/UserSignUp";
import { UserSignIn } from "../users/user-signin/UserSignIn";
import { AllStudents } from "../students/allstudents/AllStudents";
import { StudentRegister } from "../students/sign-up/StudentRegister";
import { StudentEdit } from "../students/studentedit/StudentEdit";
import { StudentByID } from "../students/SingleStudent/SingleStudent";

// import { StudentEdit } from "../students/studentedit/StudentEdit";
// import { Todos } from "../students/studentedit/StudentTodos";


const App=()=>{
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      
        <main className="main-content">
        <div className="content" >
        <Routes>
          <Route path="/register" element={<SignUp/>}></Route>
          <Route path="/login" element={<UserSignIn/>}></Route>
          <Route path="/Allstudents" element={<AllStudents/>}></Route>
          <Route path="/students" element={<StudentRegister/>}></Route>
          <Route path="/students/:StudentEdit" element={<StudentEdit/>}></Route>
          <Route path="/students/:ById" element={<StudentByID/>}></Route>

          {/* <Route path="/todos" element={<Todos />} />
          <Route path="/todos/:id" element={<StudentEdit />} /> */}

        </Routes>
        </div>
        </main>
      
    </div>
  );
}

export default App;
