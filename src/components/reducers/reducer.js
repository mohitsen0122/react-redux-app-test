import { AUTHENTICATE, DELETE_POST, GET_ALL_POSTS, GET_ALL_PRODUCTS, REGISTER_USER } from "../constants/constant";
import { combineReducers   } from "@reduxjs/toolkit";

const authState = {
    isLoadingLogin: true,
    isLoadingRegister: true,
    hasValidToken : null,
}


const postsState = {
    isLoadingPost: true,
    isLoadingProduct: true,
    limit: 0,
    posts: [],
    skip: 0,
    total: 0,
    products: [],
}

export const authenticationReducer = (state=authState, action) => {
    switch(action.type) {
        case AUTHENTICATE : 
            return {
                ...state,
                isLoadingLogin: false,
                hasValidToken: action.payload.token,
            }
        case REGISTER_USER :
            return {
                ...state,
                isLoadingRegister: false,
                hasValidToken: action.payload.token,
            }
        default: 
            return state;
    }
}

const getPostsReducer = (state = postsState, action) => {
    switch(action.type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                isLoadingPost: false,
                limit: action.payload.limit,
                skip: action.payload.skip,
                total: action.payload.total,
                posts: action.payload.posts
            }
        case GET_ALL_PRODUCTS: 
            return {
                ...state,
                isLoadingProduct: false,
                products: action.payload,
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((_, index) => index !== action.payload),
            }
        default:
            return state;
    }
}



const rootReducer = combineReducers({
    auth: authenticationReducer,
    post: getPostsReducer,
});

export default rootReducer;