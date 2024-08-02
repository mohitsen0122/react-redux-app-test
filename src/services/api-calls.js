export const getPosts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/posts');
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.log(error);
        return null; 
    }
}

export const userLogin = async (users) => {
    try {
        const response = await fetch("https://reqres.in/api/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(users)
        })
        const token = response.json();
        return token;
    } catch (error) {
        console.log(error);
        return "";
    }
}

export const getUsers = () => {
    fetch('https://dummyjson.com/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30, 
    })
    })
    .then(res => res.json())
    .then(console.log);
}

export const registerUser = async (user) => {
    try {
        const response = await fetch("https://reqres.in/api/register", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        const registeredSuccess = response.json();
        return registeredSuccess;
    } catch (error) {
        console.log(error);
        return "";
    }
}

export const getProducts = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        const products = await response.json();
        return products;
    } catch (error) {
        console.log(error);
        return null; 
    }
}

