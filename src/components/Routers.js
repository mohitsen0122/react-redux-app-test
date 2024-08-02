import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Card from "./Card";
import Login from "./Login";
import { Navigate } from 'react-router-dom';
import NotFound404 from "./404";
import { useSelector } from "react-redux";
import Register from "./Register";
import Home from "./Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element: ( 
                    <PrivateRoute>
                      <Home />
                    </PrivateRoute>
                ),
            },
            {
                path: "/home",
                element: (
                    <PrivateRoute>
                      <Home />
                    </PrivateRoute>
                ),
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/create",
                element: (
                    <PrivateRoute>
                     
                    </PrivateRoute>
                )
            }
        ]
    },
    {
        path: "/posts",
        element: <App />,
        children: [
            {
                path: "/posts",
                element: (
                    <PrivateRoute>
                      <Card />
                    </PrivateRoute>
                ),
            }
        ]
    },
    {
        path: "*",
        element: <NotFound404 />
    }
])

function PrivateRoute({ children }) {
    const isValidtoken = useSelector(state => state.auth.hasValidToken)
    return isValidtoken ? children : <Navigate to="/login" />;
}
