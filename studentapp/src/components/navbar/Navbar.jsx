import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar=()=>(
    <menu className="navbar">
        <li className="logo">
        <NavLink className="navbar-link" to={"/"}>
            Student Management
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="navbar-link" to={"/"}>
                HOME
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="navbar-link" to={"/Allstudents"}>
                STUDENTS
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="navbar-link" to={"/students"}>
                STUDENT-REGISTER
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="navbar-link" to={"/login"}>
                SIGN-IN
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="navbar-link" to={"/register"}>
                SIGN-UP
            </NavLink>
        </li>
    </menu>
);