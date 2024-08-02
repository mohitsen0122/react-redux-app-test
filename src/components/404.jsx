import React from "react";
import { Link } from "react-router-dom";

const NotFound404 = () => {
    return (
        <div class="container">
        <div class="align-items-center">
                <div class="row justify-content-center">
                    <div class="col-md-12 text-center">
                        <span class="display-1 d-block">404</span>
                        <div class="mb-4 lead">The page you are looking for was not found.</div>
                        <Link class="btn" to='/login'>Back to Home</Link>
                    </div>
                </div>
            </div>
</div>
    );
}

export default NotFound404;