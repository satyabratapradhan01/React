import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

// get post
export const getPost = () => {
    return api.get("/posts");    
}

// get Delete
export const getDelete = (id) => {
    return api.delete(`/posts/${id}`);
} 



// https://jsonplaceholder.typicode.com