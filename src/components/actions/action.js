import { getPosts, getProducts, registerUser, userLogin } from "../../services/api-calls";
import { AUTHENTICATE, DELETE_POST, GET_ALL_POSTS, GET_ALL_PRODUCTS, REGISTER_USER } from "../constants/constant"


export const isAuthenticating = (payload) => {
    return {
        type: AUTHENTICATE,
        payload,
    }
}

export const getAllPosts = (payload) => {
    return {
        type: GET_ALL_POSTS,
        payload,
    }
}


export const registeringUser = (payload) => {
    return {
        type: REGISTER_USER,
        payload,
    }
}

export const deletePost = (payload) => {
    return {
        type: DELETE_POST,
        payload,
    }
}

export const getProdcutDetails = (payload) => {
    return {
        type: GET_ALL_PRODUCTS,
        payload,
    }
}

export const isUserRegistered = (user) => {
    return async (dispatch) => {
        try {
            const successfullyRegistered = await registerUser(user);
            dispatch(registeringUser(successfullyRegistered));
        } catch(error) {
            console.log(error);
        }
    }
}

export const isUserLoggedIn =  (users) => {
    return async (dispatch) => {
        try {
            const hasValidToken = await userLogin(users);
            dispatch(isAuthenticating(hasValidToken))
        } catch(error) {
            console.log(error);
        }
    }
}

export const fetchPosts = () => {
    return async (dispatch) => {
        try {
            const posts = await getPosts();
            dispatch(getAllPosts(posts));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getAllProducts = () => {
    return async (dispatch) => {
        try {
            const products = await getProducts();
            dispatch(getProdcutDetails(products));
        } catch (error) {
            console.log(error);
        }
    }
}


