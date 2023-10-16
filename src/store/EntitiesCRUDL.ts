import axios from 'axios';

const urlUser = "http://localhost:4301/user";
export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`${urlUser}/${id}`);
}
export const addUser = async (user) => {
    return await axios.post(urlUser,user);
}
export const editUser = async (id, user) => {
    return await axios.put(`${urlUser}/${id}`,user);
}
export const deleteUser = async (id) => {
    return await axios.delete(`${urlUser}/${id}`);
}

const urlPost = "http://localhost:4301/posts";
export const getallPosts = async (id) => {
    id = id || '';
    return await axios.get(`${urlPost}/${id}`);
}
export const addPost = async (post) => {
    return await axios.post(urlPost, post);
}
export const editPost = async (id, post) => {
    return await axios.put(`${urlPost}/${id}`, post);
}
export const deletePost = async (id) => {
    return await axios.delete(`${urlPost}/${id}`);
}