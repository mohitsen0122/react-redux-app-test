import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts, getAllPosts } from "./actions/action";
import { getPosts } from "../services/api-calls";
import { Link } from "react-router-dom";
const Navbar = () => {
    const dispatch = useDispatch();
    const hasToken = useSelector(state => state.auth.hasValidToken);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 rounded-1">
                <a className="navbar-brand">Gallery</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto text-white">
                    <li className="nav-item active ms-4">
                        <Link to="/home" className="nav-link" >Home</Link>
                    </li>
                    <li className="nav-item ms-4">
                        <Link to="/posts" className="nav-link" onClick={(e) => dispatch(fetchPosts())} >Posts</Link>
                    </li>
                    <li className="nav-item ms-4">
                        <a className="nav-link" href="#">Create</a>
                    </li>
                    <li className="nav-item ms-4">
                        <a className="nav-link" href="#">Notification</a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 d-flex justify-content-between" style={{marginLeft: "120px", width: "515px"}}>
                        <input className="form-control mr-sm-2 me-3" type="search" placeholder="Search" aria-label="Search" />,
                        <button className="btn btn-outline-success my-2 my-sm-0 me-2" >Search</button>
                        {
                            hasToken ?
                            <button className="btn btn-outline-success my-2 my-sm-0 me-2" type="submit">Logout</button>
                            :
                            <>
                                <Link to='/login'>
                                    <button className="btn btn-outline-success my-2 my-sm-0 me-2" type="submit">Login</button>
                                </Link>
                                <Link to='/register'>
                                    <button className="btn btn-outline-success my-2 my-sm-0 me-2" type="submit">
                                        Register
                                    </button>
                                </Link>
                            </>
                        }
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;