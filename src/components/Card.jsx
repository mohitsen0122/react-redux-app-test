import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { Spinner } from "react-bootstrap";
import { deletePost } from "./actions/action";

const Card = () => {
    const poststate = useSelector(state => state.post);
    const isLoading = useSelector(state => state.post.isLoading);
    const dispatch = useDispatch();
    
    const handleRemoveCard = (index) => {
        dispatch(deletePost(index));
    }

    return (        
        <div className="container"> 
            <div style={{textAlign: "center", marginTop: "10px"}}>
                {poststate.isLoadingPost ? <Spinner animation="border" variant="secondary" /> : "" }
            </div>
             <div className="container card-container">
            {  
                poststate.posts.map((post, index) => (
                    <div className="card-item" key={index} >
                    <a key={index} onClick={(post) => handleRemoveCard(index)}>
                        <IoIosRemoveCircleOutline 
                        data-toggle="tooltip" data-placement="right" title="Remove"
                        style={
                            {
                                position: "relative", 
                                color: "revert-layer",                                
                                justifyContent:"flex-end",
                                zIndex: 1,
                                marginLeft: "230px",
                                top: "5px",
                                left: "18px"
                            }
                        }/>
                    </a>
                    <div className="card text-white bg-secondary mb-3 fixed-height-card">
                        <div className="card-header">{post.id}</div>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">Views : {post.views}</p>
                            <p className="card-text">Likes : {post.reactions.likes}</p>
                            <p className="card-text">Dislikes : {post.reactions.dislikes}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Card;