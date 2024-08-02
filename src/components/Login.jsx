import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions/action";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let hasToken = useSelector(state => state.auth.hasValidToken);
    const [users, setUser] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        if (hasToken) {
            navigate('/home');
        }
    }, [hasToken, navigate]);

    const handleUsers = (event) => {
        setUser({
            ...users,
            [event.target.name] : event.target.value,
        })
    }

    const handleLogin = async () => {
        dispatch(isUserLoggedIn(users));
    }

    return (
        <div className="container">
            <div className="m-5 p-5">
                <h2 style={{textAlign: "center", marginBottom: "-10px",}}>Login</h2>
                <form style={{marginBottom: "-60px",}}>
                    <div>
                        <p>{ hasToken ? "" : "Invalid credentials" }</p>
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control" name="email"  onChange={(e) => handleUsers(e)}/>
                        <label className="form-label" htmlFor="form2Example1" >Email address</label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control" name="password"  onChange={(e) => handleUsers(e)}/>
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                    </div>

                    <div className="row mb-4">
                        <div className="col">
                        <a href="#!">Forgot password?</a>
                        </div>
                    </div>
                    <Link to={hasToken ? "/posts" : "/login"}>
                        <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4" onClick={() => handleLogin()}>
                            Sign in
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;