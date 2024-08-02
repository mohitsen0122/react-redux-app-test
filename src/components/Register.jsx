import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProdcutDetails, isUserRegistered } from "./actions/action";
import { Link, useNavigate } from "react-router-dom";
import { getProducts } from "../services/api-calls";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let hasToken = useSelector(state => state.auth.hasValidToken);
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        if (hasToken) {
            navigate('/home');
        }
    }, [hasToken, navigate]);

    const handleUser = (event) => {
        setUser({
            ...user,
            [event.target.name] : event.target.value,
        })
    }

    const handleRegister = async () => {
        dispatch(isUserRegistered(user));
    }

    return (
        <div className="container">
            <div className="m-5 p-5">
                <h2 style={{textAlign: "center", marginBottom: "20px"}}>Register</h2>
                <form>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control" name="email"  onChange={(e) => handleUser(e)}/>
                        <label className="form-label" htmlFor="form2Example1" >Email address</label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control" name="password"  onChange={(e) => handleUser(e)}/>
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                    </div>

                    
                    <Link to={hasToken ? "/home" : "/register"}>
                        <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4" onClick={() => handleRegister()}>
                            Sign Up
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Register;